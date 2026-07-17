import "./assets/scss/main.scss";

import { useEffect, useState } from "react";

import Opening from "./components/Opening";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Details from "./components/Details";
import Closing from "./components/Closing";

export default function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) return;

    const items = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => io.observe(item));

    return () => io.disconnect();
  }, [opened]);

  return (
    <>
      {!opened ? (
        <Opening onOpen={() => setOpened(true)} />
      ) : (
        <main>
          <Hero />
          <Quote />
          <Details />
          <Closing />
        </main>
      )}
    </>
  );
}
import React, { useEffect, useState } from "react";
import "./Announce.css";
import TextTransition, { presets } from "react-text-transition";
const Announce = () => {
  const TEXTS = [
    "MICROENERGY DEALS | Refresh & refocus with exclusive sets!",
    "Code: STUDY5 | Subscribe to 5+ 12-Packs, get one free! T&Cs.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="bg-green">
      <div className="container">
        <div className="announce">
          <div className="announce-wrapper">
            <TextTransition springConfig={presets.gentle}>
              <p>{TEXTS[index % TEXTS.length]}</p>
            </TextTransition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announce;

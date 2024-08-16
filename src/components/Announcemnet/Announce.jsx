import React,{useEffect,useState} from "react";
import "./Announce.css";
import TextTransition, { presets } from 'react-text-transition';
const Announce = () => {
    const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
    const [index,setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
  return (
    <section>
      <div className="announce">
        <div className="announce-wrapper">
            <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>   

      </div>
    </section>
  );
};

export default Announce;

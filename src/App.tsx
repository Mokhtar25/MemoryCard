import React, { useEffect, useState } from "react";
import getpic, { makeUrls } from "./utils/utils";
import { chars } from "./default";
import { Card } from "./utils/utils";
import { PicCard } from "./comp/PicCard";
import { urls } from "./default";
import { RandomizeArray } from "./utils/utils";
import { Header } from "./comp/Header";
import { Footer } from "./comp/Footer";

export default function App() {
  // correct type and you can instizle useState with a funtion that you just call once
  const [cards, setCards] = useState<any>();
  const [load, setLoad] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [heighScore, setHighScore] = useState(0);

  useEffect(() => {
    makeInit();
  }, []);

  const handelClick = (elemnt: Card) => {
    const index = cards.indexOf(elemnt);

    const tmp = [...cards];
    if (tmp[index].clicked === true) {
      if (currentScore > heighScore) setHighScore(() => currentScore);
      setCurrentScore(0);
      setCards(urls);
      alert("lost");
      return;
    }
    setCurrentScore(currentScore + 1);
    if (currentScore + 1 === 8) {
      alert("win");
      setCurrentScore(0);
      setHighScore(currentScore + 1);
      return;
    }

    tmp[index] = { ...tmp[index], clicked: true };

    const newArray = RandomizeArray(tmp);
    setCards(newArray);
    console.log(newArray);
  };

  if (!cards)
    setTimeout(() => {
      if (load === "loading.") setLoad("loading..");
      else setLoad("loading.");
    }, 500);

  async function makeInit() {
    const data = await makeUrls(chars);
    if (data[0].url === "") {
      setCards(urls);
      console.log("fs");
      return;
    }
    setCards(data);
  }

  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <div className="flex-grow bg-purple-100">
        <div className="flex justify-between px-4 py-2 text-xl">
          <span> Current Score : {currentScore}</span>
          <span className=""> {heighScore} : Heighest Score </span>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {cards?.map((e: Card) => (
            <PicCard onClick={() => handelClick(e)} card={e} key={e.id} />
          ))}

          {!cards && <h1>{load} </h1>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

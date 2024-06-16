import React, { useEffect, useState } from "react";
import getpic, { makeUrls } from "./utils/utils";
import { chars } from "./default";
import { Card } from "./utils/utils";
import { PicCard } from "./comp/PicCard";
import { urls } from "./default";
import { RandomizeArray } from "./utils/utils";

export default function App() {
  // edit later
  const [cards, setCards] = useState<any>(urls);
  const [load, setLoad] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [heighScore, setHighScore] = useState(0);

  // useEffect(() => {
  //   makeInit();
  // }, []);

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
    setCards(data);
  }

  return (
    <>
      <span>
        heighScore {heighScore}, currentScore {currentScore}
      </span>
      <div className="h-screen w-full bg-slate-100 p-4 flex flex-wrap items-center justify-center">
        {cards?.map((e: Card) => (
          <PicCard onClick={() => handelClick(e)} card={e} key={e.id} />
        ))}

        {!cards && <h1>{load} </h1>}
      </div>
    </>
  );
}

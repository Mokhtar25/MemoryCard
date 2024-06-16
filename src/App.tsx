import React, { useEffect, useState } from "react";
import getpic, { makeUrls } from "./utils/utils";
import { chars } from "./default";
import { Card } from "./utils/utils";
import { PicCard } from "./comp/PicCard";
import { urls } from "./default";

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default function App() {
  const [cards, setCards] = useState<Card[]>(urls);
  const [load, setLoad] = useState("");

  // useEffect(() => {
  //   makeInit();
  // }, []);

  const handelClick = () => {
    let cardsTmp = [...cards];
    cardsTmp.sort((a) => (a.id.includes(`${getRandom(0, 99)}`) ? 1 : -1));

    setCards(cardsTmp);
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
    <div className="h-screen w-full bg-slate-100 p-4 flex flex-wrap items-center justify-center">
      {cards?.map((e) => <PicCard onClick={handelClick} card={e} key={e.id} />)}
      {!cards && <h1>{load} </h1>}
    </div>
  );
}

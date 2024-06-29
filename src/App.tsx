import { useEffect, useRef, useState } from "react";
import { makeUrls } from "./utils/utils";
import { chars } from "./default";
import { Card } from "./utils/utils";
import { PicCard } from "./comp/PicCard";
import { urls } from "./default";
import { RandomizeArray } from "./utils/utils";
import { Header } from "./comp/Header";
import { Footer } from "./comp/Footer";

export default function App() {
  // correct type and you can instizle useState with a funtion that you just call once
  const [orginal, setOrginal] = useState<Card[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [load, setLoad] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [heighScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    makeInit();
  }, []);

  const handelClick = (elemnt: Card) => {
    const index = cards.indexOf(elemnt);

    const tmp = [...cards];
    if (tmp[index].clicked === true) {
      if (currentScore > heighScore) setHighScore(() => currentScore);
      setCurrentScore(0);
      setGameOver(true);
      setTimeout(() => {
        setGameOver(false);
      }, 500);
      setCards(orginal);

      return;
    }
    setCurrentScore(currentScore + 1);
    if (currentScore + 1 === 8) {
      setWin(true);
      setTimeout(() => {
        setWin(false);
      }, 500);
      setCurrentScore(0);
      setHighScore(currentScore + 1);
      return;
    }

    tmp[index] = { ...tmp[index], clicked: true };

    const newArray = RandomizeArray(tmp);
    setCards(newArray);
  };

  if (cards.length === 0)
    setTimeout(() => {
      if (load === "loading.") setLoad("loading..");
      else setLoad("loading.");
    }, 500);

  async function makeInit() {
    try {
      throw new Error("Api error");
      // edit to fetch new pictures
      const data = await makeUrls(chars);
      setCards(data);
      setOrginal(data);
    } catch (e) {
      setOrginal(urls);
      setCards(urls);
    }
  }

  return (
    <div
      className={
        "flex min-h-screen flex-col justify-between " +
        (!gameOver && !win
          ? " bg-purple-100"
          : gameOver
            ? " bg-red-600"
            : " bg-lime-400")
      }
    >
      <Header />
      <div className="flex-grow">
        <div className="flex select-none justify-between px-4 pt-1 text-xl">
          <span> Current Score : {currentScore}</span>
          <span> {heighScore} : Highest Score </span>
        </div>
        <div className={"flex flex-wrap items-center justify-center py-2"}>
          {cards?.map((e: Card) => (
            <PicCard onClick={() => handelClick(e)} card={e} key={e.id} />
          ))}

          {cards.length === 0 && (
            <h1 className="z-50 text-2xl text-black">{load} </h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

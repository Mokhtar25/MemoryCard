import React, { useEffect, useState } from "react";
import getpic, { makeUrls } from "./utils/utils";
import { chars } from "./default";
import { Card } from "./utils/utils";

export default function App() {
  const [cards, setCards] = useState<Card[]>();

  // useEffect(() => {
  //   makeInit();
  // }, []);

  async function getUrl() {
    const data = await getpic(value);
    if (!data) return;
    setUrl(data);
  }
  async function makeInit() {
    const data = await makeUrls(chars);
    setCards(data);
  }

  return (
    <div className="h-screen w-full bg-slate-100 p-4">
      {cards?.map((e) => <img src={e.url} alt={e.name} key={e.id} />)}
    </div>
  );
}

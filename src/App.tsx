import React, { useEffect, useState } from "react";
import getpic, { makeUrls } from "./utils/utils";
import { chars } from "./default";

export default function App() {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [cards, setCards] = useState<any>("");

  const handelchange = (text: React.ChangeEvent<HTMLInputElement>) => {
    setValue(text.target.value);
  };
  useEffect(() => {
    setCards(make());
  }, []);

  async function get() {
    const data = await getpic(value);
    if (!data) return;
    setUrl(data);
  }
  async function make() {
    const data = await makeUrls(chars);
    return data;
  }

  return (
    <div className="h-screen w-full bg-slate-100 p-4">
      <button className="size-24 bg-red-500 " onClick={get}>
        click for new pic
      </button>
      <input
        className="outline-black border-2 border-red-50"
        type="text"
        name=""
        value={value}
        onChange={(e) => handelchange(e)}
      />
      <span>{value}</span>
      <img src={url} alt="puc"></img>
    </div>
  );
}

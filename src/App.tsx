import React, { useEffect, useState } from "react";
import { getpic } from "./utils/utils";

export default function App() {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");

  const handelchange = (text: React.ChangeEvent<HTMLInputElement>) => {
    setValue(text.target.value);
  };
  useEffect(() => {
    get();
  }, []);

  async function get() {
    if (!value) return;
    const data = await getpic(value);
    setUrl(data);
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

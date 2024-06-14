import React, { useState } from "react";
import { getpic } from "./utils/utils";

export default function App() {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");

  const handelchange = (text: any) => {
    setValue(text.target.value);
  };

  async function get() {
    const data = await getpic(value);
    console.log(data);
    setUrl(data.data.images.original.url);
  }

  return (
    <div className="h-screen w-full bg-slate-100">
      <button className="size-24 bg-red-500" onClick={get}>
        click for new pic
      </button>
      <input
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

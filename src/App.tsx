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
    if (data.meta.status === 429) return;
    const meta = data.meta.status;
    if (meta[0] !== 2) return;
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

import { v4 as uuidv4 } from "uuid";
export interface Card {
  name: string;
  url: string;
  id: number;
}
export default async function getpic(item: string) {
  if (!item) return false;
  const url = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=kkCXhdyH1AhoMqccfB9w5xHSbTXhIaOQ&s=${item}`,
  );
  const data = await url.json();

  if (data.meta.status === 219) return false;
  if (data.meta.status === 405) return false;
  if (data.meta.status === 429) return false;

  return data.data.images.original.url;
}

export async function makeUrls(chars: string[]) {
  const charsUrls: Card[] = [];

  for (const item of chars) {
    let url = await getpic(item);
    if (!url) url = "";
    let id = uuidv4();
    const card = { name: item, url: url, id: id };
    charsUrls.push(card);
  }
  return charsUrls;
}

export async function getpic(item: string) {
  const url = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=kkCXhdyH1AhoMqccfB9w5xHSbTXhIaOQ&s=${item}`,
  );
  const data = await url.json();
  return data;
}

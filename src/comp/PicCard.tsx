import { FC } from "react";
import { Card } from "../utils/utils";

type Props = {
  card: Card;
  onClick: () => void;
};

export const PicCard: FC<Props> = ({ card, onClick }) => {
  return (
    <div
      className="size-96 bg-slate-500 p-4 hover:scale-110 active:scale-90 flex flex-col justify-center items-center"
      onClick={onClick}
    >
      <img className="size-80" src={card.url} alt={card.name} />
      <span className="text-2xl font-thin">{card.name}</span>
    </div>
  );
};

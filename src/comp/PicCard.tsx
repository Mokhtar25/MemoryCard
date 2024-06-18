import { FC } from "react";
import { Card } from "../utils/utils";

type Props = {
  card: Card;
  onClick: () => void;
};

export const PicCard: FC<Props> = ({ card, onClick }) => {
  return (
    <div
      className="flex size-80 cursor-pointer select-none flex-col items-center justify-center gap-14 rounded-s border-2 border-white bg-indigo-800 p-4 hover:z-50 hover:scale-110 active:scale-90"
      onClick={onClick}
    >
      <img
        className="size-72 overflow-hidden rounded"
        src={card.url}
        alt={card.name}
      />
      <span className="text-2xl font-thin text-white">{card.name}</span>
    </div>
  );
};

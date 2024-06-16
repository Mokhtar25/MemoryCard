import { FC } from "react";
import { Card } from "../utils/utils";

type Props = {
  card: Card;
  onClick: () => void;
};

export const PicCard: FC<Props> = ({ card, onClick }) => {
  return (
    <div
      className="size-96 hover:z-50 bg-slate-800 p-4 gap-20 border-white border-2 rounded-s cursor-pointer  hover:scale-110 active:scale-90 flex flex-col justify-center items-center"
      onClick={onClick}
    >
      <img
        className="size-80 rounded overflow-hidden"
        src={card.url}
        alt={card.name}
        height={320}
        width={320}
      />
      <span className="text-3xl font-thin text-white ">{card.name}</span>
    </div>
  );
};

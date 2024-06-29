export const Header = () => {
  return (
    <nav className="flex h-16 items-center justify-center gap-4 bg-fuchsia-700 text-3xl font-bold text-white">
      <span className="ml-60">Memory Game</span> <InfoCard />
    </nav>
  );
};

const InfoCard = () => {
  return (
    <div className="group flex flex-row-reverse gap-1 overflow-hidden transition-all duration-700">
      <span className="h-fit -translate-y-40 rounded-lg bg-slate-100 p-2 text-sm text-black transition-all duration-500 group-hover:flex group-hover:translate-y-0">
        Do not click on the same card twice
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1 size-7 cursor-pointer fill-white"
        viewBox="0 0 24 24"
      >
        <title>information-outline</title>
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
      </svg>
    </div>
  );
};

import React from "react";

const TailwindcssButtons = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  isCircular = false,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  isCircular?: boolean;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 rounded-full items-center justify-center focus:outline-none ${isCircular ? "w-12" : "px-4"} ${otherClasses}`}
      onClick={handleClick}
    >
      <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] ${
          isCircular ? "rounded-full w-12 h-12" : "rounded-full"
        }`} />
      <span
        className={`relative inline-flex h-[calc(100%-2px)] w-[calc(100%-2px)] cursor-pointer items-center justify-center rounded-full bg-slate-950 font-medium backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default TailwindcssButtons;

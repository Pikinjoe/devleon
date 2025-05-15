"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Proficient technologies",
  },
  {
    num: 60,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <div className="pt-4 pb-12 lg:pt-0 lg:pb-8">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center lg:justify-start text-white/80"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl lg:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;

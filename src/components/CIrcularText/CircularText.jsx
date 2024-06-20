const CircularText = ({ text, radius, fontSize, night}) => {
  const characters = text.split("");
  const degreeIncrement = 360 / characters.length;

  return (
    <a href="#about " className="absolute right-14 top-96 pt-48 max-[420px]:hidden">
    <div className="animate-fadeBottom cursor-pointer w-20 h-20 flex items-center justify-center ">
      <img
        className=" w-10 h-10 translate-x-1 hover:-translate-y-1  hover:scale-110 transition-all duration-300"
        src={`/icons/${night ? "down-arrow.png" : "down-arrow-logo.png"}`}
        alt="arrow icon"
      />
      <div className=" relative origin-center right-5 -top-1.5 ">
        {characters.map((char, index) => {
          const rotate = degreeIncrement * index;
          const rotateInverse = rotate * -1;
          return (
            <div
              key={index}
              className="absolute transform origin-0 "
              style={{
                transform: `rotate(${rotate}deg) translate(${radius}px) rotate(${rotateInverse}deg)`,
                fontSize: `${fontSize}px`,
              }}
            >
              {char}
            </div>
          );
        })}
      </div>
    </div>
    </a>
  );
};

export default CircularText;

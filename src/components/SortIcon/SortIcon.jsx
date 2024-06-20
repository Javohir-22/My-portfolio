
export const SkillIcon = (props) => {
  return (
    <div className="py-5 max-w-28 w-full px-8 border rounded-3xl hover:scale-110 transition-transform flex gap-2 flex-col items-center border-gray-400 text-center max-[420px]:max-w-20">
      <img className="max-w-12" src={`/icons/${props.url}`} alt={`${props.name} icon`} />
      <p className="text-sm dark:text-white text-stone-900">{props.name}</p>
    </div>
  );
}

export const SortIcon = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img
        src={`/icons/${props.name}.png`}
        alt={`${props.name} icon`}
        title={props.name}
        className={`w-10 p-2.5 border animate-up shadow border-slate-400 shadow-stone-600 hover:shadow-md rounded-2xl hover:shadow-stone-500 hover:scale-105 transition-all opacity-85 hover:opacity-100 cursor-pointer ${props.className}`}
      />
    </a>
  );
};


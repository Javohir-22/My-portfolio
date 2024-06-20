import { useTranslation } from "react-i18next";

const ProjectForm = (props) => {
  const { t } = useTranslation();

  return (
    <div className={`${props.className} rounded-3xl p-5  shadow-inner shadow-neutral-700 dark:bg-stone-800 border bg-neutral-300 border-slate-500`}>
      <img className="w-72 mx-auto  hover:scale-105 transition-all  h-44 rounded-xl z" src={"/" + props.img} alt={props.img} />
      <div className="flex py-3 items-center justify-between">
        <h3 className=" text-xl">{props.name}</h3>
        <a href={props.link} target="_blank">
        <button className="bg-gradient-to-r transition-transform hover:opacity-95 dark:from-pink-200 dark:via-red-200 dark:to-orange-200 hover:scale-105 text-black px-2 py-1 border border-stone-300 rounded-xl from-zinc-400 to-slate-400">
          {t('More')} <span>{">"}</span>
        </button>
        </a>
      </div>
      <div className="flex gap-2 cursor-pointer ">
        <p className=" text-xs border hover:opasity-80 border-slate-400 rounded-xl py-1 px-2 ">
          {props.checkOne}
        </p>
        <p className="text-xs border hover:opasity-80 border-slate-400 rounded-xl py-1 px-2 ">
        {props.checkTwo}
        </p>
        <p className="text-xs border hover:opasity-80 border-slate-400 rounded-xl py-1 px-2 ">
        {props.checkThree}
        </p>
        <p className="text-xs border hover:opasity-80 border-slate-400 rounded-xl py-1 px-2 ">
        {props.checkFour}
        </p>
        <p className="text-xs border hover:opasity-80 border-slate-400 rounded-xl py-1 px-2 ">
        {props.checkFive}
        </p>
      </div>
    </div>
  );
};


export default ProjectForm
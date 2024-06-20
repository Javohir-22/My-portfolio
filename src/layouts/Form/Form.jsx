import { useTranslation } from 'react-i18next';

import { SortIcon } from "../../components/SortIcon/SortIcon";

const Form = ({ night }) => {
  const { t } = useTranslation();
  return (
    <div className=" w-72 p-8 fixed animate-fadeLeft flex-col flex max-xl:gap-10 gap-12 rounded-3xl shadow-inner dark:shadow-neutral-700 dark:bg-stone-800 border border-zinc-400 dark:border-neutral-700 max-lg:hidden ">
      <div className="flex flex-col gap-5">
        <div className="flex  gap-5 ">
          <a href="https://github.com/Javohir-22/My-portfolio" target="_blank">
            <img
              src={`/icons/${night ? "code" : "code-logo"}.png`}
              alt="code icon"
              className="rounded-2xl hover:opacity-90 cursor-pointer shadow-inner dark:shadow-neutral-900 w-12 h-12 p-3 dark:bg-stone-700 bg-zinc-300"
            />
          </a>
          <h2>
            {t('Javohir')} <br /> {t('Sultanov')}
          </h2>
        </div>
        <img src="/avatar-removebg.png" alt="avatar" className=" rounded-3xl " />
      </div>
      <div>
        <p className="text-xs">{t('Spectialization')}:</p>
        <h4>{t('Frontend Developer')}</h4>
      </div>
      <div>
        <p className="text-xs">{t('From')}:</p>
        <h4>{t('Xiva, Uzbekistan')}</h4>
      </div>
      <div className="flex gap-3 flex-col ">
        <div className="flex gap-2">
          <SortIcon
            name={night ? "github" : "github-logo"}
            link="https://github.com/javohir-22"
          />
          <SortIcon
            name={night ? "telegram" : "telegram-logo"}
            link="https://t.me//Sultanovv_22"
          />
          <SortIcon
            name={night ? "instagram" : "instagram-logo"}
            link="https://www.instagram.com/sultonovv_22"
          />
          <SortIcon
            name={night ? "twitch" : "twitch-logo"}
            link="https://www.twitch.tv/Javohir_22"
          />
          <SortIcon
            name={night ? "upwork" : "upwork-logo"}
            link="https://www.upwork.com/freelancers/~012b80623c90e5b6a4"
          />
        </div>
        <a
        className='mx-auto'
          target="_blank"
          href="https://www.upwork.com/freelancers/~012b80623c90e5b6a4"
        >
          <button className="rounded-3xl w-full text-sm transition-all  delay-150 duration-300 text-black p-3 px-6  bg-gradient-to-r dark:from-pink-200 dark:via-red-200 dark:to-orange-200  hover:scale-105 from-zinc-400 to-slate-400">
            {t('Let`s work together')}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Form;

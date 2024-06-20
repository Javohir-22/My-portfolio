import Title from "../../components/Title/Title"
import TypingText from "../../components/TypingText/TypingText"
import { useTranslation } from 'react-i18next';

const Header = ({night}) => {

  const { t } = useTranslation();

  return (
    <header id="home" className="ml-80 max-lg:ml-0 max-lg:max-w-4xl max-lg:px-28 relative mt-60 pl-4 text-white max-sm:px-10 max-[420px]:px-6">
       <img className="hidden max-lg:block absolute w-36 max-sm:z-10 h-36 right-28 -top-24  rounded-full max-sm:-top-40 max-sm:right-1/3 max-[420px]:-mr-4" src="/avatar-removebg.png" alt="avatar" />
      <div className="fixed w-36 h-36 max-sm:w-28 max-sm:h-28 max-sm:top-48 bg-gradient-lighten top-56 rotate-45"></div>
        <div className="fixed max-lg:hidden block right-1/4 top-36 w-28 h-28 bg-gradient-lighten rotate-45"></div>
        <div className="fixed  right-1/3 top-96 w-32 h-32 max-sm:w-24 max-sm:h-24 bg-gradient-lighten rotate-45 max-sm:right-36"></div>
        <h1 className="text-4xl max-sm:text-3xl gradient-text relative mt-4 animate-fadeRight max-[420px]:text-2xl">{t("Hi! I'm Javohir")}.</h1>

        <TypingText text={t('Developer')} speed={100} />

          <p className="text-3xl max-sm:text-2xl relative gradient-text animate-fadeRight max-[420px]:text-xl">
          {t('committed to innovation and a creative approach to every project')}.</p> 
        <a href="#projects" className="absolute bottom-1 animate-fadeBottom">
          <button className="border border-slate-400 flex items-center gap-1.5 mt-12 p-1.5 px-2.5 rounded-2xl hover:opacity-85 hover:scale-105 transition-all">
            <span className="text-stone-900 max-sm:text-sm dark:text-white ">{t("My Works")}</span>
            <img className="w-5" src={`/icons/${night ? "qr.png" : "qr-logo.png"}`} alt="" />
          </button>
        </a>
    </header>
    )
}

export default Header
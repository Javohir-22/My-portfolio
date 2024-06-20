import { useState } from "react";
import { useVisibility } from "../../App";
import SortNav from "../../components/SortNav/SortNav";
import { useTranslation } from "react-i18next";

const Navbar = ({ night, setNight, chuseLang, setChuseLang }) => {
  const isSectionVisible = useVisibility("home");
  const isSectionVisibleA = useVisibility("about");
  const isSectionVisibleP = useVisibility("projects");
  const isSectionVisibleC = useVisibility("contact");

  const { t } = useTranslation();

  const [lang, setLang] = useState(
    localStorage.getItem("lang") === "Uz"
      ? "Uz"
      : localStorage.getItem("lang") === "Ru"
      ? "Ru"
      : "En"
  );

  const [showModal, setShowModal] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div
        className={`w-56 h-full fixed left-0 top-0 backdrop-blur-2xl z-20 transition-all pt-20 max-[420px]:w-48 ${
          showModal ? "left-0 opacity-100" : "left-[-100%] opacity-0"
        }`}
        onClick={() => setShowModal(false)}
      >
        <SortNav
          name={t("home")}
          link="#"
          className={isSectionVisible ? "border shadow-md" : ""}
        />
        <SortNav
          name={t("about")}
          link="#about"
          className={isSectionVisibleA ? "border shadow-md" : ""}
        />
        <SortNav
          name={t("projects")}
          link="#projects"
          className={isSectionVisibleP ? "border shadow-md" : ""}
        />
        <SortNav
          name={t("contact")}
          link="#contact"
          className={isSectionVisibleC ? "border shadow-md" : ""}
        />
      </div>
      <nav className="ml-80 max-lg:ml-0 max-lg:px-28 flex fixed max-lg:top-0 z-30 max-w-2xl justify-between w-full animate-fadeUp items-center p-4 max-lg:max-w-5xl max-md:border border-slate-500 max-lg:backdrop-blur-2xl max-md:top-0 max-sm:px-10 max-[420px]:px-6">
        <div
          className="max-md:flex hidden flex-col gap-1.5 cursor-pointer"
          onClick={() => setShowModal(!showModal)}
        >
          <span
            className={`w-8 h-1 bg-stone-600 dark:bg-slate-200 transition-all ${
              showModal ? "rotate-[-45deg] translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-stone-600 dark:bg-slate-200 transition-all  ${
              showModal ? "hidden" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-stone-600 dark:bg-slate-200 transition-all ${
              showModal ? "rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </div>

        {showModal && <div></div>}

        <ul className="flex gap-6 dark:text-white max-md:hidden">
          <SortNav
            name={t("home")}
            link="#"
            className={isSectionVisible ? "border shadow-md" : ""}
          />
          <SortNav
            name={t("about")}
            link="#about"
            className={isSectionVisibleA ? "border shadow-md" : ""}
          />
          <SortNav
            name={t("projects")}
            link="#projects"
            className={isSectionVisibleP ? "border shadow-md" : ""}
          />
          <SortNav
            name={t("contact")}
            link="#contact"
            className={isSectionVisibleC ? "border shadow-md" : ""}
          />
        </ul>
        <div className="flex items-center gap-6">
          <button
            className="hover:-rotate-45 transition-all duration-500 w-6"
            onClick={() => {
              setNight(!night),
                localStorage.setItem("night", JSON.stringify(!night));
            }}
          >
            <img src={`/icons/${night ? "sun" : "moon"}.png`} alt="sun icon" />
          </button>
          <button
            className="flex items-center px-2 p-1.5 relative rounded-lg backdrop-blur-sm hover:shadow hover:shadow-slate-200 border border-stone-400"
            onClick={() => setChuseLang(!chuseLang)}
          >
            <span>{lang}</span>
            {chuseLang ? (
              <div className="flex flex-col absolute top-0 left-0 shadow shadow-slate-300 bg-gray-300 border border-slate-400 dark:bg-zinc-800 rounded">
                <span
                  className="p-1 px-2 hover:bg-zinc-600 rounded-t"
                  onClick={() => {
                    changeLanguage("En");
                    setLang("En");
                    localStorage.setItem("lang", "En");
                    window.location.reload();
                  }}
                >
                  En
                </span>
                <span
                  className="p-1 px-2 hover:bg-zinc-600"
                  onClick={() => {
                    changeLanguage("Ru");
                    setLang("Ru");
                    localStorage.setItem("lang", "Ru");
                    window.location.reload();
                  }}
                >
                  Ru
                </span>
                <span
                  className="p-1 px-2 hover:bg-zinc-600 rounded-b"
                  onClick={() => {
                    changeLanguage("Uz");
                    setLang("Uz");
                    localStorage.setItem("lang", "Uz");
                    window.location.reload();
                  }}
                >
                  Uz
                </span>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

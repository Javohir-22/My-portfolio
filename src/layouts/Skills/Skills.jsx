import { useTranslation } from "react-i18next";
import Char from "../../components/Char/Char"
import { SkillIcon } from "../../components/SortIcon/SortIcon"
import Title from "../../components/Title/Title"

const Skills = ({night}) => {
  const { t } = useTranslation();

  return (
    <section id="about" className=" ml-80 max-lg:ml-0 max-lg:max-w-5xl max-lg:px-28 pl-4 pt-28 pb-8 relative max-sm:px-10 max-[420px]:px-6">
      <Title link="skills" name={t('Skills')} night={night} />
      <div className="flex flex-col gap-4 mt-12">
      <h3 className="text-5xl max-sm:text-4xl gradient-text max-[420px]:text-3xl">{t('What am I doing')}</h3>
      <p className="dark:text-stone-300 max-sm:text-sm font-light">{t('I specialize in developing modern web applications using cutting-edge technologies and frameworks. My main skills include')}:</p>
      </div>
      <div className="flex gap-4 mt-10 flex-wrap">
      <SkillIcon url="html.png" name="Html" />
      <SkillIcon url="css-3.png" name="Css" />
      <SkillIcon url="js.png" name="Javascript" />
      <SkillIcon url="dog.png" name="Pug" />
      <SkillIcon url="sass.png" name="Scss" />
      <div className="py-5 max-[420px]:max-w-20 px-6 border hover:scale-110 transition-transform rounded-3xl relative flex gap-2 flex-col items-center border-gray-400 text-center">
      <img className="max-w-16 w-full absolute" src="/icons/logo.svg" alt="react icon" />
      <p className="text-sm mt-14">React</p>
    </div>
    <div className="py-5 max-[420px]:max-w-20 px-6 border hover:scale-110 transition-transform rounded-3xl flex gap-4 flex-col items-center border-gray-400 text-center">
      <img className="max-w-14 w-full" src="/icons/tailwind-css.svg" alt="react icon" />
      <p className="text-sm">Tailwind</p>
    </div>
      </div>
    </section>
  )
}

export default Skills
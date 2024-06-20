import { useVisibility } from "../../App";
import Title from "../../components/Title/Title";
import { useTranslation } from 'react-i18next';

const About = ({night}) => {

  const isSectionVisible = useVisibility('about');


  const { t } = useTranslation();

  return (
    <section id="about" className="ml-80 max-lg:ml-0 max-lg:max-w-5xl max-lg:px-28  pt-24 pl-4 relative max-sm:px-10 max-[420px]:px-6">
      <Title link="about" name={t("About Me")} night={night} />
      <h3 className="text-5xl gradient-text py-4 max-sm:text-4xl leading-snug max-[420px]:text-3xl">{t('Turning complex problems into simple code')}</h3>
      <div className="flex items-center gap-8 max-sm:gap-4">
        <div className="px-12 py-6 max-md:px-6  border rounded-3xl  border-gray-600 text-center max-sm:p-4">
          <h4 className="text-5xl max-md:text-4xl max-sm:text-3xl gradient-text">2+</h4>
          <p className="text-sm pt-1 max-md:text-xs">{t('Clients')}</p>
        </div>
        <div className="px-12 py-6 border rounded-3xl  max-md:px-6 border-gray-600 text-center max-sm:p-4">
          <h4 className="text-5xl max-md:text-4xl max-sm:text-3xl gradient-text">9+</h4>
          <p className="text-sm pt-1 max-md:text-xs text-wrap">{t('Month of experience')}</p>
        </div>
        <div className="px-12 py-6 border rounded-3xl max-md:px-6 border-gray-600 text-center max-sm:p-4">
          <h4 className="text-5xl max-md:text-4xl max-sm:text-3xl gradient-text">4+</h4>
          <p className="text-sm max-md:text-xs pt-1 ">{t('Projects done')}</p>
        </div>
      </div>
      <div className="mt-10 pb-10 flex gap-6">
        <div className={`max-w-md dark:text-stone-300 transition-all max-sm:text-sm flex flex-col gap-6 font-light ${isSectionVisible ? "animate-left" : " "}`}>
          <p>
           {t("Hello! My name is Javohir Sultanov, I am a front-end developer with 7 month of experience. My passion for web development began with the creation of the first static pages, in which I continue to develop and learn new technologies")}.
          </p>
          <p>{t('My goal is to create intuitive, functional, and visually appealing web experiences. I strive to develop projects that not only satisfy the needs of users, but also bring them pleasure from interaction')}.</p>
        </div>
        <div className={`flex flex-col max-md:hidden gap-4 ${isSectionVisible ? "animate-right" : " "}`}>
          <div>
            <p className="text-xs font-light dark:text-stone-300">{t('Name')}</p>
            <h6>{t('Javohir')} {t('Sultanov')}</h6>
          </div>
          <div>
            <p className="text-xs font-light dark:text-stone-300">{t('Phone')}</p>
            <h6>+998 91 913 63 64</h6>
          </div>
          <div>
            <p className="text-xs font-light dark:text-stone-300">{t('Email')}</p>
            <h6>sultonovv22@gmail.com</h6>
          </div>
          <div>
            <p className="text-xs font-light dark:text-stone-300">{t('Location')}</p>
            <h6>{t('Xiva, Uzbekistan')}</h6>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl max-sm:text-2xl mb-6" >{t('Work experience')}</h3>
        <div className="border border-stone-500 p-6 max-sm:text-sm border-x-0 flex justify-between">
          <p className="dark:ext-stone-300 font-light">2024</p>
          <h6 className="dark:text-white pl-4">{t('Frontend Developer')}</h6>
          <p className="dark:text-stone-300 font-light">{t('Freelancer')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

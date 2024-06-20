import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm"
import { SortIcon } from "../../components/SortIcon/SortIcon"
import Title from "../../components/Title/Title"
import { useVisibility } from "../../App";

const Contact = ({night}) => {
  const { t } = useTranslation();

  const isVisible = useVisibility('social');
  const isVisibleT = useVisibility('left');
  const isVisibleMeet = useVisibility('meet');

  return (
    <footer id="contact" className="ml-80 pl-4 pt-24 relative max-lg:ml-0 max-lg:max-w-5xl max-lg:px-28 max-sm:px-10 max-[420px]:px-6">
      <Title link="contact" name="Contact" night={night}/>
      <h3 className="text-4xl my-3 max-sm:text-3xl max-[420px]:text-2xl">{t('I am always open to new opportunities and projects')}. </h3>
      <p className="dark:text-stone-300 max-sm:text-sm max-[420px]:text-xs">{t("If you have an idea or need a professional front-end developer, feel free to contact me. Let's create something amazing together!")}</p>
      <ContactForm />

      <div id="social" className={`flex justify-between items-center py-10 w-full ${isVisible ? "animate-down" : ""}`}>
        <SortIcon name={night ? `github` : `github-logo`} link="https://github.com/javohir-22" className="p-6 w-28 max-lg:w-24 max-lg:px-8 px-9 rounded-3xl border-stone-500 hover:bg-transparent opacity-70 hover:opacity-100 hover:scale-105 max-md:p-4 max-md:w-14 max-sm:p-3 max-sm:w-12 max-sm:rounded-2xl" />
        <SortIcon name={night ? `telegram` : `telegram-logo`} link="https://t.me//Sultanovv_22" className="p-6 w-28 px-9 max-lg:w-24 max-lg:px-8 rounded-3xl border-stone-500 hover:bg-transparent opacity-70 hover:opacity-100 hover:scale-105 max-md:p-4 max-md:w-14 max-sm:p-3 max-sm:w-12 max-sm:rounded-2xl" />
        <SortIcon name={night ? `instagram` : `instagram-logo`} link="https://www.instagram.com/sultonovv_22" className="p-6 max-lg:w-24 max-lg:px-8 w-28 px-9 rounded-3xl border-stone-500 hover:bg-transparent opacity-80 hover:opacity-100 hover:scale-105 max-md:p-4 max-md:w-14 max-sm:p-3 max-sm:w-12 max-sm:rounded-2xl" />
        <SortIcon name={night ? `twitch` : `twitch-logo`} link="https://github.com/javohir-22" className="p-6 w-28 px-9 max-lg:w-24 max-lg:px-8 rounded-3xl border-stone-500 hover:bg-transparent opacity-70 hover:opacity-100 hover:scale-105 max-md:p-4 max-md:w-14 max-sm:p-3 max-sm:w-12 max-sm:rounded-2xl" />
        <SortIcon name={night ? `upwork` : `upwork-logo`} link="https://github.com/javohir-22" className="p-6 w-28 px-9 max-lg:w-24 max-lg:px-8 rounded-3xl border-stone-500 hover:bg-transparent opacity-70 hover:opacity-100 hover:scale-105 max-md:p-4 max-md:w-14 max-sm:p-3 max-sm:w-12 max-sm:rounded-2xl" />
      </div>

      <h4 id="left" className={`gradient-text text-3xl max-sm:text-2xl my-4 max-[420px]:text-xl ${isVisibleT ? "animate-right" : ""}`}>{t("Want to know more about me, tell me about your project or just to say hello? Drop me a line adn I`ll get back as soon as possible.")}
      </h4>
      <div className={`mt-10 py-6 border-t border-stone-500 flex max-sm:flex-col max-sm:gap-6 max-sm:items-start items-center gap-28 ${isVisibleMeet ? "animate-down" : ""}`}>
        <div >
          <h6>{t('Location')}</h6>
          <p className="dark:text-stone-300 font-light text-sm">{t('Xiva, Uzbekistan')}</p>
        </div>
        <div>
          <h6>{t('Phone')}</h6>
          <p className="dark:text-stone-300 font-light text-sm">+998 91 913 63 64</p>
        </div>
        <div>
          <h6>{t('Email')}</h6>
          <p className="dark:text-stone-300 font-light text-sm">sultonovv22@gmail.com</p>
        </div>
      </div>

    </footer>
  )
} 

export default Contact
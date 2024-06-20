import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [result, setResult] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8572b7fb-fe5c-4d30-b667-2f9da63fc809");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="my-10 p-6">
        <div className="flex items-center max-md:flex-col max-md:gap-6 justify-between mb-6">
          <div className="flex flex-col  w-full">
            <label htmlFor="name" className="dark:text-stone-300 text-xs font-light">
              {t('Your Name')}*
            </label>
            <input
              id="name"
              className="w-64 bg-transparent border-b outline-0 max-md:w-4/5 border-stone-500 font-light max-sm:w-full"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col  w-full">
            <label
              htmlFor="company"
              className="dark:text-stone-300 text-xs font-light"
            >
              {t('Company name')}
            </label>
            <input
              id="company"
              className="w-64 bg-transparent border-b outline-0 max-md:w-4/5 border-stone-500 max-sm:w-full"
              type="text"
              name="company"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-6 max-md:flex-col max-md:gap-6 "> 
          <div className="flex flex-col  w-full">
            <label
              htmlFor="email"
              className="dark:text-stone-300 text-xs font-light"
            >
              {t('Email Addres')}*
            </label>
            <input
              id="email"
              className="bg-transparent border-b outline-0 max-md:w-4/5 border-stone-500 w-64 max-sm:w-full"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="number"
              className="dark:text-stone-300 text-xs font-light"
            >
              {t('Phone Number')}*
            </label>
            <input
              id="number"
              className=" bg-transparent border-b outline-0 max-md:w-4/5 border-stone-500 w-64 max-sm:w-full"
              type="number"
              name="number"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
        <label htmlFor="message" className="dark:text-stone-300 text-xs font-light">
          {t('A Few Words')}*
        </label>
        <textarea
          className="max-md:w-4/5 w-full bg-transparent border-b outline-0 border-stone-500 max-sm:w-full"
          name="message"
          required
        ></textarea>
        </div>

        <button
          type="submit "
          className="bg-gradient-to-r transition-transform hover:opacity-95 dark:from-pink-200 dark:via-red-200 dark:to-orange-200 from-zinc-400 to-slate-400 hover:scale-105 text-black px-3 py-2 border border-stone-300 rounded-xl max-sm:text-sm mt-6 flex items-center gap-2"
        >
          <span>{t('Send Message')}</span>
          <img className="w-5 -rotate-45" src="/icons/bx-send.svg" alt="send icon" />
        </button>
      </form>

        {result === true ? (
          <div className="fixed top-24 right-5 z-10 animate-fadeRight text-black text-xs font-light border p-4 rounded-2xl bg-gradient-to-r dark:from-red-300 dark:via-orange-300 dark:to-orange-200 from-zinc-400 to-slate-400">
            <div className="flex items-center gap-2 text-lg">
              <img src="/icons/check.png" alt="check icon" />
              <h5>{t('The message was sent successfully')}!</h5>
              <p onClick={() => setResult(false)} className="absolute text-red-700 cursor-pointer right-3 top-0 text-xl">x</p>
            </div>
            <p className="text-stone-800 pl-10">
              {t('Thank you for your message. I will get back to you as soon as possible.')}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
  );
}

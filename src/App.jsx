import { useEffect, useRef, useState } from "react";

import Form from "./layouts/Form/Form";
import Navbar from "./layouts/Navbar/Navbar";
import Header from "./layouts/Header/Header";
import About from "./layouts/About/About";
import CircularText from "./components/CIrcularText/CircularText";
import Skills from "./layouts/Skills/Skills";
import Projects from "./layouts/Projects/Projects";
import Contact from "./layouts/Contact/Contact";

export const useVisibility = (id) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, 
        threshold: 0.2, 
      }
    );

    const element = document.getElementById(id);
    if (element) {
      elementRef.current = element;
      observer.observe(element);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [id]);

  return isVisible;
};

function App() {

  let [night, setNight] = useState(
    localStorage.getItem("night") === "true" ? true : false
  );
  const [chuseLang, setChuseLang] = useState(false);
  

  if (night) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <Form night={night}/>
      <Navbar night={night} chuseLang={chuseLang} setNight={setNight} setChuseLang={setChuseLang} />
      <Header night={night}/>

      <CircularText text="SCROLL FOR MORE ~ SCROLL FOR MORE ~ " radius={45} fontSize={8} night={night}/>
      
      <About night={night}/>
      <Skills night={night}/>
      <Projects night={night}/>
      <Contact night={night}/>
    </>
  );
}

export default App;

import { useTranslation } from "react-i18next";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import Title from "../../components/Title/Title";
import { useVisibility } from "../../App";

const Projects = ({night}) => {
  const isVisible = useVisibility('project');

  const { t } = useTranslation();

  return (
    <section id="projects" className="ml-80 max-lg:ml-0 max-lg:max-w-5xl max-lg:px-28 pl-4 pt-24  relative max-sm:px-10 max-[420px]:px-6">
      <Title link="projects" name="Projects" night={night}/>
      <h4 className="text-5xl max-sm:text-4xl gradient-text py-4 max-[420px]:text-3xl">
        {t('Check')}
      </h4>
      <p className="dark:text-stone-300 pt-2 max-sm:text-sm">
       {t('My portfolio includes a variety of web applications and sites developed for various clients. Each project demonstrates my ability to adapt to different requirements and create solutions that meet high standards')}.
      </p>

      <div className="my-6 grid grid-cols-2 gap-10 max-md:flex flex-col items-center " id="project">
        <ProjectForm
          name="Contact App"
          img="contact.png"
          checkOne="html"
          checkTwo="css"
          checkThree="js"
          link="https://github.com/Javohir-22/Contact-App"
          className={`mb-8 ${!isVisible ? "animate-left" : ""}`}
        />

        <ProjectForm
          name="Worl Matress"
          img="matress.png"
          checkOne="pug"
          checkTwo="scss"
          checkThree="js"
          link="https://github.com/Javohir-22/World-Matress"
          className={`mt-8 ${!isVisible ? "animate-right" : ""}`}
        />

        <ProjectForm
          name="Stuff shop"
          img="photo_2024-06-21_13-12-13.jpg"
          checkOne="react"
          checkTwo="redux"
          checkThree="axios"
          link="https://github.com/Javohir-22/Stuff-shop"
          className={`mt-8 ${!isVisible ? "animate-left" : ""}`}
        />
      </div>
    </section>
  );
};

export default Projects;

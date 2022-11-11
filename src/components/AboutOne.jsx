import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutOne = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  
  return (
    <div id="about" data-aos="fade-right"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"  className="about-conatiner">
      <section className="about">
        <div className="about-text">
          <h1   className="about-title">Sobre Mi</h1>
          <div>
            <p>
              Hola me presento me llamo Luis David Fernandez Chinchilla ,
              Soy Ingeniero de Sistemas tambien me desempeño como desarrollador web
              Front-end, siempre a sido mi pasion del desarrollo web y la programación.
            </p>
            <p>
              Creo que la capacidad de superación es una de las cualidades más importantes
              para cualquier trabajador. Es por eso me considero capaz de mejorar y aprender
              a diario, de cada una de las oportunidades laborales que se me presenten.
            </p>
            <p>
              Mi deseo es adaptarme a las necesidades de la empresa y aprovechar 
              la posibilidad de trabajar en su equipo, para crecer como profesional 
              y dar lo mejor de mis cualidades
            </p>
            <p>
              Además me gusta viajar, jugar futbol, ver series y
              películas, y escuchar música acompañando a lo que realize.
            </p>
          </div>
        </div>
        <div className="about-logo">
          <div className="bgColor"></div>
          <div className="logo-container">
            <h1 className="logo">LD</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOne;

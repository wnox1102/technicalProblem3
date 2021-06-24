import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { CurveUp, CurveDown } from './Curve';
import { PresentationIllustration } from './Illustrations';

export default function About() {
  return (
    <section className="" id="about">
      <CurveUp className="w-full h-auto text-white" />
      <article className="bg-indigo-700 py-8 flex flex-row flex-wrap px-10 lg:px-20">
        <Slide className="flex flex-col flex-wrap w-full lg:w-1/2" triggerOnce>
          <PresentationIllustration className="w-full h-auto" />
        </Slide>
        <Slide
          className="flex flex-col flex-wrap w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-8"
          triggerOnce
        >
          <>
            <h2 className="text-gray-100 text-2xl lg:text-4xl uppercase font-semibold mb-6">
              Solución del problema.
            </h2>
            <p className="text-gray-100 text-justify leading-relaxed">
              Es una plataforma en la cual podrás iniciar sesión y obtener
              información de contacto del usuario. Esta hecha con ReactJs y
              usando como framework de estilos TalwindCSS para optimizar la
              carga de la pagina. Ademas de esto se usa las mejores practicas
              con ESLint y prettier para que el codigo sea lo mas legible y
              escalable en el tiempo.
            </p>
          </>
        </Slide>
      </article>
      <CurveDown className="w-full h-auto text-primary-500" />
    </section>
  );
}

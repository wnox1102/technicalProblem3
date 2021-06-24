import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactIcon } from './Illustrations';

export default function Welcome() {
  const variants = {
    initial: { scale: 1 },
    hover: { scale: 1.25 },
  };

  return (
    <motion.section
      className="w-full px-10 lg:px-20 flex flex-row-reverse flex-wrap mt-16 mb-4"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col flex-wrap">
        <ReactIcon className="w-full h-auto m-auto" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col flex-wrap lg:pr-10">
        <h1
          className="text-4xl lg:text-7xl font-semibold bg-clip-text bg-gradient-to-br from-primary-500 to-pink-500"
          style={{
            WebkitTextFillColor: 'transparent',
          }}
        >
          Plataforma
          <br />
          Problema 3
        </h1>
        <h2 className="text-xl mt-4">¡Bienvenido!</h2>
        <p className="text-gray-700 text-justify my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quasi impedit architecto eos quas facere velit fuga exercitationem aut
          illum quae minus inventore quibusdam veniam earum! Quam laboriosam
          saepe cum!
        </p>
        <div className="w-full flex flex-row flex-wrap mt-4">
          <motion.a
            className="bg-primary-500 text-gray-100 px-6 py-2 rounded-xl my-auto cursor-pointer shadow-lg"
            variants={variants}
            initial="initial"
            whileHover="hover"
          >
            <Link to="/sign-in">
              <span>Iniciar</span>
              <svg
                fill="currentColor"
                className="w-4 h-4 ml-2 inline-block"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

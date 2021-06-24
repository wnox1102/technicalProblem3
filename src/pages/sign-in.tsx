import React from 'react';
import { motion } from 'framer-motion';
import SignInForm from '../components/login/SignInForm';
import LoginIllustration from '../components/login/illustrations/Login';

export default function SignIn() {
  return (
    <>
      <section className="flex w-full flex-row flex-wrap bg-gray-100 h-screen">
        <article className="flex flex-col w-full md:w-2/5 lg:w-2/5 overflow-y-auto h-full p-6 pb-0">
          <motion.div
            className="flex flex-col flex-wrap w-full"
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            transition={{ duration: 1 }}
          >
            <SignInForm />
          </motion.div>
        </article>
        <aside className="w-3/5 hidden md:flex object-cover object-center h-full overflow-hidden p-0 m-0 justify-center items-center">
          <LoginIllustration />
        </aside>
      </section>
    </>
  );
}

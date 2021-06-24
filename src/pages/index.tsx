import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/home/Welcome';
import About from '../components/home/About';

export default function HomePage() {
  return (
    <section className="w-full h-full min-h-screen flex flex-col flex-wrap bg-gray-100">
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen mt-8">
        <Welcome />
        <About />
      </main>
      {/* <Footer /> */}
    </section>
  );
}

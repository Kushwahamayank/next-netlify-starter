import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


      <Footer />
    </div>
  )
}

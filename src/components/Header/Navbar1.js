import React, { useRef, useContext } from 'react';
import { globalContext } from "../App";

function Navbar() {
  const context = useContext(globalContext);
  const menuOpen = useRef();
  const menuClose = useRef();

  function menuToggle() {
    document.querySelector(".navbar2").classList.toggle("active");
    menuOpen.current.classList.toggle("hidden");
    menuClose.current.classList.toggle("hidden");
    context.menuOpen = !context.menuOpen;

    if (document.querySelector(".navbar2").classList.contains("active")) {
      document.querySelector(".navbar2").classList.remove("hidden");
    } else {
      document.querySelector(".navbar2").classList.add("hidden");
    }
  }

  return (
    <>
    <ul className="navbar">
      <li>Home</li>
      <li>About</li>
      <li>Support</li>
    </ul>
    <div className="navbar">
      <svg onClick={menuToggle} ref={menuOpen} className="menu" xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1={4} y1={6} x2={20} y2={6}></line>
        <line x1={4} y1={12} x2={20} y2={12}></line>
        <line x1={4} y1={18} x2={20} y2={18}></line>
      </svg>
      <svg onClick={menuToggle} ref={menuClose} className="menu hidden" xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="15 6 9 12 15 18"></polyline>
      </svg>
    </div>
    <ul className="navbar">
      <a href="https://github.com/TempUsername2436/space-landing-page" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
      </svg></a>
      <a href="https://www.linkedin.com/in/christopher-benton-78889822a/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x={4} y={4} width={16} height={16} rx={2}></rect>
        <line x1={8} y1={11} x2={8} y2={16}></line>
        <line x1={8} y1={8} x2={8} y2="8.01"></line>
        <line x1={12} y1={16} x2={12} y2={11}></line>
        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
      </svg></a>
    </ul>
    </>
  );
}

export default Navbar;

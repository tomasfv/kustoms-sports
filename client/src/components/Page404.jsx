import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
 
  return (
   
    <main class="h-screen w-full flex flex-col justify-center items-center bg-main-dark ">
    <h1 class="text-9xl font-extrabold text-main-light tracking-widest">404</h1>
    <div class="bg-verde-light px-2 text-sm rounded rotate-12 absolute">
      You don't have permission to use this page
    </div>
    <button class="mt-5">
        <a
          class="relative inline-block text-sm font-medium text-verde-light  group active:text-main-dark focus:outline-none focus:ring"
        >
          <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-verde-light group-hover:bg-verde-light   group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>
  
          <span class="relative block px-8 py-3 bg-main-dark hover:bg-main-light hover:text-main-dark   border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
  </main>
  );
};

export default Page404;

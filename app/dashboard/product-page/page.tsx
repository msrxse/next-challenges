import Image from "next/image";
import React from "react";

/**
 * CSS display property
 *  block: Displays element as block element. It starts a new line and takes the whole width.
 *  inline: Displays elem as inline element. Any height and width properties will have no effect.
 *  inline-block: Just like the 'inline' element, but you can apply height and width values.
 *
 * Breakpoints:
 * {
 *  "sm": "640px",
 *  "md": "764px",
 *  "lg": "1024px",
 *  "xl": "1248px",
 *  "2xl": "1536px",
 * }
 *
 * Other CSS:
 * inset-0 === top:0, bottom:0, left:0, right:0
 *
 */
function Page() {
  return (
    <main className="bg-gray-300 h-full">
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img src="/logo.svg" alt="Workcation" className="h-10" />
            <Image
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/beach-work.jpg"
              alt="Woman workcationing on the beach"
              width={2693}
              height={1795}
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl ">
              You can work form anywhere.
              <br className="inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you&apos;re
              not on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 
                hover:bg-indigo-400 hover:-translate-y-0.5 
                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 
                active:bg-indigo-600
                  transform transition text-white uppercase
                  tracking-wider font-semibold text-sm sm:text-base"
                href="#"
              >
                Book your scape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <Image
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/beach-work.jpg"
            alt="Woman workcationing on the beach"
            width={2693}
            height={1795}
          />
        </div>
      </div>
    </main>
  );
}

export default Page;

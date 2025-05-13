import Image from "next/image";
import React from "react";

/**
 * CSS display property
 *  block: Displays element as block element. It starts a new line and takes the whole width.
 *  inline: Displays elem as inline element. Any height and width properties will have no effect.
 *  inline-block: Just like the 'inline' element, but you can apply height and width values.
 *
 *
 *
 */
function Page() {
  return (
    <main className="bg-gray-100 h-full">
      <div className="w-full px-8 py-12">
        <img src="/logo.svg" alt="Workcation" className="h-10" />
        <Image
          className="mt-6 rounded-lg shadow-xl"
          src="/beach-work.jpg"
          alt="Woman workcationing on the beach"
          width={2693}
          height={1795}
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work form anywhere.
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you&apos;re not on
          vacation.
        </p>
        <div className="mt-4">
          <a
            className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-400 text-white uppercase tracking-wider font-semibold text-sm"
            href="#"
          >
            Book your scape
          </a>
        </div>
      </div>
    </main>
  );
}

export default Page;

"use client";

import React from "react";

function Page() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form sended");
  };

  return (
    <main className="bg-gray-100 h-full flex justify-center items-center">
      <div className="p-6 space-y-6 sm:p-8">
        <h1 className="text-2xl text-gray-900">Login Page</h1>
        <ul className="list-disc">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <section className="bg-white rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  type="email"
                  id="email"
                  placeholder="name@yourcompany.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  id="password"
                  placeholder="..........."
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      aria-describedby="remember"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      required={false}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      remember
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t have an account yet?{" "}
                <a
                  className="font-medium text-blue-600 hover:underline"
                  href="#"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;

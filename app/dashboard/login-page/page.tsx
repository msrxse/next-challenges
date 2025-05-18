'use client'

function Page() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form sended')
  }

  return (
    <main className="flex h-full items-center justify-center bg-gray-100">
      <div className="space-y-6 p-6 sm:p-8">
        <h1 className="text-2xl text-gray-900">Login Page</h1>
        <p className="text-sm text-gray-900">
          Form with floating labels effect using just Tailwind CSS utility
          classes.
        </p>
        <ul className="list-disc">
          <li>
            <b>peer sibling selector variant</b>: If you need to style an
            element based on the descendants of a sibling element, you can mark
            the sibling with the peer class and target later on.
          </li>
          <li>
            <b>placeholder-shown</b> variant: Styles an input when the
            placeholder is shown using the placeholder-shown variant:
          </li>
          <li>
            <b>Basically</b>: Using the new &quot;peer&quot; sibling selector
            variant: mark the input as peer and then style the label. depending
            of this input&apos;s placeholder visibility (using the
            placeholder-shown variant).
          </li>
        </ul>
        <section className="mx-auto w-80 overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="relative h-48 rounded-bl-4xl bg-blue-500">
            <svg
              className="absolute -bottom-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="space-y-6 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-2xl leading-tight font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="name@yourcompany.com"
                  required
                />
                <label
                  htmlFor="email"
                  className="peer peer-fucus:text-gray-600 absolute -top-3.5 left-0 mb-2 block text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Your email
                </label>
              </div>
              <div className="relative mt-10">
                <input
                  type="password"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="..........."
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute -top-3.5 left-0 mb-2 block text-sm font-medium text-gray-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Your password
                </label>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      aria-describedby="remember"
                      className="h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-300"
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
                className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t have an account yet?{' '}
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
  )
}

export default Page

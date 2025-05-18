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
        <ul className="list-disc">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <section className="rounded-lg bg-white shadow sm:max-w-md">
          <div className="space-y-6 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-2xl leading-tight font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  className="peer block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder-transparent focus:border-blue-600 focus:ring-blue-600"
                  type="email"
                  id="email"
                  placeholder="name@yourcompany.com"
                  required
                />
                <label
                  htmlFor="email"
                  className="peer absolute -top-4.5 left-0 mb-2 block text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Your email
                </label>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600"
                  id="password"
                  placeholder="..........."
                  required
                />
              </div>
              <div className="flex items-center justify-between">
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

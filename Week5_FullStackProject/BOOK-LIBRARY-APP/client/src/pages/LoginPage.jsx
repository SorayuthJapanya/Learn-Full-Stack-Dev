import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-content/10 rounded-lg shadow-md max-w-lg w-full px-8 py-2">
        <form className="flex flex-col space-y-6 my-12 w-full">
          {/* Title */}
          <div className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold pb-6">
            <h2>Log in</h2>
          </div>

          {/* Input */}
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="border px-3 py-2 border-gray-400 rounded-lg w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              className="border px-3 py-2 border-gray-400 rounded-lg w-full"
            />
          </div>


          {/* Button */}
          <button
            type="submit"
            className="bg-main px-3 py-2 rounded-lg text-content hover:bg-gray-600 cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
      <p className="mt-4 text-main">
        Don't have an accout?{" "}
        <Link to="/signup" className="text-violet-800 cursor-pointer">
          Signup
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
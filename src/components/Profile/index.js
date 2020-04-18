import React from "react"
import { Link } from "gatsby"
function Profile() {
  return (
    <>
      <div className="bg-white sm:max-w-full max-w-md rounded overflow-hidden shadow-lg">
        <div className="text-center p-6  border-b">
          <img
            className="h-24 w-24 rounded-full mx-auto"
            src="https://randomuser.me/api/portraits/men/24.jpg"
            alt="Randy Robertson"
          />
          <p className="pt-2 text-lg font-semibold">Randy Robertson</p>
          <p className="text-sm text-gray-600">randy.robertson@example.com</p>
          <div className="mt-5">
            <Link
              to="/"
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Manage your Google Account
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link to="/" className="px-6 py-3 hover:bg-gray-200 flex">
            <div className="w-8 h-8 bg-blue-700 rounded-full text-center align-middle text-white text-lg content-center">
              D
            </div>
            <div className="pl-3">
              <p className="text-sm font-semibold">Johnny Depp</p>
              <p className="text-xs text-gray-600">johnny.depp@example.org</p>
            </div>
          </Link>
          <Link to="/" className="px-6 py-3 hover:bg-gray-200 flex">
            <div className="w-8 h-8 rounded-full text-center align-middle text-lg">
              <img
                className="w-6 h-6 rounded-full mx-auto"
                src="https://img.icons8.com/windows/50/000000/add-user-male.png"
              />
            </div>
            <div className="pl-3">
              <p className="text-sm font-semibold text-gray-700">
                Add another account
              </p>
            </div>
          </Link>
        </div>
        <div className="border-b">
          <div className="px-6 py-4 text-center">
            <Link
              to="/"
              className="border rounded py-2 px-4 text-xs font-semibold text-gray-70"
            >
              Sign out of all accounts
            </Link>
          </div>
        </div>

        <div className="px-6 py-4">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2">
            Privacy Policy
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2">
            Terms of Service
          </span>
        </div>
      </div>
    </>
  )
}

export default Profile

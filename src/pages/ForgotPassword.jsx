import React, { useState } from 'react';
import { server } from '../constants/config';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${server}/api/v1/user/forgotPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email }),
      });
  

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const resData = await response.json();
      
  
        if (!response.ok) {
          throw new Error(resData.error || 'Failed to send email');
        }
  
        toast.success("Email sent successfully!");
      } else {
        // If not JSON, throw an error
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error sending forgot password request:', error);
      toast.error(error.message || "An error occurred while sending the reset password email.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="w-full h-screen antialiased bg-slate-200 flex items-center justify-center">
      <div className="max-w-lg w-full mx-4 sm:mx-auto my-10 bg-white p-6 sm:p-8 rounded-xl shadow-lg shadow-slate-300">
        <h1 className="text-2xl sm:text-4xl font-medium text-center">Reset password</h1>
        <p className="text-slate-500 text-center mt-2">Fill up the form to reset the password</p>

        <form onSubmit={handleForgotPassword} className="my-8">
          <div className="flex flex-col space-y-4">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-1">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-indigo-500 hover:shadow-md transition-shadow"
                placeholder="Enter email address"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow-lg transition-shadow inline-flex space-x-2 items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#ffffff" size={25} />
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                  <span>Reset password</span>
                </>
              )}
            </button>
            <p className="text-center text-sm">
              Have an account?{' '}
              <Link
                to="/login"
                className="text-indigo-600 font-medium inline-flex space-x-1 items-center hover:underline"
              >
                <span>Login now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

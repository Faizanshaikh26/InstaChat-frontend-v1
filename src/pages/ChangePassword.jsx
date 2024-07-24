import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../constants/config";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

function ChangePassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`${server}/api/v1/user/resetPassword/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password");
      }
  
      setMessage(data.message);
      window.location.replace("/login");
    } catch (error) {
      console.error("Reset password error:", error.message);
      setMessage(error.message || "An error occurred while resetting password");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-10 h-10 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          InstaCHat
        </a>
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Change Password
        </h2>
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              name="password"
              id="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              name="confirm-password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="showPasswords"
              type="checkbox"
              checked={showPasswords}
              onChange={() => setShowPasswords(!showPasswords)}
              className="h-4 w-4"
            />
            <label htmlFor="showPasswords" className="text-sm font-medium text-gray-900 dark:text-white">
              Show Passwords
            </label>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? (
              <ClipLoader color={"#ffffff"} loading={true} css={override} size={25} />
            ) : (
              "Reset Password"
            )}
          </button>
          {message && <p className="text-center text-sm text-red-500 dark:text-red-300">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default ChangePassword;

const override = css`
  display: inline-block;
  vertical-align: middle;
`;

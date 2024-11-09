"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Login({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    if (!agreeToTerms) {
      alert("Please agree to the Terms and Privacy Policy");
      return;
    }
    console.log("Signing up with:", { name, email, password });
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-3xl max-w-md bg-white text-left shadow-xl transition-all sm:w-full p-5"
          >
            <div className="bg-white px-6 py-4 sm:p-6 sm:pb-4">
              <div className="">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-semibold text-gray-900 mb-4"
                >
                  Login
                </DialogTitle>
                <form>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md text-gray-900"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md text-gray-900"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    
                  </div>
                  <button
                    type="button"
                    onClick={handleSignUp}
                    className="w-full mb-3 py-2 bg-[#FA8B02] text-white rounded-full font-semibold"
                  >
                    Sign In
                  </button>
                  <p className="text-center text-gray-500">or</p>
                  <button
                    type="button"
                    className="w-full py-2 border rounded-full font-semibold text-gray-500 hover:bg-gray-100 relative flex items-center justify-center"
                  >
                    <img
                      src="/assets/google.svg"
                      alt="Google icon"
                      className="absolute left-4"
                    />
                    Sign In with Google
                  </button>
                </form>
                <div className="mt-4 text-sm text-center text-gray-600">
                Don’t have an account ?{" "}
                  <a href="#" className="text-[#FA8B02] hover:underline">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

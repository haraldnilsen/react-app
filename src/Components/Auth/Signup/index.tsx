// React imports
import React, { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import supabase from "../../../clients/supabaseClient";
import ReactModal from "react-modal";

const SignUpBox = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [wrongRepeated, setWrongRepeated] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const createUser = async (event: FormEvent) => {
    event.preventDefault();
    if (repeatedPassword === password) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              firstName: firstName,
              lastName: lastName,
            },
            emailRedirectTo: "http://localhost:3000/",
          },
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      setWrongRepeated(true);
    }
  };

  return (
    <>
      <div>
        <ReactModal
          isOpen={emailSent}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
          overlayClassName="Overlay"
          contentLabel="Email Confirmation Modal"
        >
          <div className="relative bg-white rounded-lg text-center p-8 w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              Thank You for Signing Up!
            </h1>
            <p className="text-md text-gray-500 mb-6">
              A confirmation email has been sent to your account.
            </p>
          </div>
        </ReactModal>
        <div className="bg-white h-auto w-96 hover:shadow-2xl rounded-xl mx-auto">
          <form className="flex flex-col p-5">
            <h1 className="text-2xl text-center py-4">Register new user</h1>
            <input
              className="loginInput"
              placeholder="First name ..."
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="loginInput"
              placeholder="Last name ..."
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="loginInput"
              placeholder="Email ..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password ..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className={!wrongRepeated ? "hidden" : "text-red-800 ml-5"}>
              Passwords are not the same
            </p>
            <input
              className="loginInput"
              type="password"
              placeholder="Repeat Password ..."
              onChange={(e) => setRepeatedPassword(e.target.value)}
            />
            <button type="submit" className="loginButton" onClick={createUser}>
              Create user
            </button>
          </form>
          <div className="text-lg text-center pb-6">
            <span className="">Already a user? Log in </span>
            <NavLink className="text-green-900 underline" to="/login">
              here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpBox;

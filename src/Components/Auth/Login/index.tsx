// React imports
import React, { FormEvent, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import supabase from "../../../clients/supabaseClient";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Method for routing to another page
  const history = useHistory();

  const signInUser = async (event: FormEvent) => {
    event.preventDefault();
    try {
      //   await signInWithEmailAndPassword(firebase.auth(), email, password);
      //   await push("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <div className="bg-white h-auto w-96 hover:shadow-2xl rounded-xl mx-auto">
          <div>
            <form className="flex flex-col p-5" onSubmit={signInUser}>
              <h1 className="text-2xl text-center py-4">Log in</h1>
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
              <button type="submit" className="loginButton">
                Log in
              </button>
            </form>
          </div>
          <div className="text-lg text-center pb-6">
            <span className="">Don't have a user? Sign up </span>
            <NavLink
              exact
              to="/signup"
              className="hover:underline"
              activeClassName="underline"
            >
              here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBox;

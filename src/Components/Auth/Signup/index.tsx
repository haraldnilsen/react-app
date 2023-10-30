// React imports
import React, { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";

const SignUpBox = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [wrongRepeated, setWrongRepeated] = useState(false);

  const createUser = async (event: FormEvent) => {
    event.preventDefault();
    if (repeatedPassword === password) {
      try {
        // await createUserWithEmailAndPassword(firebase.auth(), email, password)
        // .then(function() {
        //     return firebase.auth().currentUser?.updateProfile({
        //         displayName: firstName.concat(" ", lastName)
        //     });
        // })
        // .then(function() {
        //     const currentUser = firebase.auth().currentUser?.uid;
        //     setDoc(doc(db as any, "users", currentUser as any), {})
        // })
        // await push("/profile");
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

import React from "react";
import LoginBox from "../../components/Auth/Login";
import SignUpBox from "../../components/Auth/Signup";

const Login: React.FC = () => {
  return (
    <div className="bg-green-900 h-screen">
      <div className="pt-40">
        <SignUpBox />
      </div>
    </div>
  );
};

export default Login;

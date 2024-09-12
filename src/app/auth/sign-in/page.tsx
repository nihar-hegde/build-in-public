import React from "react";
import { Social } from "./social-buttons";

const SignInPage = () => {
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <div className="p-20 rounded-xl bg-neutral-900 flex items-center justify-center">
        <Social />
      </div>
    </div>
  );
};

export default SignInPage;

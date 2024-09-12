"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const handleOnClick = () => {
    signOut();
  };
  return (
    <div className="">
      <Button onClick={handleOnClick}>Log Out</Button>
    </div>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const Social = () => {
  const onClick = (provider: "github") => {
    signIn(provider, {
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div className="">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        Github
      </Button>
    </div>
  );
};

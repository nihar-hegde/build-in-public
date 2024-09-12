import { LogoutButton } from "@/components/shared/LogoutButton";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1>Welcome to your Dashboard, {session?.user?.name}!</h1>
        <p>Your email: {session?.user?.email}</p>
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardPage;

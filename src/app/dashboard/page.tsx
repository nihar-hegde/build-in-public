import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/sign-in");
  }
  console.log(session);
  return (
    <div>
      <h1>Welcome to your Dashboard, {session?.user?.name}!</h1>
      <p>Your email: {session?.user?.email}</p>
      <img src={session?.user?.image} alt="Profile" width={50} height={50} />
    </div>
  );
};

export default DashboardPage;

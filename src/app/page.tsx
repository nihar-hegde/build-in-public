import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Link href={"/auth/sign-in"} className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

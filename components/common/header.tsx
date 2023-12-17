import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./mobileNav";
import NavItems from "./navitems";

function Header() {
  return (
    <header className="w-full border-b">
      <nav className="flex items-center justify-between wrapper">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="App logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
export default Header;

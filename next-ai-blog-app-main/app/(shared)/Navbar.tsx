import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import Ad1 from "/public/assets/ad-1.jpg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">
            <b>Home</b>
          </Link>
          <Link href="/">
            <b>Trending</b>
          </Link>
          <Link href="/">
            <b>About</b>
          </Link>
        </div>
        <div>
          <Link href="/">
            <b>Create &nbsp; &nbsp; &nbsp;</b>
          </Link>
          <Link href="/">
            <b>Sign In</b>
          </Link>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            Blog dedicated to exploring AI, automation, and their impact on
            job generation.
          </p>
        </div>
        <div className="basis-full relative w-auto h-32 bg-wh-500">
          <Image
            fill
            alt="advert-1"
            placeholder="blur"
            src={Ad1}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;

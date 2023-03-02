import React, { useEffect } from "react";
import Link from "next/link";

function LandingComponents({ category }) {
  return (
    <>
      <div className="absolute top-0 left-0 flex flex-col z-20">
        <h1 className="text-white text-4xl mt-10 mb-20 lg:ml-24 md:ml-14 max-[480px]:hidden">
          Logo
        </h1>
        {category.map((elem) => (
          <Link href={`/category/${elem.slug}`} key={elem.name}>
            <p
              key={elem.name}
              className="text-white tracking-widest mb-4 lg:ml-24 md:ml-14 max-[480px]:hidden"
            >
              {elem.name}
            </p>
          </Link>
        ))}
        <Link href="/about">
          <p className="text-white tracking-widest mt-16 mb-2 lg:ml-24 md:ml-14 max-[480px]:hidden">
            ABOUT US
          </p>
        </Link>
        <Link href="/contact-us">
          <p className="text-white tracking-widest mt-4 mb-2 lg:ml-24 md:ml-14 max-[480px]:hidden">
            CONTACT US
          </p>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 flex flex-row z-20 mt-10 mb-20 lg:ml-24 md:ml-14 gap-8">
        <a href="https://facebook.com" className="text-white tracking-widest ">
          FACEBOOK
        </a>
        <a href="https://facebook.com" className="text-white tracking-widest ">
          INSTAGRAM
        </a>
        <a href="https://facebook.com" className="text-white tracking-widest ">
          LINKEDIN
        </a>
      </div>
    </>
  );
}

export default LandingComponents;

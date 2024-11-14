"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Header(): JSX.Element {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const onMenuPress = useCallback(() => {
    setDropdownVisible((val) => !val);
  }, []);

  return (
    <header>
      <div className="flex flex-row justify-between mt-12">
        <Link href="/">Winston Tandi</Link>
        <>
          <button onClick={onMenuPress} type="button">
            <FiMenu
              className={`lg:hidden ${
                isDropdownVisible ? "text-slate" : "text-white"
              }`}
            />
          </button>
          <div className="hidden lg:flex lg:flex-row lg:shrink lg:gap-x-4 font-semibold text-lg">
            <Link href="/work" className="hover:text-pink">
              Work
            </Link>
            <Link href="/" className="hover:text-pink">
              About
            </Link>
          </div>
        </>
      </div>
      <div
        className={`bg-navy flex flex-col w-full top-20 left-0 py-4 px-8 gap-4 lg:hidden ${
          isDropdownVisible ? "block fixed" : "hidden"
        }`}
      >
        <Link href="/work" onClick={onMenuPress}>
          Work
        </Link>
        <Link href="/" onClick={onMenuPress}>
          About
        </Link>
      </div>
    </header>
  );
}

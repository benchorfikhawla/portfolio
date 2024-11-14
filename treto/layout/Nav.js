"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <nav className={toggle ? "mil-active" : ""}>
        <ul>
          <li
            className={
              pathname.includes("index") || pathname == "/" ? "mil-active" : ""
            }
          >
            <Link legacyBehavior href="/">Home</Link>
            <ul>
              <li>
                <Link legacyBehavior href="/">
                  Type 1
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/index-2">
                  Type 2
                </Link>
              </li>
            </ul>
          </li>
          <li className={pathname == "/portfolio" ? "mil-active" : ""}>
            <Link legacyBehavior href="/portfolio">
              Portfolio
            </Link>
          </li>
           
          <li className={pathname == "/contact" ? "mil-active" : ""}>
            <Link legacyBehavior href="/contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <span />
      </div>
    </Fragment>
  );
};
export default Nav;

/* eslint-disable react/prop-types */
// @ts-nocheck
import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Layout({ navItems }) {
  return (
    <>
      <header>
        <h1>
          <a href="/">ui docs</a>
        </h1>
      </header>

      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

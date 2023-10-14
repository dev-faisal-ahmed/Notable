import React from 'react';
import { Navbar } from './_components/navbar';

type LandingLayoutProp = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: LandingLayoutProp) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}

import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Link } from 'gatsby';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav className="absolute top-0 z-40 w-full mt-5 pr-10 space-x-5 text-white text-opacity-85 flex justify-between">
        <p className="pl-10 text-xl">Pontus Abrahamsson</p>
        <div className="flex flex-col space-y-3 text-xl md:space-y-0 md:flex-row md:space-x-5 ">
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="">Projects</Link>
          <Link to="">Resume</Link>
          <Link to="">Contact</Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

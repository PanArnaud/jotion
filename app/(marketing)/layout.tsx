import React from "react";
import Navbar from "./_components/navbar";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-100 pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;

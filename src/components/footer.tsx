// import Link from "next/link";
import React from "react";
import { LandingFooter } from "../types/footer";

const Footer = ({ items }: { items: LandingFooter[] }) => {
  return (
    <footer className="h-[10%] p-2 lg:p-8 flex space-x-3 lg:space-x-5">
      {items &&
        items.map((item, index) => (
          <a key={index} href={item.route} className="subHeading-2">
            {item.label}
          </a>
        ))}
    </footer>
  );
};

export default React.memo(Footer);

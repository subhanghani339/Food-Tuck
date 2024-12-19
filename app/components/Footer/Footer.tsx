import React from "react";
import PostFooter from "./PostFooter";
import MainFooter from "./MainFooter";
import PreFooter from "./PreFooter";

interface FooterProps {
  classes?: string
}

const Footer: React.FC<FooterProps> = ({ classes= 'bg-transparent' }) => {
  return (
    <div className={classes}>
      <PreFooter />
      <MainFooter />
      <PostFooter />
    </div>
  );
};

export default Footer;

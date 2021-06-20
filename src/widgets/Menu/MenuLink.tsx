import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href ,target: isHttpLink ? "_blank" : "", rel: "noopener noreferrer" } : { to: href };
  return <Tag {...props} {...otherProps} style={{ fontFamily: "Orbitron"}}/>;
};

export default MenuLink;

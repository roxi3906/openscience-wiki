import React from 'react';
import Logo from '@theme/Logo';

const NavbarLogo = () => {
  return (
    <Logo
      // The pathname escape keeps cross-locale root navigation as a regular anchor.
      to={undefined}
      href="pathname:///"
      target="_self"
      autoAddBaseUrl={false}
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
    />
  );
};

export default NavbarLogo;

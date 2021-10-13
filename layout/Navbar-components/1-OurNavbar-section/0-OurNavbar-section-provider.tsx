import { OurNavbarCatalog } from "./1-OurNavbar-catalog";
import React from "react";
interface AppProps {
  navbarStrings: any;
}
export const OurNavbarSectionProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
}) => {
  return (
    <>
      <OurNavbarCatalog navbarStrings={navbarStrings[0]} />
    </>
  );
};

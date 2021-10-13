import { ReactNode } from "react";

// ----------------------------------------------------

import { OurFooterProvider, OurNavbarProvider } from "./";
import { DataService } from "../service/data.service";
import Head from "next/head";
import { GetStaticProps } from "next";

// ------------------------------ ---------------------- --------

interface AppProps {
  children?: ReactNode;
  titleName?: any;
  navbarStrings?: any;
  OurFooter: any;
}

// ----------------------------------------------------

export const Layout: React.FunctionComponent<AppProps> = ({
  children,
  titleName,
  navbarStrings,

  OurFooter,
}) => {
  return (
    <>
      <Head>
        <title>{titleName}</title>
      </Head>
      <OurNavbarProvider navbarStrings={navbarStrings} />
      {children}
      <OurFooterProvider OurFooter={OurFooter} />
    </>
  );
};

// ------------------------------ ---------------------- --------

// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  // for make sure data is available
  await DataService.getCatalogData();
  return {
    props: {},
  };
};

export default Layout;

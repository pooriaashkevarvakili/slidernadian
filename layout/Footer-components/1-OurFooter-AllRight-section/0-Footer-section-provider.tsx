import { FooterSectionCatalog } from "./1-OurFooter-AllRight-catalog";

// ------------------------------ - --------------------- --------

interface AppProps {
  OurFooter: any;
}

// ------------------------------ - --------------------- --------

export const OurFooterAllRightSectionProvider: React.FunctionComponent<AppProps> = ({
  OurFooter,
}) => (
  <>
    <FooterSectionCatalog OurFooter={OurFooter[0]} />
  </>
);

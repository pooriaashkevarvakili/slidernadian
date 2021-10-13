import { HomeSectionSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  homeSection: any;
}
// ----------------------------------------------------
export const HomeSectionProvider: React.FunctionComponent<AppProps> = ({
  homeSection,
}) => (
  <>
    <HomeSectionSectionProvider homeSection={homeSection} />
  </>
);

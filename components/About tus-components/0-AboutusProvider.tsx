import { AboutusAboutusSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  AboutusAboutusSection: any;
}
// ----------------------------------------------------
export const AboutusProvider: React.FunctionComponent<AppProps> = ({
  AboutusAboutusSection,
}) => (
  <>
    <AboutusAboutusSectionProvider
      AboutusAboutusSection={AboutusAboutusSection}
    />
  </>
);

import { CotanctContactSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  ConnectSection: any;
}
// ----------------------------------------------------
export const ConnectProvider: React.FunctionComponent<AppProps> = ({
  ConnectSection,
}) => (
  <>
    <CotanctContactSectionProvider ConnectSection={ConnectSection} />
  </>
);

import { OurTeamSectionSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  OurTeam: any;
}
// ----------------------------------------------------
export const OurTeamProvider: React.FunctionComponent<AppProps> = ({
  OurTeam,
}) => (
  <>
    <OurTeamSectionSectionProvider OurTeam={OurTeam} />
  </>
);

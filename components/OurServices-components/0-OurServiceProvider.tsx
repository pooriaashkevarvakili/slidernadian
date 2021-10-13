import { OurServicesOurServicesSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  OurService: any;
}
// ----------------------------------------------------
export const OurServiceProvider: React.FunctionComponent<AppProps> = ({
  OurService,
}) => (
  <>
    <OurServicesOurServicesSectionProvider OurService={OurService} />
  </>
);

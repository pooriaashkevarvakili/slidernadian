import { OurPricingOurpricingSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  ourPricingProvider: any;
}
// ----------------------------------------------------
export const OurPricingProvider: React.FunctionComponent<AppProps> = ({
  ourPricingProvider,
}) => (
  <>
    <OurPricingOurpricingSectionProvider
      ourPricingProvider={ourPricingProvider}
    />
  </>
);

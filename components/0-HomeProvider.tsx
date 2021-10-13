import {
  HomeSectionProvider,
  AboutusProvider,
  OurServiceProvider,
  TestimonialsProvider,
  OurTeamProvider,
  OurPricingProvider,
  ConnectProvider,
  GallerySectionProvider,
} from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
export const HomeProvider: React.FunctionComponent<AppProps> = (props) => {
  const {
    homeSection,

    AboutusAboutusSection,
    OurService,
    Testimonials,
    OurTeam,
    ourPricingProvider,
    ConnectSection,
    GallerySection,
  } = props.apiProps;

  // ------------------------------ ---------------------- -------
  // for every provider check if it recived props or not
  // these way allows us eliminate catalog from panel

  return (
    <>
      {homeSection && <HomeSectionProvider homeSection={homeSection} />}
      {AboutusAboutusSection && (
        <AboutusProvider AboutusAboutusSection={AboutusAboutusSection} />
      )}
      {OurService && <OurServiceProvider OurService={OurService} />}
      {Testimonials && <TestimonialsProvider Testimonials={Testimonials} />}
      {OurTeam && <OurTeamProvider OurTeam={OurTeam} />}
      {ourPricingProvider && (
        <OurPricingProvider ourPricingProvider={ourPricingProvider} />
      )}
      {ConnectSection && <ConnectProvider ConnectSection={ConnectSection} />}
      {GallerySection && (
        <GallerySectionProvider GallerySection={GallerySection} />
      )}
    </>
  );
};

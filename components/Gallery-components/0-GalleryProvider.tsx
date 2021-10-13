import { GallerySectionSectionProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  GallerySection: any;
}
// ----------------------------------------------------
export const GallerySectionProvider: React.FunctionComponent<AppProps> = ({
  GallerySection,
}) => (
  <>
    <GallerySectionSectionProvider GallerySection={GallerySection} />
  </>
);

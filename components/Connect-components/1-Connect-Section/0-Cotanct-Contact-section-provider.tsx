import { ContactContactCatalogHeader } from "./1-Cotanct-Cotanct-catalog-header";
import { ContactContactCatalogForm } from "./2-Cotanct-Cotanct-catalog-form";

import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
interface AppProps {
  ConnectSection: any;
}
export const CotanctContactSectionProvider: React.FunctionComponent<AppProps> = ({
  ConnectSection: { contactContactCatalogHeader, contactContactCatalogForm },
}) => {
  // ------------------------------

  // ------------------------------
  return (
    <section id="contact" className="container our-pricing">
      <ContactContactCatalogHeader
        contactContactCatalogHeader={contactContactCatalogHeader[0]}
      />
      <ContactContactCatalogForm
        contactContactCatalogForm={contactContactCatalogForm[0]}
      />
    </section>
  );
};

import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  contactContactCatalogHeader: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const ContactContactCatalogHeader: React.FunctionComponent<AppProps> = ({
  contactContactCatalogHeader,
}) => {
  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const headerSize = {
    fontSize: 20,

    fontFamily: "IRANSansWeb",

    color: "#fff",
  };
  return (
    <div style={header}>
      <h1 style={headerSize}>{contactContactCatalogHeader.FirstHeader}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      catalogData: await DataService.filterCatalogDataBySectionField(""),
    },
  };
};

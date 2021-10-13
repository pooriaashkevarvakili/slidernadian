import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";

// ------------------------------ ---------------------- --------

interface PassingProps {
  galleryCatalogHeader: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const GalleryCatalogHeader: React.FunctionComponent<AppProps> = ({
  galleryCatalogHeader,
}) => {
  const { ContentAttachment, FirstHeader } = galleryCatalogHeader;
  return (
    <>
      <h2 className="heading-title">{FirstHeader}</h2>;
      <style jsx>{`
        .heading-title:before {
          background: url(${
            ContentAttachment[0] + "?width=145&height=14"
          }) no-repeat scroll center center;        
      `}</style>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

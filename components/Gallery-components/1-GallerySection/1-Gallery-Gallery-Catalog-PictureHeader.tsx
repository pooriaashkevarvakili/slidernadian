import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";

// ------------------------------ ---------------------- --------

interface PassingProps {
  galleryCatalogPicture1: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const GalleryCatalogPicture1: React.FunctionComponent<AppProps> = ({
  galleryCatalogPicture1,
}) => {
  return (
    <>
      <div className="g2-ic">
        <img src={galleryCatalogPicture1.ContentAttachment[1]} alt="" />
      </div>
      <div className="g3-ic">
        <img src={galleryCatalogPicture1.ContentAttachment[0]} alt="" />
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

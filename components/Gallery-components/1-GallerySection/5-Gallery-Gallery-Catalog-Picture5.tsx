import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";

// ------------------------------ ---------------------- --------

interface PassingProps {
  galleryCatalogPicture5: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const GalleryCatalogPicture5: React.FunctionComponent<AppProps> = ({
  galleryCatalogPicture5,
}) => {
  const { ContentAttachment } = galleryCatalogPicture5;

  return (
    <div id="tab-3" className="tab-content">
    <div className="tab-col">
         <div className="gallery-img">
              <a className="fancybox" data-fancybox-group="gallery1" href="images/gallery-img2.png" title=""><img src="images/gallery-img2.png" alt=""/></a>
         </div>
         <div className="gallery-img">
              <a className="fancybox" data-fancybox-group="gallery1" href="images/gallery-img6.png" title=""><img src="images/gallery-img6.png" alt=""/></a>
         </div>
    </div>
    <div className="tab-col">
         <div className="gallery-img">
              <a className="fancybox" data-fancybox-group="gallery1" href="images/gallery-img3.png" title=""><img src="images/gallery-img3.png" alt=""/></a>
         </div>
         <div className="gallery-img">
              <a className="fancybox" data-fancybox-group="gallery1" href="images/gallery-img4.png" title=""><img src="images/gallery-img4.png" alt=""/></a>
         </div>
    </div>
    <div className="tab-col">
         <div className="gallery-img">
              <a className="fancybox" data-fancybox-group="gallery1" href="images/gallery-img5.png" title=""><img src="images/gallery-img5.png" alt=""/></a>
         </div>
         <div className="gallery-img">
              <a className="fancybox" data-fancybox-group="gallery1" href="images/gallery-img6.png" title=""><img src="images/gallery-img6.png" alt=""/></a>
         </div>
    </div>
</div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

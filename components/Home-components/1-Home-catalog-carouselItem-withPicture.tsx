import { GetStaticProps } from "next";
import { OneCatalogData } from "../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  homeCatalogCarouselItemWithPicture: OneCatalogData;
}

type AppProps = PassingProps;
// & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const HomeCatalogCarouselItemWithPicture: React.FunctionComponent<AppProps> = ({
  homeCatalogCarouselItemWithPicture,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    SectionTag,
  } = homeCatalogCarouselItemWithPicture;
  return (
    <div
      className={`carousel-item ${SectionTag.includes("1") ? "active" : ""}`}
    >
      <div className="yscott-content-home">
        <div className="yscott-view-on-mobile">
          <h1>{FirstHeader}</h1>
          <p className="yscott-p-subtitle">{SecondHeader}</p>
        </div>
        <img
          className="img yscott-img-home yscott-img-home-left"
          data-aos="fade-right"
          src={ContentAttachment[0]}
          alt=""
        />
        <div
          className="yscott-content-text yscott-content-text-right data-aos-zindex"
          data-aos="fade-left"
        >
          <div className="yscott-content-absolute yscott-content-absolute-right">
            <div className="yscott-not-view-on-mobile">
              <h1>{FirstHeader}</h1>
              <p className="yscott-p-subtitle">{SecondHeader}</p>
            </div>
            <p className="text yscott-text-home">{ShortDescription}</p>
          </div>
          <div className="yscott-color-button">
            <div className="yscott-button-link">
              <a
                href="about.html"
                dangerouslySetInnerHTML={{ __html: LongDescription }}
              ></a>
              <span className="yscott-button-block yscott-button-block-grey animation-bounce"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  // let loadit = await DataService.getCatalogData();
  // let catalogData = await DataService.filterCatalogDataBySectionField(
  //   "Home-catalog-header"
  // );
  return {
    props: {
      catalogData: {},
    },
  };
};

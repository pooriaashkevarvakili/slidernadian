import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import Carousel from 'nuka-carousel';
import {BsFillSkipStartFill,BsFillSkipEndFill}from "react-icons/bs"
import {HomeCatalogCarouselItemWithPicture2} from "./2-Home-catalog-carouselItem-withPicture2"
import { HomeCatalogCarouselItemWithPicture3 } from "./3-Home-catalog-carouselItem-withPicture3"
import{HomeCatalogCarouselItemWithPicture4}from "./4-Home-catalog-carouselItem-withPicture4"
import React from "react";

// ------------------------------ ---------------------- --------

interface PassingProps {
  homeCatalogCarouselItemWithPicture: OneCatalogData;
  homeCatalogCarouselItemWithPicture4: OneCatalogData;
  homeCatalogCarouselItemWithPicture3: OneCatalogData;
  homeCatalogCarouselItemWithPicture2: OneCatalogData;
}

type AppProps = PassingProps;
export const HomeCatalogCarouselItemWithPicture: React.FunctionComponent<AppProps> = ({
  homeCatalogCarouselItemWithPicture, homeCatalogCarouselItemWithPicture2,
  homeCatalogCarouselItemWithPicture3,homeCatalogCarouselItemWithPicture4
}) => {
  
  return (
    <div style={{marginTop:-480}}>
    <Carousel
        renderTopCenterControls={({ currentSlide }) => (
            <div></div>
        )}
        renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>
            <BsFillSkipStartFill
              style={{cursor:"pointer"}}
                    color={"black"} 
             
                    size={23}
                />
            </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>
                <BsFillSkipEndFill color={"black"}
                    size={23} style={{cursor:"pointer"}}
                                   />
            </button>
        )}
    >
        <HomeCatalogCarouselItemWithPicture2
        homeCatalogCarouselItemWithPicture2={homeCatalogCarouselItemWithPicture2}
        />
        <HomeCatalogCarouselItemWithPicture3
        homeCatalogCarouselItemWithPicture3={homeCatalogCarouselItemWithPicture3}
        />
        <HomeCatalogCarouselItemWithPicture4
        homeCatalogCarouselItemWithPicture4={homeCatalogCarouselItemWithPicture4}
        />
        
      </Carousel>
      </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

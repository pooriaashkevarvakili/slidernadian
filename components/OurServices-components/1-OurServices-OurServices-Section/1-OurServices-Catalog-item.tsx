import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import Slider from "react-slick";
import {OurservicesCatalogItemHeader}from "./1-OurServices-catalog-Header"
import { OurServicesCatalogItem2 } from "./2-OurServices-catalog-item2"
import { OurServicesCatalogItem3 } from "./3-OurServices-catalog-item3"
import{OurServicesCatalogItem5}from "./5-OurServices-catalog-item5"
import { OurServicesCatalogItem4 } from "./4-OurServices-catalog-item4"
import { OurServicesCatalogItem6 } from "./6-OurServices-catalog-item6"
import{OurServicesCatalogItem7}from "./7-OurServices-catalog-item7"
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourservicesCatalogItem7: OneCatalogData;
  ourServicesCatalogItem6: OneCatalogData;
  ourServicesCatalogItem5: OneCatalogData;
  ourservicesCatalogItem4: OneCatalogData;
  ourservicesCatalogItem9: OneCatalogData;
  ourservicesCatalogItem2: OneCatalogData;
  ourservicesCatalogItem3: OneCatalogData;
  
  ourservicesCatalogItemHeader: OneCatalogData;
}

type AppProps = PassingProps;
export const OurServicesCatalogItem: React.FunctionComponent<AppProps> = ({
  ourservicesCatalogItem9, ourservicesCatalogItemHeader,
  ourservicesCatalogItem2, ourservicesCatalogItem3, ourservicesCatalogItem4,
  ourServicesCatalogItem5, ourServicesCatalogItem6,
  ourservicesCatalogItem7
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }; 

  

  return (
    <div className="row"> 
      <OurservicesCatalogItemHeader
      ourservicesCatalogItemHeader={ourservicesCatalogItemHeader}
      />
    <div>
        
        <Slider {...settings}>
          <div style={{marginTop:-20}}>
            <OurServicesCatalogItem2
            ourservicesCatalogItem2={ourservicesCatalogItem2}
            />
            <OurServicesCatalogItem3
          ourservicesCatalogItem3={ourservicesCatalogItem3}
            />
            <OurServicesCatalogItem4
            ourservicesCatalogItem4={ourservicesCatalogItem4}
            />
          </div>
          <div>
            <OurServicesCatalogItem5
            ourservicesCatalogItem5={ourServicesCatalogItem5}
            />
            <OurServicesCatalogItem6
            ourservicesCatalogItem6={ourServicesCatalogItem6}
            />
            <OurServicesCatalogItem7
            ourservicesCatalogItem7={ourservicesCatalogItem7}
            />
          </div>
     
        </Slider>
      </div>
      
      <style jsx>{`
      .heading-title:before {
  background: url("../images/heading-ic.png") no-repeat scroll center center;
      }       
      `}</style>
 </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

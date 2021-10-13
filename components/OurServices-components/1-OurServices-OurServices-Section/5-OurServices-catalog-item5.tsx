import { OneCatalogData } from "../../../types/OneCatalogData";
import { GetStaticProps } from "next";

// ------------------------------ ---------------------- --------

interface PassingProps {
  ourservicesCatalogItem5: OneCatalogData;
}

type AppProps = PassingProps;
export const OurServicesCatalogItem5: React.FunctionComponent<AppProps> = ({
  ourservicesCatalogItem5,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
  } = ourservicesCatalogItem5;

  return (
    <div className="service-block service-middle">
    <div className="service-block-inner service-4-hover">
        <div className="service-block-image">
             <div className="service-wrap-img">
                 <img src="images/service-img.jpg" alt=""/>
             </div>
             <div className="service-block-image-wrap">
                 <div className="service-ic">
                      <img src={ContentAttachment[0]+"?width=82&height=90"} alt=""/>
                 </div>
            <h6
              
              style={{
                fontFamily: "IRANSansWeb",
              }}
            >{FirstHeader}</h6>
                 <p
                    style={{
                      fontFamily: "IRANSansWeb",
                    }}
           className="titleOne" >{ShortDescription}
                  </p>
            <a style={{marginTop:-30,   
                  fontFamily: "IRANSansWeb",
            }} href="#" title="read more" className="read-more-btn">{SecondHeader}</a>
               </div>
          </div>
      </div>
      <style jsx>{`
             @media screen and (max-width:1000px){
               .titleOne{
          font-size:.4rem;
               }
               .read-more-btn{
               position:relative;
               top:-10px;
               }
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

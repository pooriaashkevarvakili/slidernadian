import { DataService } from "./../../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "./../../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  countersCatalogItem3: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;
export const CountersCatalogItem4: React.FunctionComponent<AppProps> = ({
  countersCatalogItem3,
}) => {
 
  const { ContentAttachment, FirstHeader, SecondHeader } = countersCatalogItem3;
  return (
    <div className="counter-box">
                                 <div className="counter-img">
                                      <img src={ContentAttachment[0]+"?width=53&height=53"} alt=""/>
                                 </div>
                                 <div className="counter-text">
        <h5
             style={{
              fontFamily: "IRANSansWeb",
            }}
          className="count">{SecondHeader}</h5>  
        <p
           style={{
            fontFamily: "IRANSansWeb",
          }}
        >{FirstHeader}</p>
                                 </div>
                            </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

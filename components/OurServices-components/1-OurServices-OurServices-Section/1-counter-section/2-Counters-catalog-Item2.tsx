import { DataService } from "./../../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "./../../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  countersCatalogItem: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

export const CountersCatalogItem2: React.FunctionComponent<AppProps> = ({
  countersCatalogItem,
}) => {

  const { ContentAttachment, SecondHeader, FirstHeader } = countersCatalogItem;
  return (
    <div className="counter-box">
    <div className="counter-img">
         <img src={ContentAttachment[0]+"?width=50&height=58"} alt=""/>
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

import { DataService } from "./../../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "./../../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  countersCatalogItem2: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;
export const CountersCatalogItem3: React.FunctionComponent<AppProps> = ({
  countersCatalogItem2,
}) => {

  const { ContentAttachment, FirstHeader, SecondHeader } = countersCatalogItem2;
  return (
    <div className="counter-box">
    <div className="counter-img">
         <img src={ContentAttachment[0]+"?width=45&height=56"} alt=""/>
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

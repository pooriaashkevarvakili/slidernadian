import { DataService } from "./../../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "./../../../../types/OneCatalogData";
import { CountersCatalogItem2 } from "./2-Counters-catalog-Item2";
import { CountersCatalogItem3 } from "./3-Counters-catalog-Item3";
import { CountersCatalogItem4 } from "./4-Counters-catalog-Item4";
import { CountersCatalogItem5 } from "./5-Counters-catalog-Item5";
// ------------------------------ ---------------------- --------

interface PassingProps {
  countersCatalogItem: OneCatalogData;
  countersCatalogItem2: OneCatalogData;
  countersCatalogItem3: OneCatalogData;
  countersCatalogItem4: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------
export const CountersCatalogItem: React.FunctionComponent<AppProps> = ({
  countersCatalogItem,
  countersCatalogItem2,
  countersCatalogItem3,
  countersCatalogItem4,
}) => {
  return (
    <section className="container counter-banner">
         <div className="row">
              <div className="table">
                   <div className="table-cell">
                       <div className="counter-wrapper">
                         <CountersCatalogItem2
                         
                         countersCatalogItem={countersCatalogItem}
              />
              <CountersCatalogItem3
              countersCatalogItem2={countersCatalogItem2}
              />
              <CountersCatalogItem4
              countersCatalogItem3={countersCatalogItem3}
              />
              <CountersCatalogItem5
              countersCatalogItem4={countersCatalogItem4}
              />
                        </div>
                   </div>
              </div>
         </div>
</section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

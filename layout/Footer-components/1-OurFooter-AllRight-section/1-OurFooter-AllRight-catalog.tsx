import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  OurFooter: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const FooterSectionCatalog: React.FunctionComponent<AppProps> = ({
  OurFooter,
}) => {
  return (
    <section className="container footer">
      <div className="row">
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#" title="Home">
                {OurFooter.FirstHeader}
              </a>
            </li>
            <li>
              <a href="#" title="Abou tus">
                {OurFooter.SecondHeader}
              </a>
            </li>
            <li>
              <a href="#" title="Services">
                {OurFooter.ShortDescription}
              </a>
            </li>
            <li>
              <a href="#" title="Testimonials">
                {OurFooter.LongDescription}
              </a>
            </li>
            <li>
              <a href="#" title="Our Team">
                {OurFooter.ChildFirstHeader}
              </a>
            </li>
            <li>
              <a href="#" title="Pricing">
                {OurFooter.ChildSecondHeader}
              </a>
            </li>
            <li>
              <a href="#" title="Appointment">
                {OurFooter.ChildShortDescription}
              </a>
            </li>
            <li>
              <a href="#" title="Our Gallery">
                {OurFooter.ChildLongDescription}
              </a>
            </li>
          </ul>
        </div>
        <div className="subscribe-us clearfix">
          <div className="social-ic">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="icofont icofont-social-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="icofont icofont-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Google plus">
                  <i className="icofont icofont-social-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Pintrest">
                  <i className="icofont icofont-social-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#" title="youtube">
                  <i className="icofont icofont-social-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">&copy; 2017 Made by </p>
        </div>
      </div>
      <a href="#top" className="scroll-top">
        go top
      </a>
    </section>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

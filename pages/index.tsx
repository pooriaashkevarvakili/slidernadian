import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { HomeProvider } from "../components/0-HomeProvider";
import { DataService } from "../service/data.service";
import { OneSEOTagData } from "../types/OneSEOTagData";
import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import { PageNames } from "../constants/PageNames.enum";
import { OneCatalogData } from "../types/OneCatalogData";

// ---------------------------------------------------------------------

// export const config = { amp: true };
// ------------------------------ ---------------------- --------

interface PassingProps {}

type AppProps = NextPage &
  PassingProps &
  InferGetStaticPropsType<typeof getStaticProps>;

// ---------------------------------------------------------------------
const Index: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    homePage: { Name, Description, Keywords, PageTitle },
  },
  OurFooter,
  navbarStrings: { navbarStrings },
  data,
}) => {
  return (
    <>
      <Head>
        <head>
          <meta name="text" content={Name} />
          <meta name="description" content={Description} />
          <meta name="keywords" content={Keywords} />
        </head>
      </Head>
      <Layout
        OurFooter={OurFooter}
        navbarStrings={navbarStrings}
        titleName={PageTitle}
      >
        <HomeProvider apiProps={data} />
        <script type="text/javascript" src="js/jquery1.12.4.min.js"></script>
        <script type="text/javascript" src="js/jquery.fancybox.js"></script>
        <script
          type="text/javascript"
          src="js/smoothslides-2.2.1.min.js"
        ></script>
        <script type="text/javascript" src="js/slick.min.js"></script>
        <script type="text/javascript" src="js/custom.js"></script>
      </Layout>
    </>
  );
};

export default Index;

// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  // for make sure data is available
  await DataService.getCatalogData();
  return {
    props: {
      navbarStrings: {
        navbarStrings: await DataService.filterCatalogDataBySectionField(
          "1-Navbar-Menu-section-catalog"
        ),
      },
      OurFooter: {
        OurFooter: await DataService.filterCatalogDataBySectionField(
          "1-OurFooter-AllRight-catalog"
        ),
      },
      tagsAndSeo: {
        homePage: await DataService.getCurrentPageForCatchSEOTags("home"),
      },
      data: {
        homeSection: {
          homeCatalogCarouselItemWithPicture2: await DataService.filterCatalogDataBySectionField(
            "2-Home-catalog-carouselItem-withPicture"
          ),
          homeCatalogCarouselItemWithPicture3: await DataService.filterCatalogDataBySectionField(
            "3-Home-catalog-carouselItem-withPicture"
          ),
          homeCatalogCarouselItemWithPicture4: await DataService.filterCatalogDataBySectionField(
            "4-Home-catalog-carouselItem-withPicture"
          ),
        },
        AboutusAboutusSection: {
          aboutusCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Aboutus-Aboutus-Catalog-Header"
          ),
          aboutusCatalogWithPicture: await DataService.filterCatalogDataBySectionField(
            "1-Aboutus-Aboutus-Catalog-withPicture"
          ),
        },
        OurService: {
          ourservicesCatalogItemHeader: await DataService.filterCatalogDataBySectionField(
            "1-OurServices-catalog-Header"
          ),
          ourservicesCatalogItem2: await DataService.filterCatalogDataBySectionField(
            "1-OurServices-catalog-item"
          ),
          ourservicesCatalogItem3: await DataService.filterCatalogDataBySectionField(
            "2-OurServices-catalog-item"
          ),
          ourservicesCatalogItem4: await DataService.filterCatalogDataBySectionField(
            "3-OurServices-catalog-item"
          ),
          ourservicesCatalogItem5: await DataService.filterCatalogDataBySectionField(
            "4-OurServices-catalog-item"
          ),
          ourservicesCatalogItem6: await DataService.filterCatalogDataBySectionField(
            "5-OurServices-catalog-item"
          ),
          ourservicesCatalogItem7: await DataService.filterCatalogDataBySectionField(
            "6-OurServices-catalog-item"
          ),
          ourservicesCatalogItem8: await DataService.filterCatalogDataBySectionField(
            "6-OurServices-catalog-item"
          ),

          countersCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Counters-catalog-Item"
          ),
          countersCatalogItem2: await DataService.filterCatalogDataBySectionField(
            "2-Counters-catalog-Item"
          ),
          countersCatalogItem3: await DataService.filterCatalogDataBySectionField(
            "3-Counters-catalog-Item"
          ),
          countersCatalogItem4: await DataService.filterCatalogDataBySectionField(
            "4-Counters-catalog-Item"
          ),
        },
        Testimonials: {
          testimonialswithPicture: await DataService.filterCatalogDataBySectionField(
            "1-Testimonials-catalog-withPicture"
          ),
        },
        OurTeam: {
          ourTeamCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-OurTeam-Catalog-Header"
          ),
          ourTeamCatalogWithPicture1: await DataService.filterCatalogDataBySectionField(
            "1-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture2: await DataService.filterCatalogDataBySectionField(
            "2-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture3: await DataService.filterCatalogDataBySectionField(
            "3-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture4: await DataService.filterCatalogDataBySectionField(
            "4-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture5: await DataService.filterCatalogDataBySectionField(
            "5-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture6: await DataService.filterCatalogDataBySectionField(
            "6-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture7: await DataService.filterCatalogDataBySectionField(
            "7-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture8: await DataService.filterCatalogDataBySectionField(
            "8-OurTeam-Catalog-withPicture"
          ),
          ourTeamCatalogWithPicture9: await DataService.filterCatalogDataBySectionField(
            "9-OurTeam-Catalog-withPicture"
          ),
        },
        ourPricingProvider: {
          ourPricingCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-ourPricing-Catalog-Header"
          ),
          ourPricingCatalogItem1: await DataService.filterCatalogDataBySectionField(
            "2-ourPricing-Catalog-Item"
          ),

          ourPricingCatalogItem2: await DataService.filterCatalogDataBySectionField(
            "7-ourPricing-Catalog-Item"
          ),
          ourPricingCatalogItem3: await DataService.filterCatalogDataBySectionField(
            "3-ourPricing-Catalog-Item"
          ),
          ourPricingCatalogItem4: await DataService.filterCatalogDataBySectionField(
            "4-ourPricing-Catalog-Item"
          ),
          ourPricingCatalogItem5: await DataService.filterCatalogDataBySectionField(
            "5-ourPricing-Catalog-Item"
          ),
          ourPricingCatalogItem6: await DataService.filterCatalogDataBySectionField(
            "6-ourPricing-Catalog-Item"
          ),
          ourPricingCatalogItemDiscount1: await DataService.filterCatalogDataBySectionField(
            "1-ourPricing-catalog-item-Discount"
          ),
          ourPricingCatalogItemDiscount2: await DataService.filterCatalogDataBySectionField(
            "2-ourPricing-catalog-item-Discount"
          ),
          ourPricingCatalogItemDiscount3: await DataService.filterCatalogDataBySectionField(
            "3-ourPricing-catalog-item-Discount"
          ),
          ourPricingCatalogItemDiscount4: await DataService.filterCatalogDataBySectionField(
            "4-ourPricing-catalog-item-Discount"
          ),
          ourPricingCatalogItemDiscount5: await DataService.filterCatalogDataBySectionField(
            "5-ourPricing-catalog-item-Discount"
          ),
          ourPricingCatalogItemDiscount6: await DataService.filterCatalogDataBySectionField(
            "6-ourPricing-catalog-item-Discount"
          ),
        },
        ConnectSection: {
          contactContactCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Cotanct-Cotanct-catalog-header"
          ),
          contactContactCatalogForm: await DataService.filterCatalogDataBySectionField(
            "1-Cotanct-Cotanct-catalog-form"
          ),
        },
        GallerySection: {
          galleryCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Gallery-Catalog-Header"
          ),
          galleryCatalogPicture1: await DataService.filterCatalogDataBySectionField(
            "1-Gallery-Catalog-PictureHeader"
          ),
          galleryCatalogPicture2: await DataService.filterCatalogDataBySectionField(
            "2-Gallery-Catalog-PictureHeader"
          ),
          galleryCatalogPicture3: await DataService.filterCatalogDataBySectionField(
            "3-Gallery-Catalog-Picture"
          ),
          galleryCatalogPicture4: await DataService.filterCatalogDataBySectionField(
            "4-Gallery-Catalog-Picture"
          ),
          galleryCatalogPicture5: await DataService.filterCatalogDataBySectionField(
            "5-Gallery-Catalog-Picture"
          ),
        },
      },
    },
  };
};

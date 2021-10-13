import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link
              rel="shortcut icon"
              href="images/favicon.ico"
              type="image/x-icon"
            />
            <link rel="stylesheet" href="css/style3"/>

            <link
              rel="stylesheet"
              href="css/smoothslides.theme.css"
              type="text/css"
            />
            <link rel="stylesheet" href="css/slick.css" type="text/css" />
            <link
              rel="stylesheet"
              href="css/jquery.fancybox.css"
              type="text/css"
            />
            <link rel="stylesheet" href="css/styles.css" type="text/css" />
            <link rel="stylesheet" href="css/icofont.css" type="text/css" />
            <link
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
              rel="stylesheet"
            />
            <link rel="stylesheet" href="css/style2.css" />
          </head>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="js/jquery1.12.4.min.js"></script>
          <script type="text/javascript" src="js/jquery.fancybox.js"></script>
          <script
            type="text/javascript"
            src="js/smoothslides-2.2.1.min.js"
          ></script>
          <script type="text/javascript" src="js/slick.min.js"></script>

          <script type="text/javascript" src="js/jquery.min.js"></script>
          <script type="text/javascript" src="js/bootstrap.min.js"></script>
          {/* <script type="text/javascript" src="js/bootstrap-select.js"></script> */}
        </body>
      </Html>
    );
  }
}

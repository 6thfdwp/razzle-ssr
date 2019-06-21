import React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';

export default class SiteDocument extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const page = await renderPage();
    return { assets, data, ...page };
  }

  render() {
    const { helmet, assets, data } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>Welcome Home Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()} */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.css"
            crossOrigin="anonymous"
          />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            crossorigin="anonymous"
          />
          {assets.client.css && <link rel="stylesheet" href={assets.client.css} />}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          {/* <script src={assets.manifest.js} defer crossorigin /> */}
          <script type="text/javascript" src={assets.vendor.js} defer crossOrigin="anonymous" />
          <script type="text/javascript" src={assets.client.js} defer crossOrigin="anonymous" />
        </body>
      </html>
    );
  }
}

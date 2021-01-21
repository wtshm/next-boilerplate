import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { siteDescription, siteTitle, siteUrl } from 'shared/consts';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content={siteDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:image" content={`${siteUrl}/og_image.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

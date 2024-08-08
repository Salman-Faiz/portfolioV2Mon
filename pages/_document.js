import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
 render() {
  return (
   <Html lang="en">
    <Head>

     <link rel="icon" href="/favicon.png" />
     {/* Add other global meta tags here */}
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

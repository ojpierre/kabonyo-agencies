import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kabonyo Agencies - Comprehensive Accounting Solutions"
        />
        <meta
          name="keywords"
          content="Accounting, Tax Returns, Bookkeeping, Financial Advice, Payroll Services"
        />
        <meta name="author" content="Kabonyo Agencies" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

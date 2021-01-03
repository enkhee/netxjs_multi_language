import React, { useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import getInitialLocale from "../static-translations/getInitialLocale";

export default function Index() {
  const { asPath } = useRouter();

  useEffect(() => {
    Router.push(`/${getInitialLocale()}${asPath}`);
  }, [asPath]);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}

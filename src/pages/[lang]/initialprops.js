import React, { useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import TranslationStrings from "../static-translations/locales";

export default function Index(props) {
  const router = useRouter();

  console.log("router", router);
  console.log("testpage props", props);

  return <p>Test rewrite</p>;
}

/*
export async function getInitialProps({ ctx }) {
  const namespaces = ["common", "product"];
  const lang = "de";

  return {
    props: {
      lang,
      namespaces,
      translations: namespaces.map(namespace => ({
        namespace,
        translatedStrings:
          TranslationStrings[lang] && TranslationStrings[lang][namespace]
      }))
    }
  };
}
*/

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

export async function unstable_getStaticProps({ params: { lang } }) {
  const namespaces = ["common", "product"];

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

export async function unstable_getStaticPaths() {
  return {
    paths: [{ params: { lang: "de" } }, { params: { lang: "en" } }]
  };
}

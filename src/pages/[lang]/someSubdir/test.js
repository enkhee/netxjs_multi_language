import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import TranslationStrings from "../../../static-translations/locales";
import withLocalization from "../../../hocs/withLocalization";
import useTranslation from "../../../hooks/useTranslation";
import LocaleDropdown from "../../../components/LocaleDropdown";

function TestSubPage(props) {
  const { t } = useTranslation("product");

  return (
    <Container maxWidth="sm">
      <LocaleDropdown />
      <Typography variant="h4" gutterBottom>
        {t("title")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("description")}
      </Typography>
      <Link href="/">&larr; Index</Link>
    </Container>
  );
}

export async function unstable_getStaticProps({ params: { lang } }) {
  const namespaces = ["product"];

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

export default withLocalization(TestSubPage);

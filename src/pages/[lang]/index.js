import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import TranslationStrings from "../../static-translations/locales";
import withLocalization from "../../hocs/withLocalization";
import useTranslation from "../../hooks/useTranslation";
import LocaleDropdown from "../../components/LocaleDropdown";

function About(props) {
  const { locale, t } = useTranslation("common");

  return (
    <Container maxWidth="sm">
      <LocaleDropdown />
      <Typography variant="h4" gutterBottom>
        {t("example1")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("example2")}
      </Typography>
      <Link href={`/${locale}/someSubdir/test`}>&rarr; Page 2</Link>
    </Container>
  );
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

export default withLocalization(About);

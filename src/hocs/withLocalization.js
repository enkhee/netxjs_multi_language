import React from "react";
import Error from "next/error";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import { LocaleProvider } from "@/contexts/LocaleContext";
import isLocale from "@/utils/isLocale";
import { useRouter } from "next/router";
import getInitialLocale from "@/utils/getInitialLocale";

const WrappedPage = () => {
  const WithLocale = ({ lang, ...pageProps }) => {
    const { asPath } = useRouter();
    const router = useRouter();

    if (!lang) {
      return <Error statusCode={404} />;
    }

    if (!isLocale(lang)) {
      if (process.browser) {
        // if the specified param is not a valid locale, it might be a subpath without locale prefic
        router.push(`/${getInitialLocale()}${asPath}`);
      }
    }
    return (
      <LocaleProvider lang={lang}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.displayName = `withLocalization(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};
export default WrappedPage;

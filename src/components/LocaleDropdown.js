import React, { useCallback } from "react";
import Router, { useRouter } from "next/router";
import { locales } from "../static-translations/config";
import useTranslation from "../hooks/useTranslation";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locale, t } = useTranslation("common");

  const selectLocale = useCallback(
    event => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      Router.push(
        router.pathname,
        router.asPath.replace(regex, `/${event.target.value}`)
      );
    },
    [router]
  );

  return (
    <select value={locale} onChange={selectLocale}>
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {t(locale)}
        </option>
      ))}
    </select>
  );
}

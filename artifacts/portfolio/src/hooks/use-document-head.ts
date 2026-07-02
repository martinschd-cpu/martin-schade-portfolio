import { useEffect } from "react";

const SITE_URL = "https://078926d5-2ed4-4b32-8425-bc39492b86b5-00-tep3hkm2tp9g-kdh6l2ag.kirk.replit.dev";

export interface DocumentHeadOptions {
  title: string;
  description: string;
  path: string;
}

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useDocumentHead({ title, description, path }: DocumentHeadOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMetaByName("description", description);
    setCanonical(url);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);

    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
  }, [title, description, path]);
}

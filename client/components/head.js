import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription =
  "Hack4Impact is a 501 (c)(3) nonprofit organization founded at UPenn, with chapters at various colleges across the United States. We collaborate with nonprofits and other socially responsible organizations to develop software that meets important social and humanitarian needs.";
const defaultOGURL = "www.hack4impact.org";
const defaultOGImage = "/static/icons/favicon-32x32.png";

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || "Hack4Impact"}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-124593378-1"
    />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/icons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/icons/favicon-16x16.png"
    />

    <link rel="stylesheet" type="text/css" href="/static/style.css" />
    <link rel="stylesheet" type="text/css" href="/static/react-toast.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato|Chivo|Heebo:300"
      rel="stylesheet"
    />
    {props.title === "DataMaps Apply | Faculty" ||
    props.title === "DataMaps Apply | Students" ? (
      <link rel="stylesheet" href="/static/react-vertical.min.css" />
    ) : null}

    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;

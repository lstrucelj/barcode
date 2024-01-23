import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

export default ({ serviceNode, servicePath, serviceSEO }) => {
  let title;
  let description;
  let image;
  let serviceURL;
  let titleHead;
  let twitterImage;
  let facebookImage;

  twitterImage = config.siteUrl + "/" + config.siteLogo;
  facebookImage = config.siteUrl + "/" + config.siteLogo;

  if (serviceSEO) {
    const serviceMeta = serviceNode.frontmatter;

    title = serviceMeta.title;
    titleHead = `${serviceMeta.title} | ${config.siteTitle}`;

    description = serviceMeta.desc ? serviceMeta.desc : serviceNode.excerpt;

    image = config.siteUrl + "/" + serviceMeta.cover;
    serviceURL = config.siteUrl + servicePath;

    twitterImage = serviceMeta.twitter
      ? config.siteUrl + "/" + serviceMeta.twitter
      : twitterImage;
    facebookImage = serviceMeta.facebook
      ? config.siteUrl + "/" + serviceMeta.facebook
      : facebookImage;
  } else {
    title = config.siteTitle;
    titleHead = `${config.siteTitle} - ${config.siteDescription}`;
    description = config.siteDescription;
    image = config.siteUrl + "/" + config.siteLogo;
  }

  const blogURL = config.siteUrl;

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    },
  ];

  if (serviceSEO) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": serviceURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
      }
    );
  }

  return (
    <Helmet>
      <html lang="en" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{titleHead}</title>

      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {serviceSEO && (
        <link
          rel="canonical"
          href={`${config.siteUrl + servicePath.replace(/\/$/, "")}`}
        />
      )}

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={serviceSEO ? serviceURL : blogURL} />
      {serviceSEO && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={facebookImage} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ""}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {config.userTwitter && (
        <meta name="twitter:creator" content={config.userTwitter} />
      )}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />

      {/* Icons */}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.webp"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.webp"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.webp"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

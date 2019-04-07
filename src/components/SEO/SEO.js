import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export const getSiteMetadata = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO = ({ description, lang, meta, keywords, title }) => {
  return (
    <StaticQuery
      query={getSiteMetadata}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: "description",
                content: metaDescription
              },
              {
                property: "og:title",
                content: title
              },
              {
                property: "og:description",
                content: metaDescription
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                name: "twitter:card",
                content: "summary"
              },
              {
                name: "twitter:creator",
                content: data.site.siteMetadata.author
              },
              {
                name: "twitter:title",
                content: title
              },
              {
                name: "twitter:description",
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", ")
                    }
                  : []
              )
              .concat(meta)}
          >
            <link
              rel="stylesheet"
              href="https://unpkg.com/spectre.css/dist/spectre.min.css"
            />
          </Helmet>
        );
      }}
    />
  );
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
  description: ""
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

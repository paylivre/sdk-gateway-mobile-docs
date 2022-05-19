import React from "react";
import { Link } from "gatsby";
import { Button } from "design-system-pl";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import Seo from "@rocketseat/gatsby-theme-docs/src/components/SEO";

export default function NotFound() {
  return (
    <Layout title=" ">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "60px",
          paddingBottom: "60px",
          borderTop: "1px solid #215aff",
          borderBottom: "1px solid #215aff",
        }}
      >
        <Seo title="404: Not found" />
        <h1> 404 - Page not found! </h1>
        <p>🔎 The page you are looking for does not exist. 🔍</p>
        <Link to="/">
          <Button appearance="secondary" size="small" marginTop="30px">
            Back to the dashboard
          </Button>
        </Link>
      </div>
    </Layout>
  );
}

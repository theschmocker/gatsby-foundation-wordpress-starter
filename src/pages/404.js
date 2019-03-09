import React from "react"

import Base from "../components/Base"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Base>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Base>
)

export default NotFoundPage

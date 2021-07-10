import React from 'react'
import { Helmet } from "react-helmet"

export default function SeoUse({ title, canonical, content }) {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <meta name="description" content={content} />
        </Helmet>

    )
}

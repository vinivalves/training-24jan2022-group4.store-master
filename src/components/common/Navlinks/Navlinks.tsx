import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import Logo from 'src/components/ui/Logo'
import type { NavlinksQueryQuery } from '@generated/graphql'

function Navlinks() {
  const links = useStaticQuery<NavlinksQueryQuery>(graphql`
    query NavlinksQuery {
      allStoreCollection(limit: 2, filter: { type: { eq: Department } }) {
        nodes {
          slug
          seo {
            title
          }
        }
      }
    }
  `)

  return (
    <nav aria-label="primary" className="min-h-full h-16 flex items-center">
      <Link className="m-1 p-4" to="/">
        <Logo />
      </Link>
      {links.allStoreCollection.nodes.map((x) => (
        <Link className="m-1 p-4" key={x.slug} to={`/${x.slug}`}>
          {x.seo.title}
        </Link>
      ))}
    </nav>
  )
}
export default Navlinks
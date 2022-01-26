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
    <nav className="flex items-center h-16 text-sm" aria-label="primary">
      <Link className="px-6 py-3 leading-none" to="/">
        <Logo />
      </Link>
      {links.allStoreCollection.nodes.map((x) => (
        <Link className="mx-6 py-4" key={x.slug} to={`/${x.slug}`}>
          {x.seo.title}
        </Link>
      ))}
      <Link className="mx-6 py-4" key="about" to="/about">
        About
      </Link>
    </nav>
  )
}
export default Navlinks
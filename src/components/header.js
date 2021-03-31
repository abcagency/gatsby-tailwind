import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as Scroll from 'react-scroll';

function Header() {
	let ScrollLink = Scroll.Link;

  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-indigo-700 sticky top-0 z-50 shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="text-2xl text-white font-bold no-underline">{site.siteMetadata.title}</h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-indigo-200 no-underline md:inline-block md:mt-0 md:ml-6 border-b-2 border-transparent hover:text-white transition-colors"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
					<ScrollLink
						className="block mt-4 text-indigo-200 no-underline md:inline-block md:mt-0 md:ml-6 border-b-2 border-transparent transition-colors"
						activeClass="!text-white !border-white"
						href="#carousel"
						to="carousel"
						spy={true}
						hashSpy={true}
						smooth={true}
						offset={-100}
						duration={250}
						>
						Carousel
					</ScrollLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

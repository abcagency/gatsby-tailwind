import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
		<>
      <Header />

      <main className="container mx-auto">
        {children}
      </main>

      <footer className="p-4 mt-4 bg-gray-200 text-center text-xs text-gray-500">
        <div className="container mx-auto">
					© {new Date().getFullYear()}. Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</div>
      </footer>
		</>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

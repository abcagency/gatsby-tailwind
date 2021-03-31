import React from "react";
import * as Scroll from 'react-scroll';
import { Icon } from "@iconify/react";
import arrowCollapseUp from "@iconify/icons-mdi/arrow-collapse-up";

function Footer() {
	let ScrollLink = Scroll.Link;

	return (
		<footer className="p-4 mt-4 bg-gray-100 text-center text-xs text-gray-700">
			<div className="container mx-auto flex justify-between items-center">
				<p className="m-0">
					© {new Date().getFullYear()}. Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</p>

				<ScrollLink
					className="text-gray-700 hover:text-gray-900 transition-colors p-2"
					href="#top"
					to="top"
					smooth={true}
					offset={-25}
					duration={250}
					>
					<span className="sr-only">To the top!</span>
					<Icon icon={arrowCollapseUp} height="1rem" width="1rem" />
				</ScrollLink>
			</div>
		</footer>
	);
}

export default Footer;

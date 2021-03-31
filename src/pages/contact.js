import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ContactForm from "../components/contact-form";

function ContactPage() {
  return (
    <Layout>
      <Seo
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
			<div className="bg-gray-100 py-6 px-4 mb-6 text-center">
				<h1 className="text-4xl font-bold mb-3">Contact</h1>
			</div>

			<section className="w-10/12 m-auto">
				<ContactForm />
			</section>
    </Layout>
  );
}

export default ContactPage;

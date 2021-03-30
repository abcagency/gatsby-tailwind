import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

let validationSchema = Yup.object().shape({
	name: Yup.string()
		.required("Required"),
	email: Yup.string()
		.email("Invalid email address format")
		.required("Required"),
	message: Yup.string()
		.required("Required")
});

const ContactForm = () => (
	<Formik
		initialValues={{ name: '', email: '', message: '' }}
		validationSchema={validationSchema}
		onSubmit={async (values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 1000);
		}}
	>
		{({ touched, errors, isSubmitting }) => (
			<Form>
				<div className="mb-6">
					<label
						className="inline-block mb-2 text-xs font-bold uppercase"
						htmlFor="name"
					>
						Name
					</label>

					<ErrorMessage name="name" component="span" className="inline-block text-red-500 uppercase text-xs font-bold ml-2" />

					<Field
						type="text"
						name="name"
						placeholder="First and Last Name"
						className={`w-full rounded-md ${
							touched.name && errors.name ? "border-red-500" : "border-gray-800"
						}`}
					/>
				</div>

				<div className="mb-6">
					<label
						className="inline-block mb-2 text-xs font-bold uppercase"
						htmlFor="email"
					>
						Email
					</label>

					<ErrorMessage name="email" component="span" className="inline-block text-red-500 uppercase text-xs font-bold ml-2" />

					<Field
						type="email"
						name="email"
						placeholder="user@domain.com"
						className={`w-full rounded-md ${
							touched.email && errors.email ? "border-red-500" : "border-gray-800"
						}`}
					/>

				</div>

				<div className="mb-6">
					<label
						className="inline-block mb-2 text-xs font-bold uppercase"
						htmlFor="message"
					>
						Message
					</label>

					<ErrorMessage name="message" component="span" className="inline-block text-red-500 uppercase text-xs font-bold ml-2" />

					<Field
						as="textarea"
						id="message"
						name="message"
						placeholder="Say something..."
						rows="8"
						className={`w-full rounded-md ${
							touched.message && errors.message ? "border-red-500" : "border-gray-800"
						}`}
					/>
				</div>

				<button
					type="submit"
					className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600 transfrom disabled:bg-gray-200 disabled:text-gray-400 transition-colors"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Please wait..." : "Submit"}
				</button>
			</Form>
		)}
	</Formik>
);

export default ContactForm;

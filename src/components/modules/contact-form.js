import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Slider from 'react-slider';
import * as Yup from 'yup';

let validationSchema = Yup.object().shape({
	name: Yup.string()
		.required("is required"),
	email: Yup.string()
		.email("Invalid email address format")
		.required("is required"),
	message: Yup.string()
		.required("is required"),
	transportation: Yup.array()
		.min(1, "Select a transportation type"),
	state: Yup.string()
		.required("is required"),
	distance: Yup.number()
		.min(1, "is required")
});

const ContactForm = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				message: '',
				transportation: [],
				favoriteColor: 'pink',
				state: '',
				distance: 0
			}}
			validateOnChange={false}
			validationSchema={validationSchema}
			onSubmit={async (values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 1000);
			}}
		>
			{({ touched, errors, isSubmitting, setFieldValue, setFieldTouched }) => (
				<Form>
					<div className="sm:grid grid-cols-2 gap-4">
						<div className="mb-6">
							<label
								className="inline-block mb-2 text-xs font-bold uppercase"
								htmlFor="name"
							>
								Name
							</label>

							<ErrorMessage
								id="name-error"
								name="name"
								component="span"
								className="inline-block text-red-500 uppercase text-xs font-bold ml-1"
							/>

							<Field
								type="text"
								name="name"
								placeholder="First and Last Name"
								className={`w-full rounded-md dark:bg-gray-700 focus:dark:bg-white focus:dark:text-gray-900 transition-colors ${
									touched.name && errors.name ? "border-red-500" : "border-gray-800"
								}`}
								aria-invalid={touched.name && errors.name ? 'true' : null}
								aria-describedby={touched.name && errors.name ? 'name-error' : null}
								aria-required="true"
								disabled={isSubmitting}
							/>
						</div>

						<div className="mb-6">
							<label
								className="inline-block mb-2 text-xs font-bold uppercase"
								htmlFor="email"
							>
								Email
							</label>

							<ErrorMessage
								id="email-error"
								name="email"
								component="span"
								className="inline-block text-red-500 uppercase text-xs font-bold ml-1"
							/>

							<Field
								type="email"
								name="email"
								placeholder="user@domain.com"
								className={`w-full rounded-md dark:bg-gray-700 focus:dark:bg-white focus:dark:text-gray-900 transition-colors ${
									touched.email && errors.email ? "border-red-500" : "border-gray-800"
								}`}
								aria-invalid={touched.email && errors.email ? 'true' : null}
								aria-describedby={touched.email && errors.email? 'email-error' : null}
								aria-required="true"
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="mb-6">
							<h2 id="transportation-group-title" className="inline-block text-xs uppercase font-bold mb-2">Transportation</h2>

							<ErrorMessage name="transportation" component="span" className="inline-block text-red-500 uppercase text-xs font-bold ml-1" />

							<div role="group" aria-labelledby="transportation-group-title" className="flex flex-col items-start">
								<label htmlFor="transportationCar" className="inline-flex items-center mb-3">
									<Field type="checkbox" id="transportationCar" name="transportation" value="car" className="rounded h-5 w-5 text-indigo-700 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Car</span>
								</label>
								<label htmlFor="transportationBoat" className="inline-flex items-center mb-3">
									<Field type="checkbox" id="transportationBoat" name="transportation" value="boat" className="rounded h-5 w-5 text-indigo-700 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Boat</span>
								</label>
								<label htmlFor="transportationPlane" className="inline-flex items-center">
									<Field type="checkbox" id="transportationPlane" name="transportation" value="plane" className="rounded h-5 w-5 text-indigo-700 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Plane</span>
								</label>
							</div>
						</div>

						<div className="mb-6">
							<h2 id="favorite-color-group-title" className="inline-block text-xs uppercase font-bold mb-2">Favorite color</h2>

							<div role="group" aria-labelledby="favorite-color-group-title" className="flex flex-col items-start">
								<label htmlFor="favoriteColorBlue" className="inline-flex items-center mb-3">
									<Field type="radio" id="favoriteColorBlue" name="favoriteColor" value="blue" className="rounded-full h-5 w-5 text-blue-700 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Blue</span>
								</label>
								<label htmlFor="favoriteColorGreen" className="inline-flex items-center mb-3">
									<Field type="radio" id="favoriteColorGreen" name="favoriteColor" value="green" className="rounded-full h-5 w-5 text-green-600 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Green</span>
								</label>
								<label htmlFor="favoriteColorPink" className="inline-flex items-center mb-3">
									<Field type="radio" id="favoriteColorPink" name="favoriteColor" value="pink" className="rounded-full h-5 w-5 text-pink-500 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Pink</span>
								</label>
								<label htmlFor="favoriteColorRed" className="inline-flex items-center mb-3">
									<Field type="radio" id="favoriteColorRed" name="favoriteColor" value="red" className="rounded-full h-5 w-5 text-red-600 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Red</span>
								</label>
								<label htmlFor="favoriteColorYellow" className="inline-flex items-center">
									<Field type="radio" id="favoriteColorYellow" name="favoriteColor" value="yellow" className="rounded-full h-5 w-5 text-yellow-400 border-gray-800 dark:bg-gray-700 focus:dark:bg-white transition-colors" />
									<span className="ml-2">Yellow</span>
								</label>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="mb-6">
							<label
								className="inline-block mb-2 text-xs font-bold uppercase"
								htmlFor="state"
							>
								State
							</label>

							<ErrorMessage
								id="state-error"
								name="state"
								component="span"
								className="inline-block text-red-500 uppercase text-xs font-bold ml-1"
							/>

							<Field
								as="select"
								name="state"
								className={`w-full rounded-md dark:bg-gray-700 focus:dark:bg-white focus:dark:text-gray-900 transition-colors ${
									touched.state && errors.state ? "border-red-500" : "border-gray-800"
								}`}
								aria-invalid={touched.state  && errors.state ? 'true' : null}
								aria-describedby={touched.state  && errors.state ? 'state-error' : null}
								aria-required="true"
								disabled={isSubmitting}
							>
								<option value="">Select a state</option>
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</Field>
						</div>
						<div className="mb-6 overflow-hidden">
							<label
								className="inline-block mb-2 text-xs font-bold uppercase"
								htmlFor="distance"
							>
								Distance
							</label>

							<ErrorMessage
								id="distance-error"
								name="distance"
								component="span"
								className="inline-block text-red-500 uppercase text-xs font-bold ml-1"
							/>

							<Field name="distance">
								{({
									field,
									form: { touched, errors },
									meta
								}) => (
									<>
										<input
											{...field}
											name="distance"
											type="hidden"
											aria-invalid={touched.distance && errors.distance ? 'true' : null}
											aria-describedby={touched.distance && errors.distance ? 'distance-error' : null}
											aria-required="true"
										/>
										<Slider
											type="range"
											max={99}
											className="py-4"
											thumbClassName="p-2 w-10 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-400 transform -translate-y-1/3 text-center outline-none cursor-grab focus:bg-indigo-700 focus:dark:bg-gray-500 focus:text-white focus:dark:text-gray-800 transition-colors"
											trackClassName={`h-3 rounded-md dark:bg-gray-700 focus:dark:bg-white focus:dark:text-gray-900 transition-colors ${
												meta.touched && meta.errors ? "border-red-500" : "border-gray-800"
											}`}
											renderThumb={(props, state) =>
												<div {...props}>
													<span
														className="block rounded-full text-center"
													>
														{state.valueNow}
													</span>
												</div>
											}
											onChange={v => setFieldValue('distance', v)}
											onAfterChange={() => setFieldTouched('distance')}
										/>
									</>
								)}
							</Field>
						</div>
					</div>

					<div className="mb-6">
						<label
							className="inline-block mb-2 text-xs font-bold uppercase"
							htmlFor="message"
						>
							Message
						</label>

						<ErrorMessage
							name="message"
							component="span"
							className="inline-block text-red-500 uppercase text-xs font-bold ml-1"
						/>

						<Field
							as="textarea"
							id="message"
							name="message"
							placeholder="Say something..."
							rows="8"
							className={`w-full rounded-md dark:bg-gray-700 focus:dark:bg-white focus:dark:text-gray-900 transition-colors ${
								touched.message && errors.message ? "border-red-500" : "border-gray-800"
							}`}
							aria-invalid={touched.message  && errors.message ? 'true' : null}
							aria-describedby={touched.message  && errors.message ? 'state-error' : null}
							aria-required="true"
							disabled={isSubmitting}
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
};

export default ContactForm;

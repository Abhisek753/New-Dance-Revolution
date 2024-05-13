import React, { useState } from "react";
import { useFormik } from "formik";
import danceImage from "../../assets/dancer12.jpg";
import { signupSchema } from "../../components/validation/Index";

const SignupPage = () => {


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      note: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div
      className="w-full py-12"
      style={{
        backgroundImage: `url(${danceImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Enqurie Details</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="note"
            >
              Note
            </label>
            <textarea
              id="note"
              name="note"
              value={formik.values.note}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.note && formik.errors.note ? (
              <div className="text-red-500 text-sm">
                {formik.errors.note}
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Consult
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

import React, { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setFormData } from "../app/reducers/appConfigSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../commonComponent/CustomInput";
import CustomSelect from "../commonComponent/CustomSelect";


function StudentFeeDetails({ onPrevious, setFormRef }) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      feeName: "",
      feeCategory: "",
      },
    validationSchema: Yup.object({     
      feeName: Yup.string().required("Fee Name is required"),
      feeCategory: Yup.string().required("Fee Category is required"),
     
    }),
    onSubmit: (values) => {
      console.log("Submitting Fee Details:", values);
        dispatch(setFormData({ feeDetails: values }));
    },
  });

  return (
    <>
      Fee Details form
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <div className="pb-4 mb-4">
            <h2 className="text-base/7 font-semibold text-gray-900 mb-2">
              Fee details
            </h2>
            <div className="rounded-md bg-purple-100 p-3 mb-4">
              <div className="flex">
                <div className="shrink-0">
                  <InformationCircleIcon
                    aria-hidden="true"
                    className="size-5 text-purple-400"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    Academic Fee Details - Class: VI - Sec - A
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">
            <div className="sm:col-span-2">
              <CustomSelect
                id="feeName"
                name="feeName"
                label="Fee Name"
                required = "true"
                options={[
                  { value: "feeName1", label: "Fee Name 1" },
                  { value: "feeName2", label: "Fee Name 2" },
                  { value: "feeName3", label: "Fee Name 3" },
                ]}
                {...formik.getFieldProps("feeName")}
              />
              {formik.touched.feeName && formik.errors.feeName && (
                <div className="text-red-500">{formik.errors.feeName}</div>
              )}
            </div>
            <div className="sm:col-span-2">
              <CustomSelect
                id="feeCategory"
                name="feeCategory"
                label="Fee Category"
                required = "true"
                options={[
                  { value: "feeCategory1", label: "Fee Category 1" },
                  { value: "feeCategory2", label: "Fee Category 2" },
                  { value: "feeCategory3", label: "Fee Category 3" },
                ]}
                {...formik.getFieldProps("feeCategory")}
              />
              {formik.touched.feeCategory && formik.errors.feeCategory && (
                <div className="text-red-500">{formik.errors.feeCategory}</div>
              )}
            </div>
              
             
            </div>

            <table className="mt-4 min-w-full table-fixed divide-y divide-gray-300">
              <thead className="bg-purple-100">
                <tr>
                  <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      // onChange={toggleAll}
                    />
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 sm:pl-2"
                  >
                    <a href="#" className="group inline-flex">
                      Fee Name
                    </a>
                  </th>

                  <th
                    scope="col"
                    className="px-2 py-2 text-left text-sm font-semibold text-gray-900"
                  >
                    <a href="#" className="group inline-flex">
                      Duration
                    </a>
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 text-left text-sm font-semibold text-gray-900 max-w-10"
                  >
                    <a href="#" className="group inline-flex">
                      Total Amount
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                      value=""
                      checked=""
                      onChange=""
                    />
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    Admission Fee
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    Yearly
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 max-w-10">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                      value=""
                      checked=""
                      onChange=""
                    />
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    Bus Fee
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                    Yearly
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 max-w-10">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                    />
                  </td>
                </tr>
                <tr className="bg-purple-100">
                  <td className="relative px-7 sm:w-12 sm:px-6"></td>

                  <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500"></td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-gray-900">
                    Total Fee
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-gray-900 max-w-10">
                    500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </>
  );
}

export default StudentFeeDetails;

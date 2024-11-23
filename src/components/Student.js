import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Datepicker from "react-tailwindcss-datepicker"; 
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/20/solid'


function Student({onClose}) {

    const steps = [
        { id: '01', name: 'Basic Info', href: '#', status: 'complete' },
        { id: '02', name: 'Academic Details', href: '#', status: 'current', },
        { id: '03', name: 'Fee details', href: '#', status: 'upcoming' },
      
      ]
      const [open, setOpen] = useState(false)
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

      const [value, setValue] = useState({
 
      });

  return (
    <>
          <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-6xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="flex min-h-0 flex-1 flex-col ">
                  <div className="bg-purple-900 px-3 py-3 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className=" text-base font-semibold text-white">Add Student</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={onClose}
                          className="relative rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto">
                    <div className='progress-steps'>
                    <nav aria-label="Progress" className="mx-auto max-w-7xl">
                      <ol
                        role="list"
                        className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border lg:border-gray-200"
                      >
                        {steps.map((step, stepIdx) => (
                          <li key={step.id} className="relative overflow-hidden lg:flex-1">
                            <div
                              className={classNames(
                                stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                                stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                                'overflow-hidden border border-gray-200 lg:border-0',
                              )}
                            >
                              {step.status === 'complete' ? (
                                <a href={step.href} className="group">
                                  <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                  />
                                  <span
                                    className={classNames(
                                      stepIdx !== 0 ? 'lg:pl-9' : '',
                                      'flex items-center px-4 py-2 text-sm font-medium',
                                    )}
                                  >
                                    <span className="shrink-0">
                                      <span className="flex size-6 items-center justify-center rounded-full bg-purple-600">
                                        <CheckIcon aria-hidden="true" className="size-4 text-white" />
                                      </span>
                                    </span>
                                    <span className="ml-4 flex min-w-0 flex-col">
                                      <span className="text-sm font-medium">{step.name}</span>
                                    </span>
                                  </span>
                                </a>
                              ) : step.status === 'current' ? (
                                <a href={step.href} aria-current="step">
                                  <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-0 h-full w-1 bg-purple-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                  />
                                  <span
                                    className={classNames(
                                      stepIdx !== 0 ? 'lg:pl-9' : '',
                                      'flex items-center px-4 py-2 text-xs font-medium',
                                    )}
                                  >
                                    <span className="shrink-0">
                                      <span className="flex size-6 items-center justify-center rounded-full border-2 border-purple-600">
                                        <span className="text-purple-600">{step.id}</span>
                                      </span>
                                    </span>
                                    <span className="ml-4 flex min-w-0 flex-col">
                                      <span className="text-sm font-medium text-purple-600">{step.name}</span>
                                    </span>
                                  </span>
                                </a>
                              ) : (
                                <a href={step.href} className="group">
                                  <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                  />
                                  <span
                                    className={classNames(
                                      stepIdx !== 0 ? 'lg:pl-9' : '',
                                      'flex items-center px-4 py-2 text-xs font-medium',
                                    )}
                                  >
                                    <span className="shrink-0">
                                      <span className="flex size-6 items-center justify-center rounded-full border-2 border-gray-300">
                                        <span className="text-gray-500">{step.id}</span>
                                      </span>
                                    </span>
                                    <span className="ml-4 flex min-w-0 flex-col">
                                      <span className="text-sm font-medium text-gray-500">{step.name}</span>
                                    </span>
                                  </span>
                                </a>
                              )}

                              {stepIdx !== 0 ? (
                                <>
                                  {/* Separator */}
                                  <div aria-hidden="true" className="absolute inset-0 left-0 top-0 hidden w-3 lg:block">
                                    <svg
                                      fill="none"
                                      viewBox="0 0 12 82"
                                      preserveAspectRatio="none"
                                      className="size-full text-gray-300"
                                    >
                                      <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </nav>
                    </div>

                    <div className='form-content mt-4'>
                    


                    {/* Academic Details form */}
                    <form>
                      <div className="">
                      
                        

                        <div className="border-b border-gray-900/10 pb-4 mb-4">
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Present Academic Details</h2>
                          <div className=" grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">
 
                          <div className="sm:col-span-2">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Academic year<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                  <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                  >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select>
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Date Of Admission<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                              <Datepicker
                               inputClassName="inline-block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6" 
                                primaryColor={"purple"}
                                useRange={false}
                                asSingle={true}
                                value={value} 
                                onChange={newValue => setValue(newValue)}
                            /> 
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Occupation<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                  <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                  >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select>
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Email<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder='Enter'
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                                />
                              </div>
                            </div>      
                           


                                
                            

                          </div>
                        </div>
                        <div className="border-b border-gray-900/10 pb-4 mb-4">
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Previous Academic Details</h2>
 
                          
                          <div className=" grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">

                          <div className="sm:col-span-2">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Year of study<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                  <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                  >
                                    <option>Andhra Pradesh</option>
                                    <option>Ts</option>
                                    <option>TD</option>
                                  </select>
                              </div>
                          </div>
                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              School Name<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder='Enter'
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                                />
                              </div>
                            </div>

                            
                           

                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Class<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder='Enter'
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Total Marks Scored<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder='Enter'
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                                />
                              </div>
                            </div>      
                           
                            <div className="sm:col-span-4">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Upload Transfer / Study certificate<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                              <div className="mt-2 flex justify-center rounded-lg bg-gray-50 border border-dashed border-gray-900/25 px-4 py-4">
                                  <div className="flex items-center">
                                    <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                    <div className='ml-4'>
                                      <div className="flex text-sm/6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-purple-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2 hover:text-purple-500"
                                        >
                                          <span>Upload a file </span>
                                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs/5 text-gray-600">PNG, JPG, up to 10MB</p>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div> 
                            

                          </div>
                        </div>
                       

                      </div>  
                    </form>
                                        </div>

                  </div>
                </div>
                <div className="flex shrink-0 justify-between px-4 py-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                  >
                    Cancel
                  </button>
                  
                  <div> 
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                    >
                      Next
                    </button>
                  </div>

                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student
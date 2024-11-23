import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  } from '@headlessui/react';
  import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
  import {
    Bars3Icon,
    BellIcon
  } from '@heroicons/react/24/outline';
  import { useState } from 'react';
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Home from "./components/Home";
  import Sidebar from "./components/Sidebar";
  import Login from "./components/Login";
  
  const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
      <BrowserRouter>
        <div>
        <Sidebar sidebarOpen={sidebarOpen} updateSideBar={(val)=>{setSidebarOpen(val)}} />
        <div className="lg:pl-72">
            <div className="sticky top-0 z- flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
  
              {/* Separator */}
              <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />
  
              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form action="#" method="GET" className="relative flex flex-1">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  />
                  <input
                    id="search-field"
                    name="search"
                    type="search"
                    placeholder="Search..."
                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  />
                </form>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
  
                  {/* Separator */}
                  <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />
  
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full bg-gray-50"
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <div className='flex flex-col items-start ml-4'>
                          <span aria-hidden="true" className="text-sm/6 font-semibold text-gray-900">
                            Tom Cook
                          </span>
                          <span className='text-xs text-gray-500'>Admin</span>
                        </div>
                        <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                      </span>
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>
            <main className="">
              <div className="px-4 sm:px-4 lg:px-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
  
              </div>
            </main>
  
        </div>
  
  
        </div>
      </BrowserRouter>
    )
  }
  
  export default App;

                      {/* Basic details form 
                    <form>
                      <div className="">
                      
                        <div className="border-b border-gray-900/10 pb-4 mb-4">
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Personal Details</h2>
                          <div className=" grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">
                            <div className="col-span-full">
                              <label htmlFor="first-name" className="block text-sm/6 font-regular text-gray-900">
                              Passport Size Photo<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                <button
                                  type="button"
                                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                  Change
                                </button>
                              </div>
                            </div>

                            

                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Student First Name<span className='pl-1 text-red-500'>*</span>
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
                              <label htmlFor="email" className="block text-sm/6 font-regularm text-gray-900">
                              Student last Name<span className='pl-1 text-red-500'>*</span>
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
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              DOB<span className='pl-1 text-red-500'>*</span>
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
                              Gender<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">

                                <div className="space-y-6 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
                                  {notificationMethods.map((notificationMethod) => (
                                    <div key={notificationMethod.id} className="flex items-center">
                                      <input
                                        defaultChecked={notificationMethod.id === 'email'}
                                        id={notificationMethod.id}
                                        name="notification-method"
                                        type="radio"
                                        className="size-4 border-gray-300 text-purple-600 focus:ring-purple-600"
                                      />
                                      <label htmlFor={notificationMethod.id} className="ml-3 block text-sm/6 font-regular text-gray-900">
                                        {notificationMethod.title}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            
                            <div className="sm:col-span-1">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Nationality<span className='pl-1 text-red-500'>*</span>
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

                            <div className="sm:col-span-1">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Religion<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                  <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                  >
                                    <option>Hindu</option>
                                    <option>Muslim</option>
                                    <option>Jain</option>
                                  </select>
                              </div>
                            </div>

                            <div className="sm:col-span-1">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Cast<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                  <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                  >
                                    <option>BC</option>
                                    <option>OBC</option>
                                    <option>SC</option>
                                  </select>
                              </div>
                            </div>
                            
                            <div className="sm:col-span-1">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Sub Caste<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                  <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                  >
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                  </select>
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              Blood Group<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                  <select
                                    id="location"
                                    name="location"
                                    defaultValue="Canada"
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                  >
                                    <option>AB</option>
                                    <option>AB+</option>
                                    <option>O</option>
                                  </select>
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Aadhar number<span className='pl-1 text-red-500'>*</span>
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="number"
                                  placeholder='Enter'
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Upload Student Aadhar Card<span className='pl-1 text-red-500'>*</span>
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

                        <div className="border-b border-gray-900/10 pb-4 mb-4">
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Father Details</h2>
                          <div className=" grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">
 
                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Father Full Name<span className='pl-1 text-red-500'>*</span>
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
                              Mobile Number<span className='pl-1 text-red-500'>*</span>
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
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Mother Details</h2>
                          <div className=" grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">
 
                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Mother Full Name<span className='pl-1 text-red-500'>*</span>
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
                              Mobile Number<span className='pl-1 text-red-500'>*</span>
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
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Present Address Details</h2>
                          <div className=" grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">
 
                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Area<span className='pl-1 text-red-500'>*</span>
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
                              City<span className='pl-1 text-red-500'>*</span>
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
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              State<span className='pl-1 text-red-500'>*</span>
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
                              Pincode<span className='pl-1 text-red-500'>*</span>
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
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Permanent Address Details</h2>
                          <div className="relative flex items-start mb-4">
                              <div className="flex h-6 items-center">
                                <input
                                  id="comments"
                                  name="comments"
                                  type="checkbox"
                                  aria-describedby="comments-description"
                                  className="size-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                                />
                              </div>
                              <div className="ml-3 text-sm/6">
                                <label htmlFor="comments" className="font-regular text-gray-900">
                                Same as Present Address
                                </label>
                              </div>
                            </div> 
                          
                          <div className=" grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">

                            <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm/6 font-regular text-gray-900">
                              Area<span className='pl-1 text-red-500'>*</span>
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
                              City<span className='pl-1 text-red-500'>*</span>
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
                              <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                              State<span className='pl-1 text-red-500'>*</span>
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
                              Pincode<span className='pl-1 text-red-500'>*</span>
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
                              Upload Parents ID Proofs<span className='pl-1 text-red-500'>*</span>
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
                    </form>*/}

                                        {/* Fee Details form 
                    <form>
                      <div className="">
                      
                        

                        <div className="pb-4 mb-4">
                          <h2 className="text-base/7 font-semibold text-gray-900 mb-2">Fee details</h2>
                            <div className="rounded-md bg-purple-100 p-3 mb-4">
                              <div className="flex">
                                <div className="shrink-0">
                                  <InformationCircleIcon aria-hidden="true" className="size-5 text-purple-400" />
                                </div>
                                <div className="ml-3 flex-1 md:flex md:justify-between">
                                  <p className="text-sm text-blue-700">Academic Fee Details - Class: VI - Sec - A</p>
                                </div>
                              </div>
                            </div>
                          
                          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-8">

                              <div className="sm:col-span-2">
                                  <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                                  Fee Name<span className='pl-1 text-red-500'>*</span>
                                  </label>
                                  <div className="mt-2">
                                      <select
                                        id="location"
                                        name="location"
                                        defaultValue="Fee Name Title"
                                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                      >
                                        <option>Fee Name Title</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                      </select>
                                  </div>
                                </div>
                                <div className="sm:col-span-2">
                                  <label htmlFor="street-address" className="block text-sm/6 font-regular text-gray-900">
                                  Fee Category<span className='pl-1 text-red-500'>*</span>
                                  </label>
                                  <div className="mt-2">
                                      <select
                                        id="location"
                                        name="location"
                                        defaultValue="Fee Category Name"
                                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm/6"
                                      >
                                        <option>Fee Category Name</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                      </select>
                                  </div>
                                </div>
                              </div>
                                 

                            <table className="mt-4 min-w-full table-fixed divide-y divide-gray-300">
                              <thead className="bg-purple-100">
                                <tr>
                                  <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                    <input
                                      type="checkbox"
                                      className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                                      ref={checkbox}
                                      checked={checked}
                                      onChange={toggleAll}
                                    />
                                  </th>
                                  <th scope="col" className="py-3.5 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 sm:pl-2">
                                    <a href="#" className="group inline-flex">
                                    Fee Name
                                    </a>
                                  </th>
                                
                                  <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                    Duration

                                      </a>
                                  </th>
                                  <th scope="col" className="px-2 py-2 text-left text-sm font-semibold text-gray-900 max-w-10">
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
                                        value=''
                                        checked=''
                                        onChange=''
                                      />
                                    </td>
                                    
                                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">Admission Fee</td>
                                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">Yearly</td>
                                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 max-w-10">
                                      
                                    <input
                                      id="email"
                                      name="email"
                                      type="text"
                                      placeholder='Enter'
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                                    />

                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="relative px-7 sm:w-12 sm:px-6">

                                      <input
                                        type="checkbox"
                                        className="absolute left-4 top-1/2 -mt-2 size-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                                        value=''
                                        checked=''
                                        onChange=''
                                      />
                                    </td>
                                    
                                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">Bus Fee</td>
                                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">Yearly</td>
                                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 max-w-10">
                                      
                                    <input
                                      id="email"
                                      name="email"
                                      type="text"
                                      placeholder='Enter'
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                                    />

                                    </td>
                                  </tr>
                                  <tr className='bg-purple-100'>
                                    <td className="relative px-7 sm:w-12 sm:px-6">

                                   
                                    </td>
                                    
                                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500"></td>
                                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-gray-900">Total Fee</td>
                                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-gray-900 max-w-10">
                                      
                                    500

                                    </td>
                                  </tr>
                              
                                 
                                
                              </tbody>
                            </table>


                                
                            

                          
                        </div>
                       
                       

                      </div>  
                    </form>*/}
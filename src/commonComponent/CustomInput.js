import React from 'react';

export default function CustomInput({
  id,
  name,
  type = 'text',
  placeholder,
  label,
  icon: Icon,
  autoComplete = '',
  required = false,
  value,
  onChange,
  onBlur,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="relative mt-2">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon aria-hidden="true" className="size-5 text-gray-400" />
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          value={value} // Controlled value
          onChange={onChange} // Pass formik's handler
          onBlur={onBlur} // Pass formik's handler
          className="block w-full rounded-md border-0 py-1.5 pl-10 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
}

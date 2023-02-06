import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-400'>
          {labelName}

        </label>
        {isSupriseMe && (<button type='button' onClick={handleSupriseMe} className='font-semibold text-xs bg-white px-1.5 py-2.5 text-gray-600 rounded-lg'>Suprise Me</button>)}
      </div>
      <div>
      <input type={type} id={name} name={name} placeholder={placeholder}
        value={value} onChange={handleChange} require className='bg-[#000000]  border w-full rounded-lg py-1 px-2.5 text-sm w-' /></div>
    </div>
  )
}

export default FormField
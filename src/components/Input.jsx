/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useId } from 'react';


const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='block text-sm font-medium text-gray-700'
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
}) 

export default Input
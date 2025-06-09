import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-2 m-3 py-1 bg-gray-400 text-sm rounded-lg font-semibold'>{name}</button>
    </div>
  )
}

export default Button
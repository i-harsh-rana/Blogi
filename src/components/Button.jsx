import React, { Children } from 'react'

function Button({
    children, 
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    clsssName = '',
    ...props
}) {
  return (
   <button clsssName={`px-4 py-2 rounded-lg ${clsssName} ${bgColor} ${textColor}`}{...props}>{children}</button>
  )
}

export default Button
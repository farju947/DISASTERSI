import React from 'react'

export const container = ({children, className}) => {
  return (
    <div className={cn('w-full max-w-screen-xl mx-auto  px-2.5',
        className)}>{children}</div>
  )
}

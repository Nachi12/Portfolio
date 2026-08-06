import React from 'react'

export const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 relative overflow-hidden ${
        hover ? 'hover:-translate-y-0.5' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card

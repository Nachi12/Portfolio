import React from 'react'

export const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`editorial-card rounded-xl p-6 relative overflow-hidden ${
        hover ? 'transition-all duration-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card

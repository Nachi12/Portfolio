import React from 'react'

export const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium transition-colors'

  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[10px] rounded-sm',
    sm: 'px-2.5 py-1 text-xs rounded-md',
    md: 'px-3 py-1 text-xs rounded-md',
  }

  const variantStyles = {
    default: 'bg-[#111111] text-[#A1A1AA] border border-[#242424]',
    green: 'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20',
    muted: 'bg-[#0A0A0A] text-[#71717A] border border-[#242424]',
    white: 'bg-[#F5F5F5] text-[#050505] font-semibold',
  }

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {children}
    </span>
  )
}

export default Badge

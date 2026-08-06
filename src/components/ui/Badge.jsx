import React from 'react'

export const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium transition-colors'
  
  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[10px] rounded-md',
    sm: 'px-2.5 py-1 text-xs rounded-lg',
    md: 'px-3 py-1.5 text-xs rounded-lg',
  }

  const variantStyles = {
    default: 'bg-slate-900/90 text-slate-300 border border-slate-800',
    indigo: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
    violet: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/20',
    sky: 'bg-sky-500/10 text-sky-300 border border-sky-500/20',
  }

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge

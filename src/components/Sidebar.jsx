import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../store/slices/tabSlice'

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h4.375v-4.5h4.25v4.5h4.375c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'About',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Work',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25H6c-1.243 0-2.25 1.007-2.25 2.25m16.5 0v-2.25A2.25 2.25 0 0018 9.65H6a2.25 2.25 0 00-2.25 2.25v2.25M12 3v6.75" />
      </svg>
    ),
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tab.activeTab)

  return (
    <aside className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/80 bg-[#0b0f17]/90 px-3 py-3 backdrop-blur-md lg:sticky lg:inset-y-0 lg:left-0 lg:h-screen lg:w-20 lg:border-b-0 lg:border-r lg:px-0 lg:py-6">
      <div className="flex items-center justify-between gap-3 lg:h-full lg:flex-col">
        {/* Brand Logo Avatar */}
        <button
          type="button"
          onClick={() => dispatch(setActiveTab('home'))}
          className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-400 p-[1px] shadow-md shadow-indigo-500/20 transition hover:scale-105 active:scale-95"
          aria-label="Open home section"
        >
          <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#0f172a] text-xs font-bold tracking-tight text-white transition group-hover:bg-opacity-80 font-mono">
            NR
          </div>
        </button>

        {/* Navigation Items */}
        <nav className="flex flex-1 items-center justify-end gap-1.5 overflow-x-auto lg:flex-col lg:justify-start lg:gap-3 lg:overflow-visible" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            return (
              <div key={item.id} className="relative group">
                <button
                  type="button"
                  aria-label={item.label}
                  onClick={() => dispatch(setActiveTab(item.id))}
                  className={`relative flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition-all duration-200 ${
                    isActive
                      ? 'border-indigo-500/50 bg-indigo-500/10 text-indigo-400 shadow-sm shadow-indigo-500/20'
                      : 'border-slate-800/80 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  {item.icon}
                  {isActive && (
                    <span className="absolute -left-1 top-1/2 hidden h-4 w-1 -translate-y-1/2 rounded-r-full bg-indigo-400 lg:block shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                  )}
                </button>
                {/* Desktop Tooltip */}
                <div className="pointer-events-none absolute left-14 top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-slate-800 bg-[#0f172a] px-2.5 py-1 text-xs font-medium text-slate-200 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 lg:block font-mono">
                  {item.label}
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

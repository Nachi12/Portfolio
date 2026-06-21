import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../store/slices/tabSlice'

const navItems = [
  { id: 'home', label: 'Home', glyph: 'H' },
  { id: 'about', label: 'About', glyph: 'A' },
  { id: 'projects', label: 'Work', glyph: 'W' },
  { id: 'resume', label: 'Resume', glyph: 'R' },
  { id: 'contact', label: 'Contact', glyph: 'C' },
]

const Sidebar = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tab.activeTab)

  return (
    <aside className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/95 px-3 py-3 backdrop-blur lg:sticky lg:inset-y-0 lg:left-0 lg:h-screen lg:w-24 lg:border-b-0 lg:border-r lg:px-0 lg:py-6">
      <div className="flex items-center justify-between gap-3 lg:h-full lg:flex-col">
        <button
          type="button"
          onClick={() => dispatch(setActiveTab('home'))}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-cyan-300 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/30"
          aria-label="Open home section"
        >
          NR
        </button>

        <nav className="flex flex-1 items-center justify-end gap-2 overflow-x-auto lg:flex-col lg:justify-start lg:overflow-visible" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            return (
              <button
                key={item.id}
                type="button"
                title={item.label}
                aria-label={item.label}
                onClick={() => dispatch(setActiveTab(item.id))}
                className={`group flex h-11 min-w-11 items-center justify-center rounded-[8px] border text-sm font-semibold transition lg:w-11 ${
                  isActive
                    ? 'border-cyan-200 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30'
                    : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-200/60 hover:text-white'
                }`}
              >
                <span>{item.glyph}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

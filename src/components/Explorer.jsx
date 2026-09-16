const files = [
  { name: 'index.html', icon: '🌐', color: 'text-amber-400' },
  { name: 'about.jsx', icon: '⚛️', color: 'text-sky-400' },
  { name: 'projects.js', icon: '⚡', color: 'text-amber-300' },
  { name: 'resume.pdf', icon: '📄', color: 'text-rose-400' },
  { name: 'contact.json', icon: '📋', color: 'text-emerald-400' },
]

const Explorer = () => {
  return (
    <div className="rounded-xl border border-slate-800/80 bg-[#0f172a]/60 p-4 text-xs font-mono text-slate-300 backdrop-blur-md">
      <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
        <span>Explorer</span>
        <span className="text-[10px] text-slate-600">src/pages</span>
      </div>
      <div className="mt-3 font-semibold text-slate-200 flex items-center gap-1.5">
        <span className="text-slate-400 text-xs">📁</span>
        <span>Portfolio Workspace</span>
      </div>
      <div className="mt-2.5 space-y-1 pl-2">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition hover:bg-slate-800/60 cursor-pointer group"
          >
            <span className="text-sm opacity-90">{file.icon}</span>
            <span className="text-slate-300 group-hover:text-white">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explorer

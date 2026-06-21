const files = ['index.html', 'about.jsx', 'projects.js', 'resume.pdf', 'contact.json']

const Explorer = () => {
  return (
    <div className="rounded-[8px] border border-white/10 bg-slate-950 p-4 text-sm text-slate-300">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Explorer</h3>
      <div className="mt-4 font-semibold text-slate-100">My Portfolio</div>
      <div className="mt-3 space-y-2">
        {files.map((file) => (
          <div key={file} className="rounded-[6px] px-2 py-1 hover:bg-white/[0.04]">
            {file}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explorer

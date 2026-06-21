import Sidebar from './components/Sidebar'
import SplineModel from './components/SplinModel'
import Topbar from './components/Topbar'
import './App.css'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b10] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.22),transparent_28%),linear-gradient(135deg,#080b10_0%,#101725_52%,#07110f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col lg:flex-row">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 pb-8 pt-24 sm:px-6 lg:px-8 lg:py-8">
          <Topbar />
        </section>
        <SplineModel />
      </div>
    </main>
  )
}

export default App

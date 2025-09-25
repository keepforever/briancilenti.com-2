import type { Route } from "./+types/demo-index";
import { NavLink } from 'react-router'
import { cn } from '~/utils/misc'

export default function DemoIndex() {
  return (
    <div className="flex flex-col gap-4 py-6">
      <h2 className="px-2 text-3xl font-bold tracking-tighter text-green-400 sm:text-4xl lg:px-0">Demos</h2>
      <p className="text-md font-space-grotesk text-green-400">
        Here, I'm just noodling around on various react/styling/dom concepts and this is a way to deploy and share them.
        Select a demo from below to check it out!
      </p>

      <h2 className="text-sm font-bold italic text-green-400 opacity-60">Select a demo below</h2>

      <nav className="flex flex-wrap items-center gap-2">
        <NavLink
          to="/demo/video-clip-demo"
          className={({ isActive }) => {
            return cn(
              'block rounded-lg border border-green-300 px-3 py-2 text-base font-semibold leading-7 text-green-500 hover:bg-gray-800 hover:text-green-300',
              { 'bg-blue-800 hover:bg-blue-900': isActive },
            )
          }}
        >
          Video Clip Demo
        </NavLink>
      </nav>
    </div>
  )
}
import { MapPin as LocateIcon } from 'lucide-react'
import { config } from '~/constants/config'

export function HeroSection() {
  return (
    <div className="bg-slate-900 py-6 font-space-grotesk text-green-500 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-8">
          <div className="mb-4 lg:mb-0 lg:mr-8">
            <img alt="Profile" className="h-48 w-48 rounded-full object-cover object-center" src="/brian-one.png" />
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{config.name}</h1>
              <p className="text-xl">{config.title}</p>
            </div>

            <div className="space-y-2">
              {/* <div className="flex items-center justify-center gap-2 lg:justify-start">
                <BriefcaseIcon className="h-4 w-4 text-green-400" />
                <div className="text-sm">{config.yearsOfExperience} years of experience</div>
              </div> */}
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <LocateIcon className="h-4 w-4 text-green-400" />
                <div className="text-sm">{config.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
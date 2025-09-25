/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { cn } from '~/utils/misc'
import { GitHubIcon } from './socials'
import { LinkedInIcon } from './icons/linkedin-icon'
import { contactInfoObject } from '~/constants/contactInfo'
import { navigation } from '~/constants/config'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-85 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h3 className="font-bold tracking-tight text-green-400 hover:text-green-600 hover:underline">
              BrianCilenti.com
            </h3>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(item => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => {
                return cn('text-sm font-semibold leading-6 text-green-400 hover:text-green-500', {
                  'text-green-300 underline': isActive,
                })
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
          <a href={contactInfoObject.github.href} target="_blank" rel="noreferrer">
            <GitHubIcon className="h-6 w-6 text-green-300 hover:text-green-500" />
          </a>

          <a href={contactInfoObject.linkedin.href} target="_blank" rel="noreferrer">
            <LinkedInIcon className="h-6 w-6 text-green-300 hover:text-green-500" />
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
          <div className="flex items-center justify-between pt-12">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <h3 className="font-bold tracking-tight text-green-400 hover:text-green-600 hover:underline">
                BrianCilenti.com
              </h3>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-green-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return cn(
                        '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-500 hover:bg-gray-800 hover:text-green-300',
                        { underline: isActive },
                      )
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
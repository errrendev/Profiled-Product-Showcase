import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './../../public/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Solutions', to: '/solutions/enterprise' },

  { label: 'Mission', to: '/mission' },
  { label: 'Careers', to: '/careers' },

  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }

    document.body.style.overflow = ''
  }, [isMobileMenuOpen])

  return (
    <header className='w-full border-b border-gray-300 text-black'>
      <div className='flex items-center justify-between p-4 px-5 py-4 2xl:px-32'>
        <Link to='/' className='w-60' onClick={closeMobileMenu}>
          <img className='h-10' src={logo} alt='logo' />
        </Link>

        <div className='hidden gap-10 text-sm lg:flex'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'font-semibold text-black' : 'text-gray-700 hover:text-black'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className='hidden w-60 gap-3 text-sm lg:flex'>
          <Link
            to='/pricing'
            className='rounded-full border border-gray-300 px-6 py-2 text-center font-medium'
          >
            Pricing
          </Link>
          <Link
            to='/request-demo'
            className='rounded-full bg-black px-6 py-2 text-center text-white'
          >
            Buy Now
          </Link>
        </div>

        <button
          type='button'
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className='rounded-md border border-gray-300 p-2 lg:hidden'
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            className='h-5 w-5'
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-50 flex min-h-screen flex-col bg-white px-6 pb-8 pt-6 lg:hidden'>
          <div className='mb-10 flex items-center justify-between'>
            <Link to='/' className='w-48' onClick={closeMobileMenu}>
              <img className='h-10' src={logo} alt='logo' />
            </Link>

            <button
              type='button'
              onClick={closeMobileMenu}
              className='rounded-md border border-gray-300 p-2'
              aria-label='Close navigation menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='h-5 w-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          <nav className='flex flex-1 flex-col  gap-4 text-xl font-medium'>
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.to}`}
                to={item.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-black' : 'text-gray-700 hover:text-black'
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to='/pricing'
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? 'font-semibold text-black' : 'text-gray-700 hover:text-black'
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to='/request-demo'
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? 'font-semibold text-black' : 'text-gray-700 hover:text-black'
              }
            >
              Request Demo
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Nav

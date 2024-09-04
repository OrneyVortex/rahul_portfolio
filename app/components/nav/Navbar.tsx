import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle'
import MobileNavDropdown from './MobileNavDropdown'

const Logo = ({ className }: { className?: string }) => {
  return (
    <img alt="logo" src="/p2logo.png" className={`w-20 ${className}`} />
  )
}

export const navLinks = [

    {
    label: 'Home',
    href: '/',
    mobile: true
  },
  {
    label: 'About',
    href: '/about',
    mobile: true
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    mobile: true
  },

  {
    label: 'Resume',
    href: 'https://raw.githubusercontent.com/OrneyVortex/rahul_portfolio/6a40eb1a334d9944325f83a087c154d9cac775b2/public/RahulSharmaResume.pdf',
    mobile: true
  }
]

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}><Link href={link.href}>{link.label}</Link></li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        {/* mobile */}
        <MobileNavDropdown />
        <Link href="/"><Logo className="hidden " /></Link>
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
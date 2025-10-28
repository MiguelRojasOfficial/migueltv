'use client'

import Link from 'next/link'
import { HiX, HiHome, HiPlay, HiFilm, HiHeart, HiSearch, HiBriefcase} from 'react-icons/hi'

const Sidebar = ({ isOpen, onClose, isLoggedIn }: {isOpen: boolean; onClose: () => void; isLoggedIn: boolean }) => {

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:hidden`}></div>

      <aside className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white p-4 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <div className="flex  justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-red-500">Miguel TV</h2>
          <button onClick={onClose} className="text-white text-3xl" arial-label="Cerrar menú">
            <HiX />
          </button>
        </div>

        <nav>
          <ul className="space-y-5">
            <li>
              <Link href="/" onClick={onClose} className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors">
                <HiHome />
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={onClose} className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors">
                <HiPlay />
                <span>TV en vivo</span>
              </Link>
            </li>
            <li>
              <Link href="/on-demand" onClick={onClose} className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors">
                <HiFilm />
                <span>On Demand</span>
                </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link href="/my-list" onClick={onClose} className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors">
                  <HiHeart />
                  <span>Mi Lista</span>
                </Link>
              </li>
            )}
            <li>
              <Link href="/portfolio" onClick={onClose} className="flex items-center space-x-3 text-lg hover:text-red-600 transition-colors font-bold text-red-500">
                <HiBriefcase />
                <span>Portafolio</span>
              </Link>
            </li>
            <li>
              <Link href="/buscar" onClick={onClose} className="flex items-center space-x-3 text-lg hover:text-red-500 transition-colors">
                <HiSearch />
                <span>Buscar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  ) 
}

export default Sidebar
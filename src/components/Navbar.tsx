'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { HiMenu, HiSearch, HiUserCircle, HiCog, HiLogout } from 'react-icons/hi'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkLoginStatus = () => {
            try {
                const storedEmail = localStorage.getItem('userEmail')
                const userData = localStorage.getItem('userData')
                
                if (storedEmail && userData) {
                    const user = JSON.parse(userData)
                    if (user.email === storedEmail) {
                        setIsLoggedIn(true)
                        setUserEmail(user.email)
                        setUserName(user.name || 'Usuario')
                    } else {
                        setIsLoggedIn(false)
                        setUserEmail('')
                        setUserName('')
                    }
                } else {
                    setIsLoggedIn(false)
                    setUserEmail('')
                    setUserName('')
                }
            } catch (error) {
                console.error('Error al verificar el estado de login:', error)
            }
        }

        checkLoginStatus()
        
        const handleStorageChange = () => {
            checkLoginStatus()
        }

        window.addEventListener('storage', handleStorageChange)
        const interval = setInterval(checkLoginStatus, 2000)
        
        return () => {
            window.removeEventListener('storage', handleStorageChange)
            clearInterval(interval)
        }
    }, [])

    
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleLogout = () => {
        try {
            localStorage.removeItem('userEmail')
            setIsLoggedIn(false)
            setUserEmail('')
            setUserName('')
            setIsDropdownOpen(false)
            
            window.dispatchEvent(new Event('storage'))
            window.location.href = '/'
        } catch (error) {
            console.error('Error al cerrar sesión:', error)
        }
    }

    return (
        <>
            <nav className="bg-zinc-800 text-white p-4 sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto flex items-center justify-between">
                    <button onClick={toggleSidebar} className="text-white text-2xl lg:hidden" aria-label="Abrir Menú"> 
                        <HiMenu />
                    </button>

                    <div className="flex-grow flex justify-center lg:flex-none lg:justify-start">
                        <Link href="/" className="text-3xl font-bold text-red-500 hover:text-red-400 transition-colors">
                            Miguel TV
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="/" className="hover:text-red-500 transition-colors font-medium">
                            TV en vivo
                        </Link>
                        <Link href="/on-demand" className="hover:text-red-500 transition-colors font-medium">
                            On Demand
                        </Link>
                        {isLoggedIn && (
                            <Link href="/my-list" className="hover:text-red-500 transition-colors font-medium">
                                Mi Lista
                            </Link>
                        )}
                        <Link href="/portfolio" className="hover:text-red-600 transition-colors font-bold text-red-500">
                            Portafolio
                        </Link>
                        <Link href="/buscar" className="flex items-center space-x-2 hover:text-red-500 transition-colors font-medium">
                            <HiSearch className="text-xl" />
                            <span>Buscar</span>
                        </Link>
                        
                        {isLoggedIn ? (
                            <div className="relative" ref={dropdownRef}>
                                <button 
                                    onClick={toggleDropdown}
                                    className="flex items-center space-x-2 text-white p-2 rounded-full font-semibold hover:bg-red-500 transition-colors"
                                    title={`Conectado como: ${userEmail}`}
                                >
                                    <HiUserCircle className="text-2xl" />
                                </button>
                                
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                                        <div className="flex items-center space-x-3 px-4 py-3 border-b border-gray-700">
                                            <HiUserCircle className="text-3xl text-red-500" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-white truncate">
                                                    {userName}
                                                </p>
                                                <p className="text-xs text-gray-400 truncate">
                                                    {userEmail}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <Link 
                                            href="/perfil" 
                                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <HiCog className="text-lg text-gray-400" />
                                            <span className="text-sm text-white">Perfil</span>
                                        </Link>
                                        
                                        <button 
                                            onClick={handleLogout}
                                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors w-full text-left text-red-400"
                                        >
                                            <HiLogout className="text-lg" />
                                            <span className="text-sm">Salir</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link 
                                href="/login" 
                                className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
                            >
                                <HiUserCircle className="text-xl" />
                                <span>Iniciar sesión</span>
                            </Link>
                        )}
                    </div>

                    <div className="flex lg:hidden items-center">
                        {isLoggedIn ? (
                            <div className="relative" ref={dropdownRef}>
                                <button 
                                    onClick={toggleDropdown}
                                    className="flex items-center text-white p-2 rounded-full font-semibold hover:bg-red-500 transition-colors"
                                    title={`Conectado como: ${userEmail}`}
                                >
                                    <HiUserCircle className="text-2xl" />
                                </button>
                                
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                                        <div className="flex items-center space-x-3 px-4 py-3 border-b border-gray-700">
                                            <HiUserCircle className="text-3xl text-red-500" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-white truncate">
                                                    {userName}
                                                </p>
                                                <p className="text-xs text-gray-400 truncate">
                                                    {userEmail}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <Link 
                                            href="/perfil" 
                                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <HiCog className="text-lg text-gray-400" />
                                            <span className="text-sm text-white">Perfil</span>
                                        </Link>
                                        
                                        <button 
                                            onClick={handleLogout}
                                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors w-full text-left text-red-400"
                                        >
                                            <HiLogout className="text-lg" />
                                            <span className="text-sm">Salir</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link 
                                href="/login" 
                                className="flex items-center space-x-2 bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors"
                            >
                                <span>Iniciar sesión</span>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}  isLoggedIn={isLoggedIn} />
        </>
    )
}

export default Navbar
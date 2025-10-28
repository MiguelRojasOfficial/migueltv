'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiUserCircle, HiMail, HiLockClosed, HiTrash, HiLogout, HiChevronRight } from 'react-icons/hi';

interface UserData {
    email: string;
    name?: string;
    password?: string;
    gender?: string;
    birthdate?: string;
    zipCode?: string;
}

export default function Perfil() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const router = useRouter();

    useEffect(() => {
        try {
            const storedEmail = localStorage.getItem('userEmail');
            const storedUser = localStorage.getItem('userData');

            if (!storedEmail || !storedUser) {
                router.push('/login');
                return;
            }

            const user: UserData = JSON.parse(storedUser);
            if (user.email !== storedEmail) {
                router.push('/login');
                return;
            }

            setUserData(user);
        } catch (error) {
            console.error('Error al cargar datos del usuario:', error);
            router.push('/login');
        }
    }, [router]);

    const handleLogout = () => {
        try {
            localStorage.removeItem('userEmail');
            window.dispatchEvent(new Event('storage'));
            router.push('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const handleDeleteAccount = () => {
        if (confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.')) {
            try {
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userData');
                window.dispatchEvent(new Event('storage'));
                router.push('/');
            } catch (error) {
                console.error('Error al eliminar la cuenta:', error);
            }
        }
    };

    const navigateToUpdateEmail = () => {
        router.push('/actualizar-correo');
    };

    const navigateToChangePassword = () => {
        router.push('/cambiar-contrasena');
    };

    if (!userData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-950">
                <div className="text-white">Cargando...</div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white p-4">
            <div className="w-full max-w-md">
                <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                    <div className="text-center py-8 border-b border-gray-800">
                        <HiUserCircle className="text-6xl text-red-600 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold">Perfil</h1>
                    </div>

                    <div className="border-b border-gray-800"></div>

                    <div className="space-y-1 p-4">
                        <button 
                            onClick={navigateToUpdateEmail}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-800 rounded-xl transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <HiMail className="text-xl text-gray-400" />
                                <div className="text-left">
                                    <p className="font-medium">Actualizar correo</p>
                                    <p className="text-sm text-gray-400">{userData.email}</p>
                                </div>
                            </div>
                            <HiChevronRight className="text-xl text-gray-400" />
                        </button>

                        <button 
                            onClick={navigateToChangePassword}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-800 rounded-xl transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <HiLockClosed className="text-xl text-gray-400" />
                                <span className="font-medium">Cambiar contraseña</span>
                            </div>
                            <HiChevronRight className="text-xl text-gray-400" />
                        </button>

                        <button 
                            onClick={handleDeleteAccount}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-800 rounded-xl transition-colors text-red-400 hover:text-red-300"
                        >
                            <div className="flex items-center space-x-3">
                                <HiTrash className="text-xl" />
                                <span className="font-medium">Eliminar cuenta</span>
                            </div>
                            <HiChevronRight className="text-xl" />
                        </button>
                    </div>

                    <div className="border-b border-gray-800"></div>

                    <button 
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-3 p-4 hover:bg-gray-800 transition-colors text-red-400 hover:text-red-300"
                    >
                        <HiLogout className="text-xl" />
                        <span className="font-medium">Salir</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
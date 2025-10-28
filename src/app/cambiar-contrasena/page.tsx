'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiLockClosed, HiX } from 'react-icons/hi';

export default function CambiarContraseña() {
    const [contraseñaActual, setContraseñaActual] = useState('');
    const [nuevaContraseña, setNuevaContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (!storedEmail) {
            router.push('/login');
            return;
        }
        setUserEmail(storedEmail);
    }, [router]);

    const handleCambiar = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!contraseñaActual || !nuevaContraseña || !confirmarContraseña) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (nuevaContraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (nuevaContraseña.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        try {
            const storedUser = localStorage.getItem('userData');
            if (storedUser) {
                const user = JSON.parse(storedUser);
                
                if (user.password !== contraseñaActual) {
                    alert('La contraseña actual es incorrecta');
                    return;
                }

                user.password = nuevaContraseña;
                localStorage.setItem('userData', JSON.stringify(user));
                
                alert('Contraseña actualizada correctamente');
                router.push('/perfil');
            }
        } catch (error) {
            console.error('Error al cambiar contraseña:', error);
            alert('Error al cambiar la contraseña');
        }
    };

    const handleCancelar = () => {
        router.push('/perfil');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white p-4">
            <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md border border-gray-800">
                <div className="text-center mb-8">
                    <HiLockClosed className="text-4xl text-red-600 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold">Cambiar Contraseña</h1>
                </div>

                <div className="mb-6 p-4 bg-gray-800 rounded-xl">
                    <p className="text-sm text-gray-400">Usuario:</p>
                    <p className="text-white font-semibold truncate">{userEmail}</p>
                </div>

                <form onSubmit={handleCambiar} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 mb-2 text-sm font-medium">
                            Contraseña actual
                        </label>
                        <input
                            type="password"
                            value={contraseñaActual}
                            onChange={(e) => setContraseñaActual(e.target.value)}
                            placeholder="Ingresa tu contraseña actual"
                            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white 
                                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                                     transition-all placeholder-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2 text-sm font-medium">
                            Nueva contraseña
                        </label>
                        <input
                            type="password"
                            value={nuevaContraseña}
                            onChange={(e) => setNuevaContraseña(e.target.value)}
                            placeholder="Mínimo 6 caracteres"
                            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white 
                                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                                     transition-all placeholder-gray-400"
                            required
                            minLength={6}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-2 text-sm font-medium">
                            Confirmar nueva contraseña
                        </label>
                        <input
                            type="password"
                            value={confirmarContraseña}
                            onChange={(e) => setConfirmarContraseña(e.target.value)}
                            placeholder="Repite tu nueva contraseña"
                            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white 
                                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                                     transition-all placeholder-gray-400"
                            required
                        />
                    </div>

                    <div className="space-y-3">
                        <button 
                            type="submit" 
                            className="w-full bg-red-600 py-3 rounded-xl font-semibold hover:bg-red-700 
                                     transition-colors transform hover:scale-105"
                        >
                            Cambiar Contraseña
                        </button>
                        
                        <button 
                            type="button"
                            onClick={handleCancelar}
                            className="w-full bg-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-600 
                                     transition-colors flex items-center justify-center space-x-2"
                        >
                            <HiX className="text-lg" />
                            <span>Cancelar</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
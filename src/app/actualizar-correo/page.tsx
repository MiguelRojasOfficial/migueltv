'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiMail, HiX } from 'react-icons/hi';

export default function ActualizarCorreo() {
    const [nuevoCorreo, setNuevoCorreo] = useState('');
    const [confirmarCorreo, setConfirmarCorreo] = useState('');
    const [emailActual, setEmailActual] = useState('');
    const router = useRouter();

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (!storedEmail) {
            router.push('/login');
            return;
        }
        setEmailActual(storedEmail);
    }, [router]);

    const handleActualizar = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!nuevoCorreo || !confirmarCorreo) {
            alert('Por favor completa todos los campos');
            return;
        }

        if (nuevoCorreo !== confirmarCorreo) {
            alert('Los correos no coinciden');
            return;
        }

        if (nuevoCorreo === emailActual) {
            alert('El nuevo correo debe ser diferente al actual');
            return;
        }

        try {
            const storedUser = localStorage.getItem('userData');
            if (storedUser) {
                const user = JSON.parse(storedUser);
                user.email = nuevoCorreo;
                localStorage.setItem('userData', JSON.stringify(user));
                localStorage.setItem('userEmail', nuevoCorreo);
                
                window.dispatchEvent(new Event('storage'));
                
                alert('Correo actualizado correctamente');
                router.push('/perfil');
            }
        } catch (error) {
            console.error('Error al actualizar correo:', error);
            alert('Error al actualizar el correo');
        }
    };

    const handleCancelar = () => {
        router.push('/perfil');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white p-4">
            <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md border border-gray-800">
                <div className="text-center mb-8">
                    <HiMail className="text-4xl text-red-600 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold">Actualizar Correo</h1>
                </div>

                <div className="mb-6 p-4 bg-gray-800 rounded-xl">
                    <p className="text-sm text-gray-400">Email actual: <span className="text-white font-semibold truncate"> {emailActual}</span></p>
                    
                </div>

                <form onSubmit={handleActualizar} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            value={nuevoCorreo}
                            onChange={(e) => setNuevoCorreo(e.target.value)}
                            placeholder="Nuevo correo electrónico"
                            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white 
                                     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                                     transition-all placeholder-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            value={confirmarCorreo}
                            onChange={(e) => setConfirmarCorreo(e.target.value)}
                            placeholder="Confirma correo electrónico"
                            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white 
                                     text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
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
                            Actualizar Correo
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
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  email: string;
  name?: string;
  password?: string;
  gender?: string;
  birthdate?: string;
  zipCode?: string;
}

export default function Register() {
  const [formData, setFormData] = useState<UserData>({ email: '' });
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const currentEmail = localStorage.getItem('userEmail');
      if (!currentEmail) {
        router.push('/');
        return;
      }

      setFormData(prev => ({ ...prev, email: currentEmail }));

      const storedUser = localStorage.getItem('userData');
      if (storedUser) {
        const user: UserData = JSON.parse(storedUser);
        if (user.email === currentEmail) {
          setFormData(user);
          setIsRegistered(true);
        }
      }
    } catch (e) {
      console.error("Error al acceder a localStorage:", e);
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      try {
        localStorage.setItem('userData', JSON.stringify(formData));
        setIsRegistered(true);
        window.dispatchEvent(new Event('storage'));
        router.push('/');
      } catch (e) {
        console.error("Error al guardar los datos de usuario en localStorage:", e);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white p-4">
      <div className="bg-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl text-center border border-gray-800">
        <h2 className="text-3xl font-bold mb-2">Registrarse</h2>
        <p className="text-lg text-red-500 font-medium mb-8">
          {formData.email ? formData.email : 'cargando correo...'}
        </p>

        {isRegistered ? (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-500">¡Registro Completo!</h3>
            <p className="text-gray-400">Ahora puedes acceder con tus datos. Tus datos están guardados solo en este dispositivo.</p>
            <div className="mt-8 flex flex-col items-center">
              <p className="text-sm text-gray-400">Nombre: <span className="text-red-500 font-bold">{formData.name}</span></p>
              <p className="text-sm text-gray-400">Contraseña: <span className="text-red-500 font-bold">**********</span></p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 
                               focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
                               transition-all placeholder-gray-400"
                    value={formData.password || ''}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu contraseña"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="gender">
                    Género
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      name="gender"
                      className={`w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 
                                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
                                  transition-all appearance-none pr-10 
                                  ${formData.gender ? 'text-white' : 'text-gray-400'}`}
                      value={formData.gender || ''}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Selecciona tu género</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                      ▼
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="zipCode">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 
                               focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
                               transition-all placeholder-gray-400"
                    value={formData.zipCode || ''}
                    onChange={handleChange}
                    placeholder="Ej. 28001"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 
                               focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
                               transition-all placeholder-gray-400"
                    value={formData.name || ''}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="birthdate">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    className={`w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 
                              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
                              transition-all ${formData.birthdate ? 'text-white' : 'text-gray-400'}`}
                    value={formData.birthdate || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center px-2 pt-2">
              Tu privacidad es nuestra prioridad. Al usar esta aplicación, aceptas que la información que proporcionas para el registro se almacena exclusivamente en tu navegador.
            </p>

            <button
              type="submit"
              className="mt-6 w-full bg-red-600 text-white font-semibold py-3 rounded-xl shadow-lg 
                         hover:bg-red-700 transition-colors transform hover:scale-105"
            >
              Registrarse
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    try {
      const storedUser = localStorage.getItem('userData');

      if (storedUser) {
        const user = JSON.parse(storedUser);

        if (user.email === email) {
          localStorage.setItem('userEmail', email);
          window.dispatchEvent(new Event('storage'));
          router.push('/');
          return;
        }
      }
      localStorage.setItem('userEmail', email);
      router.push('/register');

    } catch (e) {
      console.error("Error al procesar el login:", e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white p-4">
      <div className="bg-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-sm text-center border border-gray-800">
        <form onSubmit={handleContinue} className="space-y-6">
          <h2 className="text-xl font-bold mb-8">Ingresar / Registrarse</h2>
          <p className="text-3xl font-bold text-red-500 hover:text-red-400 transition-colors">Miguel TV</p>
          
          <div className="text-left">
            <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="email">
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-red-700 transition-colors transform hover:scale-105"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}

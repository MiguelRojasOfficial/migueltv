import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientSplash from "@/components/ClientSplash";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-zinc-900 text-white font-sans">
        <ClientSplash>
          <Navbar />
          <div className="flex flex-row min-h-screen">
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
          <Footer />
        </ClientSplash>
      </body>
    </html>
  );
}
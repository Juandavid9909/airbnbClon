import './globals.css';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modals/LoginModal';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
import ToasterProvider from './providers/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'juanvarela-airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />

          <SearchModal />

          <RentModal />

          <LoginModal />

          <RegisterModal />

          <Navbar currentUser={ currentUser } />
        </ClientOnly>

        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}

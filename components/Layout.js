/* eslint-disable react/no-unescaped-entities */
// fonts
import { Sora } from '@next/font/google';


// font settings
const sora = Sora({
  subsets: ['latin'],

  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto md:overflow-y-hidden `}
    >
      <Head>
        <title>Muntasir's Portfolio</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;

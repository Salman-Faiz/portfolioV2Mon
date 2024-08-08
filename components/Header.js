// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
            <h1 className='font-bold text-2xl hover:text-accent' src={''}
              width={220}
              height={48}
              alt=''
              priority="true">Muntasir Al Abid</h1>

          </Link>
          <Link href="https://drive.google.com/file/d/1m4NphRZekeCJC7_B79Ju8_sHlAuFoTSk/view?usp=sharing" Target='#' className='hover:text-accent'>Download Resume</Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

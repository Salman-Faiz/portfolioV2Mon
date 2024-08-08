// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiTwitterLine,

} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href="https://www.linkedin.com/in/muntasir-al-abid-b62247172/" target='#' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href="https://github.com/muntasirabid" target='#' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href="https://www.facebook.com/muntasiralabid/" target='#' className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href='https://www.instagram.com/muntasir.____/profilecard/?igsh=enB0em11dGF6eHNp' target='#' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link> */}

    </div>
  );
};

export default Socials;

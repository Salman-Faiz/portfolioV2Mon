// next image
import Image from 'next/image';
import img from "../public/image.png"

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={img}
        width={300}
        height={300}
        alt=''
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;

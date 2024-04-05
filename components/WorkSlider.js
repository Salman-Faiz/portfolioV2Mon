// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/robotbulls.jpg',
        },
        {
          title: 'title',
          path: '/blackCats.jpg',
        },
        {
          title: 'title',
          path: '/photography1.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      <SwiperSlide >
        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' >
            <div className='flex items-center justify-center relative overflow-hidden group'>
              {/* image */}
              <Image src='/robotbulls.jpg' width={500} height={300} alt='' />
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
              {/* title */}
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                <a target='#' href="https://robotbulls.eth.limo">
                  <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    {/* title part 1 */}
                    <div className='delay-100'>LIVE</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                      PROJECT
                    </div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </div>
                </a>
              </div>

            </div>

          </div>

          {/* 2nd project */}

          <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'  >
            <div className='flex items-center justify-center relative overflow-hidden group'>
              {/* image */}
              <Image src='/blackCats.jpg' width={500} height={300} alt='' />
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
              {/* title */}
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                <a target='#' href="https://blackcats-team.web.app/">
                  <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    {/* title part 1 */}
                    <div className='delay-100'>LIVE</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                      PROJECT
                    </div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* 3rd project */}

          <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' >
            <div className='flex items-center justify-center relative overflow-hidden group'>
              {/* image */}
              <Image src='/photography1.jpg' width={500} height={300} alt='' />
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
              {/* title */}
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                <a target='#' href="https://photographer-client-side.web.app/">
                  <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    {/* title part 1 */}
                    <div className='delay-100'>LIVE</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                      PROJECT
                    </div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* 4th project */}

          <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' >
            <div className='flex items-center justify-center relative overflow-hidden group'>
              {/* image */}
              <Image src='/doctr.jpg' width={500} height={300} alt='' />
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
              {/* title */}
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                <a target='#' href="https://med-ease-solutions.web.app/">
                  <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    {/* title part 1 */}
                    <div className='delay-100'>LIVE</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                      PROJECT
                    </div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </SwiperSlide>

      {/* 2nd slide */}
      <SwiperSlide >

        {/* 5th project */}

        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' >
            <div className='flex items-center justify-center relative overflow-hidden group'>
              {/* image */}
              <Image src='/robotbulls.jpg' width={500} height={300} alt='' />
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
              {/* title */}
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                <a target='#' href="https://robotbulls.eth.limo">
                  <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    {/* title part 1 */}
                    <div className='delay-100'>LIVE</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                      PROJECT
                    </div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      <BsArrowRight />
                    </div>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </div>

      </SwiperSlide>

    </Swiper>
  );
};

export default WorkSlider;

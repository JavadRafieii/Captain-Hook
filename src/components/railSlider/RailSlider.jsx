import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './style.css';

function RailSlider({ images }) {
    const { src1, src2, src3 } = images;
    return (
        <div className="section-rail relative bg-stick-slider bg-cover bg-no-repeat pt-[30px] pb-[20px]">
            <img src={src1} alt="gear" loading="lazy" className="hidden lg:block w-20 absolute z-10 -top-12 left-[calc(23%-2.5rem)]" />
            <img src={src2} alt="gear" loading="lazy" className="w-20 absolute z-10 -top-12 left-[calc(50%-2.5rem)]" />
            <img src={src3} alt="gear" loading="lazy" className="hidden lg:block w-20 absolute z-10 -top-12 left-[calc(78%-2.5rem)]" />
            <Swiper
                slidesPerView={1.3}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                speed={1500}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3.7,
                        spaceBetween: 25,
                    },
                    1280: {
                        slidesPerView: 3.7,
                        spaceBetween: 25,
                    },
                }}
                modules={[Autoplay]}
                className="rail-slider"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default RailSlider;
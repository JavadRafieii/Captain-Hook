import { useEffect } from "react";
import Container from "../container/Container";
import DATA from "../../../data/data";
import AOS from 'aos'
import "./style.css";
import 'aos/dist/aos.css';

function Roadmap() {

    useEffect(() => {
        AOS.init();
    }, [])


    return ( 
        <div className="Roadmap bg-purple-gradient py-20 xl:py-40">
            <Container>
                <h3 className="relative z-20 ribeye-regular text-white text-4xl text-center mb-20 xl:mb-40">Roadmap</h3>
                <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 sm:gap-5 xl:gap-0">
                    {DATA.ROADMAP.map(item => (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={item.id * 100} data-aos-duration="1000" data-aos-offset="300">
                            <h4 className="ribeye-regular text-white text-2xl lg:text-xl xl:text-2xl text-center">{item.title}</h4>
                            <p className="text-white text-xl text-center my-3">{item.subtitle1}</p>
                            <h4 className="ribeye-regular text-white text-2xl lg:text-xl xl:text-[1.1rem] text-center">{item.subtitle2}</h4>
                            <div className="h-[320px] w-[300px] xl:w-auto mx-auto mt-5 p-3 pl-5 pt-0 hover:scale-[1.1] transition-[1s] cursor-default" data-phase={item.title}>
                                <ul className="h-full open-sans-Medium text-smoky-gray text-base text-center flex flex-col items-center justify-center gap-2">
                                    {item.content.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
     );
}

export default Roadmap;
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import {ReactNode, useRef} from 'react';


const FadeIn = ({children} : {children:ReactNode, dur:Number}) =>{
    const re = useRef(null);
    useGSAP(() =>{
        gsap.set(re.current, {opacity: 0});

        gsap.to(re.current, {
            opacity: 1,
            duration: 4,
            ease: 'power2.out',
        });
    }, {scope: re
    });

    return (
        <span ref={re}>
            {children}
        </span>
    )
};

export default FadeIn;
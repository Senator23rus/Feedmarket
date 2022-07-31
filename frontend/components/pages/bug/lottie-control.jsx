import { useEffect, useRef, useState } from 'react';
import { LottiePlayer } from 'lottie-web';
import animationData from './animate.json'

export const Animation = () => {
    const ref = useRef(null);
    /**
     * @type {React.MutableRefObject<LottiePlayer|null>}
     */
    const [lottie, setLottie] = useState(null);

    useEffect(() => {
        import('lottie-web').then((Lottie) => setLottie(Lottie.default));
    }, []);

    useEffect(() => {
        if (lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                // renderer: 'svg',
                loop: true,
                autoplay: true,
                // path to your animation file, place it inside public folder
                animationData
            });
            return () => animation.destroy();
        }
    }, [lottie]);


    return (
        <div style={{maxHeight:300,height:'100%',width:'100%',maxWidth:643.81,margin:' 100px auto',borderRadius:'0 0 50% 50%',overflow:'hidden'}} ref={ref} />
    );
};
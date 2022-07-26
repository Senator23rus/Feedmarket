import classes from './Carousel.module.scss';
import classNames from "classnames";
import chevronLeft from "../../../../public/welcomePage/chevrone_left.svg";
import chevronRight from "../../../../public/welcomePage/chevron_right.svg";
import Image from "next/image";
import CommentCard from "../commentCard";
import {useEffect, useRef} from "react";

const Carousel = ({cards}) => {

    let mountPoint = useRef();
    let mountPointWrapper = useRef();

    const chevronLeftHandler = (e) => {
        // console.log(Math.abs(+mountPoint.current.style.left.replace('px', '')) + mountPointWrapper.current.clientWidth <= mountPoint.current.clientWidth, Math.abs(+mountPoint.current.style.left.replace('px', '')),
        //     mountPointWrapper.current.clientWidth, mountPoint.current.clientWidth)
        // console.log(mountPoint.current.getBoundingClientRect(), mountPointWrapper.current.getBoundingClientRect())
        if ((Math.abs(+mountPoint.current.style.left.replace('px', '')) + mountPointWrapper.current.clientWidth) <= mountPoint.current.clientWidth)
        {
            mountPoint.current.style.setProperty('left', +mountPoint.current.style.left.replace('px', '') - mountPointWrapper.current.clientWidth - 24 + 'px');
        } else {
            mountPoint.current.style.setProperty('left', -mountPoint.current.clientWidth + mountPointWrapper.current.clientWidth + 'px');
        }
        console.log(mountPoint.current.offsetLeft)
    }

    const chevronRightHandler = (e) => {
        if (+mountPoint.current.style.left.replace('px', '') <= 0) {

        }
        mountPoint.current.style.setProperty('left',+mountPoint.current.style.left.replace('px', '') + mountPointWrapper.current.clientWidth + 24 + 'px');
    }

    const scrollHandler = (e) => {
        console.log(+mountPoint.current.style.left.replace('px', '') <= 0 && -e.deltaY < 0, +mountPointWrapper.current.style.left.replace('px', '') )
        console.log(mountPoint.current.getBoundingClientRect().right >= 0 && e.deltaY > 0, mountPointWrapper.current.getBoundingClientRect(), e.deltaY )
        // if ((+mountPoint.current.style.left.replace('px', '') <= 0 && -e.deltaY < 0) &&
        //     (mountPoint.current.getBoundingClientRect().right >= 0 && e.deltaY > 0)){
            let a = e.target.closest('.wrap').children[0];

            // console.log(e, a)

            mountPoint.current.style.setProperty('left', +mountPoint.current.style.left.replace('px', '') + -e.deltaY + 'px');

            e.preventDefault();
        // }
    }

    useEffect(() => {
        mountPoint.current.style.setProperty('left', '0px');
        mountPointWrapper.current.style.setProperty('height', mountPoint.current.getBoundingClientRect().height + 'px');
        mountPointWrapper.current.addEventListener('wheel', scrollHandler, {passive: false});

        return () => {
            mountPointWrapper.current.removeEventListener('wheel', scrollHandler, {passive: false});
        }
    }, [])

    return (
        <div>
            <div className={classes.comments__wrapper}>
                <h2 className={classNames(classes.sectionTitle, classes.comments__title)}>Партнеры о маркетплейсе</h2>
                <div className={classes.chevrons}>
                    <button className={classes.chevron} onClick={chevronLeftHandler}>
                        <Image
                            alt="image"
                            src={chevronLeft}
                        />
                    </button>
                    <button className={classes.chevron} onClick={chevronRightHandler}>
                        <Image
                            alt="image"
                            src={chevronRight}
                        />
                    </button>
                </div>
            </div>

            <div ref={mountPointWrapper} className={classNames('wrap', classes.mountPointWrapper)}>
                <div className={classes.mountPoint} ref={mountPoint}>
                    {cards.map((item, index) => {
                        return (
                            <CommentCard commentText={item.commentText} userName={item.userName} userImage={item.userImage} userDescription={item.userDescription} key={index}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
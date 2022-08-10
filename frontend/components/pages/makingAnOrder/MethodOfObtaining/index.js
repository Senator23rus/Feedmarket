import classes from 'components/pages/makingAnOrder/MethodOfObtaining/MethodOfObtaining.module.scss';
import SectionWrapper from "components/pages/makingAnOrder/sectionWrapper";
import {useState} from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import MyToggleButton from "components/pages/makingAnOrder/toggleButton";
import Image from 'next/image';
import pin from 'public/makingAnOrderPage/Pin.svg';
import user from 'public/makingAnOrderPage/user.svg';
import settings from 'public/makingAnOrderPage/settings.svg';

const MethodOfObtaining = () => {
    let [value, setValue] = useState('1');

    let style = {
        '&.MuiToggleButton-root.Mui-selected': {
            color: 'rgba(16, 150, 72, 0.6)', background: 'none', borderRadius: '8px'
        },
        '&.MuiToggleButton-root.Mui-selected span': {
            background: 'none'
        },
        '&.MuiToggleButton-root.Mui-selected .btn': {
            background: "rgba(16, 150, 72, 0.3)"
        },
        };

    return(
        <SectionWrapper className={classes.wrapper}>
            <div className={classes.title__wrapper}>
                <h2 className={classes.title}>Способ получения</h2>

                <ToggleButtonGroup
                    orientation="horizontal"
                    exclusive
                    value={value}
                    onChange={(e, elem) => {
                        if (elem !== null)
                            setValue(elem);
                    }}
                    className={classes.group}
                    >
                    <ToggleButton classes={{
                        root: classes.root
                    }} sx={style} value={'1'}>
                        <MyToggleButton className="btn">
                            Самовывоз
                        </MyToggleButton>
                    </ToggleButton>
                    <ToggleButton classes={{
                        root: classes.root
                    }} sx={style} value={'2'}>
                        <MyToggleButton className="btn">
                            Доставка
                        </MyToggleButton>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div>
                <div className={classes.condition}>
                   <div className={classes.condition__img}>
                       <Image src={pin}/>
                   </div>
                    <div className={classes.condition__text}>
                        <h3 className={classes.condition__title}>Пункт выдачи</h3>
                        <p className={classes.condition__subtitile}>Россия, Краснодар, Центральный округ, микрорайон центральный, Красная улица, 23/5</p>
                        <p className={classes.condition__metaData}>Срок хранения: 66 дней</p>
                    </div>
                    <button className={classes.condition__button}>
                        <Image src={settings}/>
                    </button>
                </div>
                <span className={classes.line}/>
                <div className={classes.condition}>
                    <div className={classes.condition__img}>
                        <Image src={user}/>
                    </div>
                    <div className={classes.condition__text}>
                        <h3 className={classes.condition__title}>Константинопольский Константин</h3>
                        <p className={classes.condition__subtitile}>+7 (123) 456-78-90</p>
                    </div>
                    <button className={classes.condition__button}>
                        <Image src={settings}/>
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default MethodOfObtaining;
import Layout from 'components/common/layouts';
import classes from 'styles/pages/my_store_test.module.scss';
import { useEffect, useRef, useState } from 'react';
import cards from 'mock/cards.json';
import Paginations from 'UI/pagination/pagination';
import Button from 'UI/button';
import Checkbox from 'UI/checkbox';
import Image from 'next/image';

const Details_product = () => {


    return (
        <Layout>
            <div className={classes.subheader__nav}>
                <button className={classes.subheader__btn}>Список&nbsp;товаров</button>
                <button className={classes.subheader__btn}>Склады</button>
                <button className={classes.subheader__btn}>Финансы</button>
                <button className={classes.subheader__btn}>Аналитика</button>
                <button className={classes.subheader__btn}>Реклама</button>
                <button className={classes.subheader__btn}>Маркетинг</button>
                <button className={classes.subheader__btn}>Рейтинги</button>
                <button className={classes.subheader__btn}>Отзывы</button>
            </div>

            <div className={classes.product__selection}>
                <Button factor={'green'} size={'m'}>
                    <div className={classes.product__btn_wrapper}>
                        <div className={classes.product__btn_text}>
                            Добавить товар
                        </div>
                            <svg className={classes.product__btn_plus} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.8333C13.2217 15.8333 15.8333 13.2217 15.8333 10C15.8333 6.77834 13.2217 4.16667 10 4.16667C6.77834 4.16667 4.16667 6.77834 4.16667 10C4.16667 13.2217 6.77834 15.8333 10 15.8333ZM10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85787 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85787 17.5 10 17.5Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 6.6665C10.4606 6.6665 10.8337 6.96498 10.8337 7.33317L10.8337 12.6665C10.8337 13.0347 10.4606 13.3332 10.0003 13.3332C9.54009 13.3332 9.16699 13.0347 9.16699 12.6665L9.16699 7.33317C9.16699 6.96498 9.54009 6.6665 10.0003 6.6665Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.333 9.99984C13.333 10.4601 13.0345 10.8332 12.6663 10.8332L7.33301 10.8332C6.96482 10.8332 6.66634 10.4601 6.66634 9.99984C6.66634 9.5396 6.96482 9.1665 7.33301 9.1665L12.6663 9.1665C13.0345 9.1665 13.333 9.5396 13.333 9.99984Z" fill="white" />
                            </svg>
                    </div>
                </Button>
                <div className={classes.product__wrapper}>
                    <span className={classes.product__selection_label}>Выбрать все</span>
                    <Checkbox />
                </div>
            </div>

            <div className={classes.store__grid}>

                <div className={classes.store__status_wrapper}>
                    <ul className={classes.store__status_list}>
                        <li className={classes.store__status_item}>
                            Все товары
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            В продаже
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            Готовы к продаже
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            С ошибками
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            Плохое описание
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            Без фото
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            Снятые с продажи
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            В архиве
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                        <li className={classes.store__status_item}>
                            Черновики
                            <span className={classes.store__status_list_counter}>999</span>
                        </li>
                    </ul>
                </div>

                <div className={classes.store__products_list}>
                    <div className={classes.store__product}>
                        <Image src={'/card/brown_card.svg'} width={85} height={120} alt={'product'} />
                        <div className={classes.store__product__descr}>
                            <p className={classes.store__descr_title}>
                                Premix для птицы, возможно длинное описание, которое помещается в 2-3 строки...Premix для птицы, возможно длинное описание, которое помещается в 2-3 строки...
                            </p>
                            <div className={classes.store__descr_subtitle}>
                                <div className={classes.store__descr_characteristics}>
                                    <div className={classes.store__descr_left}>
                                        <p className={classes.store__descr_text}>Артикул: PremixBird12</p>
                                        <p className={classes.store__descr_text}>Штрихкод: VIT45068149MEK</p>
                                    </div>
                                    <div className={classes.store__descr_center}>
                                        <p className={classes.store__descr_text}> Дата создания: 22.05.2022  19:16</p>
                                        <p className={classes.store__descr_text}>Статус: В продаже</p>
                                    </div>
                                    <div className={classes.store__descr_right}>
                                        <p className={classes.store__descr_text}>Количество: 215</p>
                                        <p className={classes.store__descr_text}>Вес (кг): 10</p>
                                    </div>
                                </div>
                                <div className={classes.store__descr_price}>
                                    <p className={classes.store__descr_text}>Цена:</p>
                                    <p className={classes.store__descr_coast}>10 599</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.store__descr_check}>
                            <Checkbox />
                            <span className={classes.store__descr_coast}><svg width="22" height="5" viewBox="0 0 22 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.333496 2.47488C0.333496 1.87379 0.523526 1.3693 0.903585 0.961421C1.28364 0.542804 1.79872 0.333496 2.44883 0.333496C3.10893 0.333496 3.62401 0.542804 3.99407 0.961421C4.37413 1.3693 4.56416 1.87379 4.56416 2.47488C4.56416 3.07597 4.37413 3.58046 3.99407 3.98834C3.62401 4.39622 3.10893 4.60016 2.44883 4.60016C1.79872 4.60016 1.28364 4.39622 0.903585 3.98834C0.523526 3.58046 0.333496 3.07597 0.333496 2.47488Z" fill="#414141" />
                                <path d="M8.88483 2.47488C8.88483 1.87379 9.07486 1.3693 9.45492 0.961421C9.83498 0.542805 10.3501 0.333497 11.0002 0.333497C11.6603 0.333497 12.1753 0.542805 12.5454 0.961421C12.9255 1.3693 13.1155 1.87379 13.1155 2.47488C13.1155 3.07597 12.9255 3.58046 12.5454 3.98834C12.1753 4.39622 11.6603 4.60016 11.0002 4.60016C10.3501 4.60016 9.83498 4.39622 9.45492 3.98834C9.07486 3.58046 8.88483 3.07597 8.88483 2.47488Z" fill="#414141" />
                                <path d="M17.4362 2.47488C17.4362 1.87379 17.6262 1.3693 18.0063 0.961422C18.3863 0.542805 18.9014 0.333497 19.5515 0.333497C20.2116 0.333497 20.7267 0.542805 21.0967 0.961422C21.4768 1.3693 21.6668 1.87379 21.6668 2.47488C21.6668 3.07597 21.4768 3.58046 21.0967 3.98834C20.7267 4.39622 20.2116 4.60016 19.5515 4.60016C18.9014 4.60016 18.3863 4.39622 18.0063 3.98834C17.6262 3.58046 17.4362 3.07597 17.4362 2.47488Z" fill="#414141" />
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <Paginations />
        </Layout>
    );
};

export default Details_product;

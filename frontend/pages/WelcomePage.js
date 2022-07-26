import classes from '../styles/pages/welcome-page.module.scss';
import Layout from "../components/common/layouts";
import Button from "../UI/button";
import {Grid} from "@mui/material";
import image1 from "../public/welcomePage/character_1.svg";
import image2 from "../public/welcomePage/character_2.svg";
import image3 from "../public/welcomePage/character_3.svg";
import stepsFon from "../public/welcomePage/staps_img.jpg";
import helpAtTheStartFon from "../public/welcomePage/help_at_the_start_img.jpg";
import checkboxImg from "../public/welcomePage/checkbox.svg";
import footerFon from "../public/welcomePage/footer_img.jpg";
import Image from "next/image";
import classNames from "classnames";
import Carousel from 'components/pages/welcomePage/Carousel/index';

/**
 *
 * @description Главная страница сайта
 *
 * @returns {JSX.Element}
 * @constructor
 */

const cards = [
    {commentText: 'Классно быть партнером Feed Market. Я развиваю компанию во всех направлениях: от продаж своих товаров на маркетплейсе до ведения своих пунктов выдачи и помощи другим предпринимателям в выходе на площадку Feed Market и другие маркетплейсы.',
    userName: 'Юзернейм Юзернеймович',
    userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
    userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
    {commentText: 'Feed Market приносит нам большую часть оборота с маркетплейсов.',
        userName: 'Юзернейм Юзернеймович',
        userDescription: 'Генеральный директор ООО «Компания нейм», селлер в категориях «Категория нейм», «Категория нейм 2»',
        userImage: '/../public/welcomePage/Ellipse 632.png'},
];

const WelcomePage = () => {
  return (
      <Layout>
          <div className={classes.hidden}>
              <section className={classes.welcome}>
                  <div className={classes.welcome__title}>
                      <h1><span className={classes.subtitle}>Объединяем бизнес и покупателя</span>
                          <p className={classes.title}>Разместите ваши товары на Feed Market уже сегодня</p></h1>
                      <div className={classes.btn__center}>
                          <Button size={'l'} factor={'green'}>Стать продавцом</Button>
                      </div>
                  </div>

                  <Grid container spacing={2} alignItems="stretch">
                      <Grid item xs={4}>
                          <div className={classes.characterItem}>
                              <div className={classes.characterItem__img}>
                                  <Image src={image1}  layout={'intrinsic'}  objectFit="fill" alt="image"/>
                              </div>
                              <div className={classes.characterItem__text}>
                                  <span>Привлекаем</span>
                                  для вас покупателей
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={4}>
                          <div className={classes.characterItem}>
                              <div className={classes.characterItem__img}>
                                  <Image src={image2}  layout={'intrinsic'}  objectFit="fill" alt="image"/>
                              </div>
                              <div className={classes.characterItem__text}>
                                  <span>Знаем, кому предложить</span> ваши товары
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={4}>
                          <div className={classes.characterItem}>
                              <div className={classes.characterItem__img}>
                                  <Image src={image3}  layout={'intrinsic'}  objectFit="fill" alt="image"/>
                              </div>
                              <div className={classes.characterItem__text}>
                                  <span>Создаём инструменты</span>
                                  для развития продаж
                              </div>
                          </div>
                      </Grid>
                  </Grid>
              </section>

              <section className={classes.steps}>
                  <div className={classes.fon}>
                      <div className={classes.image__wrapper}>
                          <Image
                              alt="image"
                              src={stepsFon}
                              layout="fill"
                              objectFit="cover"
                              quality={100}
                          />
                      </div>
                  </div>

                  <div className={classes.steps__body}>
                      <h2 className={classes.stepsBody__title}>3 шага для старта продаж</h2>

                      <Grid container>
                          <Grid item xs={3}>
                              <div className={classes.stepsBody__step}>
                                  <div className={classes.stepsBody__stepWrapper}>
                                      <div className={classes.stepsBody__stepText}>1</div>
                                      <div className={classes.stepsBody__stepConnections}/>
                                  </div>
                                  <p><span>Зарегистрируйтесь</span>
                                      в личном кабинете</p>
                              </div>
                          </Grid>
                          <Grid item xs={3}>
                              <div className={classes.stepsBody__step}>
                                  <div className={classes.stepsBody__stepWrapper}>
                                      <div className={classes.stepsBody__stepText}>2</div>
                                      <div className={classes.stepsBody__stepConnections}/>
                                  </div>
                                  <p><span>Выберите товары</span>
                                      и загрузите их в систему</p>
                              </div>
                          </Grid>
                          <Grid item xs={3}>
                              <div className={classes.stepsBody__step}>
                                  <div className={classes.stepsBody__stepWrapper}>
                                      <div className={classes.stepsBody__stepText}>3</div>
                                  </div>
                                  <p>Получайте первые заказы</p>
                              </div>
                          </Grid>
                      </Grid>
                  </div>

                  <div className={classes.steps__buttonWrapper}>
                      <Button size={'l'} factor={'yellow'}>Начать продавать</Button>
                  </div>
              </section>

              <section className={classes.schemesOfWork}>
                  <h2 className={classNames(classes.sectionTitle, classes.schemesOfWork__title)}>Схемы работы на ваш выбор</h2>
                  <p className={classes.schemesOfWork__subTitle}>Предлагаем разные варианты логистики, чтобы вы могли быстро подстроить работу с маркетплейсом
                      под особенности своего бизнеса и ассортиментa</p>

                  <Grid container spacing={2}>
                      <Grid item xs={3}>
                          <div className={classes.schemesOfWork__scheme}>
                              <h2>Экспресс</h2>
                              <h3>Склад и доставка – ваши</h3>
                              <p className={classes.item1}>Собираете заказы не дольше часа, передаёте курьеру для быстрой доставки в пределах города.</p>
                              <h3 className={classes.list}>Как отгружать товар</h3>
                              <ul className={classes.item1}>
                                  <li>На условиях вашего перевозчика</li>
                              </ul>
                              <h3>Кто упаковывает заказ</h3>
                              <p>Продавец</p>
                              <h3 className={classes.list}>Кто доставляет</h3>
                              <ul>
                                  <li>Продавец</li>
                                  <li>Сторонний перевозчик</li>
                                  <li>Партнеры Feed Market</li>
                              </ul>
                          </div>
                      </Grid>
                      <Grid item xs={3}>
                          <div className={classes.schemesOfWork__scheme}>
                              <h2>Стандартная</h2>
                              <h3>Склад и доставка – ваши</h3>
                              <p><span>Мы выступаем торговой площадкой,</span>
                                  <span>а размещение на складе, сборка</span>
                                  <span>и доставка заказов — на вашей</span> стороне.</p>
                              <h3 className={classes.list}>Как отгружать товар</h3>
                              <ul>
                                  <li>На условиях вашего перевозчика</li>
                                  <li>На условиях вашего перевозчика</li>
                                  <li>На условиях вашего перевозчика</li>
                              </ul>
                              <h3>Кто упаковывает заказ</h3>
                              <p>Продавец</p>
                              <h3 className={classes.list}>Кто доставляет</h3>
                              <ul>
                                  <li>Продавец</li>
                                  <li>Сторонний перевозчик</li>
                                  <li>Партнеры Feed Market</li>
                              </ul>
                          </div>
                      </Grid>
                      <Grid item xs={3}>
                          <div className={classes.schemesOfWork__scheme}>
                              <h2>Золотая</h2>
                              <h3>Склад и доставка – ваши</h3>
                              <p>Размещаете товары на своём складе, собираете заказы и передаёте готовые упаковки в Feed Market для доставки покупателям.</p>
                              <h3 className={classes.list}>Как отгружать товар</h3>
                              <ul>
                                  <li>Отгружаетесь в сортцентре</li>
                                  <li>Сдаёте в ближайший пункт</li>
                                  <li>Передаёте заказы курьеру</li>
                              </ul>
                              <h3>Кто упаковывает заказ</h3>
                              <p>Продавец</p>
                              <h3 className={classes.list}>Кто доставляет</h3>
                              <ul className={classes.item1}>
                                  <li>Feed Market</li>
                              </ul>
                          </div>
                      </Grid>
                      <Grid item xs={3}>
                          <div className={classes.schemesOfWork__scheme}>
                              <h2>Платиновая</h2>
                              <h3>Склад и доставка – ваши</h3>
                              <p>Размещение на складе, сборка
                                  и доставка товаров — на нашей стороне. Вам остаётся лишь передать нам товары.</p>
                              <h3 className={classes.list}>Как отгружать товар</h3>
                              <ul className={classes.item2}>
                                  <li>Hа ближайший склад Feed Market</li>
                                  <li>Hа любой склад Feed Market
                                      в России через кросс-док</li>
                              </ul>
                              <h3>Кто упаковывает заказ</h3>
                              <p>Продавец</p>
                              <h3 className={classes.list}>Кто доставляет</h3>
                              <ul className={classes.item1}>
                                  <li>Feed Market</li>
                              </ul>
                          </div>
                      </Grid>
                  </Grid>
              </section>

              <section className={classes.steps}>
                  <div className={classes.fon}>
                      <div className={classes.image__wrapper}>
                          <Image
                              alt="image"
                              src={helpAtTheStartFon}
                              layout="fill"
                              objectFit="cover"
                              quality={100}
                          />
                      </div>
                  </div>

                  <div className={classes.steps__body}>
                      <h2 className={classes.stepsBody__title}>Поможем на старте</h2>

                      <Grid container spacing={3}>
                          <Grid item xs={4}>
                              <div className={classes.stepsBody__step}>
                                  <div className={classes.stepsBody__imgWrapper}>
                                      <Image
                                          alt="image"
                                          src={checkboxImg}
                                      />
                                  </div>
                                  <p>Помощь с подключением к площадке — <span className={classes.color}>сертифицированные партнёры</span> помогут
                                      с выходом на маркетплейс</p>
                              </div>
                          </Grid>
                          <Grid item xs={4}>
                              <div className={classes.stepsBody__step}>
                                  <div className={classes.stepsBody__imgWrapper}>
                                      <Image
                                          alt="image"
                                          src={checkboxImg}
                                      />
                                  </div>
                                  <p>Бесплатное размещение на складе Feed Market
                                      в первый месяц — для любых товаров</p>
                              </div>
                          </Grid>
                          <Grid item xs={4}>
                              <div className={classes.stepsBody__step}>
                                  <div className={classes.stepsBody__imgWrapper}>
                                      <Image
                                          alt="image"
                                          src={checkboxImg}
                                      />
                                  </div>
                                  <p>Возможность получить финансирование — выгодные условия кредитования на платформе Feed Market</p>
                              </div>
                          </Grid>
                      </Grid>
                  </div>

                  <div className={classes.steps__buttonWrapper}>
                      <Button size={'l'} factor={'yellow'}>Начать продавать</Button>
                  </div>
              </section>

              <section className={classes.comments}>
                  <Carousel cards={cards}/>
              </section>

              <section className={classes.steps}>
                  <div className={classes.fon}>
                      <div className={classes.image__wrapper}>
                          <Image
                              alt="image"
                              src={footerFon}
                              layout="fill"
                              objectFit="cover"
                              quality={100}
                          />
                      </div>
                  </div>

                  <div className={classes.steps__body}>
                      <h2 className={classes.stepsBody__title}>Остались вопросы?</h2>

                      <p className={classes.footer__text}>Напишите нашему чат-боту, он всё знает. А если нужно больше деталей, ищите ответы в <span>базе знаний</span>.</p>
                  </div>

                  <div className={classNames(classes.steps__buttonWrapper, classes.footer__wrapper)}>
                      <Button size={'l'} factor={'yellow'}>Написать боту</Button>
                  </div>
              </section>
          </div>
      </Layout>
  );
}

export default WelcomePage;
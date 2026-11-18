import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
/*___________________________________HAVE_______________________*/
const haveData = [
    {
        id: 1,
        image: 'have/heart.webp',
        title: 'Tasty',
        text: 'We have the most delicious coffee',
    },
    {
        id: 2,
        image: 'have/rocket.webp',
        title: 'Fast',
        text: 'Our cafe will serve you quickly',
    },
    {
        id: 3,
        image: 'have/money.webp',
        title: 'Available',
        text: 'Cafe will serveat the most pleasant prices',
    }
]
function HaveItem({ image, title, text }) {
    return (
        <div className="have__item">
            <div className="have__icon-wrapper">
                <div className="have__circle"></div>
                <img src={image} alt={title} className="have__img" loading="lazy"/>
            </div>
            <div className="have__item-card">
                <h3 className="have__title">{title}</h3>
                <p className="have__text">{text}</p>
            </div>
        </div>
    )
}
/*___________________________________HAVE-END_______________________*/

/*___________________________________SWIPER_______________________*/
const swiperData = [
    {
        id: 1,
        image: 'products/late.webp',
        title: 'Late',
        text: 'Our cafe will serve you quickly',
        price: '7,45$',
        size: '330 ml',
    },
    {
        id: 2,
        image: 'products/cappuccino.webp',
        title: 'Cappuccino',
        text: 'Our cafe will serve you quickly',
        price: '8,45$',
        size: '380 ml',
    },
    {
        id: 3,
        image: 'products/machiato.webp',
        title: 'Machiato',
        text: 'Our cafe will serve you quickly',
        price: '6,45$',
        size: '430 ml',
    },
    {
        id: 4,
        image: 'products/late.webp',
        title: 'Late',
        text: 'Our cafe will serve you quickly',
        price: '7,45$',
        size: '330 ml',
    },
    {
        id: 5,
        image: 'products/cappuccino.webp',
        title: 'Cappuccino',
        text: 'Our cafe will serve you quickly',
        price: '8,45$',
        size: '380 ml',
    },
    {
        id: 6,
        image: 'products/machiato.webp',
        title: 'Machiato',
        text: 'Our cafe will serve you quickly',
        price: '6,45$',
        size: '430 ml',
    },
]

function SwiperItem({ image, title, text, price, size }) {
    return (
        <div className="item__card">
            <div className="item__img-card">
                <img src={image} alt={title} className="item__img" loading="lazy" />
            </div>
            <span className="item__name">{title}</span>
            <span className="item__text">{text}</span>
            <p className="item__price">{price}<span>{size}</span></p>
            <button className="item__btn">Buy Product</button>
        </div>
    )
}
/*___________________________________SWIPER-END_______________________*/

const eventsData = [
    {
        id: 1,
        image: 'events/two-coffee.webp',
        name: 'TWO COFFEE FOR 1 PRICE',
    },
    {
        id: 2,
        image: 'events/kitchen.webp',
        name: 'KITCHEN TOUR',
    },
    {
        id: 3,
        image: 'events/three-coffee.webp',
        name: 'FREE COFFEE FOR 3 COFFEE',
    },
    {
        id: 4,
        image: 'events/instagram.webp',
        name: 'OUR INSTAGRAM',
    },
    {
        id: 5,
        image: 'events/choose-us.webp',
        name: 'WHERE ARE YOU CHOOSE US?',
    },
]

function EventsItem({ image, name }) {
    return (
        <div className="events__card">
            <img src={image} alt={name} className="events__card-bg" loading="lazy" />
            <div className="events__item">
                <h3 className="events__name">{name}</h3>
                <a href="#" className="events__btn">More</a>
            </div>
        </div>
    )
}



function VideoBlock() {
    const [isPLaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (isPLaying && videoRef.current && !videoRef.current.contains(event.target)) {
                setIsPlaying(false);
            }
        }
        if (isPLaying) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPLaying]);

    return (
        <div className="delicious__video" ref={videoRef}>
            {!isPLaying ? (
                <div className="delicious__video-poster" >
                    <img className="delicious__video-img" src="delicious/video-poster/video-poster.webp" alt="Video cover" loading="lazy"/>
                    <button className="delicious__video-btn" onClick={() => setIsPlaying(true)}>
                        <span>▶</span>Cooking Process
                    </button>
                </div>
            ) : (
                <iframe
                    className="video-iframe"
                    src="https://www.youtube.com/embed/qhz-5cgnI7Q?si=qBhPiOZPgUXcjNvC&autoplay=1&mute=1&controls=0"
                    title="Starbucks Commercial"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    )
}



function MainSections() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index,targetId, e) => {
        e.preventDefault();
        setActiveIndex(index);
        
        const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
    };

    return (
        <main>
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__main">
                        <h1 className="hero__title">New Cafe by <span>StarBucks</span></h1>
                        <p className="hero__text">Havсe time to buy the most harmonious drinks in the
                            new Starbucks coffee and don't forget about the discount!</p>
                        <div className="hero__btn btn">
                            <a href="#products" className={`btn__link btn__link-select ${activeIndex === 0 ? 'active' : ''}`} onClick={(e) => handleButtonClick(0,'products', e)}>Select a coffee </a>
                            <a href="#more" className={`btn__link btn__link-more ${activeIndex === 1 ? 'active' : ''}`} onClick={(e) => handleButtonClick(1,'more', e)}>More</a>
                        </div>
                    </div>
                    <div className="hero__image img">
                        <div className="img__cup">
                            <picture>
                                <source media="(max-width: 545px)" srcSet="hero/hero-icon-discount/cup-phone.webp" />
                                <img className="img__main" src="hero/hero-icon-discount/cup.webp" alt="Starbucks Coffee" />
                            </picture>
                            <div className="img__discount-wrapper">
                                <div className="img__discount-block">
                                    <img className="img__discount" src="hero/hero-icon-discount/icon-discount.webp" alt="Starbucks discount" />
                                    <span className="img__discount-text">-45%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="have">
                <div className="have__container">
                    <div className="have__block">
                        <div className="have__sticker">
                            <div className="have__sticker-icon">
                                <picture>
                                    <source media="(max-width: 480px)" srcSet="have/star-phone.webp" />
                                    <img src="have/star.webp" alt="star-icon" />
                                </picture>
                                <span className="have__sticker-text">we <br />have</span>
                            </div>
                        </div>
                        {haveData.map((item) => (
                            <HaveItem
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="delicious">
                <div className="delicious__container">
                    <div className="delicious__image">
                        <div className="delicious__sticker">
                            <picture>
                                <source media="(max-width: 480px)" srcSet="have/star-phone.webp" />
                                <img className="delicious__icon" src="have/star-large.webp" alt="star-icon" />
                            </picture>
                            <span className="delicious__sticker-text">we <br />have</span>
                        </div>
                        <img src="delicious/starbucks-cafe.webp" alt="StarBucks Cafe" className="delicious__img" loading="lazy" />
                    </div>
                    <div className="delicious__about">
                        <h2 className="delicious__title">We make <span>delicious</span></h2>
                        <p className="delicious__text">Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                        <div className="delicious__video">
                            <VideoBlock />
                        </div>
                    </div>
                </div>
            </section>
            <section className="products" id='products'>
                <div className="products__container">
                    <div className="products__top">
                        <h2 className="products__title">New Our <span> Products</span></h2>
                        <p className="products__text">Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
                    </div>
                    <Swiper
                        modules={[Navigation, EffectCoverflow]}
                        effect={'coverflow'}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        centeredSlides={false}
                        watchSlidesProgress={true}
                        coverflowEffect={{
                            rotate: 35,
                            stretch: 0,
                            depth: 80,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, centeredSlides: true, effect: 'slide', },
                            630: { slidesPerView: 2, centeredSlides: false, effect: 'slide', },
                            1000: { slidesPerView: 3, centeredSlides: false, effect: 'coverflow', },
                        }}
                        className="products__slider"
                    >
                        {swiperData.map((item) => (
                            <SwiperSlide key={item.id} className="products__slider-slide item">
                                <SwiperItem
                                    image={item.image}
                                    title={item.title}
                                    text={item.text}
                                    price={item.price}
                                    size={item.size}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="products__slider-btn">
                        <div className="swiper-button-prev"><img src="products/arrow/arrow.svg" alt="" /></div>
                        <div className="swiper-button-next"><img src="products/arrow/arrow.svg" alt="" /></div>
                    </div>
                </div>
            </section>
            <section className="events" id='more'>
                <div className="events__container">
                    <div className="events__top">
                        <h2 className="events__title">Our New <span>Events</span></h2>
                        <p className="events__text">Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                    </div>
                    <div className="events__block">
                        {eventsData.map((item) => (
                            <EventsItem
                                key={item.id}
                                image={item.image}
                                name={item.name}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="contacts">
                <div className="contacts__container">
                    <div className="contacts__block">
                        <div className="contacts__about">
                            <h2 className="contacts__title">Our <span>Contacts</span></h2>
                            <p className="contacts__text">Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>
                            <div className="contacts__btns">
                                <a href="#" className="contacts__btns-link" target="_blank"><img src="contacts/instagram.svg" alt="Our Instagram" rel="noopener noreferrer" />@supercoffee</a>
                                <a href="tel:+7-999-999-99-99" className="contacts__btns-link"><img src="contacts/phone.svg" alt="Phone icon" />+7-999-999-99-99</a>
                            </div>
                        </div>
                        <div className="contacts__image">
                            <div className="contacts__sticker">
                                <picture>
                                    <source media="(max-width: 480px)" srcSet="have/star-phone.webp" />
                                    <img className="contacts__icon" src="have/star-large.webp" alt="star-icon" />
                                </picture>
                                <span className="contacts__sticker-text">we <br />have</span>
                            </div>
                            <img src="contacts/contacts-img.webp" alt="StarBucks Cafe" className="contacts__img" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default MainSections;
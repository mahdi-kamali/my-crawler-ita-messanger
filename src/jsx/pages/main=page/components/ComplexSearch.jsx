import { Icon } from '@iconify/react'
import React, { useState } from 'react'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



const ComplexSearch = () => {


    const categoriesList = [
        "همه",
        "هشتگ",
        "افراد",
        "کانال",
        "گروه",
        "Bio",
        "ID",
    ]


    const fakeContacts = [
        {
            name: "سارا احمدی",
            id: "@sara_ahmadi",
            image: require("../../../../images/complex-search/users/1.avif")
        },
        {
            name: "علی محمدی",
            id: "@ali_mohammadi",
            image: require("../../../../images/complex-search/users/2.jpg")
        },
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg")
        },
        ,
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg")
        },
    ]



    const groupsResults = [
        {
            name: "گپ دوستانه",
            link: "@gb_friends",
            image: require("../../../../images/complex-search/groups/1.jpg"),
            bio: "این گروه برای دوستان و همراهان ایجاد شده است. ما در اینجا موضوعات مختلفی را بحث و گفتگو می‌کنیم و وقت خوبی داریم!"
        },
        {
            name: "فامیل ها",
            link: "@family_group",
            image: require("../../../../images/complex-search/groups/2.jpg"),
            bio: "خوش آمدید به گروه فامیلی ما! اینجا فرصتی برای به اشتراک گذاشتن خاطرات، بحث در مورد خانواده و برنامه‌های آینده داریم."
        },
        {
            name: "گروه دانشجویان",
            link: "@uni_friends",
            image: require("../../../../images/complex-search/groups/3.jpg"),
            bio: "گروهی برای دانشجویان علاقه‌مند به یادگیری، مطالعه مشترک و تبادل اطلاعات در موضوعات تحصیلی و دانشگاهی."
        },
        // می‌توانید گروه‌های دیگر را ادامه دهید
    ]


    const fakeChannels = [
        {
            name: "کانال تکنولوژی",
            link: "@tech_channel",
            description: "آخرین اخبار و تازه‌های دنیای تکنولوژی را در اینجا دنبال کنید.",
            membersCount: 23500,
            image: require("../../../../images/complex-search/channel/1.jpg")
        },
        {
            name: "کانال سفر و گردشگری",
            link: "@travel_lovers",
            description: "با ما به دنیای سفر بپیوندید و تجربیات جدیدی را از سراسر جهان بخواهید.",
            membersCount: 18750,
            image: require("../../../../images/complex-search/channel/2.jpg")

        },
        {
            name: "کانال طنز و شوخی",
            link: "@funny_jokes",
            description: "خنده‌دارترین شوخی‌ها و آنکدوت‌ها را در این کانال دنبال کنید.",
            membersCount: 28900,
            image: require("../../../../images/complex-search/channel/3.jpg")

        },
        // می‌توانید کانال‌های دیگری را ادامه دهید
    ];



    const fakeHashtags = [
        "#خوراک_سالم",
        "#تندرستی_روحی",
        "#کتاب_خوانی",
        "#هنر_تئاتر",
        "#سفر_جهانگردی",
        "#ورزش_روزانه",
        "#علم_و_دانش",
        "#سبک_زندگی",
    ];





    const [selectedCategory, setSelectedCategory] = useState(categoriesList[0])



    return (
        <div className='complex-search-tab'>

            <form action="#" className='search-form'>
                <div className="search-box">
                    <input type="text" name='search' placeholder='جستجو کنید.....' />
                    <Icon icon="ion:search-outline" />
                </div>
                <div className="search-categories">
                    {
                        categoriesList.map((item, index) => {
                            return <div
                                className={`item ${selectedCategory === item}`}
                                key={index}
                                onClick={() => { setSelectedCategory(item) }}
                            >
                                {item}
                            </div>
                        })
                    }
                </div>
                <div className="search-filter">
                    <div className="row">
                        <div className="col">
                            <span>تا تاریخ :</span>
                            <input type="date" name='present-date' />
                        </div>
                        <div className="col">
                            <span>از تاریخ :</span>
                            <input type="date" name='last-date' />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <span>تا ساعت :</span>
                            <input type="time" name='present-time' />
                        </div>
                        <div className="col">
                            <span>از ساعت :</span>
                            <input type="time" name='last-time' />
                        </div>

                    </div>
                </div>
                <div className="form-submit">
                    <button className='submit'>
                        <span>
                            جستجو
                        </span>
                        <Icon icon="ri:search-fill" />
                    </button>
                </div>
            </form>

            <div className="form-results">
                <div className="contacts list-container">
                    <h1>مخاطبین   </h1>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        dir="rtl"

                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={
                            {
                                prevEl: ".swiper-left-arrow",
                                nextEl: ".swiper-right-arrow",
                                disabledClass: "false"
                            }
                        }
                        pagination={
                            {
                                clickable: true,
                                el: ".swiper-bullets",

                            }
                        }

                    >
                        {fakeContacts.map((item, index) => {
                            return <SwiperSlide className='item'>
                                <div className="item-header">
                                    <img src={item.image} />
                                </div>
                                <div className="item-body">
                                    <div className="name">{item.name}</div>
                                    <div className="id">{item.id}</div>
                                    <button className='view-info'>مشاهده اطلاعات</button>
                                </div>
                            </SwiperSlide>
                        })}

                        <div className="swiper-controlls">
                            <div className="swiper-left-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" />
                            </div>
                            <div className="swiper-bullets">

                            </div>
                            <div className="swiper-right-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" rotate={2} />
                            </div>
                        </div>

                    </Swiper>



                </div>

                <div className="groups list-container">
                    <h1>گروه ها   </h1>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        dir="rtl"

                        spaceBetween={50}
                        slidesPerView={2.5}
                        navigation={
                            {
                                prevEl: ".swiper-left-arrow",
                                nextEl: ".swiper-right-arrow",
                                disabledClass: "false"
                            }
                        }
                        pagination={
                            {
                                clickable: true,
                                el: ".swiper-bullets",

                            }
                        }

                    >
                        {groupsResults.map((item, index) => {
                            return <SwiperSlide className='item'>
                                <div className="item-header">
                                    <img src={item.image} />
                                </div>
                                <div className="item-body">
                                    <div className="name">{item.name}</div>
                                    <div className="id">{item.link}</div>
                                    <p className='bio'>
                                        {item.bio}
                                    </p>
                                    <button className='view-info'>مشاهده اطلاعات</button>

                                </div>
                            </SwiperSlide>
                        })}

                        <div className="swiper-controlls">
                            <div className="swiper-left-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" />
                            </div>
                            <div className="swiper-bullets">

                            </div>
                            <div className="swiper-right-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" rotate={2} />
                            </div>
                        </div>

                    </Swiper>
                </div>


                <div className="channels list-container">
                    <h1>کانال ها   </h1>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        dir="rtl"
                        spaceBetween={50}
                        slidesPerView={2.5}
                        navigation={
                            {
                                prevEl: ".swiper-left-arrow",
                                nextEl: ".swiper-right-arrow",
                                disabledClass: "false"
                            }
                        }
                        pagination={
                            {
                                clickable: true,
                                el: ".swiper-bullets",

                            }
                        }

                    >
                        {fakeChannels.map((item, index) => {
                            return <SwiperSlide
                                className='item'>
                                <div className="item-header">
                                    <img src={item.image} />
                                </div>
                                <div className="item-body">
                                    <div className="name">{item.name}</div>
                                    <small className="members">
                                        <span>اعضا :</span>
                                        <span>{item.membersCount}</span>
                                    </small>
                                    <div className="id">{item.link}</div>
                                    <p className='bio'>
                                        {item.description}
                                    </p>
                                    <button className='view-info'>مشاهده اطلاعات</button>

                                </div>
                            </SwiperSlide>
                        })}

                        <div className="swiper-controlls">
                            <div className="swiper-left-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" />
                            </div>
                            <div className="swiper-bullets">

                            </div>
                            <div className="swiper-right-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" rotate={2} />
                            </div>
                        </div>

                    </Swiper>
                </div>

                <div className="hash-tag list-container">
                    <h1>هشتگ ها   </h1>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        dir="rtl"

                        spaceBetween={20}
                        slidesPerView={6}
                        navigation={
                            {
                                prevEl: ".swiper-left-arrow",
                                nextEl: ".swiper-right-arrow",
                                disabledClass: "false"
                            }
                        }
                        pagination={
                            {
                                clickable: true,
                                el: ".swiper-bullets",

                            }
                        }

                    >
                        {fakeHashtags.map((item, index) => {
                            return <SwiperSlide
                                className='item'>
                                {item}
                            </SwiperSlide>
                        })}

                        <div className="swiper-controlls">
                            <div className="swiper-left-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" />
                            </div>
                            <div className="swiper-bullets">

                            </div>
                            <div className="swiper-right-arrow arrow">
                                <Icon icon="eva:arrow-left-fill" rotate={2} />
                            </div>
                        </div>

                    </Swiper>
                </div>

            </div>


        </div>
    )
}

export default ComplexSearch
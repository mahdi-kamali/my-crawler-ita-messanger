import { Icon } from '@iconify/react'
import React, { useState } from 'react'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FAKE_CONTACS } from '../../consts/consts';
import User from '../../componetns/User';
import Group from '../../componetns/Group';
import Channel from '../../componetns/Channel';



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


    const fakeContacts = FAKE_CONTACS



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


    const maxContacts = 4.2
    const maxGroups = 2
    const maxChannels = 2.2
    const maxHashtags = 6



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
                        spaceBetween={10}
                        slidesPerView={maxContacts}
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
                            return <SwiperSlide
                                className='item' key={index}>
                                <User
                                    item={item}
                                    submit={{
                                        title: "مشاهده",
                                        submitFunction: () => { }
                                    }}
                                />
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

                        spaceBetween={20}
                        slidesPerView={maxChannels}
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
                                <Group
                                    key={index}
                                    item={item}
                                    submit={{
                                        title: "مشاهده",
                                        submitFunction: () => { }
                                    }}
                                />
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
                        spaceBetween={20}
                        slidesPerView={maxChannels}
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
                                <Channel
                                    item={item}
                                    key={index}
                                    submit={{
                                        title: "مشاهده",
                                        submitFunction: () => { }
                                    }} />
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

                        spaceBetween={10}
                        slidesPerView={maxHashtags}
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
                                key={index}
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
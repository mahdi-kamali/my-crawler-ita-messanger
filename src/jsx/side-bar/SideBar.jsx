import { Icon } from "@iconify/react"
import { useMemo, useState } from "react"
import ComplexSearch from "../pages/main=page/components/ComplexSearch"
import Contacts from "../pages/main=page/components/Contacts"

const SideBar = ({ setContent }) => {


    const listItems = [
        {
            svg: <Icon icon="iconamoon:search-light" />,
            title: "جستجوی پیشرفته",
            component: <ComplexSearch />
        },
        {
            svg: <Icon icon="fluent:book-contacts-24-filled" />,
            title: "مخاطبان",
            component: <Contacts />

        },
        {
            svg: <Icon icon="uil:channel" />,
            title: "کانال ها"
        },
        {
            svg: <Icon icon="dashicons:groups" />,
            title: "گروه ها"
        },
        {
            svg: <Icon icon="basil:notification-on-solid" />,
            title: "اعلانات"
        },
        {
            svg: <Icon icon="ph:files-fill" />,
            title: "فایل ها"
        },
        {
            svg: <Icon icon="bxs:download" />,
            title: "دانلود ها"
        },
        {
            svg: <Icon icon="fluent:settings-20-filled" />,
            title: "تنظیمات"
        },
        {
            svg: <Icon icon="mdi:account-cog" />,
            title: "اطلاعات کاربری"
        },

    ]


    const [selected, setSelected] = useState(listItems[0])

    useMemo(() => {
        setContent(selected)
    }, [selected])


    return (
        <aside>
            <ul>
                {
                    listItems.map((item, index) => {
                        return <li
                            className={` ${item.title === selected.title}`}
                            key={index}
                            onClick={() => { setSelected(item) }}
                        >
                            <span>
                                {item.title}
                            </span>
                            {item.svg}
                        </li>
                    })
                }
            </ul>
        </aside>
    )
}

export default SideBar
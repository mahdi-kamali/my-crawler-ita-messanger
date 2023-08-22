import { Icon } from "@iconify/react"
import { useMemo, useState } from "react"
import ComplexSearch from "../pages/main=page/components/ComplexSearch"
import Contacts from "../pages/main=page/components/Contacts"
import Channels from "../pages/main=page/components/Channels"
import Groups from "../pages/main=page/components/Groups"
import Notification from "../pages/main=page/components/Notification"
import CreateNotification from "../pages/main=page/components/CreateNotification"
import NormalItem from "./components/NormalItem"
import NestedItem from "./components/NestedItem"
import Files from "../pages/main=page/components/files/Files"
import Favorites from "../pages/main=page/components/favorites/Favorites"

const SideBar = ({ setContent }) => {


    const listItems = [
        {
            svg: <Icon icon="iconamoon:search-light" />,
            title: "جستجوی پیشرفته",
            component: <ComplexSearch />,
            type: "normal"
        },
        {
            svg: <Icon icon="fluent:book-contacts-24-filled" />,
            title: "مخاطبان",
            component: <Contacts />,
            type: "normal"


        },
        {
            svg: <Icon icon="uil:channel" />,
            title: "کانال ها",
            component: <Channels />,
            type: "normal"
        },
        {
            svg: <Icon icon="dashicons:groups" />,
            title: "گروه ها",
            component: <Groups />,
            type: "normal"
        },
        {
            svg: <Icon icon="basil:notification-on-solid" />,
            title: "اعلانات",
            type: "nested",
            childs: [
                {
                    svg: <Icon icon="bxs:category-alt" />,
                    title: "همه ی اعلانات",
                    component: <Notification />
                },
                {
                    svg: <Icon icon="gridicons:create" />,
                    title: "ایجاد اعلانات",
                    component: <CreateNotification />
                }
            ]
        },
        {
            svg: <Icon icon="ph:files-fill" />,
            title: "فایل ها",
            type: "normal",
            component: <Files />
        },
        {
            svg: <Icon icon="ic:round-favorite" />,
            title: "علاقه مندی ها",
            type: "normal",
            component : <Favorites/>
        },
        {
            svg: <Icon icon="fluent:settings-20-filled" />,
            title: "تنظیمات",
            type: "normal"
        },
        {
            svg: <Icon icon="mdi:account-cog" />,
            title: "اطلاعات کاربری",
            type: "normal"
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

                        {
                            if (item.type === "normal") {
                                return <NormalItem
                                    item={item}
                                    selected={selected}
                                    setSelected={setSelected}
                                    key={index} />
                            }
                            else {
                                return <NestedItem
                                    item={item}
                                    selected={selected}
                                    setSelected={setSelected}
                                    key={index} />
                            }
                        }

                    })
                }


            </ul>
        </aside>
    )
}

export default SideBar
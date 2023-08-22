import { Icon } from "@iconify/react"
import { useState } from "react"

const ImageFile = ({ item , sourceList}) => {


    const downloadButtonClick = (downloadUrl) => {
        const ancherTag = document.createElement("a")
        ancherTag.href = downloadUrl
        ancherTag.download = downloadUrl
        ancherTag.target = "_blink"
        ancherTag.click();
    }


    const [itemButtonsHover, setItemButtonHover] = useState(false)
    const [sourceInfoExpand, setSourceInfoExpand] = useState(false)


    



    return (
        <div className="item-image" >
            <div className="item-header">
                <img src={item.content.image} />
            </div>
            <div className="item-body">
                <div className="sender">
                    <div className="info">
                        <div className="sender-name">
                            {item.sender.name}
                        </div>
                        <div className="sender-id">
                            {item.sender.id}
                        </div>
                    </div>
                    <div className="sender-image">
                        <img src={item.sender.image} alt="" />
                    </div>
                </div>

            </div>
            <div className={`item-buttons ${itemButtonsHover + "-item-buttons"}`}>
                <button>
                    <Icon
                        icon="material-symbols:download"
                        onClick={() => downloadButtonClick(item.content.image)} />
                </button>
                <button>
                    <Icon icon="icon-park-outline:like" />
                </button>
                <button>
                    <Icon icon="ic:sharp-share" />
                </button>
            </div>
            <div className="item-source">
                <Icon className={item.receivedFrom === sourceList[3] ? "selected" : ""}
                    icon="icomoon-free:bullhorn" />
                <Icon className={item.receivedFrom === sourceList[2]  ? "selected" : ""}
                    icon="fa6-solid:users" />
                <Icon className={item.receivedFrom === sourceList[1]  ? "selected" : ""}
                    icon="clarity:user-solid" />
                <Icon className={item.receivedFrom === sourceList[4]  ? "selected" : ""}
                    icon="fluent:bot-24-filled"
                />
                <div className={`source-info expand-${sourceInfoExpand}`}>
                    <div className="container">
                        <div className="info-left">
                            <div className="channel-name">
                                {item.channel.name}
                            </div>
                            <div className="channel-link">
                                {item.channel.link}
                            </div>
                            <div className="channel-descirption">
                                {item.channel.description}
                            </div>
                        </div>
                        <div className="info-right">
                            <div className="channel-image">
                                <img src={item.channel.image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-hovers">
                <button
                    onClick={() => { setSourceInfoExpand(!sourceInfoExpand) }}>
                    <Icon icon="ep:info-filled" />
                </button>
                <button
                    onClick={() => { setItemButtonHover(!itemButtonsHover) }}
                >
                    <Icon
                        icon="ant-design:setting-filled"
                    />
                </button>
            </div>
        </div>
    )
}

export default ImageFile
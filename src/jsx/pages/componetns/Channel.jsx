import { Icon } from "@iconify/react"


const Channel = ({ item, submit, selected }) => {
    return (
        <div
            className={`channel-item ${selected}`}
        >
            <div className="item-body">
                <div className="name row">
                    {item.name}
                </div>
                <div className="link row">
                    {item.link}
                </div>
                <div className="members-count row">
                    <span>اعضا :</span>
                    {item.membersCount}
                </div>
                <div className="bio row">
                    {item.description}
                </div>
                <div className="item-buttons">
                    <button
                        className="success"
                        onClick={submit.submitFunction}
                    >
                        <span>{submit.title}</span>
                        <Icon icon="carbon:view-filled" />
                    </button>
                    <button className="share">
                        <Icon icon="ic:sharp-share" />
                    </button>
                    <button className="like">
                        <Icon icon="icon-park-outline:like" />
                    </button>

                </div>
            </div>
            <div className="item-header">
                <img src={item.image} />

            </div>
        </div>
    )
}

export default Channel
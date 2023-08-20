import { Icon } from '@iconify/react'
import React from 'react'

const User = ({ item, submit, selected }) => {

    console.log();
    return (
        <div
            className={`user-item ${selected}`}
        >
            <div className="user-header">
                <img src={item.image} alt="" />
                <div className="name property">
                    <span>{item.name}</span>
                </div>
            </div>
            <div className="user-body">

                <div className="id property">
                    <span>{item.id}</span>
                    <Icon icon="bxs:id-card" />
                </div>
                <div className="last-seen property">
                    <span>{item.lastOnline}     </span>
                    <Icon icon="heroicons-solid:status-online" />
                </div>
                <div className="change property">
                    <span>
                        {item.lastChange}
                    </span>
                    <Icon icon="material-symbols:change-circle" />
                </div>
                <div className="bio property">
                    <p>
                        {item.bio}
                    </p>
                    <Icon icon="ep:info-filled" />
                </div>
            </div>
            <div className="user-buttons">

                <button>
                    <Icon icon="ic:baseline-share" />
                </button>
                <button>
                    <Icon icon="icon-park-outline:like" />
                </button>
                <button
                    className="success"
                    onClick={submit.submitFunction}>
                    <span>
                        {submit.title}
                    </span>
                    <Icon icon="ic:round-grid-view" />
                </button>

            </div>
        </div>
    )
}

export default User
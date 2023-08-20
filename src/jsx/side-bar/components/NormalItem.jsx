import React from 'react'

const NormalItem = ({ item, selected, setSelected }) => {
    return (
        <li
            className={`item ${item.title === selected.title}`}
            key={Math.random()}
            onClick={() => { setSelected(item) }}
        >
            <span>
                {item.title}
            </span>
            {item.svg}
        </li>
    )
}

export default NormalItem
import React from 'react'
import { useDrag } from 'react-dnd'

export default function DragField(props) {
    const {classesColumnItem, idx, itemColumn} = props

    const [, dragRef] = useDrag({
        item: { type: 'CARD', column: itemColumn},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })


    return (
        <div className={classesColumnItem} key={idx}  ref={dragRef}>
            <span>{itemColumn[0]}</span>
        </div>
    )
}
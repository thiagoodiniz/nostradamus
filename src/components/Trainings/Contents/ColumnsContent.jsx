import React from 'react'
import { withStyles } from '@material-ui/core';
import { useDrag } from 'react-dnd'

const useStyles = () => ({
    columnItem: {
        width: '40%',
        backgroundColor: '#ffffff',
        border: '1px solid #cdcdcd',
        padding: '2px 5px',
        margin: '5px 5px 5px 0',
        borderRadius: '5px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    isDragging: {
        border: '1px dashed #cdcdcd',
        backgroundColor: 'transparent',
        textOverflow: 'unset'
    },
    spanTransparent: {
        color: "transparent"
    }
})

function Columns(props) {
    const { classes, idx, col } = props
    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', nameColumn: col },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <div className={`${classes.columnItem} ${isDragging ? classes.isDragging : '' }`} key={ idx } title={ col }  ref={dragRef} >
            <span className={`${isDragging ? classes.spanTransparent : '' }`}>
                { col[0] }
            </span>
        </div>
    )
}

export default (withStyles(useStyles)(Columns))
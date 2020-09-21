import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import { Creators } from '../../../../store/actions/trainingActions'
import DragField from './DragField'


export default function Parameter(props){
    const parameter = useSelector(state => state.trainingReducer[props.nameParameter])
    const dispatch = useDispatch()

    const onDrop = (item) => {
        const { column } = item
        
        if (column) {
            dispatch(Creators.dropColumnOnParameter(column, props.nameParameter))
        }
    }
 
    const [, drop] = useDrop({
        accept: [ 'CARD' ],
        drop: onDrop,
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        })
    })

    return (
        <div className="dropField" ref={drop}>
            {parameter.map((item,idx) => 
                <DragField classesColumnItem={props.classes.columnItem} key={idx} idx={idx} itemColumn={item}/>
            )}
        </div>
    )
}

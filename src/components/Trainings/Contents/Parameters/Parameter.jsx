import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import { Creators } from '../../../../store/actions/trainingActions'


export default function Parameter(props){
    const parameter = useSelector(state => state.trainingReducer[props.nameParameter])
    const dispatch = useDispatch()

    const onDrop = (item) => {
        const { nameColumn } = item
        
        dispatch(Creators.dropColumnOnParameter(nameColumn, props.nameParameter))
    }

    const [, drop] = useDrop({
        accept: [ 'CARD' ],
        drop: onDrop,
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
    })

    return (
        <div className="dropField" ref={drop}>
            {parameter.map((item,idx) => 
                <div className={props.classes.columnItem} key={idx}>
                    <span>{item[0]}</span>
                </div>
            )}
        </div>
    )
}

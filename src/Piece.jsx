import React from 'react'
import {useDrag, DragPreviewImage} from 'react-dnd'

function Piece({piece: {type,color}, position}) {

    const [{isDragging},drag,preview] = useDrag({
        type: "piece",
        item: {type: "piece",id: `${position}_${type}_${color}`},
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging()}
        }
    })

    const pImg = require(`./assets/${type}_${color}.png`) 

    return (
        <> 
            <DragPreviewImage connect={preview} src={pImg} />
            <div className="p-container" ref={drag} style={{opacity: isDragging ? 0:1}}>
                <img src={pImg} alt="" className="piece" />
            </div>
        </>
    )
}

export default Piece

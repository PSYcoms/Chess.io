import React from 'react'
import Square from './Square'
import {move} from './Game'

const promotionPieces = ['r','n','b','q']

function Promote({promotion: {from,to,color}, }) {
    return (
        <div className="board">
            {promotionPieces.map((p,i) => (
                <div key={i} className="promote-square">
                    <Square black={i%3!==0}> 
                        <div className="p-container" onClick={()=> move(from,to,p)} >
                            <img src={require(`./assets/${p}_${color}.png`)} alt="" className="piece cursor-p" />
                        </div>
                    </Square>
                </div>
            ))}
        </div>
    )
}

export default Promote

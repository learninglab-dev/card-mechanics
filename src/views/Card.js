import React from 'react'
import Tooltip from '../hooks/Tooltip'


export default function Card ({data,key,style,bool}){
    let tileStyle = style;

    const texttodisplay = {name: data.name, creator: data.by, attack: data.mainAttack}

    // there's definitely a better way to do this with state, but for now....
    if (bool===true){
        return (
            <div className="card" style={tileStyle}>
                <Tooltip text={texttodisplay}>
                    <img
                        src={data.image}
                        alt={data.name}
                        style={tileStyle}
                    />
                </Tooltip>
            </div>
        );
    } else {
        return (
            <div className="card" style={tileStyle}>
                {/*<Tooltip text={texttodisplay}>*/}
                    <img
                        src={data.image}
                        alt={data.name}
                        style={tileStyle}
                    />
                {/*</Tooltip>*/}
            </div>
        );
    }


}
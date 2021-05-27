import React from 'react'
import Tooltip from '../hooks/Tooltip'

const downImage ="https://i.redd.it/6esxupxwcf1z.jpg"

export default function Card ({data, style,bool, flipped}){
    let tileStyle = style;
    // let image be up or down
    //
    const texttodisplay = {name: data.name, creator: data.by}
    //
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
                        onClick = {()=>flipped()}
                    />
                {/*</Tooltip>*/}
            </div>
        );
    }


}
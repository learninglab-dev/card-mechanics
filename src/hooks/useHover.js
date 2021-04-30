import React from 'react'

export default function Hover(){
    const [hovering, setHovering] = React.useState(false)

    const onMouseOver=()=>setHovering(true)
    const onMouseOut=()=>setHovering(false)

    return [hovering, {onMouseOver,onMouseOut}]

}

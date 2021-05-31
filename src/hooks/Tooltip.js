import * as React from 'react'
import useHover from "./useHover";
// import './style.css'

const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        backgroundColor: "rgba(0,0,0,.5)"
    } ,
    tooltip: {
        color: "white",
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor:  "rgba(0,0,0,.5)",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
        pointerEvents:"none",
    },
    creatureName: {
        textTransform: "uppercase"
    },
    by: {
        fontStyle: "italic"
    },
    tiles: {
        padding: "6vh 2vw",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
    },
    tile: {
        margin: "15px",
        cursor: "pointer",
        overflow: "hidden",
    }

}

export default function Tooltip ({text,children}) {

    const [hovering,attrs] = useHover()
    //read in text that was assigned deliberately as well as the jsx that was passed in as children within the tooltip wrapper

    return (
        <div style={styles.container}{...attrs}>
            {hovering === true &&
                <div
                    className ="hoverTooltip" style={styles.tooltip}>
                    <h3 style={styles.creatureName}>{text.name}</h3>
                    <p style={styles.by}>created by {text.creator}</p>
                </div>
            }

            {children}cd
        </div>

    )
}

// Tooltip.propTypes = {
//     text: PropTypes.string.isRequired
// }

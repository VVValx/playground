import React from 'react'
import _ from "lodash";
import gridCss from "./gridDrop.css";

 function GridDrop() {
    return (
        <div className={gridCss.container}>
            <div className={gridCss.gridContainer} >
            {_.range(0,5).map((r, index)=>
                <React.Fragment>
                <div className={gridCss.grid} key={index}>{r}</div>
                </React.Fragment>
            )}
            </div>

        </div>
    )
}

export default GridDrop
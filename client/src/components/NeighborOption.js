import React from "react";

function NeighborOption({neighborId, neighborName}) {
    return(
        <option value={neighborId}>
            {neighborName}
        </option>
    )
}

export default NeighborOption
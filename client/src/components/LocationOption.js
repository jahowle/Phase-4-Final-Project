import React from "react";

function LocationOption({locationId, locationName}) {

    return(
        <option value={locationId}>{locationName}</option>
    )

}

export default LocationOption
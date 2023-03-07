import React, {useEffect, useState} from "react";
import LocationOption from "./LocationOption";

function LocationSelect({handleLocationChange, formData}) {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch("/locations")
          .then((r) => r.json())
          .then((data) => setLocations(data));
      }, []);

    const locationOptions = locations.map((location) => {
        return <LocationOption key={location.id} locationId={location.id} locationName={location.name}/>
    })

    return(
        <select name="location" onChange={handleLocationChange} >
            <option value="">--Please choose a location-</option>
            {locationOptions}
        </select>
       
    )
}

export default LocationSelect
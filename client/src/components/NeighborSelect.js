import React, {useEffect, useState} from "react";
import NeighborOption from "./NeighborOption";

function NeighborSelect({handleNeighborChange}) {

    const [neighbors, setNeighbors] = useState([])

    useEffect(() => {
        fetch("/neighbors")
          .then((r) => r.json())
          .then((data) => setNeighbors(data));
      }, []);

    const neighborOptions = neighbors.map((neighbor) => {
        return <NeighborOption key={neighbor.id} neighborId={neighbor.id} neighborName={neighbor.name}/>
    })

    return(
        <select name="neighbor" onChange={handleNeighborChange} >
            <option value="">--Please choose a Neighbor-</option>
            {neighborOptions}
        </select>
       
    )
}

export default NeighborSelect
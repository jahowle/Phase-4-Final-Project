import React, {useEffect, useState} from "react";
import PartnerOption from "./PartnerOption";

function PartnerSelect({handlePartnerChange, formData}) {

    const [partners, setPartners] = useState([])

    useEffect(() => {
        fetch("/partners")
          .then((r) => r.json())
          .then((data) => setPartners(data));
      }, []);

    const partnerOptions = partners.map((partner) => {
        return <PartnerOption key={partner.id} partnerId={partner.id} partnerName={partner.name}/>
    })

    return(
        <select name="partner" onChange={handlePartnerChange} >
            <option value="">--Please choose a Partner-</option>
            {partnerOptions}
        </select>
       
    )
}

export default PartnerSelect
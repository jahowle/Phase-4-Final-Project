import React from "react";
import PartnerOption from "./PartnerOption";

function PartnerSelect({handlePartnerChange, partners}) {

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
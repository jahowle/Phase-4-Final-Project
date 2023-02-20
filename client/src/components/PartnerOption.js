import React from "react";

function PartnerOption({partnerId, partnerName}) {

    return(
        <option value={partnerId}>{partnerName}</option>
    )

}

export default PartnerOption
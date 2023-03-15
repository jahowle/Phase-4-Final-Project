import React, {useState} from "react";

function NeedCard({id, description, neighbor, remainingBalance, category, auth, onDelete, userId, handleUpdateBalance, mine}) {

    const [amount, setAmount] = useState(null)
    const [balance, setBalance] = useState(remainingBalance)
    const [errors, setErrors] = useState([])

    function handleDelete() {
        fetch(`needs/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
              onDelete(id);
            }
          })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: amount,
                user_id: userId,
                need_id: id
               
            }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
                if(data[0].need.funded === false) {
                    updateBalance(data)
                } else {
                    onDelete(data[0].need_id)
                }
            })
          } else {
            r.json().then((errorData) => setErrors(errorData.errors))
          }
        })
    }

    function updateBalance(amount) {

        const donationAmount = amount[0].amount

        setBalance(balance - donationAmount)

    }

    function handleAmountChange(e) {
        setAmount(e.target.value)
    }


    return(
        <div className="need-card">
            <h3>{neighbor}</h3>
            <h4>{balance}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            {mine ? <button onClick={handleDelete}>Delete</button> : ""}
            {auth ? <form id="add-donation-form" onSubmit={handleSubmit}><input onChange={handleAmountChange} type="number" name="amount" min="1" max="400"/>
            
            {errors.length > 0 && ( 
                <p style={{ color: "red" }}>
                {errors.map((error) => (<p key={error}>{error}</p>))}
                </p>
             )}
             
             <button id="submit-button" type="submit">Submit</button></form> : "" }
        </div>
    )
}

export default NeedCard
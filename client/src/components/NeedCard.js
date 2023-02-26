import React, {useState} from "react";

function NeedCard({id, description, neighbor, remainingBalance, category, auth, onDelete, userId, handleUpdateBalance}) {

    const [amount, setAmount] = useState(null)
    const [balance, setBalance] = useState(remainingBalance)

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
                donor_id: 870,
                need_id: id
               
            }),
        })
        .then((r) => r.json())
        .then((data) => {updateBalance(data)})
    

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
            <p>{id}</p>
            {auth ? <button onClick={handleDelete}>Delete</button> : ""}
            <form id="add-donation-form" onSubmit={handleSubmit}>
                <input
                 onChange={handleAmountChange}
                 type="number"
                 name="amount"
                 min="1"
                 max="400"
                />
                <button id="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NeedCard
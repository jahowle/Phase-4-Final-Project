import React, {useState} from "react";

function NeedCard({id, description, neighbor, remainingBalance, category, auth, onDelete, mine}) {

    const [amount, setAmount] = useState(null)
    const [balance, setBalance] = useState(remainingBalance)
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        const newBalance = balance - amount


        fetch(`/needs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                remaining_balance: newBalance
               
            }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
                console.log(data)
                if(data.funded === false) {
                    updateBalance(data)
                } else {
                    onDelete(data.id)
                }
            })
          } else {
            r.json().then((errorData) => setErrors(errorData.errors))
          }
        })
    }

    function handleDelete() {
        fetch(`/needs/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
              onDelete(id);
            }
          })
    }

    function updateBalance(amount) {

        setBalance(amount.remaining_balance)

    }

    function handleAmountChange(e) {
        setAmount(e.target.value)
    }


    return(
        <div className="need-card">
            <h3>{neighbor}</h3>
            <h4>$ {balance}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            {auth ? <form id="add-donation-form" onSubmit={handleSubmit}><input onChange={handleAmountChange} type="number" name="amount" min="1" max="400"/>
            
            {errors.length > 0 && ( 
                <p style={{ color: "red" }}>
                {errors.map((error) => (<p key={error}>{error}</p>))}
                </p>
             )}
             
             <button id="submit-button" type="submit">Submit</button></form> : "" }
             {mine ? <button onClick={handleDelete}>Delete</button> : ""}
             {mine ? <button>Edit</button> : ""}
        </div>
    )
}

export default NeedCard
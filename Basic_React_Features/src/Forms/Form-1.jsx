import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "" , lastName: "", email: "", comments: ""}
    )

    console.log(formData)

    function handleChange(event){
        setFormData(prevForm => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        })
        
    }
    

    


    return(
        <form>
            <input 
                type="text"
                placeholder="first name"
                onChange={handleChange}
                name="firstname"
                value={formData.firstName}
            />

            <input 
                type="text"
                placeholder="first name"
                onChange={handleChange}
                name="lastname"
                value={formData.firstName}
            />

            <input 
                type="text"
                placeholder="first name"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <textarea 
                onChange={handleChange}
                name="comments"
                value={formData.comments}
                placeholder="comments"
            />
        </form>
    )
}
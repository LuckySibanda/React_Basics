import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "" ,
            lastName: "",
            email: "", 
            comments: "",
            isTired: true,
            employment: "",
            favColor: ""
        }
    )

    // console.log(formData.employment)

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
      
        setFormData((prevForm) => {
          return {
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value,
          };
        });
      }
      
    function handleSubmit(event) {
        // this prevents the page from "submitting" and refreshing the page,
        // now i can do what i want in the function without it refreshing
        event.preventDefault()
        console.log(formData)
    }

    


    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="first name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <input 
                type="text"
                placeholder="last name"
                onChange={handleChange}
                name="lastName"
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

            <input 
                type="checkbox"
                id="isTired"
                checked={formData.isTired}
                onChange={handleChange}
                name="isTired"
            />
            <label htmlFor="isTired">Am i tired?</label>



            <fieldset>
                <legend>Current employment status</legend>

                <input type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === 'unemployed'}
                />
                <label htmlFor="unemployed">unemployed</label>

                <input type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === 'part-time'}
                />
                <label htmlFor="part-time">part-time</label>

                <input type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === 'full-time'}
                />
                <label htmlFor="full-time">full-time</label>
            </fieldset>

            <label htmlFor="favColor">What is your fav color</label>

            <select 
            name="favColor"
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            >
                    <option value="">-- choose --</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
            </select>

        {/* not type submit, coz all buttons in form field, automatically submit, if else type=button */}
        <button>Submit</button>
        </form>
    )
}
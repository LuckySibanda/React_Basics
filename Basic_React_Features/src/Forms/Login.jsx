import React from "react";

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        checked: true
    })

    function handleChange(event) {

        const {type, name, value, checked} = event.target;

        setFormData(prevFromData => ({
            ...prevFromData,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)

        if (formData.password === formData.confirmPassword) {
            console.log('Successfully Logged in')
        }
        else {
            return console.log('Password not confirmed!')
        }

        if (formData.checked) {
            console.log('Thank you for joining our mailing list')
        }
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />

            <input 
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            <input 
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            />
            <input 
            type="checkbox"
            name="checked"
            value={formData.checked}
            onChange={handleChange}
            />
            <label htmlFor="">Would you like to join our mailing list</label>

            <button className="login--btn">Submit</button>
        </form>
    )
}
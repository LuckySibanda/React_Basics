export default function Form() {
    return(
        <>
        <h2 className="form--head">Contact Us</h2>
        <form action="">
            <div>
                <label htmlFor="">
                    Name:
                </label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">
                    Email:
                </label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">
                    Telephone:
                </label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">
                    Shu type:
                </label>
                <input type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
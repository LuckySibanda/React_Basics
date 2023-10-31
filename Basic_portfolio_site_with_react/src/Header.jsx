export default function Header() {
    return (
        <header>
            <div className="company--name">
                The Shu Wash
            </div>

            <nav className="home--links">
                <div>
                    Home
                </div>
                <div>
                    Pricing
                </div>
                <div>
                    Products
                </div>
                <div>
                    Contact
                </div>
                <div>
                    <button className="cta--button">
                        Book A Wash
                    </button>
                </div>
            </nav>
        </header>
    )
}
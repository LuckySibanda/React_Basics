export default function Header() {
    return (
        <header>
            <div className="company--name">
                <img src="./shus.png" alt="" className="logo--img"/>
                <span>
                    The Shu Wash
                </span>
                
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
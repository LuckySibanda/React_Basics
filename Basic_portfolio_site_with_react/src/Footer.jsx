export default function Footer() {
    return(
        <section className="footer">
            <div className="footer--column company--about">
                <div className="signage">
                    <img src="./shus.png" alt="" className="logo" />
                    <span>
                        The Shu Wash
                    </span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci possimus recusandae consequuntur facilis officiis, magni dolore ratione debitis impedit nihil? Atque non ipsam voluptates expedita dignissimos porro esse incidunt.
                </p>
                <div className="social--media">
                    <img src="./icons/facebook.svg" alt="facebook" className="social--media--icon" />
                    <img src="./icons/instagram.svg" alt="twitter" className="social--media--icon" />
                    <img src="./icons/pinterest.svg" alt="instagram" className="social--media--icon" />
                    <img src="./icons/twitter.svg" alt="tik tok" className="social--media--icon" />
                </div>
            </div>

            <div className="footer--column more--info">
                <h5>About Us</h5>
                <ul>
                    <li>Pricing</li>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Our prcoess</li>
                    <li>And many more</li>
                </ul>
            </div>

            <div className="footer--column more--info">
                <h5>About Us</h5>
                <ul>
                    <li>Pricing</li>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Our prcoess</li>
                    <li>And many more</li>
                </ul>
            </div>

            <div className="footer--column more--info">
                <h5>About Us</h5>
                <ul>
                    <li>Pricing</li>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Our prcoess</li>
                    <li>And many more</li>
                </ul>
                <button className="cta--button footer--cta">Book A Wash</button>
            </div>
        </section>
    )
}
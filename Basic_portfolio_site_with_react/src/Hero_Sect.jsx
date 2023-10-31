export default function Hero() {
    return (
        <section className="main--hero">
            <div className="main--column">
                <h1>
                    Give Yo Shoes A New Life
                </h1>
                <p>
                    Step into the world in a fresh pair of kicks,
                    that are as good as new and will give you everlasting
                    Confidence.
                </p>
                <div className="cta--box">
                    <button className="hero-cta--btn">
                        Wash My Kicks
                    </button>
                </div>
            </div>
            
            <img src="/main.jpg" alt="Main Hero Image" className="main--img" />
            <div className="blue--box"></div>
            <div className="brown--box"></div>
        </section>
    )
}
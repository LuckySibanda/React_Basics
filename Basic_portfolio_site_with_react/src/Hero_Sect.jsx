export default function Hero() {
    return (
        <section>
            <div className="main--column">
                <h1>
                    Give Yo Shoes A New Life
                </h1>
                <p>
                    Step into the world in a fresh pair of kicks,
                    that are as good as new and will give you everlasting
                    Confidence.
                </p>
            </div>
            <span className="cta--box">
                <button className="hero-cta--btn">
                    Wash My Kicks
                </button>
            </span>
            <img src="/main.jpg" alt="Main Hero Image" className="main--img" />
        </section>
    )
}
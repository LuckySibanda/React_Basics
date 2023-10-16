// import React from "react";

export default function Header() {
    return (
        <header>
            <div className="img--logo-container">
                <img src="../assets/icon/giftbag.svg" alt="Logo image" className="img--logo" />
            </div>

            <div className="search--input">
                <input type="text" placeholder="Search" />
                <div className="search--logo">
                    <img src="../assets/icon/search-icon.svg" alt="search icon" />
                </div>
            </div>

            <div className="header--info">
                <div>Pricing</div>
                <div>Contact</div>
                <div>About</div>
            </div>
        </header>
    )
}
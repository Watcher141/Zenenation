import "./Footer.css";

const Footer = () => {
    return (
        <footer className="soft-footer">
            <div className="footer-inner">

                <h2 className="footer-logo">ZeneNation</h2>

                <p className="footer-desc">
                    Aesthetic anime merchandise crafted for fans who love calm, minimal Japanese vibes.
                </p>

                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/category/keychain">Keychains</a>
                    <a href="/category/mascot">Figures & Mascot</a>
                    <a href="/category/armory">Mini Armory</a>
                </div>

                <p className="footer-copy">© {new Date().getFullYear()} animeaura. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;

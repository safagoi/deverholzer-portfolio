import ThemeChanger from "./ThemeChanger";

export default function Header() {


    return (
        <header className="Header">
            <div className="header-content">
                <div className="header-title">
                    <h1>deverholzer</h1>
                    <span>💻 web app development 💻</span>
                </div>
                <ThemeChanger />
            </div>
        </header>
    )
}
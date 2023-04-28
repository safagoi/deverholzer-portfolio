import Header from "./Header";

export default function Layout({children}) {

    return (
        <div className="Layout">
            <Header />
            {children}
        </div>
    );
}
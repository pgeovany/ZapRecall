import small_logo from "../assets/images/logo-pequeno.svg"

export default function Header() {
    return(
        <div className="header">
            <img src={small_logo} alt="Logo" />
            <h1>ZapRecall</h1>
        </div>
    );
}
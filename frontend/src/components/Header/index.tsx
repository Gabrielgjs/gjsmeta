import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="gjsmeta-logo-container">
                <img src={logo} alt="GJSmeta" />
                <h1>GJSMeta</h1>
                <p>Desenvolvido por 

                    <a target="_blank" href="https://github.com/Gabrielgjs">@Gabrielgjs</a>
                </p>
            </div>
        </header>
    )
}


export default Header;
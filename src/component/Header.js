import Logo from '../app/assets/img/MeekAndLowlyLogo.png'

const Header = () => {
    const logoStyle = {
        display: 'block',  
        margin: 'auto',
        paddingTop: 20,
        height: 40,
        width: 250,
    };

    return (
        <img 
            src={Logo} 
            alt='logo' 
            style={logoStyle}
        />
    );
};

export default Header;
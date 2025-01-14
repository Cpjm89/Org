import "./Footer.css"


const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footerColor.png)" }}>
        <div className='redes'>
            <a href="https://www.facebook.com/josemiguel.cruzpalomares/">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href='https://github.com/Cpjm89/'>
                <img src="/img/twitter.png" alt='GitHub' />
            </a>
            <a href='https://www.instagram.com/josemiguelcruzpalomares?igsh=eGZlb25tdzM5NjVt/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/logoCp.png' alt="Logo Cp" />
        <strong>Desarrollado por José Miguel</strong>
    </footer>
}

export default Footer 
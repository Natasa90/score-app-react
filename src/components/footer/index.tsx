import './footer.style.css'

export const Footer = () => { 
    const currentYear = new Date().getFullYear(); 
    return (
        <footer>
            <p>{currentYear} Score Board App</p>
        </footer>
    )
}
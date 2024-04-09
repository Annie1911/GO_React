import logo from '../assets/logo.png'; // Importe l'image du logo depuis le répertoire 'assets'
import '../style/Banner.css'; // Importe le fichier CSS pour le style du composant
import Recommendation from './Recommendation'

function Banner() {
    const title = 'La maison jungle'; // Définit le titre du composant

    return (
        // Le composant retourne un div contenant le logo et le titre
        <div className='logo-banner'>
            <img src={logo} alt='La maison jungle' className='logo-img' /> {/* Affiche le logo */}
            <h1 className='lmj-title'>{title}</h1> {/* Affiche le titre */}
            <Recommendation />
        </div>
    );
}

export default Banner; // Exporte le composant Banner pour pouvoir l'utiliser ailleurs dans l'application

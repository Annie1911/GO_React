function Recommendation(){
    
const currentMonth = new Date().getMonth(); // Obtient le mois actuel (0 = janvier, 1 = février, ..., 11 = décembre)
const isSpring = currentMonth >= 2 && currentMonth <= 5; // Vérifie si le mois actuel est dans la plage du printemps (mars, avril, mai)
// Définit une variable de recommandation en fonction de la saison
if(!isSpring ){
    return <div>Spring: c'est le printemps</div> // Affiche un message si c'est le printemps
} 
return <div>Oh non</div> // Affiche un message par défaut si ce n'est pas le printemps
    
}

export default Recommendation

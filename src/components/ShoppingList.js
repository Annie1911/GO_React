import { plantList } from "./dataplantlist/plantList"
import '../style/ShoppingList.css' 
import PlantItem from "./PlantItem";

function ShoppingList() {
    // Calcul des catégories uniques à partir de la liste des plantes
	const categories = plantList.reduce(
        // Utilisation de reduce() pour parcourir la liste des plantes et accumuler les catégories uniques
		(acc, plant) =>
            // Vérifie si la catégorie de la plante actuelle est déjà présente dans l'accumulateur
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		// Valeur initiale de l'accumulateur, un tableau vide
		[]
	);

	return (
		<div>
			{/* Affichage des catégories */}
			<ul>
				{categories.map((cat) => (
					// Chaque catégorie est rendue dans un élément de liste avec sa clé correspondante
					<li key={cat}>{cat}</li>
				))}
			</ul>
			
            <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} >
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
						<div className='lmj-name'>{plant.name}</div>
						<PlantItem
						id={plant.id}
						cover={plant.cover}
						water={plant.water}
						light={plant.light}
						/>
					</li>
				))}
			</ul>
        </div>
    )
}

export default ShoppingList
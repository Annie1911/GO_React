import CareScale from "./CareScale"
import '../style/PlantItem.css'


function PlantItem(props){
    const {cover,id,water,light} = props
    
    function handleClick(e) {
        alert(`Vous voulez acheter 1 ${id} ? Très bon choix 🌱✨`)
    }
    return(

         /*   
        <li className='lmj-plant-item' onClick= {() =>handleClick(name)}>
        {name}
        </li>*/
        
        <div className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={cover} onClick= {() =>handleClick(id)}/>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    )

}
export default PlantItem
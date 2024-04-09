import sun from "../assets/sun.svg"
import water from "../assets/water.svg"


function CareScare({scaleValue,careType})
{
    const range =[1,2,3,4,5]
    const scaleType = careType ===careType === 'light' ? (
        <img src={sun} alt='sun-icon' />
    ) : (
        <img src={water} alt='water-icon' />
    )

    {range.map((rangeElement)=>(scaleValue >= rangeElement ? <span key = {rangeElement.toString()}>{scaleType}</span>:null
    ))}
}

export default CareScare;
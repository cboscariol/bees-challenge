import './style.css'
import trashIcon from './assets/trashIcon.svg'
import CardLabel from '../CardLabel'


function BreweryCard() {
  return (
    <div className='card'>
      <button>
        <img src={trashIcon} alt="delete" />
      </button>
      <h1>10-56 Brewing Company</h1>
      <p>street</p>
      <p>city, state - country </p>
      <div className='label-wrapper'>
        <CardLabel title='micro'/> <CardLabel title='46534'/>
        <CardLabel title='6308165790'/> <CardLabel title='add more'/>
      </div>
    </div>
  )
}

export default BreweryCard

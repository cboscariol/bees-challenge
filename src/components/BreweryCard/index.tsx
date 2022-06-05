import './style.css'
import trashIcon from './assets/trashIcon.svg'

function BreweryCard() {
  return (
    <div className='card'>
      <button>
        <img src={trashIcon} alt="delete" />
      </button>
      <h1>10-56 Brewing Company</h1>
      <p>street</p>
      <p>city, state - country </p>
    </div>
  )
}

export default BreweryCard

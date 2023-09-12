import './index.css'

const DestinationItem = ({destinationItem}) => {
  const {name, imgUrl} = destinationItem
  return (
    <li className="item-container">
      <img src={imgUrl} alt={name} className="item-img" />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem

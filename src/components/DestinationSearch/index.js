import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResultsList = destinationsList.filter(eachInput =>
      eachInput.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="app-heading">Destination Search</h1>
        <ul className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onInputChange}
          />
          <img
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </ul>
        <div className="destination-items-container">
          {searchResultsList.map(eachItem => (
            <DestinationItem destinationItem={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch

// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
/*

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item-container">
      <div className="app-item-details-container">
        <img src={imageUrl} alt={appName} className="app-item-image" />
        <p className="app-item-title">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
*/

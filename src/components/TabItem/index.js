// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
/*
import './index.css'

const AppStore = props => {
  const {tabDetails, activeTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    activeTabId(tabId)
  }

  const activeButton = isActive ? 'active-button' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`button ${activeButton}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default AppStore
*/

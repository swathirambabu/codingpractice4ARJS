// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="span">{count}</span>
          times
        </h1>
        <p className="description">click the button to increase count!</p>
        <div>
          <button className="button" type="button" onClick={this.onClickButton}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter

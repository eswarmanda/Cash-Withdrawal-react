import {Component} from 'react'

import List from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDelete = id => {
    const {denominationsList} = this.props
    const {balance} = this.state
    console.log(`${id} Selected ${balance}`)
    const value = denominationsList.filter(eachId => eachId.id === id)
    const amt = value[0].value
    this.setState(prevState => ({
      balance: prevState.balance - amt,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="main-cont">
        <div className="card">
          <div className="profile">
            <div className="icon">
              <p className="p">E</p>
            </div>
            <h1 className="profile-name">Eswar Manda</h1>
          </div>
          <div className="bal-cont">
            <p className="bal">Your Balance</p>
            <div className="amt-cont">
              <p className="amt-bal">{balance}</p>
              <p className="rupees">in Rupees</p>
            </div>
          </div>
          <div className="summary">
            <p className="with-draw">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="ul-cont">
            {denominationsList.map(eachItem => (
              <List
                denominationsList={eachItem}
                key={eachItem.id}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

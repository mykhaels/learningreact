import React from 'react'

class AddPlayer extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        name : ""
      }
      this.onPlayerChange = this.onPlayerChange.bind(this)
      this.addPlayer = this.addPlayer.bind(this)
  }
  /*Sending state name to leaderboard by using props */
  addPlayer(event){
    this.props.onAdd(this.state.name)
    this.setState({
      name : ""
    })
  }
  onPlayerChange(event){
    this.setState({
      name: event.target.value
    })
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="Put Name Here ..."  onChange={this.onPlayerChange}
        value={this.state.name}/>
        <button onClick={this.addPlayer}>Add Player</button>
      </div>
    )
  }
}

export default AddPlayer

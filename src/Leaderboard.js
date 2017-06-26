import  React from 'react';
import Player from './Player.js';
import AddPlayer from './AddPlayer';
class LeaderBoard extends React.Component{
  constructor(props){
    super(props)
    const PLAYERS = [
      {id: 1,name: "Stanley", score: 25},
      {id: 2,name: "Michelle", score: 25},
      {id: 3,name: "Michael", score: 25}
    ]

    this.state = {
      members : PLAYERS
    }
    this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }

  onPlayerAdd(name){
    let new_members = this.state.members
    new_members.push({id: new_members.length+1, name: name, score:10})
    this.setState({
      members : new_members
    })
  }
  render(){
  /*
     const PLAYERS = [
      {id: 1,name: "Stanley", score: 25},
      {id: 2,name: "Michelle", score: 25},
      {id: 3,name: "Michael", score: 25}
    ]
    */
     return (
      <div>
        <h1>LeaderBoard</h1>
        {/* <Player members={PLAYERS} /> */}
        <Player members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
     )
  }
}

export default LeaderBoard;

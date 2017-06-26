import React from 'react';
import PlayerDetail from './PlayerDetail.js';
class Player extends React.Component{

  render(){
      return(
        <div>
        {this.props.members.map( (player) => {
          return (
            <PlayerDetail key={player.id} name={player.name} score={player.score}/>
          )
        })}
        </div>
      )
    }
}

export default Player

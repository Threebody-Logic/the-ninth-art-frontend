import React, { Component } from "react";
import games from '@/constants/games'
import GameDetailCard from "@/components/GameDetailCard";


class GameDetailPage extends Component {
  render() {
    return (<div>
      <GameDetailCard game={this.getGame()}/>
    </div>);
  }

  getGame() {
    const { location } = document;
    let filterGames = games.filter((value) => {
      // @ts-ignore
      return value.id == (new URL(location)).searchParams.get('id');
    });
    return filterGames[0];
  }
}

export default GameDetailPage;
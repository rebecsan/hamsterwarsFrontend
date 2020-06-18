import { updateWinsDefeats } from "./updateWinsDefeats";
import { postNewGame } from "./postNewGame";

export const handleWinnerClick = async (winner, loser) => {
    console.log('You clicked ' + winner.name + ' and ' + loser.name +' lost');

    updateWinsDefeats(winner, loser);
    postNewGame(winner, loser);
    
}
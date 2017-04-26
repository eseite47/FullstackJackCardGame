// FullstackJack Rules:

// - Each player is dealt the same number of cards
// - They flip the card at the top of the deck
// - The card with the highest value wins the round and the winning player 
// receives a point. The two cards used are discarded.
// - The players continue playing until there are no remaining cards
// - The player with the most points at the end wins

// #### Example

// // player1Hand = ['A', '7', '8'];
// // player2Hand = ['K', '5', '9'];
// fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// // --> returns "Player 1 wins 2 to 1!"


// fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
// // --> returns  "Tie!"

function isHigher(string1, string2)
{
  var key = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  for (var i = key.length -1; i >=0; i--)
  {
    if (key[i] === string1)
    {
      return "player1wins";
    }
    else if (key[i] === string2)
    {
      return "player2wins";
    }
  }
}

 
function fullstackJack(array1, array2)
{
  var player1 = 0;
  var player2 = 0;
  
  for (var i = 0; i < array1.length; i++)
  {
    if (array1[i] !== array2[i])
    {
      var results = isHigher(array1[i], array2[i]);
      if (results == "player1wins")
      {
        player1++;
      }
      else if (results == "player2wins")
      {
       player2++;
      }
    }
    else 
    {
      player1++;
      player2++;
    }

  }

  
  if (player1 > player2)
  {
    return "Player 1 wins " + player1 + " to " + player2 +".";
  }
  else if (player2 > player1)
  {
    return "Player 2 wins " + player2 + " to " + player1 +".";
  }
  else
  {
    return "Tie!"
  }
}

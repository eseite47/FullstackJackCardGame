// #### Example

// // player1Hand = ['A', '7', '8'];
// // player2Hand = ['K', '5', '9'];
// fullstackJack(['A', '7', '8'], ['K', '5', '9']);
// // --> returns "Player 1 wins 2 to 1!"


// fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J'])
// // --> returns  "Tie!"


// function comparing two cards and returning the winner
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

//function looking at the whole array of cards, and keeping scores
function fullstackJack(array1, array2)
{
  var player1 = 0;
  var player2 = 0;
  
  for (var i = 0; i < array1.length; i++)
  {
    
    // if the two players draw different cards, compare them using the isHigher function
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
    
    // else, this round is a tie, each get a point
    else 
    {
      player1++;
      player2++;
    }

  }
  
  //once all cards have been evaluate, return the winner
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

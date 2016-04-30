//==============================================================================
// Resources
//==============================================================================
// Functions - http://www.w3schools.com/js/js_functions.asp
//==============================================================================
// #1 - String Property: countChars
//==============================================================================
// Given a string, return the number of characters in that string
function countChars(userString) {
  return userString.length;
}

//==============================================================================
// #2 - String Methods: addHashtag
//==============================================================================
//Given a string, add " #yolo" to the end of that string

function addHashtag(userString) {
  return (userString + ' #yolo');
}

//==============================================================================

//==============================================================================
// #2 - String Methods: excitedTweet
//==============================================================================
//Given a string, add " #yolo" to the end of that string

function excitedTweet(userString) {
  var caps = userString.toUpperCase();
  return (caps + "!!!");
}

//==============================================================================


//Array containing all the keycodes of the music notes
var notes = ["65", "87", "83", "69", "68", "70", "84", "71", "89", "72", "85", "74", "75"];
//Init var current note played by random button
var currentNote;

// Click event on the key pressed, saves the data-key pressed and calls playKey function with the data-key number 
$('body').on('click', '.key', function(event) {
  var keyCode = $(event.currentTarget).attr("data-key");
  playKey(keyCode);
});

// Click event on the play random sound button
$('body').on('click', '.play_sound-button', function(event) {
  playRandomNote();
});

//Function to play the correspondig audio file to the pressed key
function playKey(keyCode) {
    var audio = $(`audio[data-key=${keyCode}]`);
    //Plays the corresponding audio file
    $(audio)[0].play();
    //Check if the key pressed matches the previously note generated
    if (keyCode === currentNote) {
      $('.result').html("Correct!")
    } else {
      $('.result').html("Wrong!")
    }
}

//Function to generate a random number between 0 and the quantity of music notes in the array
function generateRandomKey() {
  var min = 0;
  var max = notes.length;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  //Saves the current played note in a global variables
  currentNote = notes[random];
  return currentNote;
}
//Function to play a random audio file from the list of keynotes
function playRandomNote() {
  //First generate a random key from the array
  var randomNote = generateRandomKey();
  //Select the audio tag matching the random key generated
  var audio = $(`audio[data-key=${randomNote}]`);
  // Plays the corresponding random key
  $(audio)[0].play();
}
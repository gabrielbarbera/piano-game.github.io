var keysPressed = [];

function playKey(keyCode) {
  console.log("playKey", keyCode);
    // const audio = $('audio').attr('data-key', ${keyCode});
    var audio = $(`audio[data-key=${keyCode}]`);
  console.log("audio", audio);
    $(audio)[0].play();
    // [attribute="value"]
    // const key = $('.key').attr(`[data-key="${keyCode}"]`);


    // console.log("audio", audio);
    // if (key !== null)
    // {
    //     key.classList.contains('white') ? key.classList.add('playing-white') : key.classList.add('playing-black');

    //     if (!keysPressed.includes(key))
    //     {
    //         keysPressed.push(key);
    //         audio.currentTime = 0;
    //         audio.play();
    //     }
    // }
}

function resetKey(e)
{
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    var index = keysPressed.indexOf(key);
    if (index !== -1) keysPressed.splice(index, 1);

    if (key !== null) key.classList.remove('playing-white', 'playing-black');
}

$('body').on('click', '.key', function(event) {
  // event.preventDefault();
  /* Act on the event */
  // console.log("event", event);
  var keyCode = $(event.currentTarget).attr("data-key");
  playKey(keyCode);
});
// window.addEventListener('keydown', playKey);
// window.addEventListener('keyup', resetKey);
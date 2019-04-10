/**
 * eventlistener for the play button
 * initializes the first noteObject and changes the answerButtons
 */
document.querySelector("#play").addEventListener("click", function() {
    initNotes(document.querySelector('.keys:checked').id,true);
    changeAnswerBtns();    
}, false);

/**
 * eventlistener for the 'show statistic' button
 */
document.querySelector().addEventListener('click', function() {
    renderNotes();
});

/**
 * changes the textContent of the answerButtons to the according answer possibilities after 
 * shuffling the array ob the global noteObject
 */
function changeAnswerBtns () {
    var answers = noteObject.answers;
    answers = shuffle(answers);
    var answerBtns = document.querySelectorAll('[id*=Button]');
    var i = 0;
    answerBtns.forEach(function(button) {
        button.textContent = answers[i];
        i++;
    });
}

/**
 * modern Fisher-Yates-Shuffle, returns a shuffled array
 * @param {Array} array 
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderStats () {
    document.querySelector('#stats #totalPoints').textContent = statsObject.totalPoints;
    document.querySelector('#stats #totalPoints').textContent = statsObject.problems[0].outcome;
    document.querySelector('#game').style.display = 'none';
    document.querySelector('#stats').style.display = 'block';
}

var $navBtn = document.querySelector('.navBtn');
$navBtn.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($navBtn, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($navBtn, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($navBtn, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
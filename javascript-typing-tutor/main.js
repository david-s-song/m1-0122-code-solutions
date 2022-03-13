document.addEventListener('keydown', type);

function type(event) {
  var $currentLetter = document.querySelector('.current-letter');
  if (!$currentLetter.nextElementSibling) {
    reset();
    return;
  }
  if (event.key === $currentLetter.textContent) {
    $currentLetter.className = 'correct-letter';
    $currentLetter.nextElementSibling.className = 'current-letter';
  } else {
    $currentLetter.className = 'wrong-letter current-letter';
  }
}

function reset() {
  var $spans = document.querySelectorAll('span');
  for (var i = 0; i < $spans.length; i++) {
    if (i === 0) {
      $spans[i].className = 'current-letter';
    } else {
      $spans[i].className = 'black-letter';
    }
  }
}

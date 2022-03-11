var $body = document.querySelector('body');
var $button = document.querySelector('button');
var $click = false;

$button.addEventListener('click', function () {
  if ($click === true) {
    $button.className = 'button-gray';
    $body.className = 'body-black';
  } else {
    $button.className = 'button';
    $body.className = 'body';
  }
  $click = !$click;
});

function handleClick(event) {
  console.log('button clicked');
  console.log('event');
  console.log('.click-button');
}
var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event');
  console.log('.hover-button');
}
var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event');
  console.log('.double-click-button');
}
var $dClick = document.querySelector('.double-click-button');
$dClick.addEventListener('dblclick', handleDoubleClick);

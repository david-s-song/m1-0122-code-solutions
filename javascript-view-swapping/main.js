var $tabContainer = document.querySelector('.tab-container');
var $allTab = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $allTab.length; i++) {
      if (e.target === $allTab[i]) {
        $allTab[i].className = 'tab active';
      } else {
        $allTab[i].className = 'tab';
      }
    }
    var dataViewClick = e.target.getAttribute('data-view');
    for (var j = 0; j < $allView.length; j++) {
      if (dataViewClick === $allView[j].getAttribute('data-view')) {
        $allView[j].className = 'view';
      } else {
        $allView[j].className = 'hidden';
      }
    }
  }
});

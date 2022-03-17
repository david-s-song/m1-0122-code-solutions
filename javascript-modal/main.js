var $overlay = document.querySelector('.overlay');
var $buttonOpen = document.querySelector('.btn-open');
var $surveyModal = document.querySelector('.survey-question-wrapper');
var $buttonNo = document.querySelector('.btn-no');

$buttonOpen.addEventListener('click', function () {
  $overlay.className = 'overlay show';
  $surveyModal.className = 'survey-question-wrapper show';
});

$buttonNo.addEventListener('click', function () {
  $overlay.className = 'overlay hidden';
  $surveyModal.className = 'survey-question-wrapper hidden';
});

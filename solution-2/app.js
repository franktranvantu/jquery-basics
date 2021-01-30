// Inside of your click handler, use jQuery to select event.target.
// Then call the hide() method on your selection.
// If your code is correct, in preview mode the student names should disappear when clicked.
$('.student-list').on('click', function (event) {
  $(event.target).hide();
})
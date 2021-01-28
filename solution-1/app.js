// Inside the provided click handler in app.js:
// Use jQuery’s val() method to get the value of the text input with the ID of name-input
// Save it to a variable named newName
$('button').click(function() {
  const newName = $('#name-input').val();
});

// When the button is clicked
$('.spoiler').on('click', 'button', function () {
  // Show the spoiler text
  $('.spoiler span').show();
  // Hide the "Reveal Spoiler" button
  $('.spoiler button').hide();
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
// Append to web page
// $('.spoiler').prepend($button);
$('.spoiler').append($button);

// Hide the spoiler text
$('.spoiler span').hide();
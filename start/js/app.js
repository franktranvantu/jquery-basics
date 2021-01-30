// When the button is clicked
$('.spoiler').on('click', 'button', function (event) {
  // Show the spoiler text
  // $('.spoiler span').show();
  // Hide the "Reveal Spoiler" button
  $(event.target).hide();
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
// Append to web page
// $('.spoiler').prepend($button);
$('.spoiler').append($button);

// Hide the spoiler text
$('.spoiler span').hide();
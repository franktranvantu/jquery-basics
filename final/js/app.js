// When the button is clicked
$('.spoiler').on('click', 'button', function (event) {
  // Show the spoiler text
  // $(event.target).prev().show();
  $(this).prev().show();
  // Hide the "Reveal Spoiler" button
  $(this).hide();
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
// Append to web page
// $('.spoiler').prepend($button);
$('.spoiler').append($button);

// Hide the spoiler text
$('.spoiler span').hide();
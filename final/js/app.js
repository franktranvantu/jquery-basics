const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfLinks = $('a[href$="pdf"]');
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');
$pdfLinks.attr('download', true);

$secureLinks.addClass('secure');
$pdfLinks.addClass('pdf');

$pdfLinks.on('click', function (event) {
  // Check if checkbox has been checked
  // If zero checkboxes are checked
  if ($(':checked').length === 0) {
    // Prevent download of document
    event.preventDefault();
    // Alert the user
    alert('Please check the box to allow PDF download.');
  }
  // Else allow the download
});

$('#links').append($pdfCheckbox);
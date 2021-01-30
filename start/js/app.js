const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfLinks = $('a[href$="pdf"]');

$secureLinks.attr('target', '_blank');
$pdfLinks.attr('download', true);

$secureLinks.addClass('secure');
$pdfLinks.addClass('pdf');

// Check if checkbox has been checked
// If zero checkboxes are checked
  // Prevent download of document
  // Alert the user
// Else allow the download
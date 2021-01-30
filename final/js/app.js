const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfLinks = $('a[href$="pdf"]');

$secureLinks.attr('target', '_blank');
$pdfLinks.attr('download', true);

$secureLinks.addClass('secure');
$pdfLinks.addClass('pdf');
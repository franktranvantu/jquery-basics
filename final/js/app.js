const $odd = $('a:odd');
$odd.css({backgroundColor: 'tomato'});

const $secureLinks = $('a[href^="https://"]');
$secureLinks.css({color: 'green'});

const $pdfLinks = $('a[href$="pdf"]');
$pdfLinks.css({fontSize: '2rem'});
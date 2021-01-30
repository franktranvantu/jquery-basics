// The submit button is now disabled, but it doesn’t look like it! Luckily, we have a class called disabled in our CSS that will style it for us.
// Chain the appropriate jQuery method to add the class of disabled to the submit button.
const $submit = $('.submit-btn');
$submit.attr('disabled', true).addClass('disabled');
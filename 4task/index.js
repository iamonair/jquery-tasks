$(document).ready(function() {
    let cBoxes = $('input[type="checkbox"]');
    cBoxes.change(function() {
        let checked = cBoxes.filter(':checked').length;
        if (checked >= 3) {
            cBoxes.not(':checked').prop('disabled', true);
        } else {
            cBoxes.prop('disabled', false);
        }
    });
});
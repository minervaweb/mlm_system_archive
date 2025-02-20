$(document).ready(function() {
    // You can add any JavaScript or jQuery functionality here
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Add your login logic here
        alert('Login submitted for: ' + $('#userId').val());
    });
});

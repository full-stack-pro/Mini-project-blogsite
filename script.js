document.addEventListener('DOMContentLoaded', function() {
    var loginLink = document.getElementById('loginLink');
    var signupLink = document.getElementById('signupLink');
    var loginInterface = document.getElementById('loginInterface');
    var signupInterface = document.getElementById('signupInterface');
    var homeLink = document.getElementById('home');

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginInterface.style.display = 'block';
        signupInterface.style.display = 'none';
    });

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginInterface.style.display = 'none';
        signupInterface.style.display = 'block';
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginInterface.style.display = 'none';
        signupInterface.style.display = 'none';
    });
    var cards = document.querySelectorAll('.title-card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            showInterface('writeInterface');
        });
    });
    document.getElementById('saveButton').addEventListener('click', function() {
        var content = document.getElementById('writeContent').value;
        console.log('Content:', content);
        // Add your save logic here
    });


    function showInterface(interfaceId) {
        var interfaces = document.querySelectorAll('.form-container');
        interfaces.forEach(function(interface) {
            interface.style.display = 'none';
        });
        document.getElementById(interfaceId).style.display = 'block';
    }
});

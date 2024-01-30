document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit =function() {

        const name=document.querySelector('#user').value;

        alert (`Hello, ${name}`);
    }
}
);

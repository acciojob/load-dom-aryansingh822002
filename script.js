//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
            // Create a new paragraph element
            const message = document.createElement('p');
            message.textContent = 'DOM load success';
            
            // Append it to the body
            document.body.appendChild(message);
        });
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const outputText = document.getElementById('outputText');

    textInput.addEventListener('input', function() {
        outputText.textContent = textInput.value;
    });
});

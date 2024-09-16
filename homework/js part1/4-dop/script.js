document.getElementById('showButton').onclick = function() {
    const Select = document.getElementById('Select').value;
    const inputField = document.getElementById('inputField').value;
    const output = document.getElementById('output');
    
    output.innerHTML = '';

    if (Select === 'text') {
        output.textContent = inputField;
    } else if (typeSelect === 'image') {
        const img = document.createElement('img');
        img.src = inputField;
        output.appendChild(img);
    }
};
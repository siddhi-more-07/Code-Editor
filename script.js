// Get elements
let output = document.getElementById("output");
let htmlCode = document.getElementById('htmlCode');
let cssCode = document.getElementById('cssCode');
let jsCode = document.getElementById('jsCode');

// Function to update the output iframe
function updateOutput() {
    output.contentDocument.body.innerHTML = htmlCode.value;
    output.contentDocument.head.innerHTML = `<style>${cssCode.value}</style>`;
    output.contentWindow.eval(jsCode.value);
}

// Event listeners for textarea changes
updateOutput();
htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);



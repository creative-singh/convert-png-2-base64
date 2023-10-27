function convertToBase64() {
  // Taking all the inputs/outputs
  const fileInput = document.getElementById('imageInput');
  const convertedImg = document.getElementById('convertedImg');
  const base64Output = document.getElementById('base64Output');
  const copyToClipboardBtn = document.getElementById('copyToClipboardBtn');

  // Get File
  const file = fileInput.files[0];
  if (file) {
    // Read File
    const reader = new FileReader();

    reader.onload = (event) => {
      // Showing image on screen
      convertedImg.src = event.target.result;
      convertedImg.style.display = 'block';

      // Converting to base64
      const base64String = event.target.result.split(',')[1];
      base64Output.value = base64String;

      // Copy to clipboard button
      copyToClipboardBtn.style.display = "block"
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file.');
  }
}

function copyToClipboard() {
  // Inputs 
  const featureNotLive = document.getElementById('feature-not-live');
  const textArea = document.getElementById('base64Output');
  const copyBtn = document.getElementById("copyToClipboardBtn");

  // AS document.execCommand is deprecated, using navigator.clipboard
  if (navigator.clipboard) {
    const text = textArea.value
    navigator.clipboard.writeText(text)
      .then(() => {
        copyBtn.innerHTML = "Text Copied!";

        setTimeout(function () {
          copyBtn.innerHTML = "Copy to clipboard";
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  } else {
    // Fallback for browsers that do not support the Clipboard API
    textArea.select();
    document.execCommand("copy");

    copyBtn.innerHTML = "Text Copied!";

    setTimeout(function () {
      copyBtn.innerHTML = "Copy to clipboard";
    }, 2000);
  }
}
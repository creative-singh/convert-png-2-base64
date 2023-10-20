function convertToBase64() {
  const fileInput = document.getElementById('imageInput');
  const convertedImg = document.getElementById('convertedImg');
  const base64Output = document.getElementById('base64Output');

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      convertedImg.src = event.target.result;
      convertedImg.style.display = 'block';

      const base64String = event.target.result.split(',')[1];
      base64Output.value = base64String;
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file.');
  }
}
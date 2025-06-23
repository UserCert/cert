const canvas = document.getElementById("certificateCanvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "certificate.jpg";  // Your image file name

// Only draw when image is fully loaded
image.onload = function () {
  drawBase();
};

function drawBase() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

function generateCertificate() {
  const name = document.getElementById("nameInput").value;
  if (!name) {
    alert("Please enter a name");
    return;
  }

  drawBase();  // Reset canvas with image
  ctx.font = "bold 36px Algerian";
  ctx.fillStyle = "#004d26";
  ctx.textAlign = "center";
  ctx.fillText(name, canvas.width / 2, 430); // You can adjust Y=370 as needed
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [canvas.width, canvas.height]
  });

  const imgData = canvas.toDataURL("image/jpeg", 1.0);
  pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
  pdf.save("certificate.pdf");
}

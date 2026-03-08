const qr_box = document.querySelector(".qr_box"),
qrInput = qr_box.querySelector(".form input"),
generateBtn = qr_box.querySelector(".form button"),
qrImg = qr_box.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click",() => {
  let qrValue = qrInput.value.trim();
  if(!qrValue || preValue === qrValue)
    return;
preValue=qrValue;
generateBtn.innerText = "Generating QR Code...";
qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

qrImg.addEventListener("load", () => {
    qr_box.classList.add("active");
    generateBtn.innerText= "Generate QR code";
});
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()){
    qr_box.classList.remove("active");
    preValue= "";
  } 
})

const downloadBtn = document.getElementById("downloadBtn");


downloadBtn.addEventListener("click", () => {
  if (qrImg.src) {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = "qr-code.png"; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("QR code not found!");
  }
});

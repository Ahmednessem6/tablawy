const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelectorAll(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput[0].value.trim()+qrInput[1].value.trim()+qrInput[2].value.trim()+qrInput[3].value.trim()+qrInput[4].value.trim()
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.forEach((input) => {
    input.addEventListener("keyup", () => {
        if (!input.value.trim()) {
            wrapper.classList.remove("active");
            preValue = "";
        }
    });
});

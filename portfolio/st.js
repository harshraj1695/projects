// Function to show the popup with certificate details
function showCertificatePopup(card) {
    // Retrieve information from the clicked certificate card
    const frontImage = card.querySelector(".certificate-front img").src;
    const title = card.querySelector(".certificate-back h3").textContent;
    const issuer = card.querySelector(".certificate-back p:nth-of-type(1)").textContent;
    const date = card.querySelector(".certificate-back p:nth-of-type(2)").textContent;
    const description = card.querySelector(".certificate-back .description").textContent;

    // Populate the popup with the certificate information
    document.getElementById("popupImage").src = frontImage;
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupIssuer").textContent = issuer;
    document.getElementById("popupDate").textContent = date;
    document.getElementById("popupDescription").textContent = description;

    // Show the popup
    document.getElementById("certificatePopup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("certificatePopup").style.display = "none";
}

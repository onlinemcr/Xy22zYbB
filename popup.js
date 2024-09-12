document.addEventListener('DOMContentLoaded', function () {
    const barcodeBtn = document.getElementById('barcode-btn');
    const popupLayer = document.getElementById('popup-layer');
    const closePopup = document.getElementById('close-popup');

    // Show the popup
    barcodeBtn.addEventListener('click', function () {
        popupLayer.style.display = 'flex';
    });

    // Hide the popup when clicking the close button
    closePopup.addEventListener('click', function () {
        popupLayer.style.display = 'none';
    });

    // Hide the popup when clicking outside the content
    popupLayer.addEventListener('click', function (event) {
        if (event.target === popupLayer) {
            popupLayer.style.display = 'none';
        }
    });
});

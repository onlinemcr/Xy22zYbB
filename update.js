document.addEventListener('DOMContentLoaded', function () {
    
    // Function to update Customer Business Name and Customer ID
    function updateCustomerInfo(businessName, customerId) {
        const customerInfo = document.getElementById('customer-info');
        customerInfo.innerHTML = `${businessName} - ${customerId}`;
    }

    // Function to update Tracking Number
    function updateTrackingNumber(trackingNumber) {
        const trackingElement = document.getElementById('tracking-number');
        trackingElement.innerHTML = `Tracking Number: ${trackingNumber}`;
    }

    // Function to update Banner Design Info
    function updateBannerInfo(bannerDescription, price) {
        const bannerInfo = document.getElementById('banner-info');
        bannerInfo.innerHTML = `<strong>${bannerDescription} <br>${price}</strong>`;
    }

    // Function to update Design Details List
    function updateDesignDetails(details) {
        const designDetails = document.getElementById('design-details');
        designDetails.innerHTML = ''; // Clear the existing list items
        details.forEach(detail => {
            const listItem = document.createElement('li');
            listItem.textContent = detail;
            designDetails.appendChild(listItem);
        });
    }

    // Function to update Last Update Title
    function updateLastUpdateTitle(title) {
        const lastUpdateTitle = document.getElementById('last-update');
        lastUpdateTitle.textContent = title;
    }

    // Dashboard 
    updateCustomerInfo('Kota kitchen', 'C121812');
    updateTrackingNumber('Ux7Bq0R3tT2');
    updateBannerInfo('Logo Design', '300.00');
    updateDesignDetails([
        'One design concept',
        'Design in JPG and PDF format',
        'Mockup design in JPG format',
        'Nicole .zip file'
    ]);
    updateLastUpdateTitle('01 Sept 2024');

});

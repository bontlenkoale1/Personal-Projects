function showDetails(service) {
    const details = {
        manicure: {
            images: [
                'images/chrome cross.jpg', 
                'images/nails.jpg', 
                'images/red stillletto.jpg', 
                'images/background.jpg', 
                'images/stilleto.jpg', 
                'images/zebra stiletto.jpg', 
                'images/french.jpg', 
                'images/buddy set.jpg', 
                'images/pink french set.jpg', 
                'images/plain red set.jpg', 
                'images/pink french stiletto.jpg', 
                'images/pink stiletto.jpg', 
                'images/black french stileto.jpg', 
                'images/bleck2.jpg', 
                'images/chrome white 2.jpg', 
                'images/chrome white.jpg', 
                'images/coffin white design.jpg', 
                'images/colorful stileto.jpg', 
                'images/blue.jpg', 
                'images/marble pink.jpg', 
                'images/orange set.jpg', 
                'images/purfume stileto.jpg', 
                'images/plain red set.jpg', 
                'images/plain set.jpg', 
                'images/skyblue stileto.jpg',
                'images/Screenshot_20240611_005809.jpg',
                'images/Screenshot_20240611_005705.jpg',
                'images/Screenshot_20240611_005319.jpg',
            ],
            prices: 'Acrylic Plain Set: R250, French Set: R350, Ombre Set: R350, Refill: R200, Nail Repair: R30, Chrome set: R400, Buff & Shine: R100'
        },
        pedicure: {
            images: [
                'images/chrome white.jpg', 
                'images/Screenshot_20240611_004048.jpg', 
                'images/Screenshot_20240611_004112.jpg', 
                'images/Screenshot_20240611_005338.jpg', 
                'images/Screenshot_20240611_005357.jpg', 
                'images/Screenshot_20240611_005417.jpg', 
                'images/Screenshot_20240611_004824.jpg'
            ],
            prices: 'French Toes: R250, Gel Toes: R200'
        },
       more: {
            images: [
                'images/Screenshot_20240611_003936.jpg', 
                'images/Screenshot_20240611_003949.jpg',
                'images/Screenshot_20240611_004000.jpg',
                'images/Screenshot_20240611_004137.jpg',
                'images/Screenshot_20240611_004224.jpg',
                'images/Screenshot_20240611_004244.jpg',
                'images/Screenshot_20240611_004254.jpg',
                'images/Screenshot_20240618_185532.jpg',
                'images/Screenshot_20240618_185439.jpg',
                'images/Screenshot_20240618_185328.jpg',
            ],
            prices: 'We Offer Master Classes For students interested in being nail technician, We Also Do House Calls'
        }
    };

    const serviceDetails = details[service];
    if (serviceDetails) {
        let content = `<h2>${service.charAt(0).toUpperCase() + service.slice(1)} Details</h2>`;
        content += `<p>${serviceDetails.prices}</p>`;
        content += '<div class="gallery">';
        serviceDetails.images.forEach(img => {
            content += `<img src="${img}" alt="${service} image"/>`;
        });
        content += '</div>';
        document.getElementById('service-details').innerHTML = content;
    }
}

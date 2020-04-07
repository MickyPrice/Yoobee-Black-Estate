// Code for generating gallery photos on restaurant page

var images = [
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_0.jpg",
        alt: "People enjoying food at Black Estate's restaurant"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_1.jpg",
        alt: "Food"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_3.jpg",
        alt: "Photo of restaurant"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_4.jpg",
        alt: "Salad"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_5.jpg",
        alt: "The winery and restaurant"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_6.jpg",
        alt: "People having food in the restaurant"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_7.jpg",
        alt: "People having food in the restaurant"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_7.jpg",
        alt: "People having food in the restaurant"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_7.jpg",
        alt: "People having food in the restaurant"
    },
    {
        url: "./img/photography/restaurant/black_estate_winery_restaurant_photos_north_canterbury_waipara_8.jpg",
        alt: "Food"
    }];




window.addEventListener('load', generateGallery("gallery__images"));

function generateGallery(elementId) {
    if(document.getElementById(elementId)) { // Check if element exists
        for (const key in images) { // Loop through image array
            if (images.hasOwnProperty(key)) {
                const element = images[key];

                var a = document.createElement("a"); // Create the anchor element
                a.href = element.url;
                a.setAttribute('data-lightbox', "Restaurant Gallery");
                a.setAttribute('data-title', element.alt);
                a.classList.add("aspect");
                a.classList.add("gallery__image-wrapper");

                var img = document.createElement("img"); // Create the element
                img.src = element.url;
                img.alt = element.alt;
                img.classList.add("gallery__image");
                img.classList.add("aspect");

                a.appendChild(img);
                document.getElementById(elementId).appendChild(a);

            }
        }
    }else { // Element not found
        console.error(`There was no element on the document with an id of ${elementId}`);
    }
}
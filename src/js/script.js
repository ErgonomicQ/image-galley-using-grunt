$(document).ready(function(){
    const images=[
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg"
    ];

    const imageGallery = document.getElementById('imageGallery');

    //Create image elements
    function createImages(imageURL){
        const imageBox = document.createElement('div');
        imageBox.className = 'col-md-4 col-sm-6';

        const checkbox =  document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', function(){
            //handle checkbox toggle
            if (this.checked) {
                imageBox.classList.add('selected');
            }else{
                imageBox.classList.remove('selected');            }
        });


        const image = document.createElement('div');
        image.className = 'image-box';
        image.style.backgroundImage = `url(${imageURL})`
        image.appendChild(checkbox);
        
        imageBox.appendChild(image);
        return imageBox;
    }

    //populate function
    function populateImageGallery(images){
        images.forEach(imageURL => {
            const imageElement = createImages(imageURL)
            imageGallery.append(imageElement);
        });
    }


    populateImageGallery(images);
})
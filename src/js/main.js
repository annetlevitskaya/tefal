function ready() {
   
    function mainSlider() {
        const sliderWrapper = document.querySelector('.slider__wrapper');
        const sliderCount = document.querySelectorAll('.slider__item').length;

        setInterval(() => {
            const swapped = parseInt(sliderWrapper.getAttribute('data-swapped')) || 0;

            if (swapped + 1 >= sliderCount) {
                setSlide(0);
            } else {
                setSlide(swapped + 1);
            }
        }, 4000);
    }

    function setSlide(index) {
        const sliderWrapper = document.querySelector('.slider__wrapper');

        sliderWrapper.style.left = index * -100 + '%';
        sliderWrapper.setAttribute('data-swapped', index)
    }

    mainSlider();

    var sliderMapImages = document.querySelectorAll('.slider__map_img');

    sliderMapImages.forEach(image => {
        image.addEventListener('click', function() {
            const index = image.getAttribute('data-map');
            setSlide(index);
        })
    })

    // var sidebarGallery = document.querySelectorAll('.sidebar__gallery_item');
    
    // sidebarGallery.forEach(photo => {
    //     photo.addEventListener('click', function() {
    //         photo.classList.add('active');
    //     })
    // });
}

document.addEventListener("DOMContentLoaded", ready);
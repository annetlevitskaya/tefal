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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlYWR5KCkge1xuICAgXG4gICAgZnVuY3Rpb24gbWFpblNsaWRlcigpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3dyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgc2xpZGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19pdGVtJykubGVuZ3RoO1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3YXBwZWQgPSBwYXJzZUludChzbGlkZXJXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2FwcGVkJykpIHx8IDA7XG5cbiAgICAgICAgICAgIGlmIChzd2FwcGVkICsgMSA+PSBzbGlkZXJDb3VudCkge1xuICAgICAgICAgICAgICAgIHNldFNsaWRlKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRTbGlkZShzd2FwcGVkICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDQwMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNsaWRlKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX193cmFwcGVyJyk7XG5cbiAgICAgICAgc2xpZGVyV3JhcHBlci5zdHlsZS5sZWZ0ID0gaW5kZXggKiAtMTAwICsgJyUnO1xuICAgICAgICBzbGlkZXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FwcGVkJywgaW5kZXgpXG4gICAgfVxuXG4gICAgbWFpblNsaWRlcigpO1xuXG4gICAgdmFyIHNsaWRlck1hcEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX21hcF9pbWcnKTtcblxuICAgIHNsaWRlck1hcEltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLW1hcCcpO1xuICAgICAgICAgICAgc2V0U2xpZGUoaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyB2YXIgc2lkZWJhckdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhcl9fZ2FsbGVyeV9pdGVtJyk7XG4gICAgXG4gICAgLy8gc2lkZWJhckdhbGxlcnkuZm9yRWFjaChwaG90byA9PiB7XG4gICAgLy8gICAgIHBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBwaG90by5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVhZHkpOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

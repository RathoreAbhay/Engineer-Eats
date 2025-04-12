//for the video
const video = document.getElementById('foodVideo');
const playButton = document.querySelector('.play-button');

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
        playButton.style.display = "flex";
    }
});

playButton.addEventListener('click', (event) => {
    video.play();
    playButton.style.display = "none";
});

//for cart modal
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cartModal = document.getElementById("cartModal");
    const backToMenu = document.getElementById("backToMenu");

    cartModal.style.display = "none";

    cartIcon.addEventListener("click", (event) => {
        event.preventDefault();
        cartModal.style.display = "flex";
        document.body.classList.add("modal-open"); 
    });

    backToMenu.addEventListener("click", closeCart);

    function closeCart() {
        cartModal.style.display = "none";
        document.body.classList.remove("modal-open"); 
    }

    window.addEventListener("click", function (event) {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
            document.body.classList.remove("modal-open"); 
        }
    });

});

//for request dish modal
document.addEventListener("DOMContentLoaded", function () {
    const requestDishBtn = document.getElementById("requestDishBtn");
    const requestDishModal = document.getElementById("request-dish-modal");
    const cancelBtn = document.getElementById("request-dish-cancel");
    const requestDishForm = document.getElementById("request-dish-form");

    requestDishBtn.addEventListener("click", function () {
        requestDishModal.style.display = "flex";
        document.body.classList.add("modal-open"); 
    });

    cancelBtn.addEventListener("click", function () {
        requestDishModal.style.display = "none";
        document.body.classList.remove("modal-open"); 
    });

    window.addEventListener("click", function (event) {
        if (event.target === requestDishModal) {
            requestDishModal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });

    requestDishForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const dishName = document.getElementById("request-dish-name").value;
        const dishImage = document.getElementById("request-dish-image").value;

        console.log("Dish Requested:", dishName, "Image URL:", dishImage);

        requestDishModal.style.display = "none";
        document.body.classList.remove("modal-open");
    });
});

//for the carousel
document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20, 
        loop: true, 
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev" 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });
});

//for adding items to cart
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });
});


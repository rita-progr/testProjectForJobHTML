const sliderWrapper =  document.querySelector('.swiper-wrapper');

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 5,
        }
    },
});

const sliderItems = [
    {
        id: 1,
        title:50,
        dollars:5
    },
    {
        id: 2,
        title:150,
        dollars:15
    },
    {
        id: 3,
        title:300,
        dollars:30
    },
    {
        id: 4,
        title:500,
        dollars:50
    },
    {
        id: 5,
        title:1000,
        dollars:100
    },
]
const sliders = sliderItems.map(item => (`
                                <div class="swiper-slide">
                                        <div class="swiper-slide_container">
                                            <div class="swiper-slide_content">
                                                <div class="swiper-slide_content-item ">
                                                    <p class = "font-24-bold">${item.title}</p>
                                                    <div class = "app__content-main_second-banner-cr">CR</div>
                                                    <div class="font-24-bold dollars-slide"><span class="thin">/</span> $${item.dollars}</div>
                                                </div>
                                                <button class = "swiper_button">
                                                    Buy now
                                                </button>
                                            </div>
                                            <div class="swiper-slide_content-additional">One time offer!</div>
                                        </div>
                                    </div>`)).join('');

sliderWrapper.innerHTML = sliders;
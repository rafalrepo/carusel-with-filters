const caruselItems = [{
        'img': 'https://pixabay.com/get/gc078eba5888582650e41d72a0eaafda1ff04d161b4a349cec590fd30a8bbf1e036bf6219e4c320b3d7d14c3760fba51a_1920.jpg',
        'title': 'Britta Clay Art',
        'time': 'Sat, 24 October 2020',
        'filter': 1
    },
    {
        'img': 'https://pixabay.com/get/g4a928e721051e1a1b4b1b7a674d890cef8d2f2c2df373e3a9fb39f083c9801b0a65133fd3798b5836da37eac14d9b84a_1920.jpg',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 2
    },
    {
        'img': 'https://pixabay.com/get/g114e35a45dff7db862a117eeeca0479fe22a0f16f77f88be69bfe0efe17cd6cbe0697f322c2a2ab8a182a679ae151bce_1280.png',
        'title': 'Way of the Hunt',
        'time': 'Fri, 14 August 2020',
        'filter': 3
    },
    {
        'img': 'https://pixabay.com/get/g6e85a5cf0f7b2c2b96ff18dc8ee3ffef7af22d0161c8f3d229f1182688c82fb1623e56e0d48b03008d124ac715c305d3_1920.jpg',
        'title': 'Way of the Hunt 2',
        'time': 'Fri, 14 August 2020 2',
        'filter': 2
    },
    {
        'img': 'https://pixabay.com/get/g1d2b794ddf280be35707fdb2c103f5a5ae08250b2bd0f4665e710bb72415f0095738ffd49977832f023ed8baab8021e5_1920.jpg',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 3
    },
    {
        'img': 'https://pixabay.com/get/ga676126cc1102dc2cb8396a2976c3ca7b287a01e4a50c8cd67f072f1764fb353ac9006484cc6ceabda1653477ea5dc08_1920.jpg',
        'title': 'Way of the Hunt',
        'time': 'Fri, 14 August 2020',
        'filter': 1
    },
    {
        'img': 'https://pixabay.com/get/g2f16833502010911607a0cd42bdabca93931f0bf3dc921b89c2b722c1b16536747e9f63a42c0521dc7534de595ac9e61_1920.jpg',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 1
    },
    {
        'img': 'https://pixabay.com/get/g93d085d5dde18ac621c721fa3cbf80294a63f1afefa382885d80789e325967224450cd3781c0a1a8e502193c43cd7a1c_1920.jpg',
        'title': 'Way of the Hunt',
        'time': 'Fri, 14 August 2020',
        'filter': 2
    },
    {
        'img': 'https://pixabay.com/get/g2477d833d19d88b2b51bb382a6334785332710588875beded2b2f27b58242478fc33630a78e7cc528cc6ad0fb8feaf2d_1920.jpg',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 2
    },
    {
        'img': 'https://pixabay.com/get/g37eee32202dbb88c9e9205cfef3307578e67240a961aa5c07e83b351e631a79dfa4ec8d6a63dbeb1631791c11570d505_1920.jpg',
        'title': 'Way of the Hunt',
        'time': 'Fri, 14 August 2020',
        'filter': 3
    },
]

const carusel = document.getElementById('figmaCarusel');
const nextEl = document.querySelector('.figma-carusel__next');
const prevEl = document.querySelector('.figma-carusel__prev');
const swiperWrapper = carusel.querySelector('.swiper-wrapper');
const filtersItems = document.querySelectorAll('.figma-carusel-filters__item');

if (carusel) {

    let options = {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 23,
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
        touchRatio: 0,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {}
        },
        init: false,
    };

    let swiper = new Swiper(carusel, options);

    swiper.on('init', function (swiper) {
        caruselItems.forEach(item => {
            swiperWrapper.innerHTML +=
                `<div class="swiper-slide">
            <div class="figma-carusel__slide">
                <div class="figma-carusel__image">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="figma-carusel__text">
                    <h3>${item.title}</h3>
                    <time datetime="2020-10-24">${item.time}</time>
                </div>
            </div>
        </div>`
        })

        if (swiper.slides.length < 4) {
            if (nextEl) nextEl.classList.add('d-none');
            if (prevEl) prevEl.classList.add('d-none');
            swiperWrapper.classList.add('swiper-wrapper--center');
        } else {
            if (nextEl) nextEl.classList.remove('d-none');
            if (prevEl) prevEl.classList.remove('d-none');
            swiperWrapper.classList.remove('swiper-wrapper--center');
        }
    });

    setTimeout(function () {
        swiper.init();
        resetSwiper(swiper, carusel)
    }, 100)

    filtersItems.forEach(item => {
        item.addEventListener('click', function () {
            filtersItems.forEach(fi => {
                fi.classList.remove('active');
            })
            filteredItems(this.dataset.value);
            resetSwiper(swiper, carusel);
            item.classList.add('active');
        })
    })

    function resetSwiper(swiper, carusel) {
        swiper.destroy();
        swiper = new Swiper(carusel, options);
        swiper.on('init', function (swiper) {
            if (swiper.slides.length < 4) {
                if (nextEl) nextEl.classList.add('d-none');
                if (prevEl) prevEl.classList.add('d-none');
                swiperWrapper.classList.add('swiper-wrapper--center');
                swiper.slides.pop().style.marginRight = 0;
            } else {
                if (nextEl) nextEl.classList.remove('d-none');
                if (prevEl) prevEl.classList.remove('d-none');
                swiperWrapper.classList.remove('swiper-wrapper--center');
            }
        });

        setTimeout(function () {
            swiper.init();
        }, 100)
    }
}

function filteredItems(filtr) {
    swiperWrapper.innerHTML = '';
    caruselItems.forEach(item => {
        if (item.filter == filtr || filtr == 0) {
            swiperWrapper.innerHTML +=
                `<div class="swiper-slide">
            <div class="figma-carusel__slide">
                <div class="figma-carusel__image">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="figma-carusel__text">
                    <h3>${item.title}</h3>
                    <time datetime="2020-10-24">${item.time}</time>
                </div>
            </div>
        </div>`
        }
    })
}
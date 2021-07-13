const caruselItems = [{
        'img': './Rectangle_3.png',
        'title': 'Britta Clay Art',
        'time': 'Sat, 24 October 2020',
        'filter': 1
    },
    {
        'img': './Rectangle_4.png',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 2
    },
    {
        'img': './Rectangle_5.png',
        'title': 'Way of the Hunt',
        'time': 'Fri, 14 August 2020',
        'filter': 3
    },
    {
        'img': './Rectangle_5.png',
        'title': 'Way of the Hunt 2',
        'time': 'Fri, 14 August 2020 2',
        'filter': 2
    },
    {
        'img': './Rectangle_4.png',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 3
    },
    {
        'img': './Rectangle_5.png',
        'title': 'Way of the Hunt',
        'time': 'Fri, 14 August 2020',
        'filter': 1
    },
    {
        'img': './Rectangle_4.png',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 1
    },
    {
        'img': './Rectangle_5.png',
        'title': 'Way of the Hunt',
        'time': 'Fri, 14 August 2020',
        'filter': 2
    },
    {
        'img': './Rectangle_4.png',
        'title': 'Belgian Balloon Throphy',
        'time': 'Sat, 20 May 2020',
        'filter': 2
    },
    {
        'img': './Rectangle_5.png',
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
            filteredItems(this.dataset.value)
            resetSwiper(swiper, carusel)
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
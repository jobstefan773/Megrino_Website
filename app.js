let items = document.querySelectorAll('.carousel .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');


let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

let refreshInterval = setInterval(() => {
    next.click();
}, 15000)


let playTimeout;

function showSlider() {

    let itemActiveOld = document.querySelector('.carousel .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');


    let oldActiveVideo = itemActiveOld.querySelector('video');
    if (oldActiveVideo) {
        oldActiveVideo.pause();
        oldActiveVideo.currentTime = 0;
        clearTimeout(playTimeout);
    }

    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');


    let videos = document.querySelectorAll('.carousel .list .item video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });


    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');


    let activeVideo = items[itemActive].querySelector('video');
    if (activeVideo) {
        playTimeout = setTimeout(() => {
            activeVideo.play();
        }, 5000);
    }


    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 15000)
}



thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
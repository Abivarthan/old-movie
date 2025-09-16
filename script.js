
let menu=document.querySelector(".menu")
document.getElementById("icon").addEventListener("click", () => {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.style.display = "none";
    });
});
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween:20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween:40,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween:50,
    },

  }
  });
function searchMovies() {
    // Get search input value
    const searchTerm = document.querySelector('.search').value.toLowerCase();
    
    // Get all movie cards
    const movieCards = document.querySelectorAll('.post-box');
    
    movieCards.forEach(card => {
        // Get movie title from the card
        const title = card.querySelector('.movie-name strong').textContent.toLowerCase();
        
        // Check if title matches search term
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show matching cards
        } else {
            card.style.display = 'none';  // Hide non-matching cards
        }
    });
}

// this is very important now we are going to create the 20 html
// pages in to one javascript pages


// Adding the all the movie in the array list to access

    const movies = [
        {
            id: 1,
            moviename: "Bombay",
            image: "AR_Rahman_Bombay_HD.webp",
            rate: 8.1,
            date: "1995-03-10",
            cat1: "Romantic",
            cat2: "Drama",
            cat3: "Action",
            trailer: "https://youtu.be/CTuSZeef_fM?si=IkLZLu3502JA6bHL",
            },
        {
            id: 2,
            moviename: "Kandukondain Kandukomdain",
            image: "kandukondain-kandukomdain.jpg",
            rate: 7.6,
            date: "2000-05-05",
            cat1: "Drama",
            cat2: "Romance",
            cat3: "",
            trailer: "https://youtu.be/dpF0_T0LzfI?si=FodTg4BhI3kuw0eO",
            },
        {
            id: 3,
            moviename: "GentleMan",
            image: "gentle-man.jpg",
            rate: 7.8,
            date: "1993-07-30",
            cat1: "Action",
            cat2: "Crime",
            cat3: "Drama",
            trailer: "https://youtu.be/Mjo5Ym0q5jQ?si=X4jBU7cPRBJZ8CTd",
            },
        {
            id: 4,
            moviename: "Anbe Sivam",
            image: "anbe-sivam.jpg",
            rate: 8.6,
            date: "2003-01-14",
            cat1: "Adventure",
            cat2: "Comedy",
            cat3: "Drama",
            trailer: "https://youtu.be/lPLN69KAukE?si=U90OnA7pHTDNuBBB",
            },
        {
            id: 5,
            moviename: "Vaaranam Aayiram",
            image: "vaaranam-aayiram.jpg",
            rate: 8.2,
            date: "2008-11-14",
            cat1: "Action",
            cat2: "Drama",
            cat3: "Romance",
            trailer: "https://youtu.be/qu08mmVxJYA?si=bMtnSD4yIyrnoviL",
            },
        {
            id: 6,
            moviename: "Thalapathi",
            image: "thalapathi.jpg",
            rate: 8.5,
            date: "1991-11-25",
            cat1: "Action",
            cat2: "Crime",
            cat3: "Drama",
            trailer: "https://youtu.be/-MEJKs5m-cU?si=jF4dpCQNmYiXA2cJ",
            },
        {
            id: 7,
            moviename: "Roja",
            image: "roja.jpg",
            rate: 8.1,
            date: "1992-08-15",
            cat1: "Romantic",
            cat2: "Drama",
            cat3: "Thriller",
            trailer: "https://youtu.be/djnHkj0Ic24?si=BnQ1Q_ys6vLpvUTo",
            },
        {
            id: 8,
            moviename: "Senthoorapandi",
            image: "senthurapandi.jpg",
            rate: 7.7,
            date: "1993-12-25",
            cat1: "Action",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/W16LfJR40B4?si=N0Ibh2OgFGGg5cqt",
            },
        {
            id: 9,
            moviename: "Nattamai",
            image: "nattamai.jpg",
            rate: 6.9,
            date: "1994-11-02",
            cat1: "Drama",
            cat2: "Family",
            cat3: "",
            trailer: "https://youtu.be/8KG42lBZLjE?si=1i8NgTHjpnuJHQI8",
            },
        {
            id: 10,
            moviename: "Aasai",
            image: "aasai.jpg",
            rate: 7.5,
            date: "1995-09-09",
            cat1: "Romantic",
            cat2: "Thriller",
            cat3: "",
            trailer: "https://youtu.be/216j0nezUQY?si=sOg-2kUB1ig6OvFf",
            },
        {
            id: 11,
            moviename: "Ayudha Poojai",
            image: "Ayudha-poojai.jpg",
            rate: 5.9,
            date: "1995-10-10",
            cat1: "Action",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/3ceubZINREs?si=DvX386Oxku8kiDYD",
            },
        {
            id: 12,
            moviename: "Poove Unakkaga",
            image: "poove-unnakaka.jpg",
            rate: 8.6,
            date: "1996-02-15",
            cat1: "Romantic",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/rDPOnGGq61c?si=wzOpdrTG03GTRKqO",
           },
        {
            id: 13,
            moviename: "Nerukku Ner",
            image: "nerukku-ner.jpg",
            rate: 7.4,
            date: "1997-09-06",
            cat1: "Action",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/Tf69ewFeMLk?si=xQlEwYNn5gnliZiL",
           },
        {
            id: 14,
            moviename: "Kadhalar Dhinam",
            image: "kadhalar-dhinam.jpg",
            rate: 6.6,
            date: "1999-07-09",
            cat1: "Romantic",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/rYBH0mz546s?si=eOIxWmGNgJtbIwdp",
            },
        {
            id: 15,
            moviename: "Kushi",
            image: "kushi.jpg",
            rate: 7.9,
            date: "2000-05-19",
            cat1: "Romantic",
            cat2: "Comedy",
            cat3: "",
            trailer: "https://youtu.be/E-KL74bD-PU?si=eE-EgvDhu9Y7tBj5",
           },
        {
            id: 16,
            moviename: "Alaipayuthey",
            image: "alaipayuthey.jpeg",
            rate: 8.3,
            date: "2000-04-14",
            cat1: "Romantic",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/BRFdGc3ku-k?si=URaPNhcRzSO-tkWr",
           },
        {
            id: 17,
            moviename: "Rhythm",
            image: "rhythm.jpg",
            rate: 7.7,
            date: "2000-09-15",
            cat1: "Romantic",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/Bv6ybsFdqg0?si=-e2vMXSUyqqX3-yE",
            },
        {
            id: 18,
            moviename: "Vanathai Pola",
            image: "vanathai-pola.jpg",
            rate: 7.1,
            date: "2000-12-22",
            cat1: "Drama",
            cat2: "Family",
            cat3: "",
            trailer: "https://youtu.be/PHEaOoskQ24?si=R9vh63eiG0h3jUny",
           },
        {
            id: 19,
            moviename: "Shahjahan",
            image: "shahjahan.jpg",
            rate: 7.6,
            date: "2001-11-14",
            cat1: "Romantic",
            cat2: "Drama",
            cat3: "",
            trailer: "https://youtu.be/10jxPe-x4SA?si=sZyc7Il9dE9nq5jF",
            },
        {
            id: 20,
            moviename: "Samudhiram",
            image: "samuthiram.jpg",
            rate: 6.2,
            date: "2001-12-21",
            cat1: "Action",
            cat2: "Drama",
            cat3: "Family",
            trailer: "https://youtu.be/ECIOLPCJpek?si=EVb8rhpSfwE3-jbQ",
          },
        {
            id: 21,
            moviename: "Aanandham",
            image: "Aanadham.jpg",
            rate: 5.9,
            date: "2001-05-25",
            cat1: "Drama",
            cat2: "Family",
            cat3: "",
            trailer: "https://youtu.be/WIf7_zCcce8?si=K01Jh4n6savq8mA5",
            },
        {
            id: 22,
            moviename: "Jay Jay",
            image: "jay-jay.jpg",
            rate: 5.9,
            date: "2003-11-14",
            cat1: "Romantic",
            cat2: "Comedy",
            cat3: "",
            trailer: "https://youtu.be/4lI81jM-Yes?si=PpmqrffdIKDFDme6",
           },
        {
            id: 23,
            moviename: "Sachein",
            image: "sachein.jpeg",
            rate: 7.4,
            date: "2005-04-14",
            cat1: "Romantic",
            cat2: "Comedy",
            cat3: "",
            trailer: "https://youtu.be/EmqDR8FOYxk?si=4BwRRkGAQ6qq0aI3",
         }
    ];
    // const over=document.querySelector(".main-slideroverlay")
    // const lay=over.dataset.id
    // console.log(over,lay)
    
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    
    // Get movie ID from URL
    const movieId = getQueryParam('id');
    
    if (movieId) {
        const movie = movies.find(m => m.id == movieId);
        if (movie) {
            displayMovieDetails(movie);
        }
    }
    
// const movieImages = document.querySelectorAll(".slide-img img")
// movieImages.forEach((img) => {
//     img.addEventListener("click",()=>{
//         const movieId = parseInt(img.getAttribute("data-id"));
//         const movie = movies.find(m => m.id === movieId);
//         if (movie) {
    function displayMovieDetails(movie) {

            const movieListDiv = document.getElementById("movie-list");
            movieListDiv.innerHTML = "";
            const movieContainer = document.createElement("div");
            movieContainer.className = "movie-container";  
            movieContainer.innerHTML = `
                <div class="movie-banner">
                    <div class="movie-img">
                        <img src="${movie.image}" alt="${movie.moviename}">
                    </div>
                    <div class="banner-container">
                        <div class="title-container">
                            <div class="title-top">
                                <div class="movie-title">
                                    <h3>${movie.moviename}</h3>
                                </div>
                                <div class="more-about-movie">
                                    <span class="quality">Full HD</span>
                                    <div class="rating">
                                        ${movie.rate} <img src="imdb.jpg" alt="imdb">
                                    </div>
                                    <span>${movie.date}</span>
                                </div>
                            </div>
                            <div class="title-bottom">
                                <div class="category">
                                    <strong>Category</strong><br>
                                    <a href="#">${movie.cat1}</a>,
                                    <a href="#">${movie.cat2}</a>,
                                    <a href="#">${movie.cat3 ? movie.cat3 : ''}</a>
                                </div>
                                <a href="${movie.trailer}" class="watch-btn" target="_blank">Watch Trailer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="download-movie">
                    <div class="download-container">
                    <div class="download-box">
                            <span><i class="fas fa-server"></i> Server 1</span>
                            <span>Tamil</span>
                            <span>480p</span>
                            <a href="sorry.html">Download</a>
                        </div>
                        <div class="download-box">
                            <span><i class="fas fa-server"></i> Server 1</span>
                            <span>Tamil</span>
                            <span>720p</span>
                            <a href="sorry.html">Download</a>
                        </div>
                        <div class="download-box">
                            <span><i class="fas fa-server"></i> Server 1</span>
                            <span>Tamil</span>
                            <span>1080p</span>
                            <a href="sorry.html">Download</a>
                        </div>
                    </div>
                </section>
            `;
            movieListDiv.appendChild(movieContainer);

            // Remove existing video player if any video play before
          
        }
    
    


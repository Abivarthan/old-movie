
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
            video480p:"https://prosearchbots.prolink.workers.dev/1337957/%5BMM%5D+Bombay+%281995%29+Tamil+HDRip.mkv?hash=AgADvQ ",
            video720p:"https://prosearchbots.prolink.workers.dev/1337967/%5BMM%5D+Bombay+%281995%29+Tamil+HDRip+-+720p.mkv?hash=AgADwg ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1338077/%5BMM%5D+Bombay+%281995%29+Tamil+HDRip+1080p+2.3GB.mkv?hash=AgADCw "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1338486/Kandukondain_Kandukondain_2000_%40UCParadiso_HDRip_720p_x265_AAC.mkv?hash=AgAD-Q ",
            video720p:"https://prosearchbots.prolink.workers.dev/1338504/Kandukondain.Kandukondain.2000.1080p.10bit.AMZN.HEVC-JrRip.mkv?hash=AgADrA ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1338512/Kandukondain.Kandukondain.2000.1080p.SS.WEB-DL.DD%2B5.1.x264-C.mkv?hash=AgADKx "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1338538/%40WMR_Gentleman.1993.Tamil.360p.HD.x264.mp4?hash=AgADyw ",
            video720p:"https://prosearchbots.prolink.workers.dev/1340242/Gentleman+%281993%29+Tamil+HDRip+INFOTAINMENT.mkv?hash=AgADrw ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1340242/Gentleman+%281993%29+Tamil+HDRip+INFOTAINMENT.mkv?hash=AgADrw "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1340252/Anbe+Sivam+%282003%29+Tamil+720p+10bit+AMZN+WEBDL+HEVC+JrRip.mkv?hash=AgADHw ",
            video720p:"https://prosearchbots.prolink.workers.dev/1340271/Anbe+Sivam.2003.1080p.WEBDL.HEVC.JrRip.mkv?hash=AgADEg ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1340331/Anbe.Sivam.2003.1080p.NF.WEB-DL.DD%2B5.1.VP9-SH3LBY..mkv?hash=AgADRg "
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
            video480p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1350479/vaaranam+Aayiram+_2008_TamilHDRip%40CCineClub.avi?hash=AgADfw  ",
            video720p:"https://prosearchbots.prolink.workers.dev/1342751/Vaaranam+Aayiram+%282008%29+Tamil+720p+Proper+HD+%40FrediesChannel.mkv?hash=AgAD8w ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1342776/Vaaranam_Aayiram_2008_Proper_Tamil_1080p_HDRip_x264_DD_5_1_3_6GB.mkv?hash=AgADfQ "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1342766/Thalapathi.1991.720p.WEBRip.x264.AAC-%5BYTS.MX%5D.mp4?hash=AgADqk ",
            video720p:"https://prosearchbots.prolink.workers.dev/1342766/Thalapathi.1991.720p.WEBRip.x264.AAC-%5BYTS.MX%5D.mp4?hash=AgADqk ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1342761/Thalapathi.1991.1080p.WEBRip.x264.AAC-%5BYTS.MX%5D.mp4?hash=AgAD2x "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1340343/%40WMR_Roja.1992.Tamil.360p.HDAVC.x264.mp4?hash=AgADBw ",
            video720p:"https://prosearchbots.prolink.workers.dev/1340355/Roja+%281992%29+Tamil+-+AYN+DVD9Rip+-+720p+-+x264.mkv?hash=AgADww ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1340379/Roja.1992.1080p.AMZN.WEB.DL.HEVC.Multi.DDP2.0.224k-DDH.mkv?hash=AgADEg "
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
            video480p:"https://youtu.be/2sv0HMCjOQQ?si=U59bt6AuPRqFGIkl",
            video720p:"https://youtu.be/2sv0HMCjOQQ?si=U59bt6AuPRqFGIkl",
            video1080p:"https://youtu.be/2sv0HMCjOQQ?si=U59bt6AuPRqFGIkl"
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
            video480p:"https://prosearchbots.prolink.workers.dev/1340391/%5BMM%5D+Nattamai+%281994%29+Tamil%C2%A0HDRip-+AAC.mkv?hash=AgADLQ ",
            video720p:"https://prosearchbots.prolink.workers.dev/1340400/Nattamai_1994_Tamil_720p_HD_AVC_UNTOUCHED_x264_DD_2_0_950MB.mkv?hash=AgADiA ",
            video1080p: "https://prosearchbots-6c37d661df1b.herokuapp.com/1340408/Nattamai_1994_Tamil_1080p_HD_AVC_UNTOUCHED_x264_DD_2_0_1_8GB.mkv?hash=AgADjQ "
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
            video480p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1340417/%40WMR_Aasai.1995.Tamil.DVDRip.x264.ESub.mkv?hash=AgADxg ",
            video720p:"https://prosearchbots.prolink.workers.dev/1340475/Aasai_1995_Tamil_HQ_HDRip_720p_AHA_WEB_DL_x264_AAC_2_0_128Kbps_1.mkv?hash=AgADaA ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1340482/Aasai.1995.1080p.AHA.WEB-DL.AAC2.0.x264-SH3LBY.mkv?hash=AgADYB"
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
            video480p:"https://prosearchbots.prolink.workers.dev/1340224/Ayudha+Poojai+1995.544p.AMZN.WeB.DL.AVC.DDP.2.0.DusIcTv.mkv?hash=AgADBA ",
            video720p:"https://prosearchbots.prolink.workers.dev/1340224/Ayudha+Poojai+1995.544p.AMZN.WeB.DL.AVC.DDP.2.0.DusIcTv.mkv?hash=AgADBA ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1340224/Ayudha+Poojai+1995.544p.AMZN.WeB.DL.AVC.DDP.2.0.DusIcTv.mkv?hash=AgADBA "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1340214/Poove.Unakkaga.1996.Tamil.720p.HDTVRip.HEVC.1GB-%40TeamHDT.mkv?hash=AgADlQ ",
            video720p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1339758/Poove+Unakkaga+%281996%29+DVD+Rip+x264+-+AAC+-+1.4GB.mkv?hash=AgADrQ ",
            video1080p: "https://prosearchbots-6c37d661df1b.herokuapp.com/1339758/Poove+Unakkaga+%281996%29+DVD+Rip+x264+-+AAC+-+1.4GB.mkv?hash=AgADrQ "
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
            video480p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1339654/Nerukku+Ner+%281997%29+DVDRip+%28convert-video-online.com%29.mp4?hash=AgADrg ",
            video720p:"https://prosearchbots.prolink.workers.dev/1339641/Nerukku+Ner+%281997%29+Tamil+HD-DVDRip+-+720p+-+x264+-+%28DD5.1+-+.mkv?hash=AgAD-A ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1339641/Nerukku+Ner+%281997%29+Tamil+HD-DVDRip+-+720p+-+x264+-+%28DD5.1+-+.mkv?hash=AgAD-A "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1339526/%40WMR_Kadhalar.Dhinam.1999.Tamil.HDRip.x264.mp4?hash=AgADzw ",
            video720p:"https://prosearchbots.prolink.workers.dev/1339433/%5BMM%5D+Kadhalar+Dhinam+%281999%29+HDRip+-+720p+.mkv?hash=AgADSB ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1339433/%5BMM%5D+Kadhalar+Dhinam+%281999%29+HDRip+-+720p+.mkv?hash=AgADSB "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1339381/%5BCC%5D+Kushi+%282000%29+Tamil+Proper+HDRip+x264+AAC+900MB.mkv?hash=AgADkQ ",
            video720p:"https://prosearchbots.prolink.workers.dev/1339364/%5BCC%5D+Kushi+%282000%29+Tamil+720p+Proper+HDRip+x264+1.5GB.mkv?hash=AgADoQ ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1339304/Kushi.2000.1080p.AHA.WEB-DL.AAC2.0.x264-SH3LBY.mkv?hash=AgADZx "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1339230/Alaipayuthey.2000.Tamil+HDrip.mp4?hash=AgADxQ ",
            video720p:"https://prosearchbots.prolink.workers.dev/1339261/Alaipayuthey_2000_Tamil_Aha_WEB_DL_720p_HQ_HEVC_x265_AAC_1_1GB.mkv?hash=AgADLR ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1339136/Alaipayuthey+%282000%29+Tamil+DSNP+WEBRip+-+1080p+-+AVC+-+AA.mkv?hash=AgADVR "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1339083/%40WMR_Rhythm.2000.Tamil.360p.BRRip.x264.mp4?hash=AgADDA",
            video720p:"https://prosearchbots.prolink.workers.dev/1339056/%40FCA+Rhythm+%282000%29+Tamil+720p+Proper+HQ+BDRip+x264.mkv?hash=AgADEw ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1339071/Rhythm.2000.720p.AMZN.WEB-DL.AAC2.0.H.264-CHAI.mkv?hash=AgAD4w "
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
            video480p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1339030/Vaanathaippola+2000+Tamil+HQ+HDRip+-+x264+-+AAC+-+700MB+-+ES.mkv?hash=AgADhh ",
            video720p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1339030/Vaanathaippola+2000+Tamil+HQ+HDRip+-+x264+-+AAC+-+700MB+-+ES.mkv?hash=AgADhh ",
            video1080p: "https://prosearchbots-6c37d661df1b.herokuapp.com/1338897/Vaanathaippola+2000+Tamil+TRUE+WEB-DL+-+1080p+-+AVC+-+DD5.1+.mkv?hash=AgADSR "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1338883/%40WMR_Shahjahan.2001.Tamil.HDRip.H264.mp4?hash=AgADBQ ",
            video720p:"https://prosearchbots.prolink.workers.dev/1338861/Shahjahan+%282001%29+Tamil+720p+HQ+AYN+DVDRip+x264.mkv?hash=AgAD9w ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1338861/Shahjahan+%282001%29+Tamil+720p+HQ+AYN+DVDRip+x264.mkv?hash=AgAD9w "
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
            video480p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1338848/Samudhiram_Tamil_Full_Movie_R_Sarathkumar_Manoj_Bharathiraja_Kaveri.mp4?hash=AgADYw ",
            video720p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1338830/Samudhiram+%5B2001%5D+Tamil+HDRip+720p.mp4?hash=AgADER ",
            video1080p: "https://prosearchbots-6c37d661df1b.herokuapp.com/1338830/Samudhiram+%5B2001%5D+Tamil+HDRip+720p.mp4?hash=AgADER "
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
            video480p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1338742/Aanandham.2001.576p.10bit.JC.WEB-DL.AAC-2.0.x265.AVK.mkv?hash=AgADAg ",
            video720p:"https://prosearchbots.prolink.workers.dev/1338731/Aanandham.2001.Tamil.480p.SNXT.WEB-DL.AAC.2.0.H.264-AAH.mkv?hash=AgADRh ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1338731/Aanandham.2001.Tamil.480p.SNXT.WEB-DL.AAC.2.0.H.264-AAH.mkv?hash=AgADRh "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1342351/Jay+Jay+2003+Tamil+DVDRip+720p+1.36GB.avi?hash=AgADDg ",
            video720p:"https://prosearchbots.prolink.workers.dev/1342351/Jay+Jay+2003+Tamil+DVDRip+720p+1.36GB.avi?hash=AgADDg ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1342351/Jay+Jay+2003+Tamil+DVDRip+720p+1.36GB.avi?hash=AgADDg "
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
            video480p:"https://prosearchbots.prolink.workers.dev/1338602/Sachein.2005.Tamil.720p.10bit.SS.HEVC.2CH.Esub-ALB.mkv?hash=AgAD0g ",
            video720p:"https://prosearchbots-6c37d661df1b.herokuapp.com/1338584/Sachein_2005_UNCUT_720p_HDRip_South_Movie_ORG_Dual_Audio_Hindi_or.mkv?hash=AgADHQ ",
            video1080p: "https://prosearchbots.prolink.workers.dev/1338557/Sachein_2005_UNCUT_1080p_HDRip_South_Movie_ORG_Dual_Audio_Hindi.mkv?hash=AgAD3w "
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
                        <div class="playbtn-container">
                            <div class="play-btn">
                                <i class="fas fa-play"<video src="bombay-clips.mp4"></video></i>

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
                            <a href="${movie.video480p}" download>Download</a>
                        </div>
                        <div class="download-box">
                            <span><i class="fas fa-server"></i> Server 1</span>
                            <span>Tamil</span>
                            <span>720p</span>
                            <a href="${movie.video720p}" download>Download</a>
                        </div>
                        <div class="download-box">
                            <span><i class="fas fa-server"></i> Server 1</span>
                            <span>Tamil</span>
                            <span>1080p</span>
                            <a href="${movie.video1080p}" download>Download</a>
                        </div>
                    </div>
                </section>
            `;
            movieListDiv.appendChild(movieContainer);

            // Remove existing video player if any video play before
          
        }
    
    

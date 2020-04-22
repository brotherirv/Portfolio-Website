<!DOCTYPE html>
<html>
<title>Irvin Castillo</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<link href="lightbox.css" rel="stylesheet">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}
body, html {
    height: 100%;
    color: #777;
    line-height: 1.8;
}

/* Create a Parallax Effect */
.bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4 {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* First image (Logo. Full height) */
.bgimg-1 {
    background-image: url('images/parallax1.jpg');
    min-height: 100%;
}

/* Second image (Portfolio) */
.bgimg-2 {
    background-image: url("images/parallax2.jpg");
    height: 400px;
}

/* Third image (Contact) */
.bgimg-3 {
    background-image: url("images/parallax3.jpg");
    min-height: 400px;
}

.bgimg-4 {
    background-image: url("images/parallax4.jpg");
    min-height: 400px;
}

.w3-wide {letter-spacing: 10px;}
.w3-hover-opacity {cursor: pointer;}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
    .bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4 {
        background-attachment: scroll;
    }
}
</style>
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <ul class="w3-navbar" id="myNavbar">
    <li class="w3-hide-medium w3-hide-large w3-opennav w3-right">
      <a class="w3-hover-black" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
        <i class="fa fa-bars"></i>
      </a>
    </li>
    <li class="w3-left-align"><a href="#home">HOME</a></li>
    <li class="w3-hide-small"><a href="#about"><i class="fa fa-user"></i> ABOUT</a></li>
    <li class="w3-hide-small"><a href="#portfolio"><i class="fa fa-th"></i> PHOTOGRAPHY</a></li>
    <li class="w3-hide-small"><a href="#video"><i class=" fa fa-play"></i> VIDEO</a></li>
    <li class="w3-hide-small w3-right">

    </li>
  </ul>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-hide w3-hide-large w3-hide-medium">
    <ul class="w3-navbar w3-left-align w3-white">
      <li><a href="#about" onclick="toggleFunction()">ABOUT</a></li>
      <li><a href="#portfolio" onclick="toggleFunction()">PHOTOGRAPHY</a></li>
      <li><a href="#video" onclick="toggleFunction()">VIDEO</a></li>
      <li><a href="#contact" onclick="toggleFunction()">CONTACT</a></li>

    </ul>
  </div>
</div>

<!-- First Parallax Image with Logo Text -->
<div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
  <div class="w3-display-middle" style="white-space:nowrap;">
    <span class="w3-center w3-padding-xlarge w3-black w3-xlarge w3-wide w3-animate-opacity">Irvin Castillo</span>
  </div>
</div>

<!-- Container (About Section) -->
<div class="w3-content w3-container w3-padding-64" id="about">
  <h3 class="w3-center">ABOUT ME</h3>
  <p class="w3-center"><em>Front End Web Developer</em></p>
  <p>I'm a Multi-Media production graduate from Cal State University Northridge. In my time at Northridge, I learned how to design a website in photoshop. I learned the principles of art, and how to make beautiful looking websites.
    Even though I can aknowledge and create a greate looking website, my passion lies with coding the website. We learned HTML, CSS, Javascript, PHP, Bootstrap, GitHub, and a little bit of MySql.
    Using these languages, I created a web based platformer game using JavaScript. You can check it out by <a href="game.html" target="_blank">  clicking here. </a> You can also check out my repositories by <a href="https://github.com/brotherirv">clicking here</a>.
   </p>
  <div class="w3-row">
    <div class="w3-col m6 w3-center w3-padding-large">
      <!-- <p><b><i class="fa fa-user w3-margin-right"></i>My Name</b></p><br> -->
      <img src="images/me.jpg" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333">
    </div>

    <!-- Hide this text on small devices -->
    <!--<div class="w3-col m6 w3-hide-small w3-padding-large">
      <p>  Using these languages, I created a web based platformer game using JavaScript. You can check it out <a href="game.html" target="_blank"> by clicking here. </a></p>
    </div> -->
  </div>
  <p class="w3-large w3-center w3-padding-16">Im really good at:</p>
  <p class="w3-wide"><i class="fa fa-camera"></i>Photography</p>
  <div class="w3-progress-container">
    <div class="w3-progressbar" style="width:80%"></div>
  </div>
  <p class="w3-wide"><i class="fa fa-laptop"></i>Front End Web Development</p>
  <div class="w3-progress-container">
    <div class="w3-progressbar" style="width:80%"></div>
  </div>
  <p class="w3-wide"><i class="fa fa-photo"></i>Photoshop and Premiere</p>
  <div class="w3-progress-container">
    <div class="w3-progressbar" style="width:90%"></div>
  </div>
</div>

<!--
<div class="w3-row w3-center w3-dark-grey w3-padding-16">
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">14+</span><br>
    Partners
  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">55+</span><br>
    Projects Done
  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">89+</span><br>
    Happy Clients
  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">150+</span><br>
    Meetings
  </div>
</div>
-->
<!-- Second Parallax Image with Portfolio Text -->
<div class="bgimg-2 w3-display-container w3-opacity-min">
  <div class="w3-display-middle">
    <span class="w3-xxlarge w3-text-light-grey w3-wide">PHOTOGRAPHY</span>
  </div>
</div>

<!-- Container (Photo Section) -->
<div class="w3-content w3-container w3-padding-64" id="portfolio">
  <h3 class="w3-center">MY PHOTO'S</h3>
  <p class="w3-center"><em>Here are some photo's that I have taken and edited. <br> Click on the images to make them bigger</em></p><br>

  <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
  <div class="w3-row-padding w3-center">
    <div class="w3-col m4">
      <a href="images/mustard2.jpg"  data-lightbox="work"
 data-title="This image is composed of 3 different backgrounds, and Irvin's pet cat named Mustard.  "softness" in China, "><img src="images/mustard2.jpg" style="height:100%; width:100%;" data-lightbox="work" alt=""></a>
    </div>



    <div class="w3-col m4">
      <a href="images/oscar.jpg" data-lightbox="work" data-title="This photo used photoshop effects to give the illusion that we are watching oscar through a television set with bad reception."><img src="images/oscar.jpg" style="width:100%; height:100%;" data-lightbox="work" alt=""></a>
    </div>

    <div class="w3-col m4">
      <a href="images/myNameIsIrvin.jpg" data-lightbox="work" data-title="This image uses multiple layer masks to give the illusion that Irvin has a pond in his head, and eyes in his hands"> <img src="images/myNameIsIrvin.jpg" style="height:100%; width:100%;" data-lightbox="work" alt=""></a>
    </div>
  </div>

  <div class="w3-row-padding w3-center w3-section">
    <div class="w3-col m4">
      <a href="images/veniceUnderWater.jpg" data-lightbox="work" data-title="This image was taken in venice beach. Layers were blended over the original image to give the illusion
that venice beach is under water. The mountains in the background were also added to the image, as well as the sun."><img src="images/veniceUnderWater.jpg" style="width:100%; height:100%;" data-lightbox="work" alt=""></a>
    </div>

    <div class="w3-col m4">
     <a href="images/space.JPG" data-lightbox="work" data-title="This image was not edited. The camera allowed 30 seconds of light in during night time at castaic lake.">
  <img src="images/space.JPG" style="width:100%; height:100%;" data-lightbox="work" alt=""></a>
    </div>

    <div class="w3-col m4">
       <a href="images/bench.jpg" data-lightbox="work" data-title="Color grading effect making this photo look old. Taken 1/5/2017 at pollywog park">
  <img src="images/bench.jpg" style="width:100%; height:100%;" data-lightbox="work" alt=""></a>
    </div>



  </div>
</div>

<!-- Modal for full size images on click
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-closebtn w3-text-white w3-opacity w3-hover-opacity-off w3-xxlarge w3-container w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>
-->
<!-- Photo  Parallax Image with Portfolio Text -->
<div class="bgimg-4 w3-display-container w3-opacity-min">
  <div class="w3-display-middle">
     <span class="w3-xxlarge w3-text-light-grey w3-wide">VIDEOS</span>
  </div>
</div>

<!-- Container (Photo Section) -->
<div class="w3-content w3-container w3-padding-64" id="video">
  <h3 class="w3-center">MY VIDEOS</h3>
  <p class="w3-center"><em>Here are some video's that I have made. Some are animated. Others are flimed and edited.</em></p><br>

  <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
  <div class="w3-row-padding w3-center">
    <div class="w3-col m4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-wwwcFFE4KI" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="w3-col m4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/D3jdLOCzYoo" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="w3-col m4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JdmL_U8EPsE" frameborder="0" allowfullscreen></iframe>
    </div>


  </div>

  <div class="w3-row-padding w3-center w3-section">
    <div class="w3-col m4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/K4Ag0qw7azI" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="w3-col m4">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pLI6szTkJoM" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="w3-col m4">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/m8_x-U4lbr8" frameborder="0" allowfullscreen></iframe>
    </div>

  </div>
</div>





<!-- Footer -->
<footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a href="#home" class="w3-btn w3-padding w3-light-grey w3-hover-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div class="w3-xlarge w3-section">
    <a href="https://www.facebook.com/irvin1024" target="_blank"><i class="fa fa-facebook-official w3-hover-text-indigo"></i></a>
    <a href="https://www.instagram.com/brotherirv" target="_blank"><i class="fa fa-instagram w3-hover-text-purple"></i></a>
    <a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank"><i class="fa fa-linkedin w3-hover-text-indigo"> </i></a>
  </div>

</footer>

<!-- Add Google Maps -->
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
<!-- Google Map Location -->
var myCenter = new google.maps.LatLng(41.878114, -87.629798);

function initialize() {
var mapProp = {
  center: myCenter,
  zoom: 12,
  scrollwheel: false,
  draggable: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position: myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
</script>
<script src="lightbox.min.js"></script>
</body>
</html>

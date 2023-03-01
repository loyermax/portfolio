AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Stage d'observation",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "GAEC de la Rigandelais de LA NOE-BLANCHE",
    time: "(Janvier 2022 une semaine)",
    desp: "Stage d’observation des installations informatiques de cetteferme semi-automatisée",
  },
  {
    title: "Stage d'observation",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "TEAMCLIC de PONTCHATEAU",
    time: "(Octobre 2021 une semaine)",
    desp: "Maintenance et vente en informatique et téléphonie",
  },
  {
    title: "ASSOCIATION",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "L'outil en main",
    time: "Septembre 2018- Juin 2019",
    desp: "Découverte et initiation aux métiers du patrimoine: <li>maçonnnerie</li><li> menuiserie</li><li> électricité</li><li> peinture</li><li> mécanique</li><li> carrelage</li><li> cuisine</li><li> couture</li><li> taillage de pierres</li><li> plomberie</li>. . .",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

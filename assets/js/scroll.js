document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".single-question");
  
    const showOnScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
  
      questions.forEach((question) => {
        if (scrollPosition > question.offsetTop + 50) {
          question.classList.add("show");
        }
      });
    };
  
    window.addEventListener("scroll", showOnScroll);
  });
  
  // document.addEventListener('DOMContentLoaded', function() {
  //           const logos = [
  //               './assets/new_icons/client_logos/ipsos.svg',
  //               './assets/new_icons/client_logos/glovo.svg',
  //               './assets/new_icons/client_logos/yougov.svg',
  //               './assets/new_icons/client_logos/lidl.svg',
  //               './assets/new_icons/client_logos/statista.svg',
  //               './assets/new_icons/client_logos/coca-cola.svg',
  //               './assets/new_icons/client_logos/rakuten.svg',
  //               './assets/new_icons/client_logos/bolt.svg',
  //               './assets/new_icons/client_logos/neo.svg',
  //               './assets/new_icons/client_logos/kantar.svg',
  //               './assets/new_icons/client_logos/uscale.svg',
  //               './assets/new_icons/client_logos/wide.svg',
  //               './assets/new_icons/client_logos/sago.svg',
  //               './assets/new_icons/client_logos/quirion.svg',
  //               './assets/new_icons/client_logos/cint.svg',
  //               './assets/new_icons/client_logos/twentify.svg'
  //           ];

  //           const marqueeTrack = document.getElementById('marqueeTrack');

  //           function createLogoElement(path) {
  //               const item = document.createElement('div');
  //               item.className = 'marquee-item';
  //               const img = document.createElement('img');
  //               img.className = 'logo';
  //               img.src = path;
  //               img.alt = 'Client Logo';
  //               item.appendChild(img);
  //               return item;
  //           }

  //           // Add logos twice for seamless loop
  //           for (let i = 0; i < 2; i++) {
  //               logos.forEach(path => marqueeTrack.appendChild(createLogoElement(path)));
  //           }
  //       });

  document.addEventListener('DOMContentLoaded', function () {
    const marqueeTrack = document.getElementById('marqueeTrack');

    function createLogoElement(path) {
        const item = document.createElement('div');
        item.className = 'marquee-item';
        const img = document.createElement('img');
        img.className = 'logo';
        img.src = path;
        img.alt = 'Client Logo';
        item.appendChild(img);
        return item;
    }

    // Add logos twice for seamless loop
    for (let i = 0; i < 2; i++) {
        window.logoFiles.forEach(file =>
            marqueeTrack.appendChild(createLogoElement(window.logoFolder + file))
        );
    }
});

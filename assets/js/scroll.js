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
  
  document.addEventListener('DOMContentLoaded', function() {
            const logos = [
                './assets/images_new/uni1.png',
                './assets/images_new/uni2.png',
                './assets/images_new/uni3.png',
                './assets/images_new/uni4.png',
                './assets/images_new/uni5.png',
                './assets/images_new/uni6.png',
                './assets/images_new/uni7.png',
                './assets/images_new/uni8.png',
                './assets/images_new/uni9.png',
                './assets/images_new/uni10.png',
                './assets/images_new/uni11.png',
                './assets/images_new/uni12.png',
                './assets/images_new/uni13.png',
                './assets/images_new/uni14.png'
            ];

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
                logos.forEach(path => marqueeTrack.appendChild(createLogoElement(path)));
            }
        });
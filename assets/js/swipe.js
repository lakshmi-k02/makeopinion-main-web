document.addEventListener("DOMContentLoaded", function() {
            const card2 = document.querySelector(".swipe-right-animation");

            if (card2) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            card2.classList.add("play");
                            observer.unobserve(card2); // only animate once
                        }
                    });
                }, {
                    threshold: 0.4
                });

                observer.observe(card2);
            }
        });
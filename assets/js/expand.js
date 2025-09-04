document.addEventListener("DOMContentLoaded", function() {
        const accordions = document.querySelectorAll(".questions-block");

        // Accordion toggle
        accordions.forEach(block => {
            const header = block.querySelector(".question-block");
            const answer = block.querySelector(".answers-block");
            const plusIcon = block.querySelector(".plus-icon");
            const minusIcon = block.querySelector(".minus-icon");

            header.addEventListener("click", () => {
                const isOpen = answer.style.height && answer.style.height !== "0px";

                // Close all
                accordions.forEach(other => {
                    other.querySelector(".answers-block").style.height = "0px";
                    other.querySelector(".plus-icon").style.opacity = "1";
                    other.querySelector(".minus-icon").style.opacity = "0";
                    other.querySelector(".question-block").classList.remove("active");
                });

                // Open clicked if closed
                if (!isOpen) {
                    answer.style.height = answer.scrollHeight + "px";
                    plusIcon.style.opacity = "0";
                    minusIcon.style.opacity = "1";
                    header.classList.add("active");
                }
            });
        });

        if (accordions.length > 0) {
            const first = accordions[0];
            const firstAnswer = first.querySelector(".answers-block");
            const firstHeader = first.querySelector(".question-block");
            const firstPlus = first.querySelector(".plus-icon");
            const firstMinus = first.querySelector(".minus-icon");

            firstAnswer.style.height = firstAnswer.scrollHeight + "px";
            firstPlus.style.opacity = "0";
            firstMinus.style.opacity = "1";
            firstHeader.classList.add("active");
        }

        // Intersection Observer for animations
        // Use a small negative bottom rootMargin so elements just entering view on mobile trigger reliably
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // run once
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -20% 0px'
        }); // trigger when ~20% visible (with bottom margin)

        // Watch the images
        const animatedElements = document.querySelectorAll(".question-main-image, .real-time-user");
        animatedElements.forEach(el => observer.observe(el));

        // Mobile fallback: on some devices IntersectionObserver can be delayed or not fire as expected.
        // If the page is narrow, ensure animations still run by adding the class after a short timeout.
        if (window.innerWidth <= 767 && animatedElements.length > 0) {
            setTimeout(() => {
                animatedElements.forEach(el => {
                    if (!el.classList.contains('animate')) el.classList.add('animate');
                });
            }, 1200);
        }
    });
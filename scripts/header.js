const header = document.querySelector(".header");
const videoSection = document.querySelector("#video-section");

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            header.classList.remove("solid");
            header.classList.add("transparent");
        } else {
            header.classList.remove("transparent");
            header.classList.add("solid");
        }
    },
    {
        threshold: 0.5, // cambia cuando el 50% del video es visible
    }
);

observer.observe(videoSection);

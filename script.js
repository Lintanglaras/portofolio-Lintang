// Menampilkan pesan saat tombol ditekan
function tampilkanPesan() {

    document.getElementById("pesan").innerHTML =
        "Halo! Terima kasih sudah mengunjungi portofolio saya ♡";

}


// Mengambil data Instagram dari config.js
document.addEventListener("DOMContentLoaded", function () {

    const instagram =
        document.getElementById("instagram");

    if (instagram) {
        instagram.textContent =
            portfolioData.instagram;
    }


    // Animasi saat bagian website muncul
    const elements =
        document.querySelectorAll(
            "section, .card, .project-card"
        );

    elements.forEach(function (element) {
        element.classList.add("reveal");
    });


    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.15
        });


    elements.forEach(function (element) {
        observer.observe(element);
    });

});
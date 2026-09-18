// ==========================================
// WEBSITE PERJALANAN HIDUP
// ==========================================
// KALAU MEMANG JODOH, TAK AKAN KE MANA
// ==========================================


// ==========================================
// 1. MULAI PERJALANAN
// ==========================================

function mulaiPerjalanan() {

    const prolog =
        document.getElementById("prolog");

    if (prolog) {

        prolog.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ==========================================
// 2. PINDAH KE BAB / BAGIAN
// ==========================================

function keBabBerikutnya(id) {

    const bagian =
        document.getElementById(id);

    if (bagian) {

        bagian.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ==========================================
// 3. KEMBALI KE ATAS
// ==========================================

function kembaliKeAtas() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// 4. MENU DAFTAR BAB
// ==========================================

function toggleChapterMenu() {

    const menu =
        document.getElementById(
            "chapterDropdown"
        );

    const photoMenu =
        document.getElementById(
            "photoDropdown"
        );

    if (!menu) {
        return;
    }


    // Tutup menu FOTO
    if (photoMenu) {

        photoMenu.classList.remove("show");

    }


    // Buka / tutup DAFTAR BAB
    menu.classList.toggle("show");

}


// ==========================================
// 5. TUTUP MENU DAFTAR BAB
// ==========================================

function tutupChapterMenu() {

    const menu =
        document.getElementById(
            "chapterDropdown"
        );

    if (menu) {

        menu.classList.remove("show");

    }

}


// ==========================================
// 6. MENU FOTO
// ==========================================

function togglePhotoMenu() {

    const menu =
        document.getElementById(
            "photoDropdown"
        );

    const chapterMenu =
        document.getElementById(
            "chapterDropdown"
        );

    if (!menu) {
        return;
    }


    // Tutup DAFTAR BAB
    if (chapterMenu) {

        chapterMenu.classList.remove("show");

    }


    // Buka / tutup FOTO
    menu.classList.toggle("show");

}


// ==========================================
// 7. TUTUP MENU FOTO
// ==========================================

function tutupPhotoMenu() {

    const menu =
        document.getElementById(
            "photoDropdown"
        );

    if (menu) {

        menu.classList.remove("show");

    }

}


// ==========================================
// 8. TUTUP SEMUA MENU
// ==========================================

function tutupSemuaMenu() {

    const chapterMenu =
        document.getElementById(
            "chapterDropdown"
        );

    const photoMenu =
        document.getElementById(
            "photoDropdown"
        );


    if (chapterMenu) {

        chapterMenu.classList.remove("show");

    }


    if (photoMenu) {

        photoMenu.classList.remove("show");

    }

}


// ==========================================
// 9. KLIK DI LUAR MENU
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        const chapterMenu =
            document.getElementById(
                "chapterDropdown"
            );

        const photoMenu =
            document.getElementById(
                "photoDropdown"
            );

        const chapterButton =
            document.querySelector(
                ".chapter-menu-button"
            );

        const photoButton =
            document.querySelector(
                ".photo-menu-button"
            );


        // Kalau klik di dalam DAFTAR BAB
        if (
            chapterMenu &&
            chapterMenu.contains(event.target)
        ) {

            return;

        }


        // Kalau klik tombol DAFTAR BAB
        if (
            chapterButton &&
            chapterButton.contains(event.target)
        ) {

            return;

        }


        // Kalau klik di dalam FOTO
        if (
            photoMenu &&
            photoMenu.contains(event.target)
        ) {

            return;

        }


        // Kalau klik tombol FOTO
        if (
            photoButton &&
            photoButton.contains(event.target)
        ) {

            return;

        }


        // Selain itu tutup semua
        tutupSemuaMenu();

    }
);


// ==========================================
// 10. REVEAL SAAT SCROLL
// ==========================================

function revealOnScroll() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );

    const windowHeight =
        window.innerHeight;


    elements.forEach(
        function(element) {

            const elementTop =
                element
                    .getBoundingClientRect()
                    .top;


            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


// ==========================================
// 11. PROGRESS BAR
// ==========================================

function updateProgressBar() {

    const progressBar =
        document.getElementById(
            "progressBar"
        );


    if (!progressBar) {

        return;

    }


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    let progress = 0;


    if (documentHeight > 0) {

        progress =
            (scrollTop /
            documentHeight) *
            100;

    }


    progressBar.style.width =
        progress + "%";

}


// ==========================================
// 12. TOMBOL BACK TO TOP
// ==========================================

function updateBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) {

        return;

    }


    if (window.scrollY > 500) {

        button.classList.add(
            "show"
        );

    } else {

        button.classList.remove(
            "show"
        );

    }

}


// ==========================================
// 13. BUKA FOTO / LIGHTBOX
// ==========================================

function bukaFoto(image) {

    const lightbox =
        document.getElementById(
            "photoLightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );


    if (
        !lightbox ||
        !lightboxImage
    ) {

        return;

    }


    // Masukkan sumber foto
    lightboxImage.src =
        image.src;


    // Masukkan alt foto
    lightboxImage.alt =
        image.alt;


    // Tampilkan lightbox
    lightbox.classList.add(
        "show"
    );


    // Supaya halaman tidak ikut scroll
    document.body.style.overflow =
        "hidden";

}


// ==========================================
// 14. TUTUP FOTO / LIGHTBOX
// ==========================================

function tutupFoto() {

    const lightbox =
        document.getElementById(
            "photoLightbox"
        );


    if (!lightbox) {

        return;

    }


    lightbox.classList.remove(
        "show"
    );


    // Kembalikan scroll halaman
    document.body.style.overflow =
        "";

}


// ==========================================
// 15. TOMBOL ESC
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            tutupSemuaMenu();

            tutupFoto();

        }

    }
);


// ==========================================
// 16. KLIK LIGHTBOX
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        const lightbox =
            document.getElementById(
                "photoLightbox"
            );

        const lightboxImage =
            document.getElementById(
                "lightboxImage"
            );


        if (!lightbox) {

            return;

        }


        // Kalau klik area hitam
        // tutup foto
        if (
            lightbox.classList.contains(
                "show"
            ) &&
            event.target === lightbox
        ) {

            tutupFoto();

        }

    }
);


// ==========================================
// 17. EVENT SCROLL
// ==========================================

window.addEventListener(
    "scroll",
    function() {

        revealOnScroll();

        updateProgressBar();

        updateBackToTop();

    }
);


// ==========================================
// 18. SAAT WEBSITE SELESAI DIMUAT
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        revealOnScroll();

        updateProgressBar();

        updateBackToTop();

    }
);
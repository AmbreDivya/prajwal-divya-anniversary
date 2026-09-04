/* =========================
   LOGIN SYSTEM
========================= */

function checkLogin() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const loginError =
        document.getElementById("loginError");


    /* LOGIN DETAILS */

    const correctUsername = "Prajwal";

    const correctPassword = "Divya123";


    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        /* HIDE LOGIN PAGE */

        document
            .getElementById("loginPage")
            .style.display = "none";


        /* SHOW MAIN WEBSITE */

        document
            .getElementById("mainWebsite")
            .style.display = "block";


        /* START FROM PAGE 1 */

        nextPage(1);


        /* UPDATE DAYS COUNTER */

        updateDaysCounter();

    }

    else {

        loginError.innerText =
            "Oops! Wrong username or password ❤️";

    }

}


/* =========================
   PAGE NAVIGATION
========================= */

function nextPage(pageNumber) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function (page) {

        page.classList.remove("active");

    });


    const nextPageElement =
        document.getElementById(
            "page" + pageNumber
        );


    if (nextPageElement) {

        nextPageElement.classList.add(
            "active"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

}


/* =========================
   DAYS COUNTER
========================= */

function updateDaysCounter() {

    const firstConnectionDate =
        new Date(2025, 10, 3);


    const today =
        new Date();


    const difference =
        today.getTime()
        -
        firstConnectionDate.getTime();


    const days =
        Math.max(

            0,

            Math.floor(

                difference /
                (1000 * 60 * 60 * 24)

            )

        );


    const daysElement =
        document.getElementById(
            "daysCount"
        );


    if (daysElement) {

        daysElement.innerText =
            days;

    }

}


/* =========================
   MUSIC
========================= */

let musicPlaying = false;


function toggleMusic() {

    const music =
        document.getElementById("bgMusic");


    const button =
        document.querySelector(
            ".music-button"
        );


    if (!music || !button) {

        return;

    }


    if (musicPlaying) {

        music.pause();

        button.innerHTML = "🎵";

        musicPlaying = false;

    }

    else {

        music.play()

            .then(function () {

                button.innerHTML = "⏸️";

                musicPlaying = true;

            })

            .catch(function () {

                alert(
                    "Please check the music file ❤️"
                );

            });

    }

}


/* =========================
   ENTER KEY + INITIAL LOAD
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* UPDATE COUNTER */

        updateDaysCounter();


        /* ENTER KEY LOGIN */

        const usernameInput =
            document.getElementById("username");

        const passwordInput =
            document.getElementById("password");


        function handleEnterKey(event) {

            if (event.key === "Enter") {

                checkLogin();

            }

        }


        if (usernameInput) {

            usernameInput.addEventListener(
                "keydown",
                handleEnterKey
            );

        }


        if (passwordInput) {

            passwordInput.addEventListener(
                "keydown",
                handleEnterKey
            );

        }

    }
);
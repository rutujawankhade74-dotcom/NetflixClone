function showUnits(subject) {

    const unitsDiv = document.getElementById("units");

    let content = "";


    if (subject === "DBMS") {

        content = `
            <h3>🗄️ DBMS Units</h3>

            <ul>
                <li>
                    <a href="https://drive.google.com/file/d/1lFIRNsz4mTY6Px_PL-HgE65QAVR_Y4Ba/view?usp=drive_link" target="_blank">
                        📘 Unit 1
                    </a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1cfuUuuNE9e_2jdSFSybZYxPMgKtkAgzS/view?usp=drive_link" target="_blank">
                        📘 Unit 2
                    </a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1mTvLhTBRYOZtYwuc9n6bbhm0LVimDF4h/view?usp=drive_link" target="_blank">
                        📘 Unit 3
                    </a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1iOAhqqlRON4P_yKyUS4Y-Ef_eVRpejTe/view?usp=drive_link" target="_blank">
                        📘 Unit 4
                    </a>
                </li>

                <li>
                    <a href="pdf/dbms_unit5.pdf" target="_blank">
                        📘 Unit 5
                    </a>
                </li>
            </ul>
        `;


    } else if (subject === "DSA") {

        content = `
            <h3>🌳 DSA Units</h3>

            <ul>
                <li><a href="https://drive.google.com/file/d/1ib6PGGMl-Exa2SNFxJQvWRj9GdENWcq1/view?usp=drive_link" target="_blank">📘 Unit 1 & 2</a></li>
                <li><a href="https://drive.google.com/file/d/1do0GCEowU0CbJqjAAiK-uZKwYPsEpbFX/view?usp=drive_link" target="_blank">📘 Unit 3</a></li>
                <li><a href="https://drive.google.com/file/d/1tcRCQjLbTAeKeG90wZzK5OnpDqNAz7H8/view?usp=drive_link" target="_blank">📘 Unit 4</a></li>
                <li><a href="https://drive.google.com/file/d/1n1HjlYSEsp7AaOaxFBwjpWd8pUULnxtJ/view?usp=drive_link" target="_blank">📘 Unit 5</a></li>
            </ul>
        `;


    } else if (subject === "OOP") {

        content = `
            <h3>💻 OOP Units</h3>

            <ul>
                <li><a href="https://drive.google.com/file/d/1izxvOQhvFsbsf0JH808gC09KuyB1u3Tk/view?usp=drive_link" target="_blank">📘 Unit 1</a></li>
                <li><a href="https://drive.google.com/file/d/1moEwIpnUuZNk2JeiLOlfFuOjgg6PMQwx/view?usp=drive_link" target="_blank">📘 Unit 2</a></li>
                <li><a href="https://drive.google.com/file/d/1jO1owCtIok71ezbUdpIzVGvGOjmuZaLy/view?usp=drive_link" target="_blank">📘 Unit 3</a></li>
                <li><a href="https://drive.google.com/file/d/1BYI8PlW6a2x2CVWueykbDhRMbQe22INQ/view?usp=drive_link" target="_blank">📘 Unit 4</a></li>
                <li><a href="https://drive.google.com/file/d/1_rXjsdX9bPjWe99-yqhALMtg6DeW3zbd/view?usp=drive_link" target="_blank">📘 Unit 5</a></li>
            </ul>
        `;


    } else if (subject === "AI") {

        content = `
            <h3>🤖 Artificial Intelligence Units</h3>

            <ul>
                <li><a href="pdf/ai_unit1.pdf" target="_blank">📘 Unit 1</a></li>
                <li><a href="pdf/ai_unit2.pdf" target="_blank">📘 Unit 2</a></li>
                <li><a href="pdf/ai_unit3.pdf" target="_blank">📘 Unit 3</a></li>
                <li><a href="pdf/ai_unit4.pdf" target="_blank">📘 Unit 4</a></li>
                <li><a href="pdf/ai_unit5.pdf" target="_blank">📘 Unit 5</a></li>
            </ul>
        `;


    } else if (subject === "FML") {

        content = `
            <h3>🧠 Foundation of Machine Learning Units</h3>

            <ul>
                <li>
                    <a href="https://drive.google.com/file/d/1HAh34CSqxmH0bwi_pNv_11pyj_JucSnh/view?usp=drive_link" target="_blank">
                        📘 Unit 1
                    </a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1S3oDCoEsavlK1SVPlX1EOkzpb8nyLFu7/view?usp=drive_link" target="_blank">
                        📘 Unit 2
                    </a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1RZmkNOf72qEBR78iG3oEQYRXP7XbFqdd/view?usp=drive_link" target="_blank">
                        📘 Unit 3
                    </a>
                </li>

                <li>
                    <a href="https://drive.google.com/file/d/1pJbWUovU9LqYwmRSAJ2c0dKZUd4RP_ul/view?usp=drive_link" target="_blank">
                        📘 Unit 4
                    </a>
                </li>

                <li>
                    <a href="pdf/fml_unit5.pdf" target="_blank">
                        📘 Unit 5
                    </a>
                </li>
            </ul>
        `;


    } else if (subject === "DELD") {

        content = `
            <h3>⚡ DELD Units</h3>

            <ul>
                <li><a href="https://drive.google.com/file/d/15Cys5d0lWYphR0JbYNtXvKpTZiSghGk3/view?usp=drive_link" target="_blank">📘 Unit 1</a></li>
                <li><a href="https://drive.google.com/file/d/1wb52a55nIFAu-hDbXayYJHC_k0VWPxYa/view?usp=drive_link" target="_blank">📘 Unit 2</a></li>
                <li><a href="pdf/deld_unit3.pdf" target="_blank">📘 Unit 3</a></li>
                <li><a href="" target="_blank">📘 Unit 4</a></li>
                <li><a href="https://drive.google.com/file/d/1Y7uoU0VFSTxIHqioI3EMrsRhh1TcK3AT/view?usp=drive_link" target="_blank">📘 Unit 5</a></li>
            </ul>
        `;
    }

else if (subject === "IOT") {

        content = `
            <h3>🌐 IOT Units</h3>

            <ul>
                <li><a href="https://drive.google.com/file/d/1B5T4oqhH0QJUuAcs_to0aKjaSDE-CT5v/view?usp=drive_link" target="_blank">📘 Unit 1</a></li>
                <li><a href="https://drive.google.com/file/d/18oMFJyoUcTeJ15-uLEJJ510SVzF98NeY/view?usp=drive_link" target="_blank">📘 Unit 2</a></li>
                <li><a href="" target="_blank">📘 Unit 3</a></li>
                <li><a href="" target="_blank">📘 Unit 4</a></li>
                <li><a href="" target="_blank">📘 Unit 5</a></li>
            </ul>
        `;
    }

    unitsDiv.innerHTML = content;

    // Scroll smoothly to units
    document.getElementById("units-section")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


/* =========================
   SEARCH SUBJECTS
========================= */

function searchSubjects() {

    let input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".subject-card");

    cards.forEach(function(card) {

        let subject =
            card
            .getAttribute("data-subject")
            .toLowerCase();

        let text =
            card
            .innerText
            .toLowerCase();

        if (
            subject.includes(input) ||
            text.includes(input)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


/* =========================
   LOGOUT
========================= */

function logout() {

    let confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        window.location.href = "index.html";

    }
}


/* =========================
   CTRL + K SEARCH
========================= */

document.addEventListener("keydown", function(event) {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        document
            .getElementById("searchInput")
            .focus();
    }

});
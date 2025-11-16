const message = `Haiii elll, aku buat ini untuk little reminder aja.\nBut Aku gatau masalah apa yang kamu hadapi selama ini, pasti kamu burnout gara-gara itu ya. \n\nTapi jangan pernah ngerasa sendiri yaa, kaka selalu disini. Kamu gapernah ditakdirin buat nanggung semuanya sendiri. \n\n`;

function showLetter() {
    document.getElementById("introText").style.opacity = 0;
    document.querySelector(".btn").style.display = "none";

    setTimeout(() => {
        const letterBox = document.getElementById("letterBox");
        const typedText = document.getElementById("typedText")
        letterBox.style.display = "block";
        let i = 0;

        function typeWriter () {
            if (i < message.length) {
                typedText.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }

        typeWriter ();
    }, 600)
}

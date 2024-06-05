document.addEventListener("DOMContentLoaded", function() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener("change", function() {
            if (this.checked) {
                var link = "";
                if (this.id === "c1") {
                    link = "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/";
                } else if (this.id === "c2") {
                    link = "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/";
                } else if (this.id === "c3") {
                    link = "https://store.steampowered.com/app/205100/Dishonored/";
                } else if (this.id === "c4") {
                    link = "https://store.steampowered.com/app/304430/INSIDE/";
                }
                if (link !== "") {
                    window.open(link, "_blank");
                }
                this.checked = false;
            }
        });
    });
});



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    let timeout;
    let isMouseOver = false;

    const popup = document.createElement('span');
    popup.className = 'popup';
    popup.innerHTML = 'Click to go to steam page';

    card.appendChild(popup);

    card.addEventListener('mouseover', () => {
        isMouseOver = true;
        timeout = setTimeout(() => {
            if (isMouseOver) {
                popup.style.transform = 'scale(1)';
            }
        }, 1000);
    });

    card.addEventListener('mouseleave', () => {
        isMouseOver = false;
        clearTimeout(timeout);
        popup.style.transform = 'scale(0)';
    });
});

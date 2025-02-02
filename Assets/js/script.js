const serverDiscord = document.getElementById("servers-discord");
function helpButton() {
    window.open('https://wa.link/mdgmrs', '_blank');
    }
function youtubeLink() {
    window.open('https://www.youtube.com/@TiagxGG', '_blank');
    }
function tiktokLink() {
    window.open('https://www.tiktok.com/@tiaguitx23?is_from_webapp=1&sender_device=pc', '_blank');
    }
function whatsappLink() {
   window.open('https://chat.whatsapp.com/GytQgEoxXry4zvCDvRS047', '_blank');
    }
function igLink() {
    window.open('https://www.instagram.com/tiagogg._?igsh=MTRrZW1wdW5kazk4YQ==', '_blank');
    }
function showLogosRedes() {
    const logos = document.querySelectorAll('.logo');
    const redes = document.querySelectorAll('.links-social')
    redes.forEach((red, index) => {
        setTimeout(() => {
            red.classList.add('show');
        }, index * 1000);
    });
    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add('show');
        }, index * 1000);
    });
}
window.onload = () => {
    showLogosRedes();
};
function toggleDiscordServers() {
    const serversDiscord = document.getElementById('servers-discord');
    serversDiscord.classList.toggle('show');
}


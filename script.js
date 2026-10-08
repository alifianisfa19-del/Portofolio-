// Efek interaktif: Memunculkan emoji hati melayang saat tombol diklik
function createHearts(event) {
    const heartEmojis = ['💖', '🌸', '✨', '🎀', '🍬'];
    
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-pop');
        
        // Memilih emoji acak dari list
        heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // Mengatur posisi awal kemunculan di sekitar cursor/tombol
        heart.style.left = (event.clientX + (Math.random() * 40 - 20)) + 'px';
        heart.style.top = (event.clientY + (Math.random() * 40 - 20)) + 'px';
        
        document.body.appendChild(heart);
        
        // Hapus elemen setelah animasi selesai (1 detik)
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Navigasi responsive untuk tampilan mobile (hamburger menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Tutup menu navigasi saat link diklik (untuk mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
});

// Fungsi untuk menyalin alamat kontrak
function copyContract() {
    const contractAddress = document.querySelector('.address-text').innerText;
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert('Alamat Kontrak KANGO berhasil disalin ke clipboard: ' + contractAddress);
    }).catch(err => {
        console.error('Gagal menyalin alamat: ', err);
        alert('Gagal menyalin alamat kontrak. Silakan coba manual.');
    });
}

// Fungsi untuk tombol "Launch KANGO Bot" (di Hero Section)
function launchBot() {
    // Ganti dengan link aktual bot Telegram KANGO Swap Anda
    const telegramBotLink = 'https://t.me/your_kango_swap_bot'; // <--- PENTING: GANTI INI DENGAN LINK BOT TELEGRAM ASLI ANDA!
    alert('Anda akan dialihkan ke KANGO Swap Bot di Telegram! Nikmati kemudahan swap AVAX.');
    window.open(telegramBotLink, '_blank');
}

// Fungsi untuk tombol "Learn More" (di Hero Section)
function learnMore() {
    // Gulirkan ke bagian About atau bagian Features
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk tombol "Create Wallet" (di bagian "How to Buy")
function createWallet() {
    alert('Untuk menggunakan KANGO Swap Bot, Anda memerlukan wallet yang kompatibel dengan Avalanche C-Chain seperti MetaMask atau Trust Wallet. Pastikan Anda telah mengaturnya!');
    // Opsional: Anda bisa mengarahkan pengguna ke halaman panduan atau unduhan wallet, contoh:
    // window.open('https://metamask.io/download/', '_blank');
}

// Fungsi untuk tombol "Get Some AVAX" (di bagian "How to Buy")
function getAvax() {
    alert('Dapatkan AVAX dari bursa kripto terkemuka seperti Binance, Coinbase, KuCoin, atau bursa lain yang mendukung Avalanche C-Chain. Setelah itu, transfer AVAX ke wallet Avalanche Anda.');
    // Opsional: Anda bisa mengarahkan pengguna ke daftar bursa, contoh:
    // window.open('https://coinmarketcap.com/currencies/avalanche/markets/', '_blank');
}

// Fungsi untuk tombol "Swap Now" (di bagian "How to Buy")
function swapNow() {
    // Mengarahkan pengguna langsung ke bot Telegram untuk swap
    const telegramBotLink = 'https://t.me/your_kango_swap_bot'; // <--- PENTING: GANTI INI DENGAN LINK BOT TELEGRAM ASLI ANDA!
    alert('Sekarang Anda bisa menukar AVAX Anda dengan KANGO langsung melalui KANGO Swap Bot di Telegram!');
    window.open(telegramBotLink, '_blank');
}

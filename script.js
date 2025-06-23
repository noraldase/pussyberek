// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Responsive navigation for mobile (hamburger menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close nav menu when a link is clicked (for mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
});

// Function to copy contract address
function copyContract() {
    const contractAddress = document.querySelector('.address-text').innerText;
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert('KANGO Contract Address copied to clipboard: ' + contractAddress);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy contract address. Please try manually.');
    });
}

// Function for "Launch KANGO Bot" button (in Hero Section)
function launchBot() {
    // Replace with your actual KANGO Swap Telegram bot link
    const telegramBotLink = 'https://t.me/your_kango_swap_bot'; // <--- IMPORTANT: REPLACE THIS WITH YOUR ACTUAL TELEGRAM BOT LINK!
    alert('You will be redirected to the KANGO Swap Bot on Telegram! Enjoy seamless AVAX swaps.');
    window.open(telegramBotLink, '_blank');
}

// Function for "Learn More" button (in Hero Section)
function learnMore() {
    // Scrolls to the About section or Features section
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Function for "Create Wallet" button (in "How to Buy" section)
function createWallet() {
    alert('To use the KANGO Swap Bot, you\'ll need an Avalanche C-Chain compatible wallet like MetaMask or Trust Wallet. Make sure you have it set up!');
    // Optional: You could redirect users to a wallet guide or download page, e.g.:
    // window.open('https://metamask.io/download/', '_blank');
}

// Function for "Get Some AVAX" button (in "How to Buy" section)
function getAvax() {
    alert('Acquire AVAX from leading crypto exchanges such as Binance, Coinbase, KuCoin, or any other exchange supporting Avalanche C-Chain. Then, transfer AVAX to your Avalanche wallet.');
    // Optional: You could redirect users to a list of exchanges, e.g.:
    // window.open('https://coinmarketcap.com/currencies/avalanche/markets/', '_blank');
}

// Function for "Buy KANGO Now" button (in "How to Buy" section, previously "Swap Now")
function swapNow() {
    // Redirects users directly to the Telegram bot for buying KANGO
    const telegramBotLink = 'https://t.me/your_kango_swap_bot'; // <--- IMPORTANT: REPLACE THIS WITH YOUR ACTUAL TELEGRAM BOT LINK!
    alert('You can now buy KANGO with AVAX directly through the KANGO Swap Bot on Telegram!');
    window.open(telegramBotLink, '_blank');
}

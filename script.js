function toggleTheme() {
    const body = document.body;
    const toggleIcon = document.querySelector('.toggle-theme');
    const isDark = body.classList.contains('dark-theme');

    if (isDark) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        toggleIcon.textContent = '🌞';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        toggleIcon.textContent = '🌙';
    }
}
// Wallet connection
async function connectWallet() {
    try {
        const provider = window.solana;
        if (provider.isPhantom) {
            await provider.connect();
            const walletAddress = provider.publicKey.toString();
            console.log('Connected wallet:', walletAddress);
        } else {
            console.log('Please install a Phantom wallet');
        }
    } catch (error) {
        console.error('Wallet connection error:', error);
    }
}

// Staking tokens
async function stakeTokens(amount) {
    // Implement the stake function with connected wallet and Solana blockchain
    console.log(`Staking ${amount} tokens...`);
    // Insert your staking logic here using Solana Web3.js
}

async function unstakeTokens(amount) {
    // Implement the unstake function with connected wallet and Solana blockchain
    console.log(`Unstaking ${amount} tokens...`);
    // Insert your unstaking logic here using Solana Web3.js
}

// Event listeners for staking
document.getElementById('stake-button').addEventListener('click', () => {
    const amount = document.getElementById('stake-amount').value;
    stakeTokens(amount);
});

document.getElementById('unstake-button').addEventListener('click', () => {
    const amount = document.getElementById('stake-amount').value;
    unstakeTokens(amount);
});

// Call connectWallet when the page loads to connect user's wallet
window.addEventListener('load', connectWallet);


// Optional: Save the user's theme preference in local storage
function saveThemePreference(theme) {
    localStorage.setItem('preferredTheme', theme);
}

function applySavedThemePreference() {
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(savedTheme);
        document.querySelector('.toggle-theme').textContent = savedTheme === 'dark-theme' ? '🌙' : '🌞';
    }
}

// Initialize the theme on page load
document.addEventListener('DOMContentLoaded', () => {
    applySavedThemePreference();

    document.querySelector('.toggle-theme').addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        toggleTheme();
        saveThemePreference(currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    });
});

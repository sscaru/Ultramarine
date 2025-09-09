const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙 Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? '☀️ Light Mode' 
        : '🌙 Dark Mode';
});

// Add dark mode styles dynamically
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background: #121212;
        color: #f1f1f1;
    }
    .dark-mode .blog-post {
        background: #1e1e1e;
        color: #f1f1f1;
    }
    .dark-mode .blog-post p {
        color: #ccc;
    }
`;
document.head.appendChild(style);
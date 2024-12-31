// Wait for the DOM content to be fully loaded

export function animations() {
    document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('.animate-on-load');

        // Add the 'visible' class to trigger the animation
        if (element) {
            element.classList.add('visible');
        }
    });
}
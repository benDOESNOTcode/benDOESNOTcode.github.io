// ============================================
// 8-BIT DINOSAUR PORTFOLIO - INTERACTIVE JS
// ============================================

/* ============================================
   TYPING EFFECT FOR DIALOGUE BOX
   ============================================ */

const aboutMeText = `I'm a Computational Data Science Master's student at UC Riverside. My passion lies in crafting elegant solutions to complex data problems through machine learning and statistical analysis. I specialize in Python programming, data visualization, and building predictive models. When I'm not analyzing datasets or training neural networks, you can find me thinking about dinosaurs and retro video games.`;

function typeDialogue() {
    const dialogueElement = document.getElementById('dialogue-text');
    const cursor = document.querySelector('.cursor');
    let index = 0;

    function typeCharacter() {
        if (index < aboutMeText.length) {
            dialogueElement.textContent += aboutMeText.charAt(index);
            index++;
            // Vary typing speed for realism
            const delay = Math.random() > 0.95 ? 100 : 50;
            setTimeout(typeCharacter, delay);
        } else {
            cursor.style.display = 'inline';
        }
    }

    typeCharacter();
}

// Start typing effect when page loads
window.addEventListener('load', typeDialogue);

/* ============================================
   DINOSAUR SPRITE JUMP INTERACTION
   ============================================ */

const dinoSprite = document.getElementById('dinosprite');
let isJumping = false;

dinoSprite.addEventListener('click', function() {
    if (!isJumping) {
        isJumping = true;

        // Add jumping animation class
        dinoSprite.classList.add('jumping');

        // Optional: Add a simple jump sound effect using Web Audio API
        playJumpSound();

        // Remove animation class after jump completes
        setTimeout(() => {
            dinoSprite.classList.remove('jumping');
            isJumping = false;
        }, 600);
    }
});

/* ============================================
   SOUND EFFECTS - Jump Sound
   ============================================ */

function playJumpSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        // Create oscillator for jump sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Jump sound: ascending pitch
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (e) {
        // Audio context not available, silently continue
        console.log('Audio context not available');
    }
}

/* ============================================
   SMOOTH SCROLL TO PROJECTS
   ============================================ */

function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================
   CONTACT EMAIL FUNCTION
   ============================================ */

function ContactEmail() {
    // Replace this with your actual email address
    const email = 'your.email@ucr.edu'; // Update this with your actual email
    const subject = 'Hello Beniel!';
    const body = 'I\'d love to connect with you!';

    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
}

/* ============================================
   INTERSECTION OBSERVER - SCROLL ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for fade-in animation
document.querySelectorAll('.arcade-cabinet').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

/* ============================================
   PIXEL GRID BACKGROUND ANIMATION (SUBTLE)
   ============================================ */

// Optional: Add a subtle parallax effect to hero section on mouse move
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Very subtle movement
    const offsetX = (mouseX - 0.5) * 20;
    const offsetY = (mouseY - 0.5) * 20;

    dinoSprite.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

/* ============================================
   KEYBOARD SHORTCUT - PRESS 'J' TO JUMP
   ============================================ */

document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'j' && !isJumping) {
        dinoSprite.click();
    }
});

/* ============================================
   CONSOLE EASTER EGG
   ============================================ */

console.log('%c🦕 Welcome to Beniel\'s 8-bit Portfolio! 🦕', 'font-size: 20px; color: #2d8659;');
console.log('%cPress J or click the dinosaur to make it jump!', 'font-size: 14px; color: #52b788;');
console.log('%cLooking for something?', 'font-size: 12px; color: #a88968;');

/* ============================================
   INITIALIZE ON PAGE LOAD
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');

    // Ensure CSS Image Rendering for pixel art
    const style = document.createElement('style');
    style.textContent = `
        img {
            image-rendering: pixelated;
            image-rendering: -moz-crisp-edges;
            image-rendering: crisp-edges;
        }
    `;
    document.head.appendChild(style);
});

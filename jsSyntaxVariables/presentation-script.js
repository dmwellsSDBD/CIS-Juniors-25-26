// Presentation Navigation Script
(function() {
    'use strict';
    
    // Get all slides and navigation elements
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlideSpan = document.getElementById('currentSlide');
    const totalSlidesSpan = document.getElementById('totalSlides');
    
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    
    // Initialize
    function init() {
        totalSlidesSpan.textContent = totalSlides;
        updateSlide(0);
        updateButtons();
        
        // Add event listeners
        prevBtn.addEventListener('click', previousSlide);
        nextBtn.addEventListener('click', nextSlide);
        document.addEventListener('keydown', handleKeyPress);
        
        // Touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        document.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swiped left - go to next slide
                    nextSlide();
                } else {
                    // Swiped right - go to previous slide
                    previousSlide();
                }
            }
        }
        
        console.log('JavaScript Syntax and Variables Presentation');
        console.log('Use arrow keys (← →) or buttons to navigate');
        console.log('Total slides:', totalSlides);
    }
    
    // Update slide display
    function updateSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev');
        });
        
        // Add active class to current slide
        slides[index].classList.add('active');
        
        // Add prev class to previous slides
        for (let i = 0; i < index; i++) {
            slides[i].classList.add('prev');
        }
        
        // Update slide counter
        currentSlideSpan.textContent = index + 1;
        currentSlideIndex = index;
        
        // Update buttons
        updateButtons();
        
        // Log slide change (helpful for teaching/debugging)
        console.log(`Slide ${index + 1} of ${totalSlides}`);
    }
    
    // Update button states
    function updateButtons() {
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === totalSlides - 1;
    }
    
    // Navigate to previous slide
    function previousSlide() {
        if (currentSlideIndex > 0) {
            updateSlide(currentSlideIndex - 1);
        }
    }
    
    // Navigate to next slide
    function nextSlide() {
        if (currentSlideIndex < totalSlides - 1) {
            updateSlide(currentSlideIndex + 1);
        }
    }
    
    // Handle keyboard navigation
    function handleKeyPress(e) {
        switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                previousSlide();
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ': // Spacebar
                e.preventDefault();
                nextSlide();
                break;
            case 'Home':
                e.preventDefault();
                updateSlide(0);
                break;
            case 'End':
                e.preventDefault();
                updateSlide(totalSlides - 1);
                break;
            case 'Escape':
                e.preventDefault();
                updateSlide(0);
                break;
        }
    }
    
    // Jump to specific slide (can be called from console for testing)
    window.goToSlide = function(slideNumber) {
        const index = slideNumber - 1;
        if (index >= 0 && index < totalSlides) {
            updateSlide(index);
        } else {
            console.error('Invalid slide number. Must be between 1 and ' + totalSlides);
        }
    };
    
    // Start presentation when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Hide shortcuts info after a few seconds
    setTimeout(function() {
        const shortcutsInfo = document.querySelector('.shortcuts-info');
        if (shortcutsInfo) {
            shortcutsInfo.style.transition = 'opacity 0.5s ease';
            shortcutsInfo.style.opacity = '0';
            setTimeout(() => {
                shortcutsInfo.style.display = 'none';
            }, 500);
        }
    }, 5000);
    
})();

// Demonstration function for showing prompt() and console.log() examples
function demonstrateIO() {
    console.log("=== JavaScript I/O Demonstration ===");
    
    // Demonstrate console.log()
    console.log("Hello from console.log()!");
    console.log("You can output text:", "like this");
    console.log("You can output numbers:", 42);
    console.log("You can output variables:");
    
    let studentName = "Student";
    let grade = 95;
    console.log("Name:", studentName);
    console.log("Grade:", grade);
    
    // Offer to demonstrate prompt()
    console.log("\nTo try prompt(), open your browser console and type: demoPrompt()");
}

// Separate function for prompt demo (so students can call it)
function demoPrompt() {
    let userName = prompt("What is your name?");
    if (userName) {
        console.log("Hello, " + userName + "!");
        let favoriteLanguage = prompt("What's your favorite programming language?");
        if (favoriteLanguage) {
            console.log(userName + " likes " + favoriteLanguage);
        }
    } else {
        console.log("User cancelled the prompt");
    }
}

// Make demo functions available globally for students to try
window.demonstrateIO = demonstrateIO;
window.demoPrompt = demoPrompt;

// Log available commands
console.log("%c Available Commands:", "font-weight: bold; font-size: 14px; color: #16A085;");
console.log("  goToSlide(n) - Jump to slide number n");
console.log("  demonstrateIO() - See console.log() examples");
console.log("  demoPrompt() - Try the prompt() function");

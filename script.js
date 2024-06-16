document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    const socialLinks = document.querySelectorAll('.social-link');
    const bio = document.querySelector('.bio');
    const container = document.querySelector('.container');
    const sparklesContainer = document.createElement('div');
    sparklesContainer.classList.add('sparkles');
    container.appendChild(sparklesContainer);

    // Animation for profile image hover
    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transition = 'transform 0.5s ease';
        profileImage.style.transform = 'rotate(360deg)';
    });

    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transition = 'transform 0.5s ease';
        profileImage.style.transform = 'rotate(0deg)';
    });

    // Animation for social links
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.5)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transition = 'all 0.3s ease';
            link.style.boxShadow = 'none';
        });
    });

    function createSparkles(container, durationMin = 2, durationMax = 4) {
        const sparkleCount = 100;
        container.innerHTML = ''; // Clear existing sparkles
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.animationDuration = (Math.random() * (durationMax - durationMin) + durationMin) + 's'; // Randomize animation duration
            container.appendChild(sparkle);
        }
    }


    // Generate sparkles immediately on load
    createSparkles(sparklesContainer);

    function adjustSparkleSpeed(durationMin, durationMax) {
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach(sparkle => {
            const randomDuration = (Math.random() * (durationMax - durationMin) + durationMin) + 's';
            sparkle.style.animationDuration = randomDuration;
        });
    }

    // Increase sparkle speed on mouse enter and reset on mouse leave
    bio.addEventListener('mouseenter', () => {
        adjustSparkleSpeed(1, 2); // Faster sparkles
    });

    bio.addEventListener('mouseleave', () => {
        adjustSparkleSpeed(2, 4); // Reset to normal speed sparkles
    });
});





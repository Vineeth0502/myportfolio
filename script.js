function toggleNavbar() {
    var navbarContainer = document.getElementById("navbarContainer");
    var menuIcon = document.querySelector(".menu-icon");

    navbarContainer.style.display = navbarContainer.style.display === "flex" ? "none" : "flex";
    navbarContainer.style.opacity = navbarContainer.style.opacity === "1" ? "0" : "1";
    navbarContainer.style.transform = navbarContainer.style.transform === "translateY(0)" ? "translateY(-20px)" : "translateY(0)";

    menuIcon.style.transform = menuIcon.style.transform === "rotate(45deg)" ? "rotate(0)" : "rotate(45deg)";
}

// Add class to trigger the fade-in effect when the page loads
document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById("content");
    if (content) {
        content.classList.add("loaded");
    }
});



function redirectToAboutMe() {
    // Smooth scroll to the About Me section
    document.getElementById('aboutme').scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

function bulgeItem(element) {
    element.style.transform = "scale(1.1)"; // Scale up the item on hover
}

function unbulgeItem(element) {
    element.style.transform = ""; // Revert to the original scale on mouseout
}

document.addEventListener('DOMContentLoaded', function () {
    var leftSection = document.querySelector('.left-section');

    if (leftSection) {
        var images = leftSection.querySelectorAll('.slideshow-container img');
        var currentImage = 0;

        function showImage(index) {
            if (images && images.length > 0 && !isNaN(index)) {
                // Hide all images
                for (var i = 0; i < images.length; i++) {
                    images[i].style.display = 'none';
                }

                // Show the specified image
                images[index].style.display = 'block';
                console.log("Display property:", getComputedStyle(images[index]).display);
            }
        }

        function nextImage() {
            currentImage = (currentImage + 1) % images.length;
            showImage(currentImage);
        }

        function prevImage() {
            currentImage = (currentImage - 1 + images.length) % images.length;
            showImage(currentImage);
        }

        // Show the first image initially
        showImage(currentImage);

        // Automatically advance to the next image every 5 seconds
        setInterval(nextImage, 5000);
    }
});
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
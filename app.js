// Select the mobile menu button
const menu = document.querySelector('#mobile-menu');
// Select the menu links container
const menuLinks = document.querySelector('.navbar__menu');

// Add event listener to toggle menu and menu links
menu.addEventListener('click', function(){
    // Toggle 'is-active' class on mobile menu button
    menu.classList.toggle('is-active');
    // Toggle 'active' class on menu links container
    menuLinks.classList.toggle('active');
});

// Popup for clicking album Spotify buttons
document.addEventListener('DOMContentLoaded', function () {
    // Select the mobile menu and menu links container again
    const mobileMenu = document.querySelector('#mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');
    // Select all album buttons
    const albumButtons = document.querySelectorAll('.album_btn');

    // Toggle mobile menu when clicked
    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    });

    // Add event listeners to album buttons
    albumButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Create a popup element
            const popup = document.createElement('div');
            popup.classList.add('popup');

            // Add content to the popup
            popup.innerHTML = `
                <div class="popup-content">
                    <!-- Close button -->
                    <span class="close">&times;</span>
                    <!-- Popup message -->
                    <p>Enjoy the music.</p>
                </div>
            `;

            // Append the popup to the body
            document.body.appendChild(popup);

            // Close the popup when the close button is clicked
            const closeButton = popup.querySelector('.close');
            closeButton.addEventListener('click', function () {
                document.body.removeChild(popup);
            });

            // Close the popup when clicked outside the popup window
            window.addEventListener('click', function (event) {
                if (event.target === popup) {
                    document.body.removeChild(popup);
                }
            });
        });
    });
});

// Popup for clicking Channnel Links button
document.addEventListener('DOMContentLoaded', function () {
    // Select the mobile menu button
    const mobileMenu = document.querySelector('#mobile-menu');
    // Select the menu links container
    const navbarMenu = document.querySelector('.navbar__menu');
    // Select all album buttons
    const albumButtons = document.querySelectorAll('.album_btn');
    // Select the socials button
    const socialsButton = document.querySelector('.socials_button');

    // Add event listener to toggle menu and menu links
    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    });

    // Add click event listener to the socials button
    socialsButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default action of anchor element
        // Create the socials popup element
        const socials_popup = document.createElement('div');
        socials_popup.classList.add('socials_popup');
        // Add content to the socials popup
        socials_popup.innerHTML = `
        <span class="socials_heading">Follow the Official Channels</span>
            <div class="socials_popup-content">
                <span class="socials_close">&times;</span>
                <div class="social-link">
                    <a href="https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz?si=V2xBkVrjQ8y5dKJAMQ0lyg&nd=1&dlsi=36a2f81e76714c4a" target="_blank"> <!-- Add link for Spotify -->
                        <img src="images/spotifylogo.png" alt="Spotify Logo">
                        <p>Spotify</p>
                    </a> 
                </div>
                <div class="social-link">
                    <a href="https://www.youtube.com/channel/UCZU9T1ceaOgwfLRq7OKFU4Q" target="_blank">  <!-- Add link for YouTube -->
                        <img src="images/youtubelogo.png" alt="YouTube Logo"> 
                        <p>YouTube</p>
                    </a> 
                </div>
            </div>
        `;
        // Append the socials popup to the body
        document.body.appendChild(socials_popup);

        // Add event listener to close the popup when the close button is clicked
        const closeButton = socials_popup.querySelector('.socials_close');
        closeButton.addEventListener('click', function () {
            document.body.removeChild(socials_popup);
        });

        // Add event listener to close the popup when clicked outside the popup window
        window.addEventListener('click', function (event) {
            if (event.target === socials_popup) {
                document.body.removeChild(socials_popup);
            }
        });
    });
});
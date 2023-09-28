> Responsive Instagram UI Clone
This project is a clone of the [Instagram](https://instagram.com). I made it to study and improve my skills with HTML and CSS, and learn new concepts, like layouts, responsivity, themes and localStorage. Any feedback is very welcome! I'm a begginer in web development, so leave your opinions and suggestions, or any advice to improve and fix something i made wrong.
This project is a clone of the [Instagram UI](https://instagram.com). I made it to study and improve my skills with HTML and CSS, and learn new concepts, like layouts, responsiveness, positioning and some JS concepts. Any feedback, opinions or suggestions is very welcome!

- **[Live Version](https://leocosta1.github.io/instagram-clone/)**
The latest update includes some nice new features, such as the gradient border and scroll buttons in stories, and the possibility to add more than one media to the post content, plus, of course, a major overhaul of the UI design!

- **[Live Preview](https://leocosta1.github.io/instagram-clone/)**

## 🤓 Improved Skills

- HTML:
  - Layout (Flebox);
  - Positioning;
  - Containers;
  - Semantic;
  - Responsivity;
- CSS:
  - Media Queries;
  - Light and Dark Theme;
  - SVG usage;
- JS:
  - Events;
  - LocalStorage;
- Layout (Flexbox);
- Positioning;
- Semantic HTML;
- Responsiveness (Media Queries, Relative Lengths);
- Light/Dark Theme;
- BEM Methodology;
- SVG Usage;
- Events;
- LocalStorage;
- Scroll Snapping;
- Intersection Observer;

## ✅ ToDo

- [x] ~~Finish the Dark Theme.~~
- [x] ~~Improve the icons and button.~~
- [ ] Gradient on stories border.
- [ ] Refactor CSS (Add SASS).
// Elements
const btnTheme = document.getElementById('btnTheme');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const toggleThemeBtn = document.querySelector('.header__theme-button');
const storiesContent = document.querySelector('.stories__content');
const storiesLeftButton = document.querySelector('.stories__left-button');
const storiesRightButton = document.querySelector('.stories__right-button');
const posts = document.querySelectorAll('.post');
const postsContent = document.querySelectorAll('.post__content');


// Set Initial Theme based on localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
    document.documentElement.classList.add('darkMode');
    sun.style.display = 'block';
    moon.style.display = 'none';
}
else {
    document.documentElement.classList.remove('darkMode');
    sun.style.display = 'none';
    moon.style.display = 'block';
// Getting the scrollbar width to adjust the header alignment
const content = document.querySelector('.main-container');
const scrollbarWidth = content.offsetWidth - content.clientWidth;
// Setting the property when the page load
document.onload = setScrollbarWidth(scrollbarWidth);
function setScrollbarWidth(width) {
    document.documentElement.style.setProperty('--scrollbar-width', `${width}px`);
}


//  Switch Theme
btnTheme.addEventListener('click', () => {
    let theme;
    document.documentElement.classList.toggle('darkMode');
// ===================================
// DARK/LIGHT THEME
// Set initial theme from LocalStorage
document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey) {
    if(themeKey === 'dark') {
        document.documentElement.classList.add('darkTheme');
    }
    else {
        document.documentElement.classList.remove('darkTheme');
    }
}

// Toggle theme button
toggleThemeBtn.addEventListener('click', () => {
    // Toggle root class
    document.documentElement.classList.toggle('darkTheme');

    // Save Theme on localStorage
    if(document.documentElement.classList.contains('darkMode')) {
        theme = 'dark';
        sun.style.display = 'block';
        moon.style.display = 'none';
    // Saving current theme on LocalStorage
    if(document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        theme = 'light';
        sun.style.display = 'none';
        moon.style.display = 'block';
        localStorage.setItem('theme', 'light');
    }
});


// ===================================
// STORIES SCROLL BUTTONS
// Scrolling stories content
storiesLeftButton.addEventListener('click', () => {
    storiesContent.scrollLeft -= 320;
});
storiesRightButton.addEventListener('click', () => {
    storiesContent.scrollLeft += 320;
});

// Checking if screen has minimun size of 1024px
if(window.matchMedia('(min-width: 1024px)').matches) {
    // Observer to hide buttons when necessary
    const storiesObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.target === document.querySelector('.story:first-child')) {
                storiesLeftButton.style.display = (entry.isIntersecting) ? 'none' : 'unset';
            }
            else if(entry.target === document.querySelector('.story:last-child')) {
                storiesRightButton.style.display = (entry.isIntersecting) ? 'none' : 'unset';
            }
        });
    }, { root: storiesContent, threshold: 1 });

    // Calling the observer with the first and last stories
    storiesObserver.observe(document.querySelector('.story:first-child'));
    storiesObserver.observe(document.querySelector('.story:last-child'));
}


    localStorage.setItem('theme', theme);
})
// ===================================
// POST MULTIPLE MEDIAS
// Creating scroll buttons and indicators when post has more than one media
posts.forEach(post => {
    if(post.querySelectorAll('.post__media').length > 1) {
        const leftButtonElement = document.createElement('button');
        leftButtonElement.classList.add('post__left-button');
        leftButtonElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="var(--primary)" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
            </svg>
        `;

        const rightButtonElement = document.createElement('button');
        rightButtonElement.classList.add('post__right-button');
        rightButtonElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="var(--primary)" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
            </svg>
        `;

        post.querySelector('.post__content').appendChild(leftButtonElement);
        post.querySelector('.post__content').appendChild(rightButtonElement);

        post.querySelectorAll('.post__media').forEach(function() {
            const postMediaIndicatorElement = document.createElement('div');
            postMediaIndicatorElement.classList.add('post__indicator');

            post.querySelector('.post__indicators').appendChild(postMediaIndicatorElement);
        });

        // Observer to change the actual media indicator
        const postMediasContainer = post.querySelector('.post__medias');
        const postMediaIndicators = post.querySelectorAll('.post__indicator');
        const postIndicatorObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // Removing all the indicators
                    postMediaIndicators.forEach(indicator => indicator.classList.remove('post__indicator--active'));
                    // Adding the indicator that matches the current post media
                    postMediaIndicators[Array.from(postMedias).indexOf(entry.target)].classList.add('post__indicator--active');
                }
            });
        }, { root: postMediasContainer, threshold: 0.5 });

        // Calling the observer for every post media
        const postMedias = post.querySelectorAll('.post__media');
        postMedias.forEach(media => {
            postIndicatorObserver.observe(media);
        });
    }
});

// Adding buttons features on every post with multiple medias
postsContent.forEach(post => {
    if(post.querySelectorAll('.post__media').length > 1) {
        const leftButton = post.querySelector('.post__left-button');
        const rightButton = post.querySelector('.post__right-button');
        const postMediasContainer = post.querySelector('.post__medias');

        // Functions for left and right buttons
        leftButton.addEventListener('click', () => {
            postMediasContainer.scrollLeft -= 400;
        });
        rightButton.addEventListener('click', () => {
            postMediasContainer.scrollLeft += 400;
        });

        // Observer to hide button if necessary
        const postButtonObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if(entry.target === post.querySelector('.post__media:first-child')) {
                    leftButton.style.display = (entry.isIntersecting) ? 'none' : 'unset';
                }
                else if(entry.target === post.querySelector('.post__media:last-child')) {
                    rightButton.style.display = (entry.isIntersecting) ? 'none' : 'unset';
                }
            });
        }, { root: postMediasContainer, threshold: 0.5 });

        if(window.matchMedia('(min-width: 1024px)').matches) {
            postButtonObserver.observe(post.querySelector('.post__media:first-child'));
            postButtonObserver.observe(post.querySelector('.post__media:last-child'));
        }
    }
});
 969 changes: 629 additions & 340 deletions969
style.css
@@ -1,569 +1,858 @@
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

/* Reset CSS */
/* CSS Reset */
* { box-sizing: border-box;
    margin: 0;
    padding: 0; }

*, button, input {
*, button, input, select, textarea {
    font-family: 'Roboto', sans-serif;
}

html, body {
    min-height: 100vh;
/* Vars */
:root {
    --primary: hsl(0, 0%, 100%);
    --secondary: hsl(0, 0%, 98%);
    --border: hsl(0, 0%, 86%);

    display: flex;
    flex-direction: column;
}
    --story-border: hsl(0, 0%, 78%);
    --img-border: hsla(0, 0%, 0%, 0.1);

svg {
    fill: var(--text);
    display: block;
    --text-dark: hsl(0, 0%, 15%);
    --text-light: hsl(0, 0%, 60%);

    --like: hsl(355, 82%, 61%);
    --link: hsl(204, 100%, 48%);
}
:root.darkTheme {
    --primary: hsl(0, 0%, 0%);
    --secondary: hsl(0, 0%, 2%);
    --border: hsl(0, 0%, 15%);

button {
    background: 0 0;
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    outline: none;
    --story-border: hsl(0, 0%, 44%);
    --img-border: hsla(0, 0%, 100%, 0.1);

    width: fit-content;
    height: fit-content;
}
    --text-dark: hsl(0, 0%, 98%);
    --text-light: hsl(0, 0%, 60%);

/* Colors */
:root.darkMode {
    --primary: #000000;
    --secondary: #121212;
    --outline: #262626;
    --text: #B3B3B3;
    --like: #ED4756;
    --link: #3898F3;
    --like: hsl(355, 82%, 61%);
    --link: hsl(204, 100%, 48%);
}
:root {
    --primary: #FFFFFF;
    --secondary: #FAFAFA;
    --outline: #B3B3B3;
    --text: #262626;
    --like: #ED4756;
    --link: #3898F3;

/* -------------------------------------------------- */

/* General Styles */
html,
body {
    height: 100%;

    display: flex;
    flex-direction: column;
}

svg { display: block; }

img { max-width: 100%; }

/* -------------------------------------------------- */

/* Header */
/* Header Navbar */
.header {
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0; left: 0;
    height: 44px;
    background-color: var(--primary);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0 16px;
    background-color: var(--secondary);
    border-bottom: 1px solid var(--outline);
    position: relative;
    z-index: 1;
}
.header::after {
    content: '';
    position: absolute;
    bottom: 0;

.header .container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 1px;
    background-color: var(--border);
}

.header .section {
.header__content {
    width: 100%;
    max-width: 975px;

    padding: 0 14px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header .section.mid {
    display: none;
.header__home {
    margin-top: 5px;
}
.header .section.right .desktop {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
.header__theme-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.header .section.right .mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
.header__theme-button-sun {
    display: none;
}

.header .section button:not(:first-child) {
    margin-left: 12px;
.header__theme-button-moon {
    display: unset;
}
.header .logo {
    margin-top: 5px;
    fill: var(--text);
:root.darkTheme .header__theme-button-sun {
    display: unset;
}
.header #btnTheme svg {
    fill: none;
    stroke: var(--text);
:root.darkTheme .header__theme-button-moon {
    display: none;
}

.header .search-bar {
    width: 215px;
    height: 25px;
    position: relative;
.header__search {
    width: 216px;
    height: 28px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    display: none;
    align-items: center;
    position: relative;
}
.header__search svg {
    width: 12px;
    height: 12px;

.header .search-bar #search {
    position: absolute;
    left: 8px;
}
.header__search input {
    width: 100%;
    height: 100%;

    background-color: var(--secondary);
    border: 1px solid var(--outline);
    border-radius: 3px;

    color: var(--text);

    padding: 4px 10px 4px 28px;
    border: 1px solid var(--border);
    border-radius: 4px;
    outline: none;
    text-align: center;

    font-size: 12px;
    font-weight: 300;
    text-decoration: none;
    color: var(--text-light);

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.header .search-bar #search:focus {
    text-align: left;
    padding: 0 6px 0 24px;
.header__search input:focus {
    color: var(--text-dark);
}

.header .search-bar svg {
    width: 12px;
    height: 12px;
.header__buttons {
    display: flex;
    align-items: center;
    gap: 16px;
}

    fill: #8E8E8E;
    position: absolute;
    top: 7px; left: 7px;

/* Bottom Navbar */
.navbar {
    width: 100%;
    height: 44px;
    background-color: var(--primary);

    display: flex;
    position: relative;
    z-index: 1;
}
.navbar::after {
    content: '';
    position: absolute;
    top: 0;

/* Main Content */
.page {
    width: 100%;
    height: 100%;
    overflow: auto;
    margin: 45px 0;
    height: 1px;
    background-color: var(--border);
}

.navbar__button {
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

    background-color: var(--primary);
.navbar__button.profile-button .profile-button__border {
    width: 28px;
    height: 28px;
    border-width: 2px;
}
.page::-webkit-scrollbar {
    display: none;


/* Main Content */
.main-container {
    background-color: var(--primary);

    display: flex;
    flex: 1;
    overflow-y: auto;
}

.page section {
.content-container {
    width: 100%;
    height: 100%;
    max-width: 935px;

    margin: 0 auto;
    display: flex;
    flex-direction: row;
}

.page .content {
.content {
    width: 100%;
    height: 100%;
    max-width: 614px;

    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.page .sidebar {
.stories {
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    padding: 16px 0;
    flex-shrink: 0;

    display: none;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}
.stories::after {
    content: '';
    position: absolute;
    bottom: 0;

/* Stories */
.content .stories {
    height: 105px;
    width: 100%;
    height: 1px;
    background-color: var(--border);
}
.stories__content {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 16px;
    padding: 0 16px;
    position: relative;

    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    scroll-behavior: smooth;
    scrollbar-width: none;
}
{
.stories__content::-webkit-scrollbar
    display: none;
}
{
    padding: 0 18px;
    background-color: var(--primary);
    border-bottom: 1px solid var(--outline);}
.posts {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
}
.content .stories::-webkit-scrollbar }

.stories__left-button,
.post__left-button,
.stories__right-button,
.post__right-button {
    width: 24px;
    height: 24px;
    display: none;

    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    filter: drop-shadow(0px 0px 5px rgba(0,0,0,0.5));

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
}
.stories__left-button {
    left: 10px;
}
.stories__right-button {
    right: 10px;
}
.post__left-button {
    left: 16px;
    opacity: .7;
}
.post__right-button {
    right: 16px;
    opacity: .7;
}

.content .stories .story {
    width: 64px;

/* Components */
/* Story */
.story {
    background-color: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    gap: 6px;
}

.story__avatar {
    position: relative;
}
.story__border {
    width: 64px;
    height: 64px;

    fill: none;
    stroke: var(--story-border);
    stroke-width: 1.5;
}
.content .stories .story:not(:first-child) {
    margin-left: 15px;
.story--has-story .story__border {
    stroke: url(#--story-gradient);
    stroke-width: 2;
}
.story__picture {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

.content .stories .story .avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
}
.story__picture::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;

    border: 1px solid var(--img-border);
    border-radius: 50%;
    border: 1px solid var(--outline);

    margin-bottom: 8px;
}
.content .stories .story .avatar img {
    width: 100%;
    height: 100%;
}

.content .stories .story .name {
.story__user {
    font-size: 12px;
    text-align: center;
    color: var(--text);

    text-decoration: none;
    font-weight: 400;
    color: var(--text-light);
    text-transform: lowercase;

    width: 100%;
    overflow: hidden;
    max-width: 72px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.story--has-story .story__user {
    color: var(--text-dark);
}

/* Posts */
.content .post {
/* Post */
.post {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;
    overflow: hidden;
}
.post:last-child {
    margin-bottom: 8px;
}

.content .post .post-top {
.post__header {
    background-color: var(--primary);
    border-bottom: 1px solid var(--border);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 10px 16px;
    padding: 16px;
}

.content .post .post-top .profile {
.post__profile {
    display: flex;
    align-items: center;
    gap: 12px;
}

.content .post .post-top .profile .avatar {
    width: 44px;
    height: 44px;
.post__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
}
.post__avatar::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;

    border: 1px solid var(--img-border);
    border-radius: 50%;
    border: 1px solid var(--outline);

    margin-right: 8px;
}
.content .post .post-top .profile .avatar img {
    width: 100%;
    height: 100%;
}

.content .post .post-top .profile a:link, .content .post .post-top .profile a:visited {
.post__user {
    font-size: 14px;
    font-weight: 500;
    color: var(--text);

    color: var(--text-dark);
    text-decoration: none;
    text-transform: lowercase;
}

.content .post .post-top button {
    background: 0 0;
    border: 0;
.post__user:hover {
    text-decoration: underline;
}
.post__more-options {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 6px;
    outline: none;
}

.post__content {
    display: flex;
    position: relative;
}
.post__medias {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;

.content .post .post-media {
    width: 100%;
    max-height: 500px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
}

.content .post .post-media img {
.post__medias::-webkit-scrollbar {
    display: none;
}
.post__media {
    width: 100%;
    height: 100%;
    flex: none;
    scroll-snap-align: start;
    scroll-snap-stop: always;
}


.content .post .post-bottom {
.post__footer {
    background-color: var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 12px 16px;
    gap: 4px;
    padding: 0 4px;
}

.content .post .post-bottom .buttons {
.post__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-bottom: 8px;
    position: relative;
}
.post__button {
    background-color: transparent;
    border: none;
    cursor: pointer;

.content .post .post-bottom .buttons > div > button:not(:last-child) {
    margin-right: 10px;
    padding: 8px;
}
.post__button--align-right {
    margin-left: auto;
}
.post__indicators {
    display: flex;
    align-items: center;
    gap: 4px;

.content .post .post-bottom .likes {
    width: 100%;
    margin-bottom: 8px;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -100%);
}
.post__indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--text-light);
}
.post__indicator--active {
    background-color: var(--link);
}

    font-size: 14px;
    color: var(--text);
.post__infos {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    gap: 10px;
}
.content .post .post-bottom .likes a:link, .content .post .post-bottom .likes a:visited,
.content .post .post-bottom .likes strong {
    font-weight: 600;
    text-decoration: none;
    color: var(--text);
.post__likes,
.post__description {
    display: flex;
}
.post__likes {
    align-items: center;
    gap: 6px;
}
.post__likes-avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}
.post__likes-avatar::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;

.content .post .post-bottom .desc {
    border: 1px solid var(--img-border);
    border-radius: 50%;
}
.post__likes span,
.post__description span {
    font-size: 14px;
    color: var(--text);

    margin-bottom: 14px;
    font-weight: 400;
    color: var(--text-dark);
}

.content .post .post-bottom .desc a:link, .content .post .post-bottom .desc a:visited {
    font-weight: 600;
.post__likes a,
.post__description a {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-dark);
    text-decoration: none;
    color: var(--text);
}

.content .post .post-bottom .time {
.post__name--underline:hover {
    text-decoration: underline;
}
.post__date-time {
    font-size: 10px;
    color: #8E8E8E;

    text-decoration: none;
    font-weight: 400;
    color: var(--text-light);
    text-transform: uppercase;
}

/* Sidebar */
.sidebar .user-profile {
/* Side Menu */
.side-menu {
    max-width: 290px;
    position: fixed;
    left: 50%; top: 84px;
    transform: translateX(calc(-50% + 310px));

    display: none;
    flex-direction: column;
}

.side-menu__user-profile {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 20px;
    margin: 20px 0 22px;
}

.sidebar .user-profile .avatar {
.side-menu__user-avatar {
    width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 50%;

    margin-right: 12px;
    flex-shrink: 0;

    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid var(--outline);
}
.sidebar .user-profile .avatar img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.side-menu__user-avatar::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;

.sidebar .suggestions {
    border: 1px solid var(--img-border);
    border-radius: 50%;
}
.side-menu__user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    gap: 4px;
}
.side-menu__user-info a {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-dark);
    text-decoration: none;
    text-transform: lowercase;

.sidebar .suggestions h3 {
    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.side-menu__user-info span {
    font-size: 14px;
    color: #8E8E8E;
    font-weight: 400;
    color: var(--text-light);

    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.side-menu__user-button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    font-size: 12px;
    font-weight: 500;
    color: var(--link);

.sidebar .suggestions .profiles {
    flex-shrink: 0;
}

.side-menu__suggestions-section {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
}
.side-menu__suggestions-header {
    display: flex;
    justify-content: space-between;
}
.side-menu__suggestions-header h2 {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-light);
}
.side-menu__suggestions-header button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    font-size: 12px;
    font-weight: 500;
    color: var(--text-dark);
}

.sidebar .suggestions .profiles .profile {
.side-menu__suggestions-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    padding: 6px 16px;
    margin: 16px 0 24px;
    padding-left: 4px;
}
.sidebar .suggestions .profiles .profile .avatar {
    width: 38px;
    height: 38px;
    overflow: hidden;
.side-menu__suggestion {
    display: flex;
    align-items: center;
}
.side-menu__suggestion-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    margin-right: 12px;
    flex-shrink: 0;

    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid var(--outline);
}
.sidebar .suggestions .profiles .profile .avatar img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.side-menu__suggestion-avatar::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;

.sidebar .desc {
    border: 1px solid var(--img-border);
    border-radius: 50%;
}
.side-menu__suggestion-info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex: 1;
    gap: 2px;
}
.sidebar a:link, .sidebar a:visited {
.side-menu__suggestion-info a {
    font-size: 14px;
    font-weight: bold;
    color: var(--text);

    font-weight: 500;
    color: var(--text-dark);
    text-decoration: none;
    text-transform: lowercase;

    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.sidebar span {
    font-size: 14px;
    color: #8E8E8E;
.side-menu__suggestion-info a:hover {
    text-decoration: underline;
}
.side-menu__suggestion-info span {
    font-size: 12px;
    font-weight: 400;
    color: var(--text-light);

    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.side-menu__suggestion-button {
    background-color: transparent;
    border: none;
    cursor: pointer;

/* Navbar */
.navbar {
    width: 100%;
    height: 45px;
    position: fixed;
    bottom: 0; right: 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--link);

    flex-shrink: 0;
}

.side-menu__footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.side-menu__footer-links {
    display: flex;
    flex-direction: row;
}
.side-menu__footer-list {
    list-style: none;
}
.side-menu__footer-item {
    display: inline-block;
}
.side-menu__footer-item:not(:last-of-type)::after {
    content: '\00B7';
    margin: 0 0.5px;
}
.side-menu__footer-item,
.side-menu__footer-link,
.side-menu__footer-copyright {
    font-size: 11px;
    font-weight: 400;
    color: var(--text-light);
    text-decoration: none;
}
.side-menu__footer-copyright {
    text-transform: uppercase;
}

    background-color: var(--secondary);
    border-top: 1px solid var(--outline);
/* Profile Button */
.profile-button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
}
.profile-button__border {
    display: none;

.navbar a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    width: 30px;
    height: 30px;
    border: 1px solid var(--text-dark);
    border-radius: 50%;

    text-decoration: none;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
}
.profile-button:focus .profile-button__border {
    display: block;
}
.profile-button__picture {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    overflow: hidden;
    position: relative;
}
.profile-button__picture::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;

    border: 1px solid var(--img-border);
    border-radius: 50%;
}


/* Media Queries */
@media (min-width: 605px) {
    .header .section.left .logo {
@media (max-width: 767px) {
    .header__buttons--desktop {
        display: none;
    }
    .header .section.mid {
        display: flex;
    }
    .header .section.mid .search-bar {
        display: none;
}

@media (min-width: 620px) {
    .content-container {
        padding-top: 30px;
    }

    .page section {
        max-width: 600px;
        padding: 30px 0 0 0;
        margin: 0 auto;
    .content {
        gap: 24px;
    }
    .content .stories {
        border: 1px solid var(--outline);
        border-radius: 3px;

        margin-bottom: 20px;
    .stories {
        border: 1px solid var(--border);
        border-radius: 4px;
    }
    .content .post {
        border: 1px solid var(--outline);
        border-radius: 3px;
    .stories::after {
        content: none;
    }
}

@media (min-width: 768px) {
    .header .container {
        max-width: 600px;
        margin: 0 auto;
    .posts {
        gap: 24px;
    }
}

@media (min-width: 1024px) {
    .header {
        background-color: var(--primary);
    .post:last-child {
        margin-bottom: 24px;
    }
    .header .container {
        max-width: 975px;
    .post {
        border: 1px solid var(--border);
        border-radius: 4px;
    }
    .header .section.left #cam {
        display: none;
    .post__footer {
        padding: 4px 8px 12px;
    }
    .header .section.left .logo {
        display: initial;
        margin-left: 0;
    .post__date-time {
        margin-top: 6px;
    }
    .header .section.mid .logo {
        display: none;
}

@media (min-width: 768px) {
    .header {
        height: 54px;
    }
    .header .section.mid .search-bar {
        display: flex;

    .header__content {
        padding: 0 20px;
    }
    .header .section.right .desktop {

    .header__search {
        display: flex;
    }
    .header .section.right .mobile {

    .header__buttons--mobile {
        display: none;
    }
    .header .section button:not(:first-child) {
        margin-left: 20px;
    }

    .page {
        background-color: var(--secondary);
        margin: 45px 0 0 0;
    }
    .page section {
        max-width: 975px;
        margin: 0 auto;
    .navbar {
        display: none;
    }
    .page .content {
        margin-right: 28px;
}

@media (min-width: 1024px) {
    .header__content {
        margin-right: var(--scrollbar-width); /* Adding margin with scrollbar-width to align the content */
    }
    .page .sidebar {
        display: flex;
        max-width: 295px;

    .main-container {
        background-color: var(--secondary);
    }
    .page .content .post {
        background-color: var(--primary);

    .content {
        margin: unset;
    }

    .navbar {
        display: none;
        background-color: var(--primary);
    .side-menu {
        display: flex;
    }
}

function scrollCheck(){

    let currentPos = window.scrollY;
    const heroSection = document.getElementById('heroSection');
    const heroPos = heroSection.offsetTop;

    const aboutSection = document.getElementById('aboutSection')
    const aboutPos = aboutSection.offsetTop

    const tattooSection = document.getElementById('tattooSection');
    const tattooContainer = document.getElementById('tattooContainer')
    const tattooPos = tattooSection.offsetTop

    const artSection = document.getElementById('artSection')
    const artText = document.getElementById('artText')
    const artParallaxPos = document.getElementById('artParallax').offsetTop;
    const artContainer = document.getElementById('artContainer')
    const artPos = artSection.offsetTop;

    const faqPos = document.getElementById('faq').offsetTop;

    document.body.addEventListener('load', () => {
        currentPos = 0
    })


    //check if current position is less than or equal to position of hero element and set navbar style accordingly.

    if (currentPos < (aboutPos / 1.1)) {
        document.getElementById('homenav').style.opacity = "1"
    } else document.getElementById('homenav').style.opacity = "0.5"

    //check current position and make abouut navlink opaque.

    if (currentPos >= (aboutPos / 1.1) && currentPos < tattooPos) {
        document.getElementById('aboutnav').style.opacity = "1";
    } else if (currentPos > heroPos < aboutPos) {
        document.getElementById('aboutnav').style.opacity = "0.5";
    }

    //Check current position and make tattoo navlink opaque.

    if (currentPos >= (tattooPos / 1.1) && currentPos < artPos) {
        document.getElementById('tattoonav').style.opacity = "1";
    } else if (currentPos > tattooPos < artPos) {
        document.getElementById('tattoonav').style.opacity = "0.5";
    }

    //Check current position and make art navlink opaque.

    if (currentPos >= artPos && currentPos < faqPos) {
        document.getElementById('artnav').style.opacity = "1";
    } else if (currentPos > artPos < faqPos) {
        document.getElementById('artnav').style.opacity = "0.5";
    }

    if (currentPos > (faqPos / 1.1)) {
        document.getElementById('faqnav').style.opacity = "1";
        document.getElementById('artnav').style.opacity = "0.5";
    } else if ( currentPos < (faqPos / 1.1)) {
        document.getElementById('faqnav').style.opacity = "0.5";
    }
    


    //Check current position and fade About text accordingly

    if (currentPos >= (aboutPos / 1.1)) {
        document.getElementById('aboutText').style.opacity = "1"
    } else document.getElementById('aboutText').style.opacity = "0"

    //Check current position and fade tattoo images accordingly

    if (currentPos >= (tattooPos / 1.1)) {
        tattooContainer.style.opacity = "1"
    } else tattooContainer.style.opacity = "0"

    //Check current position and fade art text accordingly

    if (currentPos >= (artPos / 1.1)) {
        artText.style.opacity = "1"
    } else artText.style.opacity = "0"

    //Check current position and fade art images accordingly

    if (currentPos >= (artParallaxPos / 1.1)) {
        artContainer.style.opacity = "1"
    } else artContainer.style.opacity = "0"

}

function navClickHandler() {
    
    const navButton = document.getElementById('navbarbutton');
    const navMenu = document.getElementById('navbar');
    const buttonText = document.getElementById('buttonspan');

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    buttonText.classList.toggle('active')

}



function homeScroll() {
    const heroPos = heroSection.offsetTop;
    window.scrollTo(0, heroPos);
    document.getElementById('navbar').classList.toggle('active');
    document.getElementById('navbarbutton').classList.toggle('active');
    document.getElementById('buttonspan').classList.toggle('active');
}

function aboutScroll() {
    const aboutPos = aboutSection.offsetTop
    window.scrollTo(0, aboutPos)
    document.getElementById('navbar').classList.toggle('active');
    document.getElementById('navbarbutton').classList.toggle('active');
    document.getElementById('buttonspan').classList.toggle('active');
}

function tattooScroll() {
    const tattooPos = tattooSection.offsetTop
    window.scrollTo(0,tattooPos)
    document.getElementById('navbar').classList.toggle('active');
    document.getElementById('navbarbutton').classList.toggle('active');
    document.getElementById('buttonspan').classList.toggle('active');
}

function artScroll() {
    const artSectionPos = document.getElementById('artSection').offsetTop;
    window.scrollTo(0,artSectionPos);
    document.getElementById('navbar').classList.toggle('active');
    document.getElementById('navbarbutton').classList.toggle('active');
    document.getElementById('buttonspan').classList.toggle('active');
}

function faqScroll() {
    const faqPos = document.getElementById('faq').offsetTop;
    window.scrollTo(0,faqPos)
    document.getElementById('navbar').classList.toggle('active');
    document.getElementById('navbarbutton').classList.toggle('active');
    document.getElementById('buttonspan').classList.toggle('active');
}





  



 


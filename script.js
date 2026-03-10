(function(){
    "use strict";
    console.log('reading JS');
    const nav = document.querySelector('nav');    
    const menuIcon = document.querySelector('#menu-icon');
    const desktopMenu = document.querySelector('.desktop-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const resumeLink = document.querySelector('#resume-link');



    function windowSize(){
        

        if (window.innerWidth <800){
            console.log('this is mobile size');

            //when it is mobile --> HIDE some of the nav list items
            // for (let i=0; i<desktop.length; i++){
            //      desktop[i].classList.add('hidden');
            // }
            
            desktopMenu.classList.add('hidden');

            //when it is mobile --> HIDE the resume button
            resumeLink.classList.add('hidden');


            //when it is mobile --> SHOW the menu icon
            menuIcon.classList.replace('hidden', 'show');
        }

        
        else{
            console.log('this is tablet and up size');

            //when it is tablet --> SHOW some of the nav list items
            // for (let i=0; i<desktop.length; i++){
            //      desktop[i].classList.remove('hidden');
            // }

            desktopMenu.classList.remove('hidden');

            //when it is tablet --> SHOW the resume button
            resumeLink.classList.remove('hidden');

            //when it is tablet --> HIDE the menu icon
            menuIcon.classList.replace('show', 'hidden')

            mobileMenu.classList.replace('show', 'hidden');
            nav.classList.replace('opened', 'closed')

        }
    }

    windowSize();

    addEventListener('resize', windowSize);


    function toggleMenu() {
        const menuIconSVG = document.querySelector('#icon-svg');
        const sourceUrl = menuIconSVG.src;


        if (mobileMenu.classList.contains('hidden')) {
            console.log('opened');
            
            mobileMenu.classList.replace('hidden', 'show');

            nav.classList.replace('closed', 'opened');

            
            console.log(sourceUrl); 

            setTimeout(function(){
                mobileMenu.classList.replace('hidden2', 'show2');

                // menuIconSVG.src = 'images/close.svg';
                //had to comment out the icon changing because it doesn't work on other pages. the image url changes depending on the page because of file management/folders. images/close.svg only works for home, for other pages ../ would have to be in front
                //potential solution: create a function that understands which page the user currently is on. create a boolean that changes the url depending on what the current page is. 

            }, 50)

        } else {
            console.log('closed');

            mobileMenu.classList.replace('show2','hidden2');

            // menuIconSVG.src = 'images/menu.svg';

            nav.classList.replace('opened', 'closed')

            setTimeout(function(){
                mobileMenu.classList.replace('show', 'hidden');

                


            }, 50)


        }
      }
  
    menuIcon.addEventListener('click', toggleMenu);



    //CODE FOR VIEW MORE BUTTON
    const viewMore = document.querySelector('#more'); //VIEW MORE BUTTON VARIABLE
    const viewLess = document.querySelector('#less'); //VIEW LESS BUTTON VARIABLE
    const hiddenCard = document.querySelector('#hidden'); //VARIABLE FOR CARDS HIDDEN ON HOME PAGE

    viewMore.addEventListener('click', function(){
        console.log('I want to view more')

        hiddenCard.classList.replace('hidden', 'project-card');

        viewMore.classList.add('hidden');

        viewLess.classList.remove('hidden');

            setTimeout(function(){
                hiddenCard.classList.replace('hidden2', 'show2');
                viewLess.classList.replace('hidden2', 'show2');


            }, 50)
    })

    viewLess.addEventListener('click', function(){
        console.log('I want to view less')

        hiddenCard.classList.replace('show2', 'hidden2');


        viewMore.classList.remove('hidden');

        viewLess.classList.add('hidden');

            setTimeout(function(){
                hiddenCard.classList.replace('project-card', 'hidden');
                viewMore.classList.replace('hidden2', 'show2');

            }, 400)
    })

})();
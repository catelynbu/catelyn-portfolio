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
        if (mobileMenu.classList.contains('hidden')) {
            console.log('opened');
            
            mobileMenu.classList.replace('hidden', 'show');

            nav.classList.replace('closed', 'opened');

            setTimeout(function(){
                mobileMenu.classList.replace('hidden2', 'show2');


            }, 50)

        } else {
            console.log('closed');

            mobileMenu.classList.replace('show2','hidden2');


            nav.classList.replace('opened', 'closed')

            setTimeout(function(){
            mobileMenu.classList.replace('show', 'hidden');

            }, 50)


        }
      }
  
    menuIcon.addEventListener('click', toggleMenu);


})();
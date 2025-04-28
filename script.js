(function(){
    "use strict";
    console.log('reading JS');
    const menu = document.querySelector('#menu');
    const nav = document.querySelector('nav');
    const navMenuLinks = document.querySelector('#menu-links');
    

    function windowSize(){
        const naviLinks = document.querySelector('#nav-mainlinks');
        const CTA = document.querySelector('#contactCTA');
        

        if (window.innerWidth <800){
            console.log('this is mobile size');

            //main navigation links hidden
            naviLinks.style.display = 'none';
            // naviLinks.style.opacity = '0';
            // setTimeout(function(){
            //     naviLinks.style.display = 'none';
            // }, 1000)

            //contact CTA hidden
            CTA.style.display = 'none';
            // CTA.style.opacity = '0';
            // setTimeout(function(){
            //     CTA.style.display = 'none';
            // }, 1000)

            //menu is visible
            menu.style.display = 'block';
            // menu.style.opacity = '1';
            // setTimeout(function(){
            //     menu.style.display = 'block';
            // }, 1000)


            
        }

        
        else{
            console.log('this is tablet and up size');


            //main navigation links visible
            naviLinks.style.display = 'flex';
            // naviLinks.style.opacity = '1';
            // setTimeout(function(){
            //     naviLinks.style.display = 'flex';
            // }, 1000)

            //contact CTA visible
            CTA.style.display = 'block';
            //CTA.style.opacity = '1';
            // setTimeout(function(){
            //     CTA.style.display = 'block';
            // }, 1000)

            //menu is hidden
            //menu.style.opacity = '0';
            menu.style.display = 'none';
            // const menuLinks = document.querySelectorAll('.navMenuP');
            // for (let i=0; i<menuLinks.length; i++){
            //     menuLinks.style.display='none';
            // }
            // setTimeout(function(){
            //     menu.style.display = 'none';
            //     // const menuLinks = document.querySelectorAll('.navMenuP');
            //     // for (let i=0; i<menuLinks.length; i++){
            //     //     menuLinks.style.display='none';
            //     // }
            // }, 1000)


            // naviLinks.style.display = 'flex';
            // menu.style.display = 'none';
            // CTA.style.display = 'block';
            // menu.style.opacity = '0';

            document.querySelector('#nav-container').style.position = 'sticky';
            nav.style.height = 'auto';
            navMenuLinks.style.display = 'none';
            nav.style.borderRadius = '1000px';
        }
    }

    windowSize();

    addEventListener('resize', windowSize);



    function toggleMenu() {
        if (navMenuLinks.style.display === 'none') {
            navMenuLinks.style.display = 'flex';
            setTimeout(function(){
                navMenuLinks.style.opacity = '1';
                navMenuLinks.style.transition = 'opacity 0.5s';

            }, 100)

            
            
            nav.style.borderRadius = '20px';
            nav.style.height = '200px';
        } else {
            navMenuLinks.style.display = 'none';
            navMenuLinks.style.opacity = '0';
            nav.style.borderRadius = '1000px';
            nav.style.height = '30px';
        }
      }
  
    document.querySelector('#menu').addEventListener('click', toggleMenu);




    // const homeImgs = document.querySelectorAll('.homeImg');
    const homeCards = document.querySelectorAll('.card');

      for(let i=0; i<homeCards.length; i++){
        homeCards[i].addEventListener('mouseover', function(){
            console.log('touching the card!');
            homeCards[i].style.transform = 'scale(1.05)';
            homeCards[i].style.boxShadow = '0px 0px 9px 5px rgba(0,0,0,0.10)';
        })

        homeCards[i].addEventListener('mouseout', function(){
            console.log('not touching the card!');

            homeCards[i].style.transform = 'scale(1)';
            homeCards[i].style.boxShadow = '0px 0px 9px 5px rgba(0, 0, 0, 0.03)';
        })
      }
    
})();
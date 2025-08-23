(function(){
    "use strict";
    console.log('this is goodnotes script');

    const canvasBtn = document.querySelector('#canvas');
    const promptBtn = document.querySelector('#prompt');
    const acceptBtn = document.querySelector('#accept');
    const quickBtn = document.querySelector('#quick');
    const suggestionsBtn = document.querySelector('#suggestions');

    const canvasContent = document.querySelector('#canvas-content');
    const promptContent = document.querySelector('#prompt-content');
    const acceptContent = document.querySelector('#accept-content');
    const quickContent = document.querySelector('#quick-content');
    const suggestionsContent = document.querySelector('#suggestions-content');

    canvasBtn.addEventListener('click', function(){
        console.log('i wanna see canvas stuff')

        //button interactions
        canvasBtn.classList.add('selected-button');

        promptBtn.classList.remove('selected-button');
        acceptBtn.classList.remove('selected-button');
        quickBtn.classList.remove('selected-button');
        suggestionsBtn.classList.remove('selected-button');

        
        //content displayment
        canvasContent.style.display = 'block';

        promptContent.style.display = 'none';
        acceptContent.style.display = 'none';
        quickContent.style.display = 'none';
        suggestionsContent.style.display = 'none';
    })



    promptBtn.addEventListener('click', function(){
        console.log('i wanna see prompt stuff')

        //button interactions
        promptBtn.classList.add('selected-button');

        canvasBtn.classList.remove('selected-button');
        acceptBtn.classList.remove('selected-button');
        quickBtn.classList.remove('selected-button');
        suggestionsBtn.classList.remove('selected-button');


        //content displayment
        promptContent.style.display = 'block';

        canvasContent.style.display = 'none';
        acceptContent.style.display = 'none';
        quickContent.style.display = 'none';
        suggestionsContent.style.display = 'none';
        
    })



    acceptBtn.addEventListener('click', function(){
        console.log('i wanna see accept stuff')

        //button interactions
        acceptBtn.classList.add('selected-button');

        canvasBtn.classList.remove('selected-button');
        promptBtn.classList.remove('selected-button');
        quickBtn.classList.remove('selected-button');
        suggestionsBtn.classList.remove('selected-button');


        //content displayment
        acceptContent.style.display = 'block';

        canvasContent.style.display = 'none';
        promptContent.style.display = 'none';
        quickContent.style.display = 'none';
        suggestionsContent.style.display = 'none';
    })



    quickBtn.addEventListener('click', function(){
        console.log('i wanna see quick stuff')
        
        //button interactions
        quickBtn.classList.add('selected-button');

        canvasBtn.classList.remove('selected-button');
        promptBtn.classList.remove('selected-button');
        acceptBtn.classList.remove('selected-button');
        suggestionsBtn.classList.remove('selected-button');


        //content displayment
        quickContent.style.display = 'block';

        canvasContent.style.display = 'none';
        promptContent.style.display = 'none';
        acceptContent.style.display = 'none';
        suggestionsContent.style.display = 'none';
    })



    suggestionsBtn.addEventListener('click', function(){
        console.log('i wanna see suggestions stuff')
        
        //button interactions
        suggestionsBtn.classList.add('selected-button');

        canvasBtn.classList.remove('selected-button');
        promptBtn.classList.remove('selected-button');
        acceptBtn.classList.remove('selected-button');
        quickBtn.classList.remove('selected-button');


        //content displayment
        suggestionsContent.style.display = 'block';

        canvasContent.style.display = 'none';
        promptContent.style.display = 'none';
        acceptContent.style.display = 'none';
        quickContent.style.display = 'none';
    })




})();
(function(){
    "use strict";
    console.log('this is chevron script');


    const lowfiBtn = document.querySelector('#lowfi');
    const midfiBtn = document.querySelector('#midfi');

    const lowfiContent = document.querySelector('#lowfi-content');
    const midfiContent = document.querySelector('#midfi-content');

    lowfiBtn.addEventListener('click', function(){
        //button interactions
        lowfiBtn.classList.add('selected-button');
        midfiBtn.classList.remove('selected-button');

        
        //content displayment
        lowfiContent.style.display = 'block';
        midfiContent.style.display = 'none';
    })

    midfiBtn.addEventListener('click', function(){
        //button interactions
        midfiBtn.classList.add('selected-button');
        lowfiBtn.classList.remove('selected-button');

        
        //content displayment
        midfiContent.style.display = 'block';
        lowfiContent.style.display = 'none';
    })






    const goalBtn = document.querySelector('#goal');
    const surveyBtn = document.querySelector('#survey');
    const competitiveBtn = document.querySelector('#competitive');


    const goalContent = document.querySelector('#goal-content');
    const surveyContent = document.querySelector('#survey-content');
    const competitiveContent = document.querySelector('#competitive-content');


    goalBtn.addEventListener('click', function(){
        console.log('i wanna see goal stuff')

        //button interactions
        goalBtn.classList.add('selected-button');

        competitiveBtn.classList.remove('selected-button');
        surveyBtn.classList.remove('selected-button');


        
        //content displayment
        goalContent.style.display = 'block';

        competitiveContent.style.display = 'none';
        surveyContent.style.display = 'none';

    })

    surveyBtn.addEventListener('click', function(){
        console.log('i wanna see goal stuff')

        //button interactions
        surveyBtn.classList.add('selected-button');

        goalBtn.classList.remove('selected-button');
        competitiveBtn.classList.remove('selected-button');

        
        //content displayment
        surveyContent.style.display = 'block';

        goalContent.style.display = 'none';
        competitiveContent.style.display = 'none';
    })


    competitiveBtn.addEventListener('click', function(){
        console.log('i wanna see goal stuff')

        //button interactions
        competitiveBtn.classList.add('selected-button');

        goalBtn.classList.remove('selected-button');
        surveyBtn.classList.remove('selected-button');

        
        //content displayment
        competitiveContent.style.display = 'block';

        goalContent.style.display = 'none';
        surveyContent.style.display = 'none';
    })








    const systemBtn = document.querySelector('#system');
    const hifiBtn = document.querySelector('#hifi');
    const testBtn = document.querySelector('#test');


    const systemContent = document.querySelector('#system-content');
    const hifiContent = document.querySelector('#hifi-content');
    const testContent = document.querySelector('#test-content');


    systemBtn.addEventListener('click', function(){
        console.log('i wanna see dashboard stuff')

        //button interactions
        systemBtn.classList.add('selected-button');

        hifiBtn.classList.remove('selected-button');
        testBtn.classList.remove('selected-button');

        
        //content displayment
        systemContent.style.display = 'block';

        hifiContent.style.display = 'none';
        testContent.style.display = 'none';

    })



    hifiBtn.addEventListener('click', function(){
        console.log('i wanna see search stuff')

        //button interactions
        hifiBtn.classList.add('selected-button');

        systemBtn.classList.remove('selected-button');
        testBtn.classList.remove('selected-button');



        //content displayment
        hifiContent.style.display = 'block';

        systemContent.style.display = 'none';
        testContent.style.display = 'none';

        
    })



    testBtn.addEventListener('click', function(){
        console.log('i wanna see run stuff')

        //button interactions
        testBtn.classList.add('selected-button');

        systemBtn.classList.remove('selected-button');
        hifiBtn.classList.remove('selected-button');



        //content displayment
        testContent.style.display = 'block';

        systemContent.style.display = 'none';
        hifiContent.style.display = 'none';

    })







})();
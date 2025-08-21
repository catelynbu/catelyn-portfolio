// (function(){
//     "use strict";
//     console.log('this is chevron script');


//     const lowfiBtn = document.querySelector('#lowfi');
//     const midfiBtn = document.querySelector('#midfi');

//     const lowfiContent = document.querySelector('#lowfi-content');
//     const midfiContent = document.querySelector('#midfi-content');

//     lowfiBtn.addEventListener('click', function(){
//         //button interactions
//         lowfiBtn.classList.add('selected-button');
//         midfiBtn.classList.remove('selected-button');

        
//         //content displayment
//         lowfiContent.style.display = 'block';
//         midfiContent.style.display = 'none';
//     })

//     midfiBtn.addEventListener('click', function(){
//         //button interactions
//         midfiBtn.classList.add('selected-button');
//         lowfiBtn.classList.remove('selected-button');

        
//         //content displayment
//         midfiContent.style.display = 'block';
//         lowfiContent.style.display = 'none';
//     })






//     const goalBtn = document.querySelector('#goal');
//     const competitiveBtn = document.querySelector('#competitive');
//     const interviewBtn = document.querySelector('#interview');
//     const affinityBtn = document.querySelector('#affinity');

//     const goalContent = document.querySelector('#goal-content');
//     const competitiveContent = document.querySelector('#competitive-content');
//     const interviewContent = document.querySelector('#interview-content');
//     const affinityContent = document.querySelector('#affinity-content');

//     goalBtn.addEventListener('click', function(){
//         console.log('i wanna see goal stuff')

//         //button interactions
//         goalBtn.classList.add('selected-button');

//         competitiveBtn.classList.remove('selected-button');
//         interviewBtn.classList.remove('selected-button');
//         affinityBtn.classList.remove('selected-button');

        
//         //content displayment
//         goalContent.style.display = 'block';

//         competitiveContent.style.display = 'none';
//         interviewContent.style.display = 'none';
//         affinityContent.style.display = 'none';
//     })

//     competitiveBtn.addEventListener('click', function(){
//         console.log('i wanna see goal stuff')

//         //button interactions
//         competitiveBtn.classList.add('selected-button');

//         goalBtn.classList.remove('selected-button');
//         interviewBtn.classList.remove('selected-button');
//         affinityBtn.classList.remove('selected-button');

        
//         //content displayment
//         competitiveContent.style.display = 'block';

//         goalContent.style.display = 'none';
//         interviewContent.style.display = 'none';
//         affinityContent.style.display = 'none';
//     })

//     interviewBtn.addEventListener('click', function(){
//         console.log('i wanna see goal stuff')

//         //button interactions
//         interviewBtn.classList.add('selected-button');

//         goalBtn.classList.remove('selected-button');
//         competitiveBtn.classList.remove('selected-button');
//         affinityBtn.classList.remove('selected-button');

        
//         //content displayment
//         interviewContent.style.display = 'block';

//         goalContent.style.display = 'none';
//         competitiveContent.style.display = 'none';
//         affinityContent.style.display = 'none';
//     })

//     affinityBtn.addEventListener('click', function(){
//         console.log('i wanna see goal stuff')

//         //button interactions
//         affinityBtn.classList.add('selected-button');

//         goalBtn.classList.remove('selected-button');
//         competitiveBtn.classList.remove('selected-button');
//         interviewBtn.classList.remove('selected-button');

        
//         //content displayment
//         affinityContent.style.display = 'block';

//         goalContent.style.display = 'none';
//         competitiveContent.style.display = 'none';
//         interviewContent.style.display = 'none';
//     })






//     const dashboardBtn = document.querySelector('#dashboard');
//     const searchBtn = document.querySelector('#search');
//     const runBtn = document.querySelector('#run');
//     const previewBtn = document.querySelector('#preview');
//     const historyBtn = document.querySelector('#history');

//     const dashboardContent = document.querySelector('#dashboard-content');
//     const searchContent = document.querySelector('#search-content');
//     const runContent = document.querySelector('#run-content');
//     const previewContent = document.querySelector('#preview-content');
//     const historyContent = document.querySelector('#history-content');

//     dashboardBtn.addEventListener('click', function(){
//         console.log('i wanna see dashboard stuff')

//         //button interactions
//         dashboardBtn.classList.add('selected-button');

//         searchBtn.classList.remove('selected-button');
//         runBtn.classList.remove('selected-button');
//         previewBtn.classList.remove('selected-button');
//         historyBtn.classList.remove('selected-button');

        
//         //content displayment
//         dashboardContent.style.display = 'block';

//         searchContent.style.display = 'none';
//         runContent.style.display = 'none';
//         previewContent.style.display = 'none';
//         historyContent.style.display = 'none';
//     })



//     searchBtn.addEventListener('click', function(){
//         console.log('i wanna see search stuff')

//         //button interactions
//         searchBtn.classList.add('selected-button');

//         dashboardBtn.classList.remove('selected-button');
//         runBtn.classList.remove('selected-button');
//         previewBtn.classList.remove('selected-button');
//         historyBtn.classList.remove('selected-button');


//         //content displayment
//         searchContent.style.display = 'block';

//         dashboardContent.style.display = 'none';
//         runContent.style.display = 'none';
//         previewContent.style.display = 'none';
//         historyContent.style.display = 'none';
        
//     })



//     runBtn.addEventListener('click', function(){
//         console.log('i wanna see run stuff')

//         //button interactions
//         runBtn.classList.add('selected-button');

//         dashboardBtn.classList.remove('selected-button');
//         searchBtn.classList.remove('selected-button');
//         previewBtn.classList.remove('selected-button');
//         historyBtn.classList.remove('selected-button');


//         //content displayment
//         runContent.style.display = 'block';

//         dashboardContent.style.display = 'none';
//         searchContent.style.display = 'none';
//         previewContent.style.display = 'none';
//         historyContent.style.display = 'none';
//     })



//     previewBtn.addEventListener('click', function(){
//         console.log('i wanna see preview stuff')
        
//         //button interactions
//         previewBtn.classList.add('selected-button');

//         dashboardBtn.classList.remove('selected-button');
//         searchBtn.classList.remove('selected-button');
//         runBtn.classList.remove('selected-button');
//         historyBtn.classList.remove('selected-button');


//         //content displayment
//         previewContent.style.display = 'block';

//         dashboardContent.style.display = 'none';
//         searchContent.style.display = 'none';
//         runContent.style.display = 'none';
//         historyContent.style.display = 'none';
//     })



//     historyBtn.addEventListener('click', function(){
//         console.log('i wanna see history stuff')
        
//         //button interactions
//         historyBtn.classList.add('selected-button');

//         dashboardBtn.classList.remove('selected-button');
//         searchBtn.classList.remove('selected-button');
//         runBtn.classList.remove('selected-button');
//         previewBtn.classList.remove('selected-button');


//         //content displayment
//         historyContent.style.display = 'block';

//         dashboardContent.style.display = 'none';
//         searchContent.style.display = 'none';
//         runContent.style.display = 'none';
//         previewContent.style.display = 'none';
//     })




// })();
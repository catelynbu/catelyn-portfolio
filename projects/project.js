(function () {
    "use strict";
    console.log("reading JS");

    const sections = document.querySelectorAll('#casestudy-container > section');
    const sectionButtons = document.querySelectorAll('.section-button');

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if (entry.isIntersecting) {

                console.log(entry.target.id);

                sectionButtons.forEach(function(button){
                    button.classList.remove('selected-button');
                });

                const activeButton = document.querySelector(
                    `.section-button[href="#${entry.target.id}"]`
                );

                console.log(activeButton);

                if(activeButton){
                    activeButton.classList.add('selected-button');
                }

            }

        });

    }, {
        threshold: 0,
        rootMargin: "-20% 0px -70% 0px"
    });

    sections.forEach(function(section){
        observer.observe(section);
    });

})();
(function () {
    'use strict';

    console.log('Studio filter loaded');

    const filters = document.querySelectorAll('.filter');
    const projects = Array.from(document.querySelectorAll('.project'));
    const container = document.querySelector('.container');

    let selectedFilters = new Set();
    let isFiltering = false;

    function wait(duration) {
        return new Promise(resolve => {
            setTimeout(resolve, duration);
        });
    }

    function matchesFilter(project) {
        // No filters selected = show everything
        if (selectedFilters.size === 0) {
            return true;
        }

        const categories = project.dataset.category.split(' ');

        // Show project if it belongs to ANY selected category
        return [...selectedFilters].some(filter => {
            return categories.includes(filter);
        });
    }

    async function filterProjects() {
        if (isFiltering) {
            return;
        }

        isFiltering = true;

        const currentlyVisible = projects.filter(project => {
            return !project.classList.contains('is-hidden');
        });

        const projectsToHide = currentlyVisible.filter(project => {
            return !matchesFilter(project);
        });

        const projectsToShow = projects.filter(project => {
            return matchesFilter(project);
        });

        // Remember the current positions of visible projects
        const firstPositions = new Map();

        currentlyVisible.forEach(project => {
            firstPositions.set(
                project,
                project.getBoundingClientRect()
            );
        });

        // Fade out projects that should disappear
        projectsToHide.forEach(project => {
            project.classList.add('is-hiding');
        });

        await wait(250);

        // Remove hidden projects from the grid
        projectsToHide.forEach(project => {
            project.classList.remove('is-hiding');
            project.classList.add('is-hidden');
        });

        // Add projects that should appear
        const enteringProjects = [];

        projectsToShow.forEach(project => {
            if (project.classList.contains('is-hidden')) {
                project.classList.remove('is-hidden');
                project.classList.add('is-entering');
                enteringProjects.push(project);
            }
        });

        // Force browser to calculate the new grid layout
        container.offsetHeight;

        // Animate projects into their new positions
        projectsToShow.forEach(project => {
            const firstPosition = firstPositions.get(project);

            if (!firstPosition) {
                return;
            }

            const lastPosition = project.getBoundingClientRect();

            const deltaX =
                firstPosition.left - lastPosition.left;

            const deltaY =
                firstPosition.top - lastPosition.top;

            project.style.translate =
                `${deltaX}px ${deltaY}px`;

            requestAnimationFrame(() => {
                project.style.translate = '0 0';
            });
        });

        // Fade in newly displayed projects
        requestAnimationFrame(() => {
            enteringProjects.forEach(project => {
                project.classList.remove('is-entering');
                project.classList.add('is-visible');
            });
        });

        // Wait for animation to finish
        await wait(450);

        // Clean up
        projects.forEach(project => {
            project.classList.remove('is-visible');
            project.style.translate = '';
        });

        isFiltering = false;

        // Refresh AOS after the grid changes
        if (typeof AOS !== 'undefined') {
            AOS.refreshHard();
        }
    }

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const selectedFilter = filter.dataset.filter;

            // "All" clears every selected category
            if (selectedFilter === 'all') {
                selectedFilters.clear();

                filters.forEach(button => {
                    button.classList.remove('active');
                });

                filter.classList.add('active');
            } else {
                // Toggle the selected category
                if (selectedFilters.has(selectedFilter)) {
                    selectedFilters.delete(selectedFilter);
                    filter.classList.remove('active');
                } else {
                    selectedFilters.add(selectedFilter);
                    filter.classList.add('active');
                }

                // "All" is no longer active when a category is selected
                const allFilter = document.querySelector(
                    '.filter[data-filter="all"]'
                );

                if (allFilter) {
                    allFilter.classList.remove('active');
                }

                // If the user deselects the last category,
                // automatically return to "All"
                if (selectedFilters.size === 0 && allFilter) {
                    allFilter.classList.add('active');
                }
            }

            filterProjects();
        });
    });
})();
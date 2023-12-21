const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Every element in the array is accessed as "entry" //
        if (entry.isIntersecting) { 
            // if is intersecting, add class "show" //
            entry.target.classList.add('show');
        } else {
            // to do this multiple times, remove the class when not intersecting //
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
// observe and loop over hidden elements //
hiddenElements.forEach((el) => observer.observe(el));
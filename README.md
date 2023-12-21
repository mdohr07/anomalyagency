# Anomaly Agency

👽 Welcome to the Anomaly Agency! 👽

![Preview of Anomaly Agency](https://mdohr.space/img/anomalyagency.png)

Scully and Mulder have left the FBI to open their own agency dedicated to investigating the unexplained. This project is a concept website created for practice and fun, written in HTML, CSS, and a touch of JavaScript.

## 🚀 Quick Start

1. **Fork the Repository:**
   - Simply fork this repository to get started with your own Anomaly Agency website.

2. **Open index.html:**
   - Open the `index.html` file in your browser.

## 👾 Example Code

```html
<div class="entry hidden">
    <section class="entry-img">
        <img src="./img/blog/pexels-derpy-cg-7462340.jpg" alt="">
    </section>
    <h5>UFOs Sweep Skies, U.S. Government's Chilling Silence</h5>
    <p>Across the European skies, unprecedented UFO sightings baffle experts...</p>
    <button>Read more...</button>
</div>
```

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
```

## 🛸 Contact Information

For inquiries, see contact information in my profile :-)

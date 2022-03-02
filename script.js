const about =document.getElementById('about');
const cards =document.getElementsByClassName('gallery-card');
const gallery =document.getElementById('gallery')
const served =document.getElementById('served')

//counters

const counters = document.querySelectorAll('.counter');
const speed = 500; // The lower the slower
const options2 = {
  rootMargin: '-25%'
};

const observer3 = new IntersectionObserver(function(entries3,observer3) {
  entries3.forEach(entry3 => {
    if (entry3.isIntersecting) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
      
          // Lower inc to slow and higher to slow
          const inc = target / speed;
      
          // console.log(inc);
           console.log(count);
      
          // Check if target is reached
          if (count < target) {
            // Add inc to count and output in counter
            counter.innerText =Math.ceil( count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };
      
        updateCount();
      });
      
      observer3.unobserve(entry3.target);
     
      
    }
  });
}, options2);
observer3.observe(served);
//Intersection Observer API for animations
const options = {
    rootMargin: '-15%'
};
const observer = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in-left');
        observer.unobserve(entry.target);
        
      }
    });
  }, options);
  observer.observe(about);



 
const observer2 = new IntersectionObserver(function(entries2,observer2) {
    entries2.forEach(entry2 => {
      if (entry2.isIntersecting) {
        entry2.target.classList.add('fade-in');
        observer2.unobserve(entry2.target);
       
        
      }
    });
  }, options2);
  Array.prototype.forEach.call(cards, card => {
    observer2.observe(card)
  });
  observer2.observe(gallery)


  

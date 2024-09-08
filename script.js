window.addEventListener('scroll', function() {
   const navbar = document.querySelector('.navbar');
   if (window.scrollY > 50) { 
      navbar.style.backgroundColor = 'rgba(85, 0, 255, 0.712)';
   } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.145)';
   }
});

/*============== preloader ==============*/
window.addEventListener('load', function() {
   const preloader = document.getElementById('preloader');
   const mainContent = document.getElementById('main-content');

   const minimumLoadingTime = 2000;

   const startTime = Date.now();

   function showContent() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < minimumLoadingTime) {
         setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
         }, minimumLoadingTime - elapsedTime);
      } else {
         preloader.style.display = 'none';
         mainContent.style.display = 'block';
      }
   }

   showContent();
});


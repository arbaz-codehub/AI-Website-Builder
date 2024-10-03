// Dark Theme / Light Theme Toggle
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('l-moon');
    if(this.classList.toggle('moon')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = '#17171A';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

function redirectToSelectedPage() {
  var selectedPage = document.getElementById("website-type").value;
  if (selectedPage == "portfolio") {
      // Add fade-out effect to the body
      document.body.style.transition = "opacity 0.5s";
      document.body.style.opacity = 0;
      
      // Redirect to the selected page after the fade-out effect
      setTimeout(function() {
          window.location.href = "./pages/portfolio.html";
      }, 500); // Adjust the duration (in milliseconds) as needed
  } else {
      alert("Please select a page.");
  }
}
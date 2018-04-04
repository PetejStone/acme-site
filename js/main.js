const main = document.getElementsByTagName('main')[0];
const image =  document.getElementsByTagName("img");
const body = document.getElementsByTagName('body')[0];
const aside = document.getElementsByTagName('aside')[0].children;
const html = document.getElementsByTagName('html')[0];
const callAction = document.getElementsByClassName('call-action');

$(window).on('load',function(){
   $('.loader').fadeOut();
});





//sticky nav
window.onscroll = function() {myFunction();};

let sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    nav.style.maxWidth = "1200px";
    nav.style.marginTop = 0;
    main.style.marginTop = "9em";



  } else {
    nav.classList.remove("sticky");
    nav.style.marginTop = "0em";
    main.style.marginTop = "5em";

  }
}
//end of sticky nav


for (let i=0; i<image.length; i++) {
  let productName = image[i].nextElementSibling.textContent;
  let productDescription = image[i].nextElementSibling.nextElementSibling.textContent;

  image[i].insertAdjacentHTML('afterend', "<div class='overlay'><h3>"+productName+"</h3><p>"+productDescription+"</p></div>");
  const overlay = document.getElementsByClassName('overlay');

  overlay[i].style.width = image[i].width.toString()+"px";
  overlay[i].style.height = image[i].height.toString()+"px";
  overlay[i].style.marginBottom = -image[i].height.toString()+"px";
  callAction[i].style.width = image[i].width.toString()+"px";
  window.addEventListener("resize",()=> {
    overlay[i].style.width = image[i].width.toString()+"px";
    overlay[i].style.height = image[i].height.toString()+"px";
    overlay[i].style.marginBottom = -image[i].height.toString()+"px";
    callAction[i].style.width = image[i].width.toString()+"px";
  });


  window.addEventListener('scroll', ()=> {
    let scrollPosition = 100;
    for (let i=0; i< image.length; i++) {
      let boundingImage = image[i].getBoundingClientRect();
      let boundingText = callAction[i].getBoundingClientRect();
      if ( boundingImage.top >= -image[i].height &&
           boundingImage.left >= 0 &&
           boundingImage.bottom <= (window.innerHeight + image[i].height   || document.documentElement.clientHeight)) {
             image[i].style.transform = 'translateX(0%)';
             overlay[i].style.transform = 'translate(0%, -100%)';


           } else {
             image[i].style.transform = 'translateX(1000%)';
             overlay[i].style.transform = 'translate(1000%, -100%)';

           }
          }

          if (window.innerWidth <= 500) {
            image[i].addEventListener('touchstart', ()=> {
              callAction[i].style.display = 'none';
              overlay.style.opacity = 1;


            });
          }

        }); //end of loop

} // end of event listener

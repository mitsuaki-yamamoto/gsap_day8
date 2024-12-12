
document.addEventListener("DOMContentLoaded", function(){

  const target = document.querySelector(".l-section__block");
  const app = document.getElementById("app")

    gsap.to( target , 
      {
        // scaleX: 1,
        // duration: 2,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        scrollTrigger:{
          trigger: app,
          start: "center center",
          scrub: 1,
          pin: true,
          markers: true,
        },
      }
    )


})
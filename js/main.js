$(document).ready(function(){
  let owl = $(".owl-carousel"),
      url = null,
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
    center: true,
    loop: true,
    items: 1,
    stagePadding: 20,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
        margin: 10
      },
      640: {
        margin: 0,
        items: 1.4
      },
      1024: {
        margin: 0,
        items: 1.8
      },
    }
  });
 
  next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })
})
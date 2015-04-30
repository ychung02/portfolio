$(function() {

   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

});

$('#my_elem').mousewheel(function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
});
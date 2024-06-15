$(document).ready(function(){
  $("#registerButton").click(function(){
  $("#div1").toggle();

   });
   });
  
   $(document).ready(function(){
    $("#div2").slideDown("slow");
});
$(document).ready(function(){
          $("#im1").animate({
            left: '50px',
            height: '+=50px',
            width: '+=50px'
      });
    });
  

function calculateAge() {
  
  let dateInput = document.getElementById('y').value;

 
  if (dateInput) {
      
      let birthDate = new Date(dateInput);

     
      let today = new Date();

      
      let age = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }

      
      document.getElementById('demo').innerHTML = "Age: " + age;
  } else {
      document.getElementById('demo').innerHTML = "Please select a date.";
  }
}


document.getElementById('y').addEventListener('change', calculateAge);



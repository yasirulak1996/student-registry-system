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
  

    
    document.getElementById("myJoin").onclick = function() {
        let dateInput = document.getElementById("myId").value;
        let age, month, day;
        
        if (dateInput) {
            let birthDate = new Date(dateInput);
            let today = new Date();
            
            // Calculate age
            age = today.getFullYear() - birthDate.getFullYear();
            month = today.getMonth() - birthDate.getMonth();
            day = today.getDate() - birthDate.getDate();
            
            // Adjust for negative month/day values
            if (month < 0 || (month === 0 && day < 0)) {
                age--;
                month += 12;
            }
            if (day < 0) {
                let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
                day += lastMonth.getDate();
            }
        } else {
            age = month = day = 'N/A'; // Default values if no date is provided
        }

        document.getElementById('demo').textContent = `Year: ${age}, Month: ${month}, Day: ${day}`;
    }





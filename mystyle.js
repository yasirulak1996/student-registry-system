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
  
    const myjoin = document.getElementById("myjoin");
    
    
   
    myjoin.onclick = function() {
        let dateInput = document.getElementById("my id").value;
        let age, month, day;
        let studentname = document.getElementById("name of the student").value;
        let sex = document.getElementById("sex").value;
        let adress = document.getElementById("adress").value;
        let phonenumber = document.getElementById("phone number").value;
       
        
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
            age = month = day = 'N/A'; 
        }

        document.getElementById('demo').textContent = `Year: ${age}, Month: ${month}, Day: ${day}`;


        if (studentname) {
           
            document.getElementById('demo1').textContent = ""; 
        }else{
    
        
        document.getElementById('demo1').textContent = "Please enter your name.";
       
     }
        if (sex) {
           
        document.getElementById('demo2').textContent = ""; 
       }else{

    
        document.getElementById('demo2').textContent = "Please enter your data.";
   
       }
    
       if (adress) {
           
        document.getElementById('demo3').textContent = ""; 
       }else{

    
        document.getElementById('demo3').textContent = "Please enter your adress.";
   
       }
       if (phonenumber) {
           
        document.getElementById('demo4').textContent = ""; 
       }else{

    
        document.getElementById('demo4').textContent = "Please enter your phone number.";
       }







    }

   


    





    
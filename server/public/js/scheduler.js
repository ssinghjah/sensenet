
      function handleScheduleClick(event){
	   event.preventDefault();
	 $("#reservationDetails").hide();
          var emailId = $("#emailId").text();
          var bbbId = $("#bbbId").val();
	  var end = $('#endDateTime').data("DateTimePicker").date().utc().format();
	  var start = $('#startDateTime').data("DateTimePicker").date().utc().format();
          $.post('/schedule', { emailId: emailId, bbbId: bbbId, startDateTime: start, endDateTime: end}).done(           
                          function(response) 
                          {
                            var response = JSON.parse(response);
			    console.log(response);
			    $("#reservationLogin").html(response.login);
			    $("#reservationPassword").html(response.password);
			    $("#reservationDetails").show();
                          }
                    );
	return false;
      }

      function validateEmailId(email){

      }

      function refreshCalendars(){
            var bbb1Cal = document.getElementById('BBB1Calendar');
            if(bbb1Cal)
              bbb1Cal.src = bbb1Cal.src;

            var bbb2Cal = document.getElementById('BBB2Calendar');
            if(bbb2Cal)
              bbb2Cal.src = bbb2Cal.src

      }

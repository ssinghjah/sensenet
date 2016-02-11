
      function handleScheduleClick(event){
      	  var emailIds = $("#emailIds").val();
      	  var groupId = $("#groupId").val();

          $.post('/schedule', { emailIds: emailIds, groupId : groupId}).done(           
                          function(data) 
                          {
                            console.log('success');
                            console.log(data);
                            
                            var bbb1Cal = document.getElementById('BBB1Calendar');
                            if(bbb1Cal)
                            	bbb1Cal.src = bbb1Cal.src;

                            var bbb2Cal = document.getElementById('BBB1Calendar');
                            if(bbb2Cal)
                            	bbb2Cal.src = bbb2Cal.src
                        }
                    );
      }
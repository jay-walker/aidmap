var myform = $("form#addPlaceForm");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  var service_id = "aidmap_gmail";
  var template_id = "aidmap_gmail1";

  $("#sendEmail").text("Sending...");

  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       $("#sendEmail").text("Send");
       $("#emailStatus").text("Thank you that you care. We'll come in contact with you soon.");
       $("#addPlaceForm")[0].reset();
     }, function(err) {
       $("#emailStatus").text("Sending failed\r\n Response:\n " + JSON.stringify(err))
       emailStatus.style.color = "red";
        
       $("#sendEmail").text("Send");
    });
  return false;
});
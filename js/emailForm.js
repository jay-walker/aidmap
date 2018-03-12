var myform = $("form#addPlaceForm");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  var service_id = "aidmap_gmail";
  var template_id = "aidmap_gmail1";
  myform.find("button").text("Sending...");
  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});
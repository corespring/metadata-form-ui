$(document).ready(function(){

  com.corespring.metadataBridge.requestMetadata(function (metadata) {

     if(!metadata){
      return;
     }

     $("#skillNumber").attr('value', metadata["skillNumber"]);
     $("#family").attr('value', metadata["family"]);
     $("#masterQuestion").attr('value', metadata["masterQuestion"]);
  });


  $("#saveButton").click(function(){
      var data = {
        "skillNumber" : $("#skillNumber").val(),
        "family" : $("#family").val(),
        "masterQuestion" : $("#masterQuestion").val()
      }
      com.corespring.metadataBridge.updateMetadata(data);
  });
});
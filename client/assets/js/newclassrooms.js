$(document).ready(function(){

  com.corespring.metadataBridge.requestMetadata(function (metadata) {

     if(!metadata){
      return;
     }

     $("#skillNumber").attr('value', metadata["skillNumber"]);
     $("#family").attr('value', metadata["family"]);
     $("#masterQuestion").attr('value', metadata["masterQuestion"]);
     $("#credits").attr('value',metadata["credtits"])
  });


  $("#saveButton").click(function(){
      var data = {
        "skillNumber" : $("#skillNumber").val(),
        "family" : $("#family").val(),
        "masterQuestion" : $("#masterQuestion").val(),
        "credits" : $("#credits").val()
      }
      com.corespring.metadataBridge.updateMetadata(data);
  });
});
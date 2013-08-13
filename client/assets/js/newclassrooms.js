$(document).ready(function(){

  com.corespring.metadataBridge.requestMetadata(function (metadata) {
     $("#skillNumber").attr('value', metadata.data["Skill Number"]);
     $("#family").attr('value', metadata.data["Family"]);
     $("#masterQuestion").attr('value', metadata.data["Master Question"]);
  });

  $("#saveButton").click(function(){
      var data = {
        "Skill Number" : $("#skillNumber").val(),
        "Family" : $("#family").val(),
        "Master Question" : $("#masterQuestion").val()
      }
      console.log(data);
      com.corespring.metadataBridge.updateMetadata(data);
  });
});
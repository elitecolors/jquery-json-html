<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/minty/bootstrap.min.css">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="js/convert.js"></script>
    <script src="js/edit.js"></script>
    <script  src="files/languages.js"></script> 

<script src="js/SimpleTableCellEditor.js"></script>   
</head>
<body>
<div class="hide alert alert-success" id="success-alert" style="display:none">
    <button type="button" class="close" data-dismiss="alert">x</button>
    <strong>Success! </strong>
    File updated successfully !
</div>
<div class="container">
    <h1>File table</h1> 
     <button type="button" class="save_file btn btn-labeled btn-success float-right" style="position: fixed;
    right: 95px;">
      <span class="btn-label"><i class="glyphicon glyphicon-ok"></i></span>Save
              </button>
  <div id="app"></div>

</div>

<script>
$("#app").generateTable(langLists);

</script>

<script src="js/htmlj.js"></script>
<script>

$('.save_file').click(function(){

  var param='var langLists =[{';
   $.each($('table'), function (key, val) {
    param+=getParam($(val).attr('id'));
    
    });
    param=param.substring(0,param.length - 1);
     param+='}]';

$.ajax
({ 
    url: 'getFile.php',
    data: {"param": param},
    type: 'post',
    success: function(result)
    {
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
            $("#success-alert").slideUp(500);   
        });
    }
});
});
</script>
</body>

</html>
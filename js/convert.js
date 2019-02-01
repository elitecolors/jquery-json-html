(function ($) {
    /**
     * data - array of record
     * hidecolumns, array of fields to hide
     * usage : $("selector").generateTable(json);
     */
    'use strict';
    $.fn.generateTable = function (data) {
        var table='';
        $.each(data, function (index, value) {

            //first row from json
            $.each(value, function (key, val) {
                table+='<table id="myTableId'+key+'" class="table table-bordered table-striped"><tr ><th data-tr="first">'+key+'</th></tr>';

                //second row
                $.each(val, function (key2, val2) {

                    if(typeof val2 =='object')
                    {   
                        table+='<tr data-type="object"><td data-td="key">'+key2+'</td></tr>'; 
                        var total = Object.keys(val2).length ;
                        var i=0;
                        $.each(val2, function (keyJ, valJ) {
                            i++;
                            var is_last_item = (i == total);
                            table+='<tr  data-last= "'+is_last_item+ '" class="trme"><td data-td="key">'+keyJ+'</td><td data-td="val"  json-key="'+key+'.'+key2+'.'+keyJ+'" class="editMe">'+valJ+'</td></tr>';
                        });
                    }
                    else{
                        table+='<tr data-type="normale"><td data-td="key">'+key2+'</td><td data-td="val" json-key="'+key+'.'+key2+'" class="editMe">'+val2+'</td></tr>';
                    }
                
                });
            });
          table+='</table>'  ;
        });
        $(this).append(table);
    };
})(jQuery);
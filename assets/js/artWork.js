$(".dialog").dialog({
    autoOpen: false,
    modal: true,
    // height: 100,
    open: function(ev, ui){
        $('.myIframe').attr('src');
    }
});

$('#teamBaxy').click(function(){
    $('#dialog2').dialog('open');
});

$('#wishG').click(function(){
    $('#dialog3').dialog('open');
});



// JavaScript Document
//event pada saat link di klik
$('.page-scroll').on('click',function(e){
	//ambil isi
	var tujuan = $(this).attr('href');
	//tangkap elemen ybs
	var elemenTujuan =$(tujuan);
	
	$('html').animate({
		scrollTop : elemenTujuan.offset().top
	},1000,'easeInOutExpo');
	e.preventDefault();
});
function custom_alert( message, title ) {
    if ( !title )
        title = 'Alert';

    if ( !message )
        message = 'No Message to Display.';

    $('<div></div>').html( message ).dialog({
        title: title,
        resizable: false,
        modal: true,
        buttons: {
            'Ok': function()  {
                $( this ).dialog( 'close' );
            }
        }
    });
}

/* ---------------------------------------------------------------------------------
 * CUSTOM JS
 * --------------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {




        /* NOTIFICATION
         * --------------------------------------------------------------------------------*/

				jQuery('.settings .openclose').click(function()
					{
							var target = jQuery(this).parent().parent('.settings');
							if(target.is('.display_switch'))
							{
									target.animate({top: "-38"}, function()
									{
											target.removeClass('display_switch').addClass('display_settings_false');
									});
							}
							else
							{
									target.animate({top: "0"}, function()
									{
											target.removeClass('display_settings_false').addClass('display_switch');
									});
							}
					});
        /* --------------------------------------------------------------------------------
				
				
				
			/*----------------------------------------------------*/
			/*	Back To Top Button
			/*----------------------------------------------------*/
			
				jQuery('#scroll-top-top a').click(function(){
					jQuery('html, body').animate({scrollTop:0}, 300); 
					return false; 
				}); 
				
				
				
/*END OF CUSTOM JS */
});



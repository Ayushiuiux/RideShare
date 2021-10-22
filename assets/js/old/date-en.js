(function($){
	
	
	
	
//start time 	

    
		$('#date-from').datepickerInFullscreen({
			
			
			
			beforeOpen : function(modal, settings){
				var till_date = moment($('#date-to').val(), 'D/M/Y');
				if(till_date.isValid()){
					settings.datepicker.endDate 		= till_date.toDate();
					settings.datepicker.defaultViewDate = till_date.toDate();
				}else{
                    settings.datepicker.endDate         = Infinity;
                    settings.datepicker.defaultViewDate = new Date();
                }
			},
			
			beforeClose: function(modal, settings){
			//$("#date-to").val($('#date-from').val());
			},

			onChange: function() {
			setTimeout(function() {
			$('#picktimeModal').addClass('dpifs-show');
			$('#picktimeBg').addClass('dpifs-show');
			$('body').addClass('dpifs-hide-scrollbar'); 
			}, 300);
			},
			effect: 1,
			format: 'D/M/Y',
			template                    :   ' <div id="PickDateModal" class="datepicker-in-fullscreen-modal"> ' +
                                            ' <div class="datepicker-in-fullscreen-content"> ' +
                                                ' <div class="datepicker-in-fullscreen"></div> ' +
                                            ' </div> ' +   
                                        ' </div> '+
                                        ' <div id="PickDateBg" class="datepicker-in-fullscreen-background"></div> ',			
			fakeInput: false,
			datepicker                  :   {
			language: 'en',
			title: 'Pick up Date',
			todayHighlight: false,
			//startDate: new Date((new Date()).valueOf() + 1000*3600*24),
			

			},

			
		});

		
		$('#date-to').datepickerInFullscreen(
			{
			effect: 1,
			
			beforeOpen : function(modal, settings){
				var from_date = moment($('#date-from').val(), 'D/M/Y');
				if(from_date.isValid()){
					settings.datepicker.startDate 		= from_date.toDate();
					settings.datepicker.defaultViewDate = from_date.toDate();
				}else{
                    settings.datepicker.startDate       = -Infinity;
                    settings.datepicker.defaultViewDate = new Date();
                }
			},
			
			
			onChange: function(){
			setTimeout(function() {
			$('#droptimeModal').addClass('dpifs-show');
			$('#droptimeBg').addClass('dpifs-show');
			$('body').addClass('dpifs-hide-scrollbar');	
			}, 300);
			},
			format: 'D/M/Y',
			fakeInput: false,
			template                    :   ' <div id="DropDateModal" class="datepicker-in-fullscreen-modal"> ' +
                                            ' <div class="datepicker-in-fullscreen-content"> ' +
                                                ' <div class="datepicker-in-fullscreen"></div> ' +
                                            ' </div> ' +   
                                        ' </div> '+
                                        ' <div id="DropkDateBg" class="datepicker-in-fullscreen-background"></div> ',				
			datepicker                  :   {
			language: 'en',
			title: 'Drop off Date',
			todayHighlight: false,
			//startDate: new Date((new Date()).valueOf() + 2* (1000*3600*24)),
			
					
			
			},
			
		}
		);    


 

    
    
    })(jQuery);
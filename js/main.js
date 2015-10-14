$(function() {
	// Handler for .ready() called.


/******************************************
/* SIDEBAR NAVIGATION                  
/*******************************************/

//(Info Nav Toggle Fade when clicked and close when clicked)  

	  $("img.info").click(function(event) {
	  	console.log("clicked");
	  	$(".vidctrl").fadeToggle("fast");
	  	$("ul.info-sidebar").fadeToggle("fast");
	  	$("ul.info-sidebar").addClass("animated bounceInLeft");
	  	

	});

	 $("a.close-sidebar").click(function() {
	  	console.log("clicked");
	  	$("ul.info-sidebar").fadeOut("fast");
	  	$(".vidctrl").fadeIn("slow");
	  	$("video.fullscreen-bg__video").get(0).play();

	});

//(Social nav toggle when clicked)

	  $("img.social").click(function() {
	  	console.log("clicked");
	  	$("ul.social-network").fadeToggle("slow");
	  	
	  	
	});

//(Background Video paused/played when info nav clicked)

	var playing = false;

	  $("img.info").click(function() {

	      if (!$('video.fullscreen-bg__video')[0].paused) {
	          $("video.fullscreen-bg__video").get(0).pause();
	          console.log("paused");
	        

	      } else {
	        $("video.fullscreen-bg__video").get(0).play();
	        console.log("play");
	        
	        
	      }

	  });


/******************************************
/* SIDEBAR NAVIGATION END                
/*******************************************/




/******************************************
/* VIDEO NAVIGATION                  
/*******************************************/

//(Next Video and Previous Video Functionality)

	var video=[
	{	text:"Field",
		src: "vid/field.mp4"
	},	
	{   text:"Forest",
		src: "vid/Forest.mp4",
	},
	{   text:"Beach",
		src: "vid/Beach.mp4",
	},
	{   text:"Car",
		src: "vid/Car.mp4",
	},
	{   text:"Park",
		src: "vid/Park.mp4",
	},
	
	];

	var i=0;

	function previousVideo(){
		i>0 ? changeVideo(--i):0;
		//i==0 ? changeVideo(++i):0;
	}

	function nextVideo(){
		i+1<video.length ? changeVideo(++i):0;
		//i==1 ? changeVideo(--i):0;

	}
	
	function changeVideo(_i){
		$(".fullscreen-bg__video .video").attr("src",video[_i].src);
		i = _i;

		$("video.fullscreen-bg__video").load()

		//$('video.fullscreen-bg__video').prop('muted', false);

		$("img.Next").tooltipster('content', video[_i+1].text);
		$("img.Previous").tooltipster('content', video[_i-1].text);

	}
	
	$("img.Next").click(nextVideo);

	$("img.Previous").click(previousVideo);

	});



//(Puppy Paw Pause & Play) 	

	var playing = false;

	  $("img.Pause").click(function() {

	      if (!$('video.fullscreen-bg__video')[0].paused) {
	          $("video.fullscreen-bg__video").get(0).pause();
	          console.log("paused");
	        

	      } else {
	        $("video.fullscreen-bg__video").get(0).play();
	        console.log("play");
	    }	

	});

//(Music Audio On & Off)
	
	$("video.fullscreen-bg__video").prop('muted', true);


	$("img.Music").click(function(){


    if ($('video.fullscreen-bg__video').prop('muted') )
	{ $('video.fullscreen-bg__video').prop('muted', false);
	console.log ("unmute");

	} else {

    $('video.fullscreen-bg__video').prop('muted', true);
    console.log('mute');

    }




});



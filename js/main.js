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
		src: "https://dl.dropboxusercontent.com/u/91507221/Montana%20Day/Field.mp4"
	},	
	{   text:"Forest",
		src: "https://dl.dropboxusercontent.com/u/91507221/Montana%20Day/forest.mp4",
	},
	{   text:"Beach",
		src: "https://dl.dropboxusercontent.com/u/91507221/Montana%20Day/Beach.mp4",
	},
	{   text:"Car",
		src: "https://dl.dropboxusercontent.com/u/91507221/Montana%20Day/car.mp4",
	},
	{   text:"Park",
		src: "https://dl.dropboxusercontent.com/u/91507221/Montana%20Day/Park.mp4",
	},
	
	];

	var i=0;

	var isMuted = true;

	console.log("instantiated i: "+ i);

	function getPrev() {
		var prev= i===0 ? video.length-1 : i-1;
		return prev;
	}

	function previousVideo(){
		//i>0 ?//
		changeVideo( getPrev() );
		console.log("previous");
		//i==0 ? changeVideo(++i):0;
	}

	function getNext() {
		var next= i===video.length-1 ? 0 : i+1;
		return next;
	}

	function nextVideo(){
		changeVideo( getNext() );
		//i==1 ? changeVideo(--i):0;
		console.log("next");
		// TO DO: write a setSoundState(); 

	}
	
	function changeVideo(_i){
		console.log(video[-1]);
		$(".fullscreen-bg__video .video").attr("src",video[_i].src);
		i = _i;
		console.log("this is i"+i)
		console.log("this is underscore i"+_i)
		$("video.fullscreen-bg__video").load()

		//Carousel re-cycle check

		var endOfArray= video.length-1;

		
		$("img.Next").tooltipster('content', video[ getNext()].text);
		$("img.Previous").tooltipster('content', video[ getPrev() ].text);


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
		//TO DO write changeSoundState();
		//which toggles the sound, AND saves whether the sound
		// is muted to the variable isMute;

    if ($('video.fullscreen-bg__video').prop('muted') )
	{ $('video.fullscreen-bg__video').prop('muted', false);
	console.log ("unmute");

	} else {

    $('video.fullscreen-bg__video').prop('muted', true);
    console.log('mute');

    }




});



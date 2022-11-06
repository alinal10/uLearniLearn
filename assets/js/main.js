
var timeWork;
var timeBreak;
var t;
// Timer Class
class Timer {
	constructor(root) {
	  root.innerHTML = Timer.getHTML();
  
	  this.el = {
		minutes: root.querySelector(".timer__part--minutes"),
		seconds: root.querySelector(".timer__part--seconds"),
		control: root.querySelector(".timer__btn--control"),
		reset: root.querySelector(".timer__btn--reset"),
		setWork: root.querySelector(".timer__btn--setWork"),
		setBreak: root.querySelector(".timer__btn--setBreak")
 
	  };  

	  this.interval = null;
	  this.remainingSeconds = 0;

	  this.el.control.addEventListener("click", () => {
		if (this.interval === null) {  
		  if (t < 60) { 
			this.stop();
			this.remainingSeconds = t * 60;
			this.updateInterfaceTime();
			this.start();
			
		  }   
		
	}  
		else { 
		  this.stop(); 
		} 
	  });  
	  
	  this.el.reset.addEventListener("click",()=>{
		this.remainingSeconds=0;
		this.updateInterfaceTime(); 
		this.stop();

		//testing
		console.log("work"+timeWork);
	  console.log("break"+timeBreak); 
	  });
  
	  this.el.setWork.addEventListener("click", () => {
		const inputWork = prompt("Enter minutes for work:");
		timeWork=inputWork;
		t=inputWork;

	  });   

	  this.el.setBreak.addEventListener("click", () => {
		const inputBreak = prompt("Enter minutes for break:"); 
		timeBreak=inputBreak; 
		t=inputBreak;

	  });  

	  let wbDisplay=(message, bgcolor, color)=>{
		let msg=document.querySelector("#workBreak");
		msg.innerText=message;
		msg.getElementsByClassName.backgroundColor=bgcolor;
		msg.style.color=color;
	  }

	  let first=document.querySelector("#sw");
	  first.addEventListener("click",function(){
		wbDisplay('Work','white','white');
	  })
	  let second=document.querySelector("#sb");
	  second.addEventListener("click",function(){
		wbDisplay('Break','white','white');
	  })   

	  
 
	

	  
	} 
  
	updateInterfaceTime() {
	  const minutes = Math.floor(this.remainingSeconds / 60);
	  const seconds = this.remainingSeconds % 60;
  
	  this.el.minutes.textContent = minutes.toString().padStart(2, "0");
	  this.el.seconds.textContent = seconds.toString().padStart(2, "0");
	}

	updateInterfaceControls() {
	  if (this.interval === null) {
		this.el.control.innerHTML = `<span class="material-icons">start</span>`;
		this.el.control.classList.add("timer__btn--start");
		this.el.control.classList.remove("timer__btn--stop");
	  } else {
		this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
		this.el.control.classList.add("timer__btn--stop");
		this.el.control.classList.remove("timer__btn--start");
	  }
	}
  
	start() {
	  if (this.remainingSeconds === 0) return;
  
	  this.interval = setInterval(() => {
		this.remainingSeconds--;
		this.updateInterfaceTime();
  
		if (this.remainingSeconds === 0) {
		  this.stop();
		}
	  }, 1000);
  
	  this.updateInterfaceControls();
	}
  
	stop() {
	  clearInterval(this.interval);
  
	  this.interval = null;
  
	  this.updateInterfaceControls();
	}
  
	static getHTML() {
	  return `
	  <h4 id="workBreak"></h4> 
	  		<div>
			  <span class="timer__part timer__part--minutes">00</span>
			  <span class="timer__part">:</span>
			  <span class="timer__part timer__part--seconds">00</span>
			  <button type="button" class="timer__btn timer__btn--control timer__btn--start">
				  <span class="material-icons">start</span>
			  </button> 
			  <button type="button" class="timer__btn timer__btn--reset">
				  <span class="material-icons">reset</span>
			  </button>
			  <button type="button" id="sw" class="timer__btn timer__btn--setWork">
				  <span class="material-icons">set work</span>
			  </button> 
			  <button type="button" id="sb" class="timer__btn timer__btn--setBreak">
				  <span class="material-icons">set break</span>
			  </button>
			  </div>

		  `;
	}
  }

new Timer(
	document.querySelector(".timer")
);

 
//Analytics Classes
var amazing;
const wtimeAmazing=[];
const btimeAmazing=[];


var good;
const wtimeGood=[];
const btimeGood=[];


var okay;
const wtimeOkay=[];
const btimeOkay=[];


var notsowell;
const wtimeNotsowell=[];
const btimeNotsowell=[];


var terrible;
const wtimeTerrible=[];
const btimeTerrible=[];


class Analytics {
	

	constructor(root) {
	  root.innerHTML = Analytics.getHTML();
      
	  this.el = { 
		amazing: root.querySelector("#amazing"),
		good: root.querySelector("#good"),
		okay: root.querySelector("#okay"),
		notsowell: root.querySelector("#notsowell"),
		terrible: root.querySelector("#terrible"),
	  }; 

	  this.el.amazing.addEventListener('click',()=>{
		wtimeAmazing.push(timeWork); 
		btimeAmazing.push(timeBreak);
		console.log(wtimeAmazing);
		console.log(btimeAmazing);

		//test
		console.log("work"+timeWork);
	  console.log("break"+timeBreak); 
	  });
 
	  this.el.good.addEventListener('click',()=>{
		wtimeGood.push(timeWork);
		btimeGood.push(timeBreak);
		console.log(wtimeGood);
		console.log(btimeGood);
	  });

	  this.el.okay.addEventListener('click',()=>{
		wtimeOkay.push(timeWork);
		btimeOkay.push(timeBreak);
		console.log(wtimeOkay);
		console.log(btimeOkay);
	  });

	  this.el.notsowell.addEventListener('click',()=>{
		wtimeNotsowell.push(timeWork);
		btimeNotsowell.push(timeBreak); 
		console.log(wtimeNotsowell);
		console.log(btimeNotsowell);
	  });

	  this.el.terrible.addEventListener('click',()=>{
		wtimeTerrible.push(timeWork);
		btimeTerrible.push(timeBreak);
		console.log(wtimeTerrible);
		console.log(btimeTerrible);
	  });



	} 
  
	static getHTML() {
		return `
		<h3>How much did you accomplish during this session? How focused did you stay?</h3>
<section id="fb"> 
<button type="button" id="amazing" class="fbButtons">
<span class="material-icons">Amazing</span> 
</button> 
<button type="button" id="good" class="fbButtons">
<span class="material-icons">Good</span> 
</button> 
<button type="button" id="okay" class="fbButtons"> 
<span class="material-icons">Okay</span> 
</button> 
<button type="button" id="notsowell" class="fbButtons">
<span class="material-icons">Not so well</span> 
</button> 
<button type="button" id="terrible" class="fbButtons">
<span class="material-icons">Terrible</span> 
</button> 
</section>
  
			`;
	  }
} 

new Analytics(
	document.querySelector(".feed")
);

class Analytics2 { 
	

	constructor(root) {
	  root.innerHTML = Analytics2.getHTML(); 

	  this.el = { 
		gen: root.querySelector("#gen"),
	  };
 
	   this.el.gen.addEventListener('click',()=>{ 
		console.log(wtimeAmazing);
		
			document.getElementById("aInt").innerHTML = "Work: "+wtimeAmazing; 
			document.getElementById("a2Int").innerHTML = "Break: "+btimeAmazing;
		
			document.getElementById("gInt").innerHTML = "Work: "+wtimeGood; 
			document.getElementById("g2Int").innerHTML = "Break: "+btimeGood;
		
			document.getElementById("oInt").innerHTML = "Work: "+wtimeOkay; 
			document.getElementById("o2Int").innerHTML = "Break: "+btimeOkay; 
		
			document.getElementById("nInt").innerHTML = "Work: "+wtimeNotsowell; 
			document.getElementById("n2Int").innerHTML = "Break: "+btimeNotsowell; 
		
			document.getElementById("tInt").innerHTML = "Work: "+wtimeTerrible; 
			document.getElementById("t2Int").innerHTML = "Break: "+btimeTerrible; 
		

	  });

	}

	static getHTML(){ 
		return `
		<section>
		<ul class="contact">
		<button type="button" id="gen" class="timer__btn timer__btn--setWork">
		<span class="material-icons">generate data</span>
		</button>  
		
			<li>
				<h3>Amazing Intervals</h3>  
					<span id= aInt class= intervals>Work: No data yet.</span>  
					<span id= a2Int class= intervals>Break: No data yet.</span>   
			</li> 
			<li>
				<h3>Good Intervals</h3>
				<span id= gInt class= intervals>Work: No data yet.</span>  
				<span id= g2Int class= intervals>Break: No data yet.</span>  
			</li>
			<li>
				<h3>Okay Intervals</h3>
				<span id= oInt class= intervals>Work: No data yet.</span>  
				<span id= o2Int class= intervals>Break: No data yet.</span>  
			</li>
			<li> 
				<h3>Not So Good Intervals</h3>
				<span id= nInt class= intervals>Work: No data yet.</span>  
				<span id= n2Int class= intervals>Break: No data yet.</span>  
			</li>
			<li>
				<h3>Terrible Intervals</h3>
				<span id= tInt class= intervals>Work: No data yet.</span>  
				<span id= t2Int class= intervals>Break: No data yet.</span>  
			</li>
		</ul>
		</section>
		`
	} 

} 

new Analytics2(
	document.querySelector(".data")

);

class Analytics3 {
	
// 	var amazing;
// const wtimeAmazing=[];
// const btimeAmazing=[];


// var good;
// const wtimeGood=[]; 
// const btimeGood=[];


// var okay;
// const wtimeOkay=[];
// const btimeOkay=[];


// var notsowell;
// const wtimeNotsowell=[];
// const btimeNotsowell=[];


// var terrible;
// const wtimeTerrible=[];
// const btimeTerrible=[];

	constructor(root) { 
	  root.innerHTML = Analytics3.getHTML(); 

	  this.el = { 
		gen2: root.querySelector("#gen2"),
	  };

	  this.el.gen2.addEventListener('click',()=>{
		let recW2;  
		let recB2;
	//for recW2
	  if(wtimeAmazing.length>0){
		var avg;
		var sum=0;
		for(var i=0;i<wtimeAmazing.length;i++){
			sum=parseInt(sum)+parseInt(wtimeAmazing[i]);
			console.log("individual elements"+wtimeAmazing[i]);
		}
		console.log("sum: "+sum);
		avg=(sum/wtimeAmazing.length);
		recW2=avg;

	  } else if(wtimeGood.length>0){
		var avg;
		var sum=0;
		for(var i=0;i<wtimeGood.length;i++){
			sum=parseInt(sum)+parseInt(wtimeGood[i]);
		}
		avg=sum/wtimeGood.length;
		recW2=avg; 

	  } else if(wtimeOkay.length>0){
		var avg;
		var sum=0;
		for(var i=0;i<wtimeOkay.length;i++){
			sum=parseInt(sum)+parseInt(wtimeOkay[i]);
		}
		avg=sum/wtimeOkay.length;
		recW2=avg;
		
	  } else if(wtimeNotsowell.length>0){
		var avg;
		var sum=0;
		for(var i=0;i<wtimeNotsowell.length;i++){
			sum=parseInt(sum)+parseInt(wtimeNotsowell[i]);
		}
		avg=sum/wtimeNotsowell.length;
		recW2=avg;
		
	  } else if(wtimeTerrible.length>0){
		var avg;
		var sum=0;
		for(var i=0;i<wtimeTerrible.length;i++){
			sum=parseInt(sum)+parseInt(wtimeTerrible[i]);
		}
		avg=sum/wtimeTerrible.length;
		recW2=avg;
		
	  } else{
		recW2="No data yet";
	  }

	  //forRecB2
	  if(btimeAmazing.length>0){
		var avg;
		var sum2=0;
		for(var i=0;i<btimeAmazing.length;i++){
			sum2=parseInt(sum2)+parseInt(btimeAmazing[i]);
		}
		avg=sum2/btimeAmazing.length;
		recB2=avg;

	  } else if(btimeGood.length>0){
		var avg;
		var sum2=0;
		for(var i=0;i<btimeGood.length;i++){
			sum2=parseInt(sum2)+parseInt(btimeGood[i]);
		}
		avg=sum2/btimeGood.length;
		recB2=avg; 

	  } else if(btimeOkay.length>0){
		var avg;
		var sum2=0;
		for(var i=0;i<btimeOkay.length;i++){
			sum2=parseInt(sum2)+parseInt(btimeOkay[i]);
		}
		avg=sum2/btimeOkay.length;
		recB2=avg;
		
	  } else if(btimeNotsowell.length>0){
		var avg;
		var sum2=0;
		for(var i=0;i<btimeNotsowell.length;i++){
			sum2=parseInt(sum2)+parseInt(btimeNotsowell[i]);
		}
		avg=sum2/btimeNotsowell.length;
		recB2=avg;
		
	  } else if(btimeTerrible.length>0){
		var avg;
		var sum2=0;
		for(var i=0;i<btimeTerrible.length;i++){
			sum2=parseInt(sum2)+parseInt(btimeTerrible[i]);
		}
		avg=sum2/btimeTerrible.length;
		recB2=avg;
		
	  } else{
		recB2="No data yet";
	  }
	  console.log("wwwwW"+recW2);
	  console.log("bbbbb"+recB2);

	  document.getElementById("recW").innerHTML = "Work: "+recW2; 
	  document.getElementById("recB").innerHTML = "Break: "+recB2; 

		
	  });
	  
	}


	static getHTML(){ 
		return `
			<h3 id=recI>Recommended Intervals: </h3>
			<h5 id=recW>Work: No data yet</h5>
			<h5 id=recB>Break: No data yet</h5>
			<button type="button" id="gen2" class="fbButtons">
			<span class="material-icons">Generate</span>  
			</button>  
			

		` 
	}

} 

new Analytics3(
	document.querySelector(".recInt")

);
 





(function($) {
	
	
	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			});

		

		
		

})(jQuery);


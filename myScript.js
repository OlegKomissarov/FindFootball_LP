var ballClickAnimation = {
	init: function(){
		ballClickAnimation.setAnimation();
	},
	globals: {
		ball: document.querySelector('.ball'),
		button: document.querySelector('.header_button')
	},
	setAnimation: function(){
		ballClickAnimation.globals.button.addEventListener('mousemove', function(){
			ballClickAnimation.globals.ball.classList.add('animated_ball');
			setTimeout(function(){
				ballClickAnimation.globals.ball.classList.remove('animated_ball');
			}, 1000);
		});
		ballClickAnimation.globals.ball.addEventListener('click', function(){
			ballClickAnimation.globals.ball.classList.add('animated_ball');
			setTimeout(function(){
				ballClickAnimation.globals.ball.classList.remove('animated_ball');
			}, 1000);
		});
	}
}
ballClickAnimation.init();

var animateProcent_1 = {
	init: function(){
		animateProcent_1.setCounting_1();
	},
	globals: {
		number_1: document.querySelector('.procent_animated_1'),
		numberTop: document.querySelector('.procent_animated_1').getBoundingClientRect().top,
		start: 0
	},
	setCounting_1: function(){
		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > animateProcent_1.globals.numberTop - window.innerHeight + 100) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					animateProcent_1.globals.number_1.innerHTML = ++animateProcent_1.globals.start;
					if(animateProcent_1.globals.start == 76) {
						clearInterval(interval);
					}
				}, 10);
			}
		});
	}
}
animateProcent_1.init();

var animateProcent_2 = {
	init: function(){
		animateProcent_2.setCounting_2();
	},
	globals: {
		number_2: document.querySelector('.procent_animated_2'),
		numberTop: document.querySelector('.procent_animated_2').getBoundingClientRect().top,
		start: 0
	},
	setCounting_2: function(){
		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > animateProcent_2.globals.numberTop - window.innerHeight + 100) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					animateProcent_2.globals.number_2.innerHTML = ++animateProcent_2.globals.start;
					if(animateProcent_2.globals.start == 72) {
						clearInterval(interval);
					}
				}, 10);
			}
		});
	}
}
animateProcent_2.init();

var animateProcent_3 = {
	init: function(){
		animateProcent_3.setCounting_3();
	},
	globals: {
		number_3: document.querySelector('.procent_animated_3'),
		numberTop: document.querySelector('.procent_animated_3').getBoundingClientRect().top,
		start: 0
	},
	setCounting_3: function(){
		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > animateProcent_3.globals.numberTop - window.innerHeight + 100) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					animateProcent_3.globals.number_3.innerHTML = ++animateProcent_3.globals.start;
					if(animateProcent_3.globals.start == 91) {
						clearInterval(interval);
					}
				}, 10);
			}
		});
	}
}
animateProcent_3.init();

var animateProcent_4 = {
	init: function(){
		animateProcent_4.setCounting_4();
	},
	globals: {
		number_4: document.querySelector('.procent_animated_4'),
		numberTop: document.querySelector('.procent_animated_4').getBoundingClientRect().top,
		start: 0
	},
	setCounting_4: function(){
		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > animateProcent_4.globals.numberTop - window.innerHeight + 100) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					animateProcent_4.globals.number_4.innerHTML = ++animateProcent_4.globals.start;
					if(animateProcent_4.globals.start == 79) {
						clearInterval(interval);
					}
				}, 10);
			}
		});
	}
}
animateProcent_4.init();

// Gallery
var width = document.documentElement.clientWidth / 100 * 15.8;	// ширина изображения
if(document.documentElement.clientWidth <= 1024){
	width = 281;
}
if(document.documentElement.clientWidth <= 764){
	width = 132;
}
var slider = document.getElementById('slider');
var list = slider.querySelector('ul');
var listElems = slider.querySelectorAll('li');
var position = 0;	// текущий сдвиг влево
document.querySelector('.prev').onclick = function(){	// сдвиг влево
	position = Math.min(position + width, 0)
	list.style.marginLeft = position + 'px';
};
document.querySelector('.next').onclick = function(){	// сдвиг вправо
	position = Math.max(position - width, -width * (listElems.length - 1));
	list.style.marginLeft = position + 'px';
};
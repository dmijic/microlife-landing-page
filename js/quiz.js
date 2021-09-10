function quizAnimation() {

    const items = document.querySelectorAll('#quiz > .container > .row');

    const isInViewport = function(el) {
	    const rect = el.getBoundingClientRect();
	    return (
		    rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
    };

    const run = () => items.forEach(item => {
	    if(isInViewport(item)) {
		    item.classList.add('show');
	    } else {
            item.classList.remove('show');
        }
    });

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
}
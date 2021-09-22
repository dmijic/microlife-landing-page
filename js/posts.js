function postsAnimation() {

    const items = document.querySelectorAll('#posts > .container > .row');

    const isInViewport = function(el) {
	    const rect = el.getBoundingClientRect();
	    return (
		    rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
    };

    const run = () => items.forEach(item => {
	    if(isInViewport(item)) {
		    item.classList.add('showz');
	    } else {
            item.classList.remove('showz');
        }
    });

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
}
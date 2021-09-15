function btnsSlideInAnimation() {

    const item = document.querySelector('#products');

    const isInViewport = function(el) {
	    const rect = el.getBoundingClientRect();
	    return (
		    rect.top <= window.innerHeight/2 && rect.top >= -(window.innerHeight/3)
	    );
    };

    const run = () =>  {
	    if(isInViewport(item)) {
		    document.getElementById("btnsSlideIn").classList.add('show');
	    } else {
            document.getElementById("btnsSlideIn").classList.remove('show');
        }
    };

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
}
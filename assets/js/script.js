const tl = new TimelineMax();

tl.fromTo($(".moved-overlay"), 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
.fromTo($(".moved-header"), 0.4, { opacity: 0, x: 30 }, {opacity: 1, x: 0 })
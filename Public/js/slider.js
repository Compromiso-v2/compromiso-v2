new Glider(document.querySelector('.glider'), {
    slidesToShow: 4,
    slidesToScroll: 3,
    autoPlay:true,
    draggable: true,
    dots: '.dots',
    rewind:true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
});
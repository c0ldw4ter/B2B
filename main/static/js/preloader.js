function preloader() {
    $(() => {

        let p = $('.pre-loader');
        p.css('opacity', 0);
        setInterval(
            () => p.remove(),
            parseInt(p.css('1s')) * 1000
        );

     });
}
preloader();
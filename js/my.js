$(document).ready(function () {
    $('.jumpOne').animate({
        'marginLeft': '40px'
    }, 1500);
    $('.jumpTwo').animate({
        'marginLeft': '-78px'
    }, 1500);

    $('.n').animate({
        'marginLeft': '40px'
    }, 1500);
    $('.n').addClass('n');

    $('.fo').animate({
        'font-size': '80px'
    }, 1000);

    setTimeout(function () {
        $('.fo').animate({
            'font-size': '50px'
        }, 1000);
        $('.fo').css({
            color: '#846add'
        })
    }, 1500)


    setInterval(function () {
        setTimeout(function () {
            $('.c').animate({
                'font-size': '80px'
            }, 700);
            $('.c').animate({
                'font-size': '50px'
            }, 1000);

        }, 1800)


        setTimeout(function () {
            $('.fo').animate({
                'font-size': '80px'
            }, 700);
            $('.fo').animate({
                'font-size': '50px'
            }, 1000);

        }, 2100)

        setTimeout(function () {
            $('.m').animate({
                'font-size': '80px'
            }, 700);
            $('.m').animate({
                'font-size': '50px'
            }, 1000);

        }, 2400)

        setTimeout(function () {
            $('.i').animate({
                'font-size': '80px'
            }, 700);
            $('.i').animate({
                'font-size': '50px'
            }, 1000);

        }, 2700)

        setTimeout(function () {
            $('.fn').animate({
                'font-size': '80px'
            }, 700);
            $('.fn').animate({
                'font-size': '50px'
            }, 1000);

        }, 3000)

        setTimeout(function () {
            $('.g').animate({
                'font-size': '80px'
            }, 700);
            $('.g').animate({
                'font-size': '50px'
            }, 1000);

        }, 3300)

        setTimeout(function () {
            $('.s').animate({
                'font-size': '80px'
            }, 700);
            $('.s').animate({
                'font-size': '50px'
            }, 1000);

        }, 3600)



        setTimeout(function () {
            $('.exc').animate({
                'font-size': '80px'
            }, 700);
            $('.exc').animate({
                'font-size': '50px'
            }, 1000);

        }, 3900)


        setTimeout(function () {
            $('.jumpOne').animate({
                'font-size': '80px'
            }, 700);
            $('.jumpOne').animate({
                'font-size': '50px'
            }, 1000);

        }, 4100)




        setTimeout(function () {
            $('.n').animate({
                'font-size': '80px'
            }, 700);
            $('.n').animate({
                'font-size': '50px'
            }, 1000);

        }, 4400)



    }, 5000)



})

$(document).ready(function(){
    $(window).scroll(function(){
        $('#ptm_1').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: "/assets/102.png",
                        width: 100,
                        height:100
                    },
            xs: {
                src: "/assets/102.png",
                width: 200,
                height:400
            }
            
        });
        $('#ptm_2').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: "/assets/2-Record.png",
                        width: 100,
                        height:100
                    },
            xs: {
                src: "/assets/2-Record.png",
                width: 200,
                height:400
            }
            
        });
        $('#ptm_3').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: "/assets/Encrypted-Access.png",
                        width: 100,
                        height:100
                    },
            xs: {
                src: "/assets/Encrypted-Access.png",
                width: 200,
                height:400
            }
            
        });
        $('#ptm_4').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: "/assets/3-Store.png",
                        width: 100,
                        height:100
                    },
            xs: {
                src: "/assets/3-Store.png",
                width: 200,
                height:400
            }
            
        });
        $('#ptm_5').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: "/assets/1-Draft.png",
                        width: 100,
                        height:100
                    },
            xs: {
                src: "/assets/1-Draft.png",
                width: 200,
                height:400
            }
            
        });
        $('#ptm_6').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: "/assets/Verify.png",
                        width: 100,
                        height:100
                    },
            xs: {
                src: "/assets/Verify.png",
                width: 200,
                height:400
            }
            
        });
    })
})
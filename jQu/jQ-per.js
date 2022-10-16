$(window).ready(function () {

    "use strict";
    // $("body").text(location.href)

    var allSpn = $(".containnr span");
    var links = $(".containnr a");
    var list = [
        "per-10.jpeg",
        "background-2.jpeg",
        "bg1.jpg",
        "bg2.jpg",
        "bg3.jpg",
        "bg4.jpg",
        "bg5.jpg"
    ]
    var obj_img = {

        coffe: [
            "coffe-1.jpg",
            "coffe-6.jpg",
            "coffe-3.jpg",
            "coffe-4.jpg",
            "coffe-5.jpg",
            "coffe-7.jpg"
        ],
        phone: [
            "phone-1.jpg",
            "phone-2.jpg",
            "phone-3.jpg",
            "phone-4.jpg",
            "phone-5.jpg",
            "phone-6.jpg"
        ],
        book: [
            "book-1.jpg",
            "book-2.jpg",
            "book-3.jpg",
            "book-4.jpg",
            "book-5.jpg",
            "book-6.jpg"
        ],
        default: []

    }

    $.fn.addingClass = function () {

        $(this).addClass("act")

    }
    $.fn.niceScrolling = function (second) {

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("st")).offset().top

        }, second)

    }

    $(allSpn).on("click", function () {

        $(allSpn).removeClass("act")
        $(this).addingClass()

    })
    $(links).on("click", function () {

        $(links).removeClass("act")
        $(this).addingClass()
        $(this).niceScrolling(1000)

    })
    $(".filter-btn span").on("click", function () {

        $(this).addClass("act").siblings().removeClass("act");

    })

    $(".cont-img img").click(function () {


        $(this).parent().addClass("act").siblings().removeClass("act")


    })

    var i = 0;

    $(".cont-content-icon .left").fadeOut()

    $(".cont-content-icon span").on("click", function (e) {

        if ($(this).hasClass("right")) {

            i += 1;

            $(".containnr").css("backgroundImage", "url('img/" + list[i] + "')")
            $(".cont-test").css("backgroundImage", "url('img/" + list[i] + "')")


            if ((list.length - 1) === i) {

                $(this).fadeOut();
                $(".cont-content-icon .left").fadeIn(1000)

            }


        } else {

            i -= 1;

            $(".containnr").css("backgroundImage", "url('img/" + list[i] + "')")
            $(".cont-test").css("backgroundImage", "url('img/" + list[i] + "')")

            if (i === 0) {

                $(this).fadeOut()
                $(".cont-content-icon .right").fadeIn(1000)

            }

        }

    })

    $(function selvInvoFun() {

        "use strict";
        var num = 1;

        var t = setInterval(function () {

            $(".txt-cleants .cus-cont:eq(" + num + ")").delay(3000).fadeIn(1000).siblings().fadeOut(1000)

            if (num == ($(".cus-cont").length - 1)) {

                num = -1;
                // clearInterval(t)

            }
            num++

        }, 5000)

    }())



    $(".filter-btn span").on("click", function () {

        $(".cont-img-our-pro .cont-img img").each(function () {

            obj_img.default.push($(this).attr("src"))

        })

        obj_img.default.splice(6)

        if ($(this).hasClass("act") && $(this).data('st') === "mobile") {

            let i;


            for (i = 0; i < obj_img.phone.length; i++) {


                $(".cont-img-our-pro .cont-img img:eq(" + i + ")").attr("src", "img/phone/" + obj_img.phone[i] + "")

            }


        } else if ($(this).hasClass("act") && $(this).data('st') === "coffe") {

            for (i = 0; i < obj_img.coffe.length; i++) {


                $(".cont-img-our-pro .cont-img img:eq(" + i + ")").attr("src", "img/coffe/" + obj_img.coffe[i] + "")

            }

        } else if ($(this).hasClass("act") && $(this).data('st') === "book") {


            for (i = 0; i < obj_img.book.length; i++) {


                $(".cont-img-our-pro .cont-img img:eq(" + i + ")").attr("src", "img/book/" + obj_img.book[i] + "")

            }

        } else {

            console.log("all")
            for (i = 0; i < obj_img.default.length; i++) {

                $(".cont-img-our-pro .cont-img img:eq(" + i + ")").attr("src", obj_img.default[i])

            }

        }

    })

    $("input").focus(function () {

        $(this).addClass("act").siblings().removeClass("act")

    })

    $(".menu").on("click", function (e) {

        e.stopPropagation()

        if ($(".ul-links").hasClass("act")) {

            $(".ul-links").fadeIn(1000, function () {

                $(this).toggleClass("act")

            })

        } else {

            $(".ul-links").fadeOut(1000, function () {

                $(this).toggleClass("act")

            })

        }

    })
})

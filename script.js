(() => {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("BqlOkvjarrTv_jFRm");
})();
const section = document.querySelectorAll("section");
const navList = document.getElementsByTagName('li')

window.onload = function () {
    let data = {
        name: "",
        mail: "",
        subject: "",
        message: ""
    }
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(emailjs.send, emailjs.sendForm);
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        let nameValue= document.getElementById("name").value;
        let mailValue= document.getElementById("mail").value;
        let subjectValue= document.getElementById("subject").value;
        let messageValue= document.getElementById("message").value;
        data={...data,
            name: nameValue,
            mail: mailValue,
            subject: subjectValue,
            message: messageValue
        }
        emailjs.send("service_fhc3bhk", "template_3cqtevu", data)
            .then(function () { 
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset();
                document.getElementsByClassName("alert")[0].style.display = "inline-block";
                setTimeout(() => {
                    document.getElementsByClassName("alert")[0].style.display = "none";
                }, 3000)
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

$(document).ready(function () {
    $(window).scroll(function () {
        let currentSection;
        section.forEach(element => {
            const sectionTop = element.offsetTop;
            if(scrollY >= sectionTop - 350){
                currentSection = element.getAttribute("id");
            }            
        });
        for (let index = 0; index < navList.length; index++) {
            navList[index].childNodes[0].classList.remove("current")
            // const element = navList[index].classList.remove("active");
            if(navList[index].childNodes[0].classList.contains(currentSection)){
                navList[index].childNodes[0].classList.add("current");
            }
            
        }

        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Engineer,FullStack Developer, Data Scientist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Focus to contact form after click hire button
    function focus(){
        document.getElementById("name").focus();
    }


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
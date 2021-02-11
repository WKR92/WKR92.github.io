var images = [];

images[0] = "./Zdjecia do stronki/lustro1.jpg"
images[2] = "./Zdjecia do stronki/indiana_jones1.jpg"
images[5] = "./Zdjecia do stronki/podwórko1.jpg"
images[4] = "./Zdjecia do stronki/para_roku1.jpg"
images[3] = "./Zdjecia do stronki/rowery1.jpg"
images[1] = "./Zdjecia do stronki/fryzura1.jpg"
images[6] = "./Zdjecia do stronki/incepcja1.jpg"



function changeImg(){
    var i = 0;

    picsDiv = document.querySelector("#pic");
    picsDiv.classList.add("picture-1")
    picsDiv.src = images[i]

    startingCircle = document.querySelector(".eli-1");
    startingCircle.style = "background-color: #8BB0AF;"
    startingDate = document.querySelector(".sign-1");
    startingDate.style = "background-color: #8BB0AF"
    curData = document.querySelector(".date-btn-" + (i+1));
    curData.style = "color: #1F1F1F;"
    rigthArrow = document.querySelector(".right-cont__arrow");
    rigthArrow.onclick = nextPic
    leftArrow = document.querySelector(".left-cont__arrow");
    leftArrow.onclick = prevPic


    dateBtn1 = document.querySelector(".date-btn-1")
    dateBtn1.addEventListener("click", dateBtnEvent1);
    function dateBtnEvent1(){
        i = 1;
        prevPic();
    }
    dateBtn2 = document.querySelector(".date-btn-2")
    dateBtn2.addEventListener("click", dateBtnEvent2);
    function dateBtnEvent2(){
        i = 0;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    dateBtn3 = document.querySelector(".date-btn-3");
    dateBtn3.addEventListener("click", dateBtnEvent3);
    function dateBtnEvent3(){
        i = 1;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    dateBtn4 = document.querySelector(".date-btn-4")
    dateBtn4.addEventListener("click", dateBtnEvent4);
    function dateBtnEvent4(){
        i = 2;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    dateBtn5 = document.querySelector(".date-btn-5")
    dateBtn5.addEventListener("click", dateBtnEvent5);
    function dateBtnEvent5(){
        i = 3;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    dateBtn6 = document.querySelector(".date-btn-6")
    dateBtn6.addEventListener("click", dateBtnEvent6);
    function dateBtnEvent6(){
        i = 4;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    dateBtn7 = document.querySelector(".date-btn-7")
    dateBtn7.addEventListener("click", dateBtnEvent7);
    function dateBtnEvent7(){
        i = 5;
        nextPic();
    }


    eli1 = document.querySelector(".eli-1");
    eli1.addEventListener("click", eli1Event);
    function eli1Event(){
        i = 1;
        prevPic();
    }
    eli2 = document.querySelector(".eli-2");
    eli2.addEventListener("click", eli2Event);
    function eli2Event(){
        i = 0;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    eli3 = document.querySelector(".eli-3");
    eli3.addEventListener("click", eli3Event);
    function eli3Event(){
        i = 1;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    eli4 = document.querySelector(".eli-4");
    eli4.addEventListener("click", eli4Event);
    function eli4Event(){
        i = 2;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    eli5 = document.querySelector(".eli-5");
    eli5.addEventListener("click", eli5Event);
    function eli5Event(){
        i = 3;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    eli6 = document.querySelector(".eli-6");
    eli6.addEventListener("click", eli6Event);
    function eli6Event(){
        i = 4;
        nextPic();
        rigthArrow.style = "background-color: #8BB0AF;"
    }
    eli7 = document.querySelector(".eli-7");
    eli7.addEventListener("click", eli7Event);
    function eli7Event(){
        i = 5;
        nextPic();
    }
    

    function changeBox(){
        curBoxTitle = document.querySelector(".history-box__title");
        curBoxText = document.querySelector(".history-box__text")
        if (i==0){
            curBoxTitle.innerHTML = "Początek";
            curBoxText.innerHTML = "Rzuciłem pracę w agencji reklamowej i zacząlem szukać swojej nowej drogi, którą okazało się programowanie pięknych stron internetowych."
        } else if (i === 1){
            curBoxTitle.innerHTML = "Szkocja";
            curBoxText.innerHTML = "Nie lubiłem robić reklam, więc wyjechałem do Szkocji, żeby zarobić na podróż do Azji i życie podczas nauki programowania."
        } else if (i === 2){
            curBoxTitle.innerHTML = "Kambodża";
            curBoxText.innerHTML = "Zwiedziłem Tajlandię, Kamodżę i Wietnam jednocześnie ucząc się pisać kod w Pythonie. Tu jako Indiana Jones."
        } else if (i === 3){
            curBoxTitle.innerHTML = "Witenam";
            curBoxText.innerHTML = "Widać, że coraz bardziej zaczynam przypominać programistę. Rośnie broda, śnią mi się funkcje, a w oczach odbija się kod."
        } else if (i === 4){
            curBoxTitle.innerHTML = "Tajlandia";
            curBoxText.innerHTML = "Przy okazji zostaliśmy z żoną ogłoszeni najpiękniejszą parą 2020 roku przez magazyn People. W myślach jednak tylko Java Script."
        } else if (i === 5){
            curBoxTitle.innerHTML = "Pandemia";
            curBoxText.innerHTML = "Nagły powrót do domu i rozpoczecie codziennej, intensywnej nauki. Podroż przerwana, ale przede mną cały, niezgłębiony, wirtualny świat."
        } else if (i === 6){
            curBoxTitle.innerHTML = "Incepcja";
            curBoxText.innerHTML = "Uśmiecham się do Was kodując stronę, którą właśnie oglądacie. Patrzę Wam w oczy, może się polubimy."
        }        
    }

    function nextPic(){
        if(i===6){
            return;
        }
        i ++
        if(i === 6){
            rigthArrow.style = "background-color: #d3d3d3;"
        }
        if(i !== 0){
            leftArrow.style = "background-color: #8BB0AF;"
        }

        picsDiv.src = images[i]


        prevCircle = document.querySelectorAll(".elips");
        prevCircle.forEach(element => { element.style = "background-color: null"});

        curCircle = document.querySelector(".eli-" + (i+1));
        curCircle.style = "background-color: #8BB0AF;"

        prevDate = document.querySelectorAll(".sign");
        prevDate.forEach( elem => { elem.style = "background-color: null"})

        curDate = document.querySelector(".sign-" + (i+1));
        curDate.style = "background-color: #8BB0AF;"

        prevData = document.querySelectorAll(".btnDate");
        prevData.forEach( elem => { elem.style = "color: grey;"})
        
        curData = document.querySelector(".date-btn-" + (i+1));
        curData.style = "color: #1F1F1F;"

        // Animations
        picsDiv.classList.remove("picture-" + i)
        picsDiv.classList.add("picture-" + (i+1))
        picsDiv.style = "opacity: 1;"

        tl = gsap.timeline({repeat: 0})
        tl.from('.picture-' + (i+1), {duration: 1, opacity: 0,})

        gsap.from('.date-' + (i+1), {duration: 0.5, x: "-100%"})
        gsap.from('.eli-' + (i+1), {duration: 0.5, rotationX: [-90, 90], x: "-50%"})


        changeBox()
    }

    function prevPic(){
        if(i===0){
            return;
        }
        i --
        if(i !== 6){
            rigthArrow.style = "background-color: #8BB0AF;"
        }
        if(i === 0){
            leftArrow.style = "background-color: #d3d3d3;"
        }

        picsDiv.src = images[i]
        
        prevCircle = document.querySelectorAll(".elips");
        prevCircle.forEach(element => { element.style = "background-color: null"});

        curCircle = document.querySelector(".eli-" + (i+1));
        curCircle.style = "background-color: #8BB0AF;"

        prevDate = document.querySelectorAll(".sign");
        prevDate.forEach( elem => { elem.style = "background-color: null"})

        curDate = document.querySelector(".sign-" + (i+1));
        curDate.style = "background-color: #8BB0AF;"

        prevData = document.querySelectorAll(".btnDate");
        prevData.forEach( elem => { elem.style = "color: grey;"})

        curData = document.querySelector(".date-btn-" + (i+1));
        curData.style = "color: #1F1F1F;"


        // Animations
        picsDiv.classList.remove("picture-" + (i+2))
        picsDiv.classList.add("picture-" + (i+1))
        picsDiv.style = "opacity: 1;"

        tl = gsap.timeline({repeat: 0})
        tl.from('.picture-' + (i+1), {duration: 1, opacity: 0,})

        gsap.from('.date-' + (i+1), {duration: 0.5, x: "-100%"})
        gsap.from('.eli-' + (i+1), {duration: 0.5, rotationX: [-90, 90], x: "+50%"})


        changeBox()

    }

}
changeImg()
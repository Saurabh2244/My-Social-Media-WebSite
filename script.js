
//SideBar
let menu_item = document.querySelectorAll('.menu-item');

for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener('click', function () {
        for (let j = 0; j < menu_item.length; j++) {

            menu_item[j].classList.remove('active');
        };
        menu_item[i].classList.add('active');

        if (menu_item[i].id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }

        else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
};


//Messages


/*Highlight Message box from icon*/
const messages = document.querySelector('.messages')
const messages_notifications = document.querySelector('#messages-notifications');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

/*Chat Search*/


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
   
    message.forEach(chat =>{
        let name=chat.querySelector('h5').textContent.toLowerCase();

        if(name.indexOf(val) != -1){
            chat.style.display="flex";
        }
        else{
            chat.style.display='none';
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

messages_notifications.addEventListener('click', function () {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(function () {
        messages.style.boxShadow = 'none';
    }, 3000);
    document.querySelector('#messages-notifications .notification-count').style.display = 'none';
})

//Theme-Customization
let theme = document.querySelector('#theme');
let themeModal = document.querySelector('.customize-theme');

/*open model*/
function openThemModal() {
    themeModal.style.display = 'grid';
}
theme.addEventListener("click", openThemModal);

/*close model*/
function closeThemeModal(event) {
    if (event.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener("click", closeThemeModal);


/*Font Size*/
let root = document.querySelector(':root');
let fontSizes = document.querySelectorAll('.choose-size span');
for (let m = 0; m < fontSizes.length; m++) {
    let fontSize;


    fontSizes[m].addEventListener("click", function () {
        for (let j = 0; j < fontSizes.length; j++) {

            fontSizes[j].classList.remove('active');
        };
        fontSizes[m].classList.add('active');

        if (fontSizes[m].classList.contains("font-size-1")) {
            fontSize = '10px';
            root.style.cssText = ("--sticky-top-left:5.4rem");
            root.style.cssText = ("--sticky-top-right:5.4rem");
        }
        else if (fontSizes[m].classList.contains("font-size-2")) {
            fontSize = '13px';
            root.style.cssText = ("--sticky-top-left:5.4rem");
            root.style.cssText = ("--sticky-top-right:-7rem");
        }
        else if (fontSizes[m].classList.contains("font-size-3")) {
            fontSize = '15px';
            root.style.cssText = ("--sticky-top-left:-2rem");
            root.style.cssText = ("--sticky-top-right:-17rem");
        }
        else if (fontSizes[m].classList.contains("font-size-4")) {
            fontSize = '16px';
            root.style.cssText = ("--sticky-top-left:-5rem");
            root.style.cssText = ("--sticky-top-right:-25rem");
        }
        else if (fontSizes[m].classList.contains("font-size-5")) {
            fontSize = '17.3px';
            root.style.cssText = ("--sticky-top-left:-10rem");
            root.style.cssText = ("--sticky-top-right:-25rem");
        }

        //change font size of root html
        document.querySelector('html').style.fontSize = fontSize;
    })

}

//Change Primary Colors
let colorPallet = document.querySelectorAll('.choose-color span');
for (let n = 0; n < colorPallet.length; n++) {
    let primary;
    colorPallet[n].addEventListener('click', function () {
        for (let z = 0; z < fontSizes.length; z++) {

            colorPallet[z].classList.remove('active');
        };
        colorPallet[n].classList.add('active');

        if (colorPallet[n].classList.contains('color-1')) {
            primaryHue = 252;
        }

        else if (colorPallet[n].classList.contains('color-2')) {
            primaryHue = 52;

        }

        else if (colorPallet[n].classList.contains('color-3')) {
            primaryHue = 352;
        }

        else if (colorPallet[n].classList.contains('color-4')) {
            primaryHue = 152;
        }

        else if (colorPallet[n].classList.contains('color-5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);

    })
}



//BackGround

let Bg1 = document.querySelector('.bg-1');
let Bg2 = document.querySelector('.bg-2');
let Bg3 = document.querySelector('.bg-3');

Bg1.addEventListener('click', function () {
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    Bg1.classList.add('active');

    lightColorLightness = '95%';
    whiteColorLightness = '100%';
    darkColorLightness = '17%';

    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
});

Bg2.addEventListener('click', function () {
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    Bg2.classList.add('active');

    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
})

Bg3.addEventListener('click', function () {
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    Bg3.classList.add('active');

    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
})


//Message JavaScript
// let msg=document.querySelector('main .container .right');
// let msgicon=document.querySelector('i.uil.uil-envelope ') ;

// msgicon.addEventListener('click',function(){
//     msg.style.display='grid';
// });

// msgicon.addEventListener('mouseout',function(){
//     msg.style.display='none'
// })



//Right part Message and Friend Request JavaScript
const media = () => {
    let q = matchMedia('(max-width:992px)');

    if (q.matches) {
        let msg = document.querySelector('main .container .right');
        let msgicon = document.querySelector('i.uil.uil-envelope ');

        msgicon.addEventListener('click', function () {
            msg.style.display = 'grid';
        });

        msgicon.addEventListener('mouseout', function () {
            msg.style.display = 'none'
        })
    }


}
onload = media;
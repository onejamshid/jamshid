window.addEventListener('DOMContentLoaded', () => {


//ro'yxatdan o'tish
    const number = document.querySelector('#raqam'),
        ruyxat = document.querySelector('#royxat')


    ruyxat.addEventListener('click', (event) => {
        event.preventDefault()
        if (number.value.length === 13) {
            alert('Siz shu raqam orqali krishingizga ishonchingiz komilmi')
            window.location.href = 'regesteratsiya.html'

            let vazifa = document.getElementById('raqam').value;
            localStorage.setItem('textvalue', vazifa)

        } else {
            alert(`Siz raqamni xato kritdingiz Iltimos keyinroq urunib ko'ring`)
        }


    })

})

//SMS XIZMATI
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('numbers').innerHTML = localStorage.getItem('textvalue')
// Sms tekshiruvi
    const sms = document.querySelector('#sms'),
        inputsms = document.querySelector('#regester')
    sms.addEventListener('click', (event) => {
        event.preventDefault()

        if (inputsms.value !== 123123 && inputsms.value !== '123123') {
            alert('Siz kodni xato kritdingiz iltimos yana bir bor urininb koring')
        } else {
            alert(' Bizning mijozimizga aylanishingizga bir qadam qoldi')
            window.location.href = 'loginin.html'
        }

    })
})


//Ro'yxatdan o'tish parol o'rnatish
window.addEventListener('DOMContentLoaded', () => {
    const login = document.querySelector('#login'),
        parol = document.querySelector('#parol'),
        parolqayta = document.querySelector('#parolqayta'),
        signup = document.querySelector('#signup')
    signup.addEventListener('click', (event) => {
        event.preventDefault()

        if (login.value.length > 7 && parol.value === parolqayta.value) {
            alert(`Sizning amlumotlaringiz ishonchli qo'llarda saqlanadi`)

            window.location.href = 'Paystarhome.html'
//chiqarish <Script>ga
            let vazifa2 = document.getElementById('login').value;
            localStorage.setItem('textvalue1', vazifa2)
            let vazifa3 = document.getElementById('parol').value;
            localStorage.setItem('textvalue2', vazifa3)


        } else {
            alert(` Parol bir biriga mos ekanligini tekshiring`)


        }

    })


})

//Sign in
window.addEventListener('DOMContentLoaded', () => {

    const login = document.querySelector('#login'),
        parol2022 = document.querySelector('#parol2022'),
        signin = document.querySelector('#signin'),
        shox = 'shohrux2022'
    let a = localStorage.getItem('textvalue1');
    let b = localStorage.getItem('textvalue2');


    signin.addEventListener('click', (event) => {
        event.preventDefault()

        if (login.value === a || parol2022.value === b) {
            alert('Xush kelibsiz')
            window.location.href = 'Paystarhome.html'
        } else {
            alert('Login yoki parol xato kiritilgan')
        }
    })


})


//Chiqish
window.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('#profile'),
        chiqish = document.querySelector('#chiqish'),
        tulovbulimi = document.querySelector('#tulovbulimi'),
        kartalar = document.querySelector('#kartalar'),
        cashback = document.querySelector('#cashback'),
        tarix = document.querySelector('#tarix'),
        kredet = document.querySelector('#kridet'),
        convert = document.querySelector('#money')


    profile.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = 'Profile.html'
    })
    convert.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = 'exchange.html'
    })

    chiqish.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = 'index.html'
    })

    tulovbulimi.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = `tulovbo'limi.html`
    })

    kartalar.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = `kartalar.html`
    })

    cashback.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = `cashback.html`
    })

    tarix.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = `tarix.html`
    })

    kredet.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = `PAystarhome.html`
    })
})

//Kartalar
window.addEventListener('DOMContentLoaded', () => {

    const submit = document.querySelector('#teksubmit'),
        booklist = document.querySelector('#book-list'),
        cardraqami = document.querySelector('#cardraqam'),
        ismfamiliya = document.querySelector('#ismfamilya'),
        oy = document.querySelector('#oy'),
        yil = document.querySelector('#yil'),
        bosh1 = document.querySelector('#bosh1'),
        bosh2 = document.querySelector('#bosh2')

    submit.addEventListener('click', (event) => {
        event.preventDefault()


// alert chiqarish  uchun
        if (cardraqami.value === '' || ismfamiliya.value === '' || oy.value === '' || yil.value === '') {
            alert('Siz hali hech nima kritmagansiz')
        } else {
//yangi qator

            const yangiqator = document.createElement('tr')
//roman nomi

            const cardraqams = document.createElement('td')
            cardraqams.innerHTML = cardraqami.value
            yangiqator.appendChild(cardraqams)
//ism familiya

            const ismfamilyas = document.createElement('td')
            ismfamilyas.innerHTML = ismfamiliya.value
            yangiqator.appendChild(ismfamilyas)
//oy

            const oys = document.createElement('td')
            oys.innerHTML = oy.value
            yangiqator.appendChild(oys)
//yil
            const yils = document.createElement('td')
            yils.innerHTML = yil.value
            yangiqator.appendChild(yils)


            // Displayga chiqarish uchun
            booklist.appendChild(yangiqator)

// inputdagi qiymatlarni  yuqatish uchun
            cardraqami.value = '';
            ismfamiliya.value = '';
            oy.value = bosh1.value;
            yil.value = bosh2.value;

        }

    })
})

//tulovlar bo'limi
window.addEventListener('DOMContentLoaded', () => {

    const submit2 = document.querySelector('#teksubmit2'),
        booklist2 = document.querySelector('#book-list2'),
        cardraqami2 = document.querySelector('#cardraqam2'),
        ismfamiliya2 = document.querySelector('#ismfamilya2'),
        oy2 = document.querySelector('#oy2'),
        yil2 = document.querySelector('#yil2'),
        bosh3 = document.querySelector('#bosh3')

    submit2.addEventListener('click', (event) => {
        event.preventDefault()


// alert chiqarish  uchun
        if (cardraqami2.value === '' || ismfamiliya2.value === '' || oy2.value === '' || yil2.value === '') {
            alert('Siz hali hech nima kritmagansiz')
        } else {


//yangi qator

            const yangiqator = document.createElement('tr')
//roman nomi

            const cardraqams = document.createElement('td')
            cardraqams.innerHTML = cardraqami2.value
            yangiqator.appendChild(cardraqams)
//ism familiya

            const ismfamilyas = document.createElement('td')
            ismfamilyas.innerHTML = ismfamiliya2.value
            yangiqator.appendChild(ismfamilyas)
//oy

            const oys = document.createElement('td')
            oys.innerHTML = oy2.value + '$'

            yangiqator.appendChild(oys)
//yil
            const yils = document.createElement('td')
            yils.innerHTML = yil2.value
            yangiqator.appendChild(yils)
//vaqti
            let vazifa20221 = oy2.value + '$'
            let vazifa2022 = (oy2.value / 10) + '$'
            let ism = ismfamiliya2.value
            let submit = cardraqami2.value

            localStorage.setItem('qiyn', vazifa2022)
            localStorage.setItem('big', vazifa20221)
            localStorage.setItem('oson', ism)
            localStorage.setItem('ok', submit)
            // Displayga chiqarish uchun
            booklist2.appendChild(yangiqator)

// inputdagi qiymatlarni  yuqatish uchun
            cardraqami2.value = '';
            ismfamiliya2.value = '';
            oy2.value = '';
            yil2.value = bosh3.value;


        }

    })
})

// Caashback
window.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list');
    let timeNow = new Date(),
        sana = timeNow.getDate(),
        vaqt = `${timeNow.getHours()}:${timeNow.getMinutes()}`,
        yil = timeNow.getFullYear()
    let shox = localStorage.getItem('qiyn');
    let ismlar = localStorage.getItem('oson');
    let knopka = localStorage.getItem('ur');


//yangi qator


    const yangiqator = document.createElement('tr')
//cashback

    const cardraqams = document.createElement('td')
    cardraqams.innerHTML = shox
    yangiqator.appendChild(cardraqams)
//ism familiya

    const ismfamilyas = document.createElement('td')
    ismfamilyas.innerHTML = ismlar
    yangiqator.appendChild(ismfamilyas)
//oy

    const oys = document.createElement('td')
    oys.innerHTML = sana
    yangiqator.appendChild(oys)
//Vaqt
    const vaqts = document.createElement('td')
    vaqts.innerHTML = vaqt
    yangiqator.appendChild(vaqts)
//YIL
    const yils = document.createElement('td')
    yils.innerHTML = yil
    yangiqator.appendChild(yils)


    // Displayga chiqarish uchun
    list.appendChild(yangiqator)

})


// TARIX
window.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list2022');

    let shox = localStorage.getItem('qiyn');
    let ismlar = localStorage.getItem('oson');
    let pul = localStorage.getItem('big');
    let card = localStorage.getItem('ok');

//yangi qator

    const yangiqator = document.createElement('tr')
//summa
    const ismfamilyas = document.createElement('td')
    ismfamilyas.innerHTML = pul
    yangiqator.appendChild(ismfamilyas)

//cashback
    const cardraqams = document.createElement('td')
    cardraqams.innerHTML = shox
    yangiqator.appendChild(cardraqams)
//Ismlar
    const oys = document.createElement('td')
    oys.innerHTML = ismlar
    yangiqator.appendChild(oys)

//card raqami
    const cards = document.createElement('td')
    cards.innerHTML = card
    yangiqator.appendChild(cards)

    // Displayga chiqarish uchun
    list.appendChild(yangiqator)

})


//profile
window.addEventListener('DOMContentLoaded', () => {


    document.querySelector('#input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('#img');
            img.src = URL.createObjectURL(this.files[0]);
            img.onload = imageIsLoaded;

            document.getElementById('profilim').innerHTMl === img;
        }
    });

    function imageIsLoaded(e) {
        alert('Shu photoni yuklaysizmi');
    }

    //   document.getElementById('profiletelefon').innerHTML = localStorage.getItem('textvalue')
    let a = document.getElementById('profilelogin').innerHTML = localStorage.getItem('textvalue')
    let b = document.getElementById('profilelogin1').innerHTML = localStorage.getItem('textvalue1')
    let c = document.getElementById('profilelogin2').innerHTML = localStorage.getItem('textvalue2')


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const hamma = document.querySelector('#barchasi'),
        profile1 = document.querySelector('#profilelogin'),
        profile2 = document.querySelector('#profilelogin1'),
        profile3 = document.querySelector('#profilelogin2')

    hamma.addEventListener('click', (event) => {
        event.preventDefault()

        alert(`Malumotlariniz o'chirilishini hohlaysizmi`)

        window.location.href = 'index.html'
    })



})










const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the dome
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${currency_one}`)
        .then((res) => res.json())
        .then((data) => {
            //   console.log(data);
            const rate = data.conversion_rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();

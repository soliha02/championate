
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '4f1e71d847mshd34a1ad6ccd41d1p1087adjsnb1b12e15aaad',
//         'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
//     }
// };



// const btn = document.getElementById('btn')
// const moneyAmount = document.getElementById('moneyAmount')
// const err = document.getElementById('err')
// const resultH2 = document.getElementById('result')
// const to = document.getElementById('to')
// const from = document.getElementById('from')

// btn.addEventListener('click', () => {
//     if (moneyAmount.value < 0 && from.value=="" || to.value=="") {
//         if(moneyAmount.value>0){
//             err.style = 'display:block'
//             err.textContent = "ILtimos Pul birligini tanlang!!"
//         }else{
//             err.style = 'display:block'
//             err.textContent = "ILtimos Pul miqdorini to'g'ri kiritng!!"
//         }

//     } else {
//         try {
//             const url = `https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${from.value}`;
//             fetch(url, options)
//                 .then((res) => res.json())
//                 .then((json) => calc(json));



//         } catch (error) {
//             console.error(error);
//         }
//     }
// })

// function calc(data) {
//    console.log(data);
   

//     err.style = 'display:none';
//     resultH2.style = 'display:block'
//     resultH2.textContent = 'Natija:' + data.result[to.value] * moneyAmount.value;

// }

















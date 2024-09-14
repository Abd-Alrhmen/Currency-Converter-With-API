function convertCurrency() {
    const amount = document.querySelector(".amount").value;
    const from = document.querySelector(".from").value;
    const to = document.querySelector(".to").value;
    const resultDiv = document.querySelector(".result");

    if(amount && from && to){
        fetch(`https://v6.exchangerate-api.com/v6/448b6dccd756d86b5051f504/latest/${from}`)
        .then((ele) => ele.json() )
        .then((data) => {
            // console.log(data);
            const rate = data.conversion_rates[to];
            const result = (amount * rate).toFixed(2);
            resultDiv.innerHTML=`${amount} ${from} = ${result} ${to}`
        });
        
    }else {
        resultDiv.innerHTML =`Please Fill All Fields`
    };

};

// const Quotes = async () => {
//     const response = await fetch('https://dummyjson.com/quotes/random');
//     const data = await response.json();
//     let container = document.getElementById('quote');
//     container.innerText=data.quote;
// }

const Quotes = () => {
    fetch('https://dummyjson.com/quotes/random')
        .then(response=>response.json())
        .then(data=>{
            const container = document.getElementById('quote');
            container.innerText=data.quote;
        })
        .catch(error=>{
            const container = document.getElementById('quote');
            container.innerText=error;
        })
}
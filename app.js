const p = document.querySelector('#quote');

const changeQuote = async () => 
{
    try 
    {
        const response = await fetch('https://motivational-spark-api.vercel.app/api/quotes/random');
        const data = await response.json();
        console.log(data);
        const quote = data.quote;
        p.innerHTML = quote;
    }
    catch(e)
    {
        console.log(e);
        p.innerHTML = "Failed to load quote";    
    }
}

const button = document.querySelector('#btn');
button.addEventListener('click', changeQuote);

window.addEventListener('load', init)

async function init() {
    await fetchingData(); 
    await renderCountries(countryDatas);
}

let countryDatas =[];

async function fetchingData() {
    let resource = await fetch ("https://restcountries.eu/rest/v2/all");
    let result = await resource.json();

    const AllCountry = result.map(country => {
        
        return {
            name: country.name,
            codeAlpha: country.alpha2Code,
            capital: country.capital,
            continent: country.region,
            areaT: country.area,
            currency:country.currencies[0].name,
            currSymbol: country.currencies[0].symbol,
            flag: country.flag
        }
        
    });
    
   return countryDatas= [...AllCountry];       
}

async function renderCountries (countryDatas) {
    const ul = document.getElementById("countryList")

    await countryDatas.forEach(country => {
        const lis =  document.createElement("li")
        const content = `( ${country.name})`
        lis.innerText=content

        ul.appendChild(lis)
    })   
    return ul;
}

  



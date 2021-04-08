window.addEventListener('load', init)

async function init() {
    fetchingData();
}

async function fetchingData() {
    let resource = await fetch ("https://restcountries.eu/rest/v2/all");
    let result = await resource.json();
    console.log (result);

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
   
    console.log (AllCountry);
    return AllCountry
}






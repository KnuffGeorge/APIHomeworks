document.querySelector('button').addEventListener("click", getFetch)

function getFetch(){
    let inputVal = document.querySelector('input').value
    const url = `https://api.openbrewerydb.org/breweries?by_city=${inputVal}&per_page=50`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            if(data.length == 0){
                document.querySelector('.breweryName').innerText = "No breweries found in your city :("   
            }else{
            let breweryNumber = Math.floor(Math.random() * data.length)    
            document.querySelector('.breweryName').innerText = data[breweryNumber].name
            document.querySelector('.breweryAddress').innerText = data[breweryNumber].street
            document.querySelector('a.breweryWebsite').href = data[breweryNumber].website_url
            document.querySelector('a.breweryLocation').href = `https://www.google.com/maps/search/?api=1&query=${data[breweryNumber].latitude}%2C${data[breweryNumber].longitude}&query=${data[breweryNumber].name}`
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
        

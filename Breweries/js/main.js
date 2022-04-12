function getFetch(){
    let inputVal = Vancouver
    }
    const url = `https://api.openbrewerydb.org/breweries?by_city=vancouver&per_page=50`
    let breweryNumber = Math.random() * 20
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            for (let i = 0; i < data.length; i++)
            {console.log(data[i])}
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

        

        class BreweryInfo {
            constructor(productData) {
                this.brand = productData.brands
                this.name = productData.product_name
                this.ingredients = productData.ingredients
                this.image = productData.image_url
            }
        }
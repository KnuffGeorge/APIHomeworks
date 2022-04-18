
document.querySelector('.yes').addEventListener("click", dogTime)
document.querySelector('.no').addEventListener("click", noMoreDogs)

function dogTime(){
    const url = `https://random.dog/woof.json`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            if(data.url.endsWith('.mp4') || data.url.endsWith('.webm')){
                document.querySelector('iframe').classList.remove('hidden')
                document.querySelector('iframe').src= data.url
                document.querySelector('img').classList.add('hidden')
                document.querySelector('img').src=""
            }else{
            document.querySelector('img').src=data.url
            document.querySelector('img').classList.remove('hidden')
            document.querySelector('iframe').classList.add('hidden')
            }
            document.querySelector('h3').innerText=""
            document.querySelector('h2').classList.remove('hidden')
            document.querySelector('.no').classList.remove('hidden')
            document.querySelector('.yes').innerText="dang, that's a dope dog, show me another!"
            document.querySelector('.no').innerText="it's hideous! get it off my screen!"
            })
        
        }

function noMoreDogs(){
    document.querySelector('img').classList.add('hidden')
    document.querySelector('iframe').classList.add('hidden')
    document.querySelector('h3').innerText="If you clicked that button you're most likely a psychopath"
    document.querySelector('.yes').innerText="I'm sorry! Show me more dogs please"
    document.querySelector('.no').classList.add('hidden')
    document.querySelector('h2').classList.add('hidden')


}
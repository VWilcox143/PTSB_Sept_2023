const disneyURL = "https://api.disneyapi.dev/character";
const disneyNum = Math.floor(Math.random()*(50-1)+1);




const Info = async(x,y) => {
    try {
        let res = await fetch(x);
        //console.log(res);
        let results = await res.json();
        let data = results.data[y];
        console.log(data);
        console.log(data.name);
        console.log(data.imageUrl);
        
        
    } catch (err) {
        console.error(err)
    }
}

Info(disneyURL, disneyNum);
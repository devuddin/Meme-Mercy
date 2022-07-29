const getMeme = async () =>{
    const footer = document.getElementById("footer")
    const load = document.querySelector('.loading');
    try{

        const memeData = document.querySelector('.content');
        const res = await fetch('https://api.imgflip.com/get_memes');
        const mydata = await res.json();
        const meme = mydata.data.memes;
        meme.reverse();
        meme.forEach(element => {
            // console.log(element.name);
            load.style.display="none";
            memeData.insertAdjacentHTML("afterbegin",`
        <div class="card" style="width: 18rem;" data-aos="zoom-in-up">
        <img id="${element.id}" src="${element.url}"alt="Meme img" loading="lazy" >
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <button href="#" class="btn" onclick="downloadImg('${element.url}')">Download Template</butt>
        </div>
        </div>
        `);
        
    });
}catch(error){
    load.innerHTML = "sorry we are unable to get data 😔"
    footer.style.display="none";
    document.body.style.height="100vh";
}
} 
getMeme();
// console.log("first")
// console.log(img);
        const downloadImg = (getImgPath) => {
            // console.log(getImg);
            let fileName = getImgPath.substring(getImgPath.lastIndexOf('/')+1);
            // console.log(fileName);
            saveAs(getImgPath,fileName);
            // const img = document.querySelector('img');
            // console.log(getImg);
            // console.log(img)
        }
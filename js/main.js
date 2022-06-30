mainData()

async function mainData()
{
    try {
        let url="https://saathealth.herokuapp.com/video"
        let res=await fetch(url)
        let data=await res.json()
        
        append(data)

    } catch (error) {
       console.log(error); 
    }
     
}
function append(data)
{
   let main=document.getElementById("main")
   main.innerText=""

   data.map((ele)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("class","mainImage")
    img.src=ele.imageLink;

    let id=document.createElement("p")
    id.innerText=ele.id

    let title=document.createElement("p")
    title.innerText=ele.title

    let button=document.createElement("button")
    button.innerText="play Video"
    button.addEventListener("click",function(){
        localStorage.setItem("videoLink",JSON.stringify(ele.VideoLink))
        localStorage.setItem("imageLink",JSON.stringify(ele.imageLink))
         window.location="../html/videoPage.html"
    })
 
    div.append(img,title,id,button)
    main.append(div)
   })

   


   


}
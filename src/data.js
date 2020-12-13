export const getDataRyM=()=>{
  const url='data/rickandmorty.json'
  fetch(url)
    .then(result=>result.json())
    .then(resp=>setHtml(resp.results))
}

let setHtml=(dataRyM)=>{
  let content=document.querySelector(".content")
  let html=''
  dataRyM.forEach(charter=>{
    let {image,name,id}=charter
    html+=`
    <div class="character">
        <img src="${image}">
        <div class="name-character">${name}</div>
      </div>
    `
    console.log(id)
  })
  content.innerHTML=html
}
async function populate(){
    const requesturl = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
    const superHeroes = await requesturl.json();
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}
function populateHeader{
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1)
    const myPara = document.createElement("p");
    myPara.textContent= 'Hometown: ${obj.homeTown} //Formed: ${obj.formed}';
    header.appendChild(myPara);
}
function populateHeroes(obj){
    const section = document.querySelector("section");
    const heroes = obj.members;
    for (const hero of heroes){
        const myArticle = document.createElement("article");
        myArticle.innerHTML =`
        <h2>${hero.name}</h2>
        <p>Secret identity: ${hero.secretIdentity}</p>
        <p>Age: ${hero.age}</p>
        <p>Superpowers:</p>
        <ul>
            ${hero.power.map(power => '<li>${power}</li>').join("")}
        </ul>
        `;
    }
    section.appendChild(myArticle);
}

populate();
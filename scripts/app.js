const getVal= () =>{ 
  
  
    let txt = document.getElementById("search-box").value;
   const txt1 = txt.toLowerCase();
   const X = txt1.charAt(0).toUpperCase()+txt1.slice(1);
   async function createPage() {
  let response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${X}.json`,
    {
      method: "GET",
    }
  )
  let data = await response.json();

 document.getElementById("info").style.display='';
 
        let spellQ = data.data[X].spells[0].image.full;
        let spellW = data.data[X].spells[1].image.full;
        let spellE = data.data[X].spells[2].image.full;
        let spellR = data.data[X].spells[3].image.full;
        let passive = data.data[X].passive.image.full;

  document.getElementById("iconone").style.background= `url(https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/${spellQ})`;
  document.getElementById("icontwo").style.background= `url(https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/${spellW})`;
  document.getElementById("iconthree").style.background= `url(https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/${spellE})`;
  document.getElementById("iconfour").style.background= `url(https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/${spellR})`;
  document.getElementById("iconfive").style.background= `url(https://ddragon.leagueoflegends.com/cdn/12.2.1/img/passive/${passive})`;
  

     

  document.getElementById("intro").innerHTML = `
      <h2>${data.data[X].title}</h2>
      <h1>${data.data[X].name}</h1>`;


  

  document.getElementById("general-info").innerHTML = `
    <p style="color:lightgrey">Role:</p>
    <p>${data.data[X].tags}</p>
    <p style="color:lightgrey">Resource :</p>
    <p>${data.data[X].partype}</p>`;
  document.getElementById("base-stats").innerHTML = `
    <p style="color:lightgrey">Health :</p>
    <p>${data.data[X].stats.hp}</p>
    <p style="color:lightgrey">Health Regen :</p>
    <p>${data.data[X].stats.hpregen}</p>
    <p style="color:lightgrey">Mana/Energy :</p>
    <p>${data.data[X].stats.mp}</p>
    <p style="color:lightgrey">Mana Regen :</p>
    <p>${data.data[X].stats.mpregen}</p>
    <p style="color:lightgrey">Attack Damage :</p>
    <p>${data.data[X].stats.attackdamage}</p>
    <p style="color:lightgrey">Attack Range :</p>
    <p>${data.data[X].stats.attackrange}</p>
    <p style="color:lightgrey">Crit Damage :</p>
    <p>${data.data[X].stats.crit}</p>
    <p style="color:lightgrey">Armor :</p>
    <p>${data.data[X].stats.armor}</p>
    <p style="color:lightgrey">Magic Resist :</p>
    <p>${data.data[X].stats.spellblock}</p>
    <p style="color:lightgrey">Attack Speed :</p>
    <p>${data.data[X].stats.attackspeed}</p>
    <p style="color:lightgrey">Move Speed :</p>
    <p>${data.data[X].stats.movespeed}</p>`;



    }
    createPage();

  

}

    
 
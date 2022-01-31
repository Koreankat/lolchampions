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
 
        
  // document.getElementsByClassName("icon-btn").src= 'https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/'+X+'Q.png'
  
// abilityIconOne.src='https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/'+X+'Q.png';
// document.body.appendChild(abilityIconOne);
//    let  abilityIconTwo= document.getElementsByClassName("icontwo");
//    let  abilityIconThree= document.getElementsByClassName("iconthree");
//    let  abilityIconFour= document.getElementsByClassName("iconfour");
//    let abilityIconFive= document.getElementsByClassName("iconfive");

   

//      abilityIconOne=  'https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/'+X+'Q.png';
//      abilityIconTwo=  'https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/'+X+'W.png';
//      abilityIconThree='https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/'+X+'E.png';
//      abilityIconFour= 'https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/'+X+'R.png'; 
//      abilityIconFive= 'https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/'+X+'_Passive.png';

// document.getElementsByClassName("iconone")
// .style=`background-image:url(https://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/${X}Q.png)`

     

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
let team = [
    { name: "Wayne Barnett",    role: "Founder & CEO",         image: "wayne-barnett-founder-ceo.jpg" },
    { name: "Angela Caroll",    role: "Chief Editor",          image: "angela-caroll-chief-editor.jpg" },
    { name: "Walter Gordon",    role: "Office Manager",        image: "walter-gordon-office-manager.jpg" },
    { name: "Angela Lopez",     role: "Social Media Manager",  image: "angela-lopez-social-media-manager.jpg" },
    { name: "Scott Estrada",    role: "Developer",             image: "scott-estrada-developer.jpg" },
    { name: "Barbara Ramos",    role: "Graphic Designer",      image: "barbara-ramos-graphic-designer.jpg" },
];

console.log(team)

for (const key in team) {
    console.log(team[key]);       
}

for (let i = 0; i < team.length; i++) {

    const teamMember = team[i];
    const contentElement = document.getElementById("team");
    const imgPath = "./img";
    let contentHTML = `<div class="card">`;
    contentHTML += `<h2>${teamMember.name}</h2>`;
    contentHTML += `<h3>${teamMember.role}</h3>`;
    contentHTML += `<img src="${imgPath}/${teamMember.image}" alt="${teamMember.name}" />`;
    contentHTML += `</div>`;
    contentElement.innerHTML += contentHTML;

    console.log(`Il membro ${teamMember.name} lavora come ${teamMember.role}`);
}
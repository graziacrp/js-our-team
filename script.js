
//MILESTONE 0: Creo array di oggetti con informazioni fornite
const team = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      foto: 'angela-caroll-chief-editor.jpg',
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'walter-gordon-office-manager.jpg',
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: 'scott-estrada-developer.jpg',
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  
  
  //MILESTONE 1: Stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

  let userInfos = "";

for (let i = 0; i < team.length; i++) {
    userInfos = team[i];
    console.log(userInfos.nome, userInfos.ruolo, userInfos.foto);
}


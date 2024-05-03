const cardInfo = require("../cardsInfo");
const Card = require('../../DB/models/models');

//const db = require('../../DB/mysql');
//const TABLE = 'cards';

const hola = (req, res)=>{
  res.status(200).send(res.data);
}

//posteando cartas a bd
const postCards = async (req, res)=>{
  try{
    const cardsData = req.body;
    const createdCards = await Promise.all(cardsData.map(async(cardData)=>{
    const newCard = await Card.create(cardData);
    return newCard;
  }));

  res.status(201).send(createdCards);

  }catch(err){
    console.error('problemas en el post:', err);
  }

  
  /* console.log(req.body);
  let data = req.body;
  cardInfo.cards.push(data);
  res.status(200).send(data); */
};

const getCardsInfo = async(req, res)=>{
  const cards = await Card.findAll();
  res.status(200).send(cards);
}

function ejemplo(){
  //return db.findAll(TABLA);
}

module.exports = {
  hola,
  postCards,
  getCardsInfo
}
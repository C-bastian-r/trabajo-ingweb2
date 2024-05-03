const Card = require('../../DB/models/models');
const response = require('../../utilies/response');


const hola = (req, res)=>{
  res.status(200).send(res.data);
}

/**
 * toma el array de cards del request e inserta cada elemento en
 * la base de datos
 * @param {Card[]} req -> se espera un array de objetos
 * @param {*} res 
 */
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

};

/**
 * Devuelve las cartas de la base de datos
 * @param {*} res
 */
const getCardsInfo = async(req, res)=>{
  try{
    const cards = await Card.findAll();
    response.success(req,res, 200, cards);
    /* res.status(200).send(cards); */
  }catch(err){
    console.err('error al recuperar los datos:', err);
  } 
};

module.exports = {
  hola,
  postCards,
  getCardsInfo
}
const Card = require('../../DB/models/models');
const response = require('../../utilies/response');
const axios = require('axios');


const URL = "https://rickandmortyapi.com/api/character"

/**
 * manda al frontend la informacion de un api
 */
const getApiInfo = async(req, res)=>{
  try {
    const response = await axios.get(URL);
    const data = response.data;
    res.status(200).send(data)
  }catch(err){
    console.log(err);
  }
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

/**
 * Elimina un elemento de la bd de cards
 * @response -> tabla de la bd actualizada
 */
const deleteById = async(req, res)=>{
  try{
    const id = req.params.id;
    const cardItem = await Card.findByPk(id);
    console.log(cardItem);
    await cardItem.destroy();
    const updatedCards = await Card.findAll();
    response.success(req,res, 200, updatedCards);
  }catch(err){
    console.log(err);
  }
};

/**
 * Encuentra un elemento en la bd
 * @response -> elemento encontrado
 */
const findById = async(req, res)=>{
  const id = req.params.id;
  try {
  const card = await Card.findByPk(id)

  response.success(req,res, 200, card)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  postCards,
  getCardsInfo,
  getApiInfo,
  deleteById,
  findById
}
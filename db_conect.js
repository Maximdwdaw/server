const { MongoClient } = require('mongodb');

// URL для подключения к MongoDB
const url = 'mongodb+srv://maximloza0daw:Lozamaxim2@database.bchqu1c.mongodb.net/?retryWrites=true&w=majority'; // Замените на свой URL
const uri = "mongodb+srv://maximloza0daw:<Lozamaxim2>@database.bchqu1c.mongodb.net/?retryWrites=true&w=majority";

// Имя базы данных и коллекции
const dbName = 'ggg';
const collectionName = 'gggf';

async function db() {
  const client = new MongoClient(uri);

  try {
    // Подключение к серверу MongoDB
    await client.connect();

    // Выбор базы данных
    const db = client.db(dbName);

    // Получение коллекции (или создание, если не существует)
    const collection = db.collection(collectionName);

    return collection;
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error);
    return null;
  }
}

module.exports = db;
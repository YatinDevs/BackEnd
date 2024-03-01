# MongoDb

- Database --> has Collections

- example : Collections
- products
- users

- test> show dbs
  admin 40.00 KiB
  config 72.00 KiB
  local 40.00 KiB
  test> use local
  switched to db local
  local> ls
  ReferenceError: ls is not defined (Are you trying to run a script written for the legacy shell? Try running `snippet install mongocompat`)
  local> show collections
  startup_log
  local> db.startup_log.find()

- test> show db
  MongoshInvalidInputError: [COMMON-10001] 'db' is not a valid argument for "show".
  test> show databases
  admin 40.00 KiB
  config 72.00 KiB
  local 40.00 KiB
  test> use ecommerce
  switched to db ecommerce
  ecommerce> db.products.insertOne({'title':'iphone13'})
  {
  acknowledged: true,
  insertedId: ObjectId('658fe85a06e8db553ad20131')
  }
  ecommerce>

-
- ecommerce> db.products.insertOne( {
  ... "id": 1,
  ... "title": "iPhone 9",
  ... "description": "An apple mobile which is nothing like apple",
  ... "price": 549,
  ... "discountPercentage": 12.96,
  ... "rating": 4.69,
  ... "stock": 94,
  ... "brand": "Apple",
  ... "category": "smartphones",
  ... "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ... "images": [
  ... "https://i.dummyjson.com/data/products/1/1.jpg",
  ... "https://i.dummyjson.com/data/products/1/2.jpg",
  ... "https://i.dummyjson.com/data/products/1/3.jpg",
  ... "https://i.dummyjson.com/data/products/1/4.jpg",
  ... "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ... ]
  ... })
  {
  acknowledged: true,
  insertedId: ObjectId('658fea6d06e8db553ad20133')
  }

- ecommerce> db.products.find()
  [
  { \_id: ObjectId('658fe85a06e8db553ad20131'), title: 'iphone13' },
  { \_id: ObjectId('658fe91006e8db553ad20132'), title: 'iphone13' },
  {
  \_id: ObjectId('658fea6d06e8db553ad20133'),
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
  'https://i.dummyjson.com/data/products/1/1.jpg',
  'https://i.dummyjson.com/data/products/1/2.jpg',
  'https://i.dummyjson.com/data/products/1/3.jpg',
  'https://i.dummyjson.com/data/products/1/4.jpg',
  'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
  ]
  }
  ]

-
- db.products.insertMany([{},{},{}])

- db.products.findOne({ title: 'Infinix INBOOK' })
- returns singular object
  {
  \_id: ObjectId('658feaff06e8db553ad2013b'),
  id: 9,
  title: 'Infinix INBOOK',
  description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
  price: 1099,
  discountPercentage: 11.83,
  rating: 4.54,
  stock: 96,
  brand: 'Infinix',
  category: 'laptops',
  thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
  images: [
  'https://i.dummyjson.com/data/products/9/1.jpg',
  'https://i.dummyjson.com/data/products/9/2.png',
  'https://i.dummyjson.com/data/products/9/3.png',
  'https://i.dummyjson.com/data/products/9/4.jpg',
  'https://i.dummyjson.com/data/products/9/thumbnail.jpg'
  ]
  }

- ecommerce> db.products.find({ title: 'Infinix INBOOK' })
- returns array as its form multiple values
  [
  {
  \_id: ObjectId('658feaff06e8db553ad2013b'),
  id: 9,
  title: 'Infinix INBOOK',
  description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
  price: 1099,
  discountPercentage: 11.83,
  rating: 4.54,
  stock: 96,
  brand: 'Infinix',
  category: 'laptops',
  thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
  images: [
  'https://i.dummyjson.com/data/products/9/1.jpg',
  'https://i.dummyjson.com/data/products/9/2.png',
  'https://i.dummyjson.com/data/products/9/3.png',
  'https://i.dummyjson.com/data/products/9/4.jpg',
  'https://i.dummyjson.com/data/products/9/thumbnail.jpg'
  ]
  }
  ]

- ecommerce> db.products.find({ title: {$eq:'Infinix INBOOK'} })
- eq operator - equal to
- ecommerce> db.products.find({ title: {$gt:'Infinix INBOOK'} })
- gt - greater than - compares maybe string length here
- returns array as its form multiple values
  [
  {
  \_id: ObjectId('658feaff06e8db553ad2013b'),
  id: 9,
  title: 'Infinix INBOOK',
  description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
  price: 1099,
  discountPercentage: 11.83,
  rating: 4.54,
  stock: 96,
  brand: 'Infinix',
  category: 'laptops',
  thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
  images: [
  'https://i.dummyjson.com/data/products/9/1.jpg',
  'https://i.dummyjson.com/data/products/9/2.png',
  'https://i.dummyjson.com/data/products/9/3.png',
  'https://i.dummyjson.com/data/products/9/4.jpg',
  'https://i.dummyjson.com/data/products/9/thumbnail.jpg'
  ]
  }
  ]

  [
  {
  \_id: ObjectId('658fea6d06e8db553ad20133'),
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
  'https://i.dummyjson.com/data/products/1/1.jpg',
  'https://i.dummyjson.com/data/products/1/2.jpg',
  'https://i.dummyjson.com/data/products/1/3.jpg',
  'https://i.dummyjson.com/data/products/1/4.jpg',
  'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
  ]
  },
  {
  \_id: ObjectId('658feaff06e8db553ad20138'),
  id: 6,
  title: 'MacBook Pro',
  description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
  price: 1749,
  discountPercentage: 11.02,
  rating: 4.57,
  stock: 83,
  brand: 'Apple',
  category: 'laptops',
  thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
  images: [
  'https://i.dummyjson.com/data/products/6/1.png',
  'https://i.dummyjson.com/data/products/6/2.jpg',
  'https://i.dummyjson.com/data/products/6/3.png',
  'https://i.dummyjson.com/data/products/6/4.jpg'
  ]
  },
  {
  \_id: ObjectId('658feaff06e8db553ad2013b'),
  id: 9,
  title: 'Infinix INBOOK',
  description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
  price: 1099,
  discountPercentage: 11.83,
  rating: 4.54,
  stock: 96,
  brand: 'Infinix',
  category: 'laptops',
  thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
  images: [
  'https://i.dummyjson.com/data/products/9/1.jpg',
  'https://i.dummyjson.com/data/products/9/2.png',
  'https://i.dummyjson.com/data/products/9/3.png',
  'https://i.dummyjson.com/data/products/9/4.jpg',
  'https://i.dummyjson.com/data/products/9/thumbnail.jpg'
  ]
  }
  ]

- test> show dbs
- test> use ecommerce
- local> ls
- local> show collections
- local> db.startup_log.find()

- ecommerce> db.products.insertOne({})
- db.products.insertMany([{},{},{}])

- db.products.findOne({ title: 'Infinix INBOOK' })
- returns singular object

- ecommerce> db.products.find({ title: 'Infinix INBOOK' })
- returns array as its for multiple values

- ecommerce> db.products.find({ title: {$eq:'Infinix INBOOK'} })
- eq operator - equal to

- ecommerce> db.products.find({ title: {$gt:'Infinix INBOOK'} })
- gt - greater than - compares maybe string length here
- returns array as its form multiple values

- ecommerce> db.products.find({ title: 'Infinix INBOOK' })
- returns array as its form multiple

- db.products.find({ rating: {$gt:4.5} })
- db.products.find({ rating: {$lt:4.5} ,id:{$gt:1}})
- db.products.find($and:[{rating: {$gt:4.5} },{id:{$gt:1}}])
- db.products.find({$or:[{rating: {$gt:4.5} },{id:{$gt:5}}]})

- db.products.find({'price':{$gt:600}},{'title':1,'price':1,'\_id':0})
- to show result without id
- fetching particular info with condition

- update : $set
- db.products.updateOne({'id':1},{$set:{'price':999}})

ecommerce> db.products.updateOne({'id':1},{$set:{'price':999}})
{
acknowledged: true,
insertedId: null,
matchedCount: 1,
modifiedCount: 1,
upsertedCount: 0
}

- db.products.updateOne({'id':1},{$set:{'amount':999}})
- create new property if name wrong we can restrain it

- update + insert - overwrites
- db.products.updateOne({'id':12},{$set:{'price':999}},{'upsert':1})
- db.products.updateMany({'id':{$gt:9}},{$set:{'price':999}},{'upsert':1})

- db.products.replaceOne({'id':3},{{'price':1999}})
- replaces whole data with give data overrides

- db.products.deleteOne({'\_id': ObjectId('658feaff06e8db553ad20135')})
- db.products.deleteMany({price:999})

- Mongodb Atlas

- YatinDevs - userName
- Nama21199@ - pass

- to store password and security in Node
- step 1: open node REPL
- node
- step 2: process.env
- Enviornment variable

instead we do :
npm i dotenv
dot.env


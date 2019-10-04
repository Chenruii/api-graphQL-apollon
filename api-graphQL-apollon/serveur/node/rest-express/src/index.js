const express = require('express')
const bodyParser = require('body-parser')
const { prisma } = require('./generated/prisma-client')

const app = express()

app.use(bodyParser.json())

app.post(`/user`, async (req, res) => {
  const result = await prisma.createUser({
    ...req.body,
  })
  res.json(result)
})

app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.createPost({
    title: title,
    content: content,
    author: { connect: { email: authorEmail } },
  })
  res.json(result)
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.updatePost({
    where: { id },
    data: { published: true },
  })
  res.json(post)
})

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.deletePost({ id })
  res.json(post)
})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post({ id })
  res.json(post)
})

app.get('/feed', async (req, res) => {
  const posts = await prisma.posts({ where: { published: true } })
  res.json(posts)
})

app.get('/filterPosts', async (req, res) => {
  const { searchString } = req.query
  const draftPosts = await prisma.posts({
    where: {
      OR: [
        {
          title_contains: searchString,
        },
        {
          content_contains: searchString,
        },
      ],
    },
  })
  res.json(draftPosts)
})

// product CRUD
app.post(`/product`, async (req, res) => {
  const {price,name,category,description} = req.body;
  const result =await prisma.createProduct({
    price :price,
    name :name,
    description:description,
    category :category
  });

  app.get('/product/:id', async(req, res) => {
    const { id } = req.params;
    const product = await prisma.product( { id });
    res.json(product)
  });
  app.get(`/product`, async (req, res) => {
    const post = await prisma.products();
    res.json(post)
  });
  app.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    const { quantity, description, category, price, name, image} = req.body;
    const product = await prisma.updateProduct({
      where : { id },
      data : {
        quantity: quantity,
        description: description,
        category: category,
        price: price,
        name: name,
        image: image
      }
    });
    res.json(product)
  });
  app.delete('/product/:id', async (req, res) => {
    const { id } = req.params;
    const product = await prisma.deleteProduct({ id });
    if (product !== "") {
      res.json({"state": 1})
    } else {
      res.json({"state": 0})
    }
  });
  
  app.put('/publish/product/:id', async (req, res) => {
    const { id } = req.params;
    const product = await prisma.updateProduct({
      where: { id },
      data: { published: true },
    });
    res.json(product)
  });
  res.json(result)
})


app.listen(4000, () =>
  console.log('Server is running on http://localhost:4000'),
)

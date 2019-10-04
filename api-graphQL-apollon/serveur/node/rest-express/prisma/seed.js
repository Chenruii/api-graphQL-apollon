const { prisma } = require('../src/generated/prisma-client');

async function main() {
  await prisma.createUser({
    email: 'alice@prisma.io',
    name: 'Alice',
    posts: {
      create: {
        title: 'Join us for Prisma Day 2019 in Berlin',
        content: 'https://www.prisma.io/day/',
        published: true,
      },
    },
  })
  await prisma.createUser({
    email: 'bob@prisma.io',
    name: 'Bob',
    posts: {
      create: [
        {
          title: 'Subscribe to GraphQL Weekly for community news',
          content: 'https://graphqlweekly.com/',
          published: true,
        },
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://twitter.com/prisma',
        },
      ],
    },
  })
  await prisma.createUser({
    email: 'bobo@prisma.io',
    name: 'Bobo',
    posts: {
      create: [
        {
          title: 'Subscribe to GraphQL Weekly for community news',
          content: 'https://graphqlweekly.com/',
          published: true,
        },
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://twitter.com/prisma',
        },
      ],
    },
  })
  await prisma.createProduct({
    name: 'Pringles',
    description: 'Hot and spicy',
    quantity: 1,
    price: 1,
    category: 'Épicerie',
  })
  await prisma.createProduct({
    name: 'Cristaline',
    description: 'Eau de source - État naturel',
    quantity: 1,
    price: 1,
    category: 'Eau',
  })
}

main().catch(e => console.error(e))

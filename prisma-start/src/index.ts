import { PrismaClient } from "@prisma/client";
// or const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
  //await selectAllUsers();
  //await selectOnePostUser();
  await selectMax();
}

async function updatePost() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(post);
}
async function createUser() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });
}

async function selectAllUsers() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  console.dir(allUsers, { depth: null });
}

async function selectOnePostUser() {
  const result = await prisma.post.findOne({
    where: {
      id: 1,
    },
    include: {
      author: true,
    },
  });

  console.log(result);
}

type MostRecentPost = {
  "most-recent-post": String;
};
async function selectMax() {
  const sql = `
  Select MAX ("createdAt") as "most-recent-post"
  FROM "public"."Post";
  `;

  const users: [MostRecentPost] = await prisma.$queryRaw(sql);
  console.log(users[0]["most-recent-post"]);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

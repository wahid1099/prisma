import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 5,
  //     },
  //     data: {
  //       title: "Title 5 updates",
  //       // content: "Content 4",
  //       // authorName: "Author 4"
  //     },
  //   });
  // update many
  // const updateMany = await prisma.post.updateMany({
  //     where: {
  //         title: "Title 2"
  //     },
  //     data: {
  //         published: true
  //     }
  // })
  // console.log(updateMany)
  // const upsertData = await prisma.post.upsert({
  //     where: {
  //         id: 10
  //     },
  //     update: {
  //         authorName: "Fahim"
  //     },
  //     create: {
  //         title: "Title 2",
  //         content: "content 2"
  //     }
  // });
  // console.log(upsertData)
};

updates();

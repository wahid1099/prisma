import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user3",
  //     email: "user3@ph.com",
  //     role: UserRole.user,
  //   },
  // });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio...",
  //     userId: 2,
  //   },
  // });
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "this is title 5",
  //     content: "this is content of the post. 5",
  //     authorId: 1,
  //     postCategory: {
  //       create: [
  //         {
  //           categoryId: 1,
  //         },
  //         {
  //           categoryId: 3,
  //         },
  //         {
  //           categoryId: 4,
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });
  // console.log(createPost);
  // const getAllFromDB = await prisma.post.findMany();
  // console.log(getAllFromDB);
};

main();

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  await prisma.$connect()

  // Create a user an a post

  // await prisma.user.create({
  //   data: {
  //     name: "Matt",
  //     email: "hello@mattcook.art",
  //     posts: {
  //       create: {
  //         title: "A Composite City",
  //         body: "Planned Utopias don’t work, the composite city is a utopia.",
  //         slug: "a-composite-city"
  //       }
  //     }
  //   }
  // })

  // Add some comments to the post

  // await prisma.post.update({
  //   where: {
  //     slug: "a-composite-city",
  //   },
  //   data: {
  //     comments: {
  //       createMany: {
  //         data: [
  //           { comment: "Too much planning!" },
  //           { comment: "Cities loose their allure through planned artificial harmoniousness." }
  //         ]
  //       }
  //     }
  //   }
  // })

  const allUsers = await prisma.post.findMany({
      include: {
        comments: true
      }
    })
  console.log(allUsers)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

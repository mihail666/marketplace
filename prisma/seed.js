import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "Painting by numbers",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://basket-12.wb.ru/vol1694/part169498/169498102/images/c516x688/1.webp",
        price: 500 // EG: 25.00
      },
    });

    await prisma.products.create({
      data: {
        title: "School Books",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.https://basket-01.wb.ru/vol120/part12059/12059009/images/c516x688/1.webp/id/20/800/800",
        price: 1999
      },
    });

    await prisma.products.create({
      data: {
        title: "Gaming PC",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.https://basket-10.wb.ru/vol1491/part149164/149164230/images/c516x688/1.webpphotos/id/21/800/800",
        price: 9999
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Book",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://basket-02.wb.ru/vol218/part21884/21884573/images/c516x688/1.webp",
        price: 5999
      },
    });

    await prisma.products.create({
      data: {
        title: "Painting by numbers",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://basket-02.wb.ru/vol199/part19956/19956536/images/c516x688/1.webp",
        price: 1299
      },
    });

    await prisma.products.create({
      data: {
        title: "Kent bag",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://basket-10.wb.ru/vol1396/part139625/139625030/images/c516x688/1.webp",
        price: 6589
      },
    });

    await prisma.products.create({
      data: {
        title: "Camera Gadgets",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://basket-02.wb.ru/vol238/part23800/23800554/images/c516x688/1.webp",
        price: 22499
      },
    });

    await prisma.products.create({
      data: {
        title: "Undershirt",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/39/800/800",
        price: 2599
      },
    });

    await prisma.products.create({
      data: {
        title: "Dinner Table",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://picsum.photos/id/42/800/800",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Book Pro",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://sc04.alicdn.com/kf/Hd5fa00148c8a436d8655a35521ea1ca7i.jpg",
        price: 159599
      },
    });

    await prisma.products.create({
      data: {
        title: "towel",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://basket-08.wb.ru/vol1141/part114163/114163278/images/c516x688/1.webp",
        price: 599
      },
    });

    await prisma.products.create({
      data: {
        title: "Video card MSI GeForce RTX 4060 Ti GAMINGter with accessories",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/84e7ce3b76ed63f1408257d17b121b26/38c457a299fa8dcecf631e8a34bccc15bc263b03ba6db57518c211f42c12ff01.jpg",
        price: 9699
      },
    });

    await prisma.products.create({
      data: {
        title: "boots",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://avatars.mds.yandex.net/get-mpic/3912211/img_id5125038334804931591.jpeg/orig",
        price: 125
      },
    });

    await prisma.products.create({
      data: {
        title: "Smart column Yandex Station",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://avatars.mds.yandex.net/get-mpic/5254518/img_id3193512463992209428.jpeg/orig",
        price: 1599
      },
    });

    await prisma.products.create({
      data: {
        title: "Playstation Controller",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://avatars.mds.yandex.net/get-mpic/6257919/img_id4370158501546929669.jpeg/orig",
        price: 1599
      },
    });

    await prisma.products.create({
      data: {
        title: "Rasberries Smart column Yandex Station Max",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://ae04.alicdn.com/kf/U6ce9ebdc6f84459f9684a0ed4d443fe48.jpg",
        price: 259
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Car",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://avatars.mds.yandex.net/get-mpic/5306939/img_id4172634652832844701.jpeg/9",
        price: 10959
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Mini",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://mac77.ru/wp-content/uploads/Apple-Mac-Mini-Late-2018-02-scaled.jpg",
        price: 99999
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Bench",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/03/16/140444/426029/garden_bench_surabaya_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4394779_o.jpg",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        title: "Cars",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://sportishka.com/uploads/posts/2021-12/1639074674_26-sportishka-com-p-mashina-sboku-sport-krasivo-foto-30.png",
        price: 256595
      },
    });

    await prisma.products.create({
      data: {
        title: "Guitar",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://muz2u.ru/image/cache/img_new/test/sat-tmbk-1000x1000.jpg",
        price: 12595
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();

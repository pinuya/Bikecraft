import { bikeDetailsIcons, coverBike } from "assets/img";

const infos = [
    {
      title: "Motor Elétrico",
      icon: bikeDetailsIcons.engine,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "50 km/h",
      icon: bikeDetailsIcons.speed,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Rastreador",
      icon: bikeDetailsIcons.tacker,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Fibra de Carbono",
      icon: bikeDetailsIcons.carbon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const dataSheet = [
    { title: "Peso", description: "9 kg" },
    { title: "Altura", description: "60 cm" },
    { title: "Largura", description: "120 cm" },
    { title: "Profundidade", description: "10 cm" },
    { title: "Marchas", description: "16" },
    { title: "Roda", description: "29" },
  ];

  const gallery = [coverBike.nimbus,coverBike.magic,coverBike.nebula]

  const bikes = [
    {
      id: 1,
      name: "Nimbus",
      description: `A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.`,
      price: 4999,
      stock: 15,
      deadline: 7,
      infos,
      dataSheet,
      cover: coverBike.nimbus,
      coverHome: coverBike.nimbusHome,
      gallery ,
    },
    {
        id: 2,
        name: "Magic Might",
        description: `A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.`,
        price: 3999,
        stock: 18,
        deadline: 7,
        infos,
        dataSheet,
        cover: coverBike.magic,
        coverHome: coverBike.magicHome,
        gallery,
      },
      {
        id: 3,
        name: "Nebula Cosmic",
        description: `A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.`,
        price: 5999,
        stock: 18,
        deadline: 5,
        infos,
        dataSheet,
        cover: coverBike.nebula,
        coverHome: coverBike.nebulaHome,
        gallery,
      },
  ];

  function findBikeById(id: string | undefined ){
return bikes.find((bike) => bike.id === Number(id));
  }

  function listBikes(){
    return bikes
      }

  export {findBikeById, listBikes}

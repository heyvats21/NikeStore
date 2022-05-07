const wrapper = document.querySelector(".sliderWrapper");

const menuitem = document.querySelectorAll(".menuitem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 139,
      colors: [
        {
          code: "black",
          img: "./imgnike/air.png",
        },
        {
          code: "darkblue",
          img: "./imgnike/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 139,
      colors: [
        {
          code: "lightgray",
          img: "./imgnike/jordan.png",
        },
        {
          code: "green",
          img: "./imgnike/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 139,
      colors: [
        {
          code: "lightgray",
          img: "./imgnike/blazer.png",
        },
        {
          code: "green",
          img: "./imgnike/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 139,
      colors: [
        {
          code: "black",
          img: "./imgnike/crater.png",
        },
        {
          code: "lightgray",
          img: "./imgnike/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./imgnike/hippie.png",
        },
        {
          code: "black",
          img: "./imgnike/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

  const currentProductimg = document.querySelector(".productimg")
  const currentProducttitle = document.querySelector(".producttitle")
  const currentProductprice = document.querySelector(".productprice")
  const currentProductColors = document.querySelectorAll(".color")
  const currentProductsizes = document.querySelectorAll(".size")

menuitem.forEach((item , index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index]

        currentProducttitle.textContent = choosenProduct.title;
        currentProductprice.textContent = "$" + choosenProduct.price;
        currentProductimg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
          });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductimg.src = choosenProduct.colors[index].img;
    });
  });

  currentProductsizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductsizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  const productbutton = document.querySelector(".productbutton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  productbutton.addEventListener("click", ()=>{
    payment.style.display="flex"

})

close.addEventListener("click", ()=>{
  payment.style.display="none"

})


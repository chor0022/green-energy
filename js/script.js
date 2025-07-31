
function preloader() {
  const imagesList = [
    "./img/img-1.jpg",
    "./img/img-2.jpg",
    "./img/img-3.jpg"
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }

  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);

const buttons = document.querySelectorAll("button");
const contentBox = document.getElementById("dynamic-content");

const resources = {
  solar: {
    headingContent: "Solar Panels",
    bodyText:
      "Installing solar panels can drastically reduce electricity bills and is becoming more affordable through various initiatives.",
    imgUrl: "img/img-1.jpg",
    imgAlt: "Solar panels on a roof",
  },
  efficient: {
    headingContent: "Energy-Efficient Homes",
    bodyText:
      "Upgrading insulation and appliances helps cut energy costs. Incentives are available to assist with these upgrades.",
    imgUrl: "img/img-2.jpg",
    imgAlt: "Modern energy-efficient home",
  },
  subsidies: {
    headingContent: "Government Subsidies",
    bodyText:
      "Government subsidies help lower the cost of green technologies, making them accessible for average-income households.",
    imgUrl: "img/img-3.jpg",
    imgAlt: "Money-saving icon with government buildings",
  },
};


contentBox.innerHTML = `
  <h1>${resources.solar.headingContent}</h1>
  <img src="${resources.solar.imgUrl}" alt="${resources.solar.imgAlt}">
  <p>${resources.solar.bodyText}</p>
`;


function handleSelection(e) {
  buttons.forEach((btn) => {
    if (btn.hasAttribute("id")) {
      btn.removeAttribute("id");
    }
  });

  e.target.setAttribute("id", "active-button");

  let data;
  switch (e.target.textContent.trim()) {
    case "Solar Panels":
      data = resources.solar;
      break;
    case "Energy-Efficient Appliances":
      data = resources.efficient;
      break;
    case "Government Subsidies":
      data = resources.subsidies;
      break;
  }

  contentBox.innerHTML = `
    <h1>${data.headingContent}</h1>
    <img src="${data.imgUrl}" alt="${data.imgAlt}">
    <p>${data.bodyText}</p>
  `;
}

buttons.forEach((btn) => btn.addEventListener("click", handleSelection));

let container = document.createElement("div");
container.setAttribute("style", `
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  box-sizing: border-box;
`);
document.body.style.margin = "0";
document.body.style.backgroundColor = "#121212";
document.body.style.fontFamily = "'Poppins', sans-serif";
document.body.appendChild(container);

// Left Sidebar
let card = document.createElement("div");
card.setAttribute("style", `
  width: 300px;
  padding: 30px 20px;
  color: white;
  background-color: #1e1e1e;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`);
container.appendChild(card);

// Profile image container
let div_2 = document.createElement("div");
div_2.setAttribute("style", `
  width: 120px;
  height: 120px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
`);
let profileImg = document.createElement("img");
profileImg.src = "https://i.postimg.cc/jqYj7kMx/memoji-boy.png";
profileImg.style.width = "100%";
profileImg.style.height = "100%";
profileImg.style.objectFit = "cover";
div_2.appendChild(profileImg);
card.appendChild(div_2);

// Name
let h1 = document.createElement("h1");
h1.innerText = "Rohit Rathod";
h1.setAttribute("style", `
  margin: 0 0 10px;
  font-size: 1.5rem;
  text-align: center;
`);
card.appendChild(h1);

// Title
let h3 = document.createElement("h3");
h3.innerText = "MERN Stack Developer";
h3.setAttribute("style", `
  margin: 0 0 30px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`);
card.appendChild(h3);

// Info list
const infoList = [
  { icon: "✉️", text: "sp@gmail.com.com" },
  { icon: "📞", text: "Hello" },
  { icon: "🎂", text: "28/12/2003" },
  { icon: "📍", text: "Vadodara, India"}
];
infoList.forEach(info => {
  let box = document.createElement("div");
  box.setAttribute("style", `
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border: 1px solid white;
    width: 100%;
    box-sizing: border-box;
  `);
  let icon = document.createElement("span");
  icon.innerText = info.icon;
  icon.style.marginRight = "10px";
  let h2 = document.createElement("h2");
  h2.innerText = info.text;
  h2.style.fontSize = "0.9rem";
  h2.style.margin = "0";
  box.appendChild(icon);
  box.appendChild(h2);
  card.appendChild(box);
});

// Right Content Area
let card_2 = document.createElement("div");
card_2.setAttribute("style", `
  flex: 1;
  padding: 40px;
  color: white;
  background-color: #1e1e1e;
  border-radius: 20px;
  box-sizing: border-box;
  min-width: 600px;
`);
container.appendChild(card_2);

// Header Nav
let div_one = document.createElement("div");
div_one.setAttribute("style", `
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`);
let about = document.createElement("h1");
about.innerText = "About Me";
about.style.margin = "0";
about.style.fontSize = "2rem";
about.style.fontWeight = "700";
div_one.appendChild(about);

let nav = document.createElement("div");
nav.setAttribute("style", `
  display: flex;
  gap: 20px;
  align-items: center;
`);
["About", "Resume", "Portfolio", "Blog", "Contact"].forEach((text, index) => {
  let link = document.createElement("a");
  link.innerText = text;
  link.href = "#";
  link.style.color = index === 0 ? "#f9d423" : "#fff";
  link.style.fontWeight = index === 0 ? "700" : "500";
  link.style.textDecoration = "none";
  link.style.fontSize = "1rem";
  nav.appendChild(link);
});
div_one.appendChild(nav);
card_2.appendChild(div_one);

// About Paragraphs
const aboutTexts = [
  `I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.`,
  `My job is to build your website so that it is functional and user-friendly but at the same time attractive.`
];
aboutTexts.forEach(text => {
  let p = document.createElement("p");
  p.innerText = text;
  p.style.margin = "20px 0";
  p.style.fontSize = "1.1rem";
  card_2.appendChild(p);
});

// What I'm Doing Section
let what = document.createElement("h2");
what.innerText = "What I'm Doing";
what.style.fontSize = "1.5rem";
card_2.appendChild(what);

let mega = document.createElement("div");
mega.style.display = "flex";
mega.style.flexWrap = "wrap";
mega.style.gap = "20px";
mega.style.margin = "20px 0";
card_2.appendChild(mega);

const services = [
  { icon: "🎨", title: "Web Design", text: "Modern and high-quality design." },
  { icon: "💻", title: "Web Development", text: "Professional web development." },
  { icon: "📱", title: "Mobile Apps", text: "Apps for iOS and Android." },
  { icon: "📸", title: "Photography", text: "Professional photo shoots." }
];
services.forEach(srv => {
  let box = document.createElement("div");
  box.setAttribute("style", `
    flex: 1;
    min-width: 250px;
    background-color: #1e1e1e;
    border-radius: 10px;
    display: flex;
    padding: 15px;
    color: white;
    border: 1px solid whitesmoke;
    gap: 15px;
    box-sizing: border-box;
  `);
  let icon = document.createElement("div");
  icon.innerHTML = srv.icon;
  icon.style.fontSize = "2rem";
  let content = document.createElement("div");
  let h = document.createElement("h2");
  h.innerText = srv.title;
  h.style.fontSize = "1.2rem";
  h.style.margin = "0 0 5px";
  let p = document.createElement("p");
  p.innerText = srv.text;
  p.style.fontSize = "0.9rem";
  p.style.margin = "0";
  content.appendChild(h);
  content.appendChild(p);
  box.appendChild(icon);
  box.appendChild(content);
  mega.appendChild(box);
});

// Testimonials Section
const wrapper = document.createElement("div");
wrapper.style.width = "100%";
wrapper.style.marginTop = "50px";
card_2.appendChild(wrapper);

let testimonialsTitle = document.createElement("h2");
testimonialsTitle.innerText = "Testimonials";
testimonialsTitle.style.fontSize = "2rem";
wrapper.appendChild(testimonialsTitle);

let testimonialContainer = document.createElement("div");
testimonialContainer.setAttribute("style", `
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`);
wrapper.appendChild(testimonialContainer);

const testimonials = [
  {
    name: "Daniel Lewis",
    img: "https://i.postimg.cc/jqYj7kMx/memoji-boy.png",
    message: "Richard was hired to create a corporate identity..."
  },
  {
    name: "Jessica Miller",
    img: "https://i.postimg.cc/nzLzwYFZ/memoji-girl.png",
    message: "Richard was hired to create a corporate identity..."
  }
];
testimonials.forEach(person => {
  const card = document.createElement("div");
  card.setAttribute("style", `
    background-color: #1e1e1e;
    padding: 20px;
    flex: 1;
    min-width: 250px;
    max-width: 400px;
    border-radius: 15px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    box-sizing: border-box;
  `);

  const avatar = document.createElement("img");
  avatar.src = person.img;
  avatar.setAttribute("style", "width: 60px; height: 60px; border-radius: 20px;");

  const info = document.createElement("div");
  const name = document.createElement("h3");
  name.innerText = person.name;
  name.setAttribute("style", "margin: 0 0 5px; font-size: 1.2rem;");
  const msg = document.createElement("p");
  msg.innerText = person.message;
  msg.setAttribute("style", "margin: 0; font-size: 0.95rem; color: #ccc;");
  info.appendChild(name);
  info.appendChild(msg);

  card.appendChild(avatar);
  card.appendChild(info);
  testimonialContainer.appendChild(card);
});

// Divider
const divider1 = document.createElement("hr");
divider1.setAttribute("style", "margin: 40px 0; border: none; height: 4px; background: linear-gradient(to right, #f9d423 40%, #1e1e1e 40%);");
wrapper.appendChild(divider1);

// Clients Section
const clientsTitle = document.createElement("h2");
clientsTitle.innerText = "Clients";
clientsTitle.style.fontSize = "2rem";
wrapper.appendChild(clientsTitle);

const clientContainer = document.createElement("div");
clientContainer.setAttribute("style", `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`);
wrapper.appendChild(clientContainer);

const clientLogos = [
  "https://i.postimg.cc/ZnsccKPM/client-1.png",
  "https://i.postimg.cc/Nf7syNmn/client-2.png",
  "https://i.postimg.cc/W3VZgDq1/client-3.png",
  "https://i.postimg.cc/KvhJPXKG/client-4.png"
];
clientLogos.forEach(src => {
  const logo = document.createElement("img");
  logo.src = src;
  logo.setAttribute("style", "height: 60px; width: auto; max-width: 150px; object-fit: contain;");
  clientContainer.appendChild(logo);
});

const data = [
  {
    name: "Rafel Jay",
    message: "Hi there, how are you?",
    lastSeen: "4 days ago",
    image: "https://i.pravatar.cc/75",
    status: "online",
  },
  {
    name: "Frank Johnson",
    message: "How was the trip?",
    lastSeen: "5 days ago",
    image: "https://i.pravatar.cc/75",
    status: "away",
  },
  {
    name: "Ashley Pierce",
    message: "I hope you are well.",
    lastSeen: "Dec 20, 2023",
    image: "https://i.pravatar.cc/75",
    status: "online",
  },
  {
    name: "Nancy Meyer",
    message: "Thank you for answering.",
    lastSeen: "Dec 3, 2023",
    image: "https://i.pravatar.cc/75",
    status: "offline",
  },
  {
    name: "Jane Doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    lastSeen: "Jan 13, 2024",
    image: "https://i.pravatar.cc/75",
    status: "offline",
  },
  {
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    lastSeen: "Dec 13, 2023",
    image: "https://i.pravatar.cc/75",
    status: "away",
  },
];

const sortByLastSeen = (a, b) => {
  const dateA = new Date(a.lastSeen);
  const dateB = new Date(b.lastSeen);

  return dateB - dateA;
};

const generateItemContainerHtml = () => {
  data.sort(sortByLastSeen);
  let html = "";
  let myStyles = "";
  for (let i = 0; i < data.length; i++) {
    html += `
    <input type="checkbox" id="item-${i}" />
    <label for="item-${i}">
    <div class="item-container">
        <div class="left">
        <div class="profile-image-container">
            <img
            class="profile-image"
            src="https://i.pravatar.cc/300/${i}"
            alt=""
            width="300px"
            height="auto"
            />
            <span class="status ${data[i].status}"></span>
        </div>
        <div class="name-chat">
            <p class="name">${data[i].name}</p>
            <p class="chat">Hi there, how are you?</p>
        </div>
        </div>
        <div class="right"><p>${data[i].lastSeen}</p></div>
    </div>
    </label>
`;

    myStyles += `#item-${i}:checked + label .item-container {
    background-color: aliceblue;
  }`;
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  document.querySelector("#form").appendChild(div);
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(myStyles));

  document.head.appendChild(style);
};

generateItemContainerHtml();

const card = {
  details: [
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "simon robben",
      title: "web designer and developer",
      email: "example@gmail.com",
    },
    {
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "justin shifer",
      title: "degitel marketer and seo expert",
      email: "example@gmail.com",
    },
    {
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "italo melo",
      title: "web designer and developer",
      email: "ui ux designer",
    },
  ],

  social: ["facebook", "twitter", "linkedin"],
};

const parentEl = document.querySelector(".main");

const markup = `
      ${card.details.map(({ image, name, title, email }) => {
        return `
            <div class="card">
        <figure class="person">
          <img src="${image}" alt="${name}" />
        </figure>
        <div class="desc">
          <h3 class="name">${name}</h3>
          <div class="title">${title}</div>
          <a href="mailto:${email}" class="email">${email}</a>
        </div>
        <ul class="social-list">
          
          ${card.social.map((social) => {
            return `
             <li class="social-item">
            <a href="#" class="social-link">
              <svg class="icon">
                <use xlink:href="../img/icons.svg#icon-${social}"></use>
              </svg>
            </a>
          </li>
             `;
          })}
        </ul>
      </div>
         `;
      })}
      
`;

parentEl.innerHTML = "";
parentEl.insertAdjacentHTML("afterbegin", markup);

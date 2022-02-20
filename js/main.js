const card = {
   details: [
      {
         image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'maruf ahmed',
         title: 'web designer and developer',
         email: 'example@gmail.com'
      },
      {
         image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'maruf ahmed',
         title: 'web designer and developer',
         email: 'example@gmail.com'
      },
      {
         image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         name: 'maruf ahmed',
         title: 'web designer and developer',
         email: 'example@gmail.com'
      }
   ],

   social: ['facebook', 'twitter', 'linkedin']
}

const parentEl = document.querySelector('.main')

const generateMarkup = `
      ${card.details.map(({name, title, email, image})=>{
         return `
            <div class="card">
               <figure class="person">
                  <img src="${image}" alt="${name}">
               </figure>
               <div class="desc">
                  <h3 class="name">${name}</h3>
                  <div class="title">${title}</div>
                  <a href="mailto:${email}" class="email">${email}</a>
               </div>
               <ul class="social-list">
                  
                  ${card.social.map((social)=>{
                     return `
                     <li class="social-item">
                     <a href="#" class="social-link">
                        <svg class="icon"><use xlink:href="../img/icons.svg#icon-${social}"></use></svg>
                     </a>
                  </li>
                     `
                  })}
               </ul>
            </div>
         `
      })}
      
`;

parentEl.innerHTML = '';
parentEl.insertAdjacentHTML("afterbegin", generateMarkup);
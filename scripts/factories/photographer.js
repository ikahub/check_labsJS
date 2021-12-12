function photographerFactory(data) {
    const { id, name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getPhotographerCardDOM() {
        const article = document.createElement( 'article' );
        const link = `photographer.html?id=${id}`;
        article.addEventListener('click', () => window.location.href = link)
        const img = document.createElement( 'img');
        img.classList.add('photographer-img');
        const h1 = document.createElement( 'h1' );
        h1.classList.add('price')
        const p = document.createElement( 'p' );
        p.classList.add('tagline')
        const pun = document.createElement( 'p' );
        pun.classList.add('city-country')
        const pdeux = document.createElement( 'p' );
        p.textContent = tagline;
        h1.textContent = price +'€/jour';
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        pun.textContent = city +','+' '+ country;
        pdeux.textContent = country;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pun);
        article.appendChild(p);
        article.appendChild(h1);
        return (article);
    }
    return { name, picture, price, getPhotographerCardDOM }
}

/*class Photographer {
  
	constructor() {
  	this.name = ""
    this.city = ""
    this.country = ""
    this.tagline = ""
    this.price = ""
    //this.portrait = ""
  }
  
  fill(data) {
  	this.name = data.name
    this.city = data.city
    this.country = data.country
    this.tagline = data.tagline
    this.price = data.price
    //this.portrait = data.portrait
    
  }
  
  getName() {
  	return this.name.toUpperCase()
  }
  
  buildCard() {
  	const article = document.createElement('article')
    
    const names = document.createElement('h2')
    names.innerText = this.getName()
    article.appendChild(names)

    const citys = document.createElement('h4')
    citys.classList.add('city')
    citys.innerText = this.city
    article.appendChild(citys)

    const countrys = document.createElement('h4')
    countrys.classList.add('city')
    countrys.innerText = this.country
    article.appendChild(countrys)

    const taglines = document.createElement('p')
    taglines.innerText = this.tagline
    article.appendChild(taglines)

    const prices = document.createElement('h5')
    prices.innerText = this.price
    article.appendChild(prices)

    return article
  }
  
  static toto() {
  	console.log('toto')
  }
}*/
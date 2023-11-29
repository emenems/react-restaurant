import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Vitajte v reštaurácii React</h1>

      <section className="section">
        <h2>Otváracie hodiny</h2>
        <p>Pondelok - Piatok: 9:00 - 22:00</p>
        <p>Sobota - Nedeľa: 10:00 - 23:00</p>
      </section>

      <section className="section">
        <h2>Denná ponuka</h2>
        <p>Dnešný špeciál: React Burger s prílohou Redux Hranolky</p>
      </section>

      <section className="section">
        <h2>Á la Carte</h2>
        <p>Pozrite si naše menu pre široký výber jedál</p>
      </section>

      <section className="section">
        <h2>Rezervácia miesta</h2>
        <p>Volajte nás na číslo (123) 456-7890 a rezervujte si stôl</p>
      </section>
    </div>
  );
};

export default Home;
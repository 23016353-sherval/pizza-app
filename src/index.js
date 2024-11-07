import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const HeaderStyles = { color: "orange", fontSize: "48px", textTransform: "uppercase"};

function Header({isOpen}) {
    return (
        <div>
            <h1 style={HeaderStyles} >Sherval's Pizza Co.</h1>
            {isOpen && <p className="tagline">Authentic Italian Cuisine, Baked fresh everyday!</p>}
        </div>
    );
}

function App() {
    const date = new Date();
    const showTime = date.getHours();
    const isOpen = showTime >= 11 && showTime <= 22;
    return (
        <div className="container" >
            <Header isOpen={isOpen} />
            <Menu />
            <Footer isOpen={isOpen} />
        </div>
    );
}

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "prosciutto.jpg",
      soldOut: false,
    },
];

function Menu() {
    return (
        <div>
            <h2 className="menu">Our Menu</h2>
            <ul className="all-pizzas">
                {pizzaData.map((pizza, index) => (
                    <li key={index} className="pizza-item">
                        <img src={pizza.photoName} alt={pizza.name} width="200" />
                        <div className="pizza-name-price">
                            <h3>{pizza.name}</h3>
                            <p className="price">Price: ${pizza.price}</p>  
                            <p className="ingredients">{pizza.ingredients}</p>
                            <p className="soldOut">{pizza.soldOut && <span>Sold Out</span>}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


function Footer({isOpen}) {
    return (
        <footer className="footer">
        <p>{isOpen ? "We're currently open" : "Sorry, we're closed"}</p>
        {isOpen && <button>Order</button>}
      </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
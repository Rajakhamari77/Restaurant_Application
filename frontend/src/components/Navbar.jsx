import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { id: 1, name: "Butter Chicken 🍗", price: "₹320", description: "Tender chicken in a rich tomato and butter sauce" },
    { id: 2, name: "Paneer Tikka 🧀", price: "₹270", description: "Grilled cottage cheese with aromatic spices" },
    { id: 3, name: "Biryani 🍚", price: "₹350", description: "Fragrant basmati rice cooked with spices and chicken or mutton" },
    { id: 4, name: "Dal Makhani 🫘", price: "₹180", description: "Slow-cooked black lentils with cream and butter" },
    { id: 5, name: "Gulab Jamun 🍯", price: "₹90", description: "Deep-fried sweet dumplings soaked in sugar syrup" },
    { id: 6, name: "Masala Dosa 🥞", price: "₹120", description: "Crispy rice crepe filled with spiced mashed potatoes" },
    { id: 7, name: "Chole Bhature 🍥", price: "₹130", description: "Spicy chickpeas served with deep-fried bread" },
    { id: 8, name: "Rogan Josh 🍖", price: "₹360", description: "Kashmiri-style slow-cooked lamb curry" },
    { id: 9, name: "Tandoori Chicken 🔥🍗", price: "₹290", description: "Chicken marinated in spices and grilled in a tandoor" },
    { id: 10, name: "Pav Bhaji 🍞", price: "₹110", description: "Spiced mashed vegetables served with buttered buns" },
    { id: 11, name: "Rajma Chawal 🍛", price: "₹150", description: "Red kidney bean curry served with steamed rice" },
    { id: 12, name: "Fish Curry 🐟", price: "₹300", description: "Tangy and spicy fish curry with coastal flavors" },
    
  ];

  return (
    <>
      <nav>
        <div className="logo">
  <img
    src="1.png"
    alt="Cooking Logo"
    style={{
      height: "80px",
      width: "100px",        
      borderRadius: "50%",  
      objectFit: "cover",  
      padding: "5px"
    }}
  />
</div>


        <div className={showNav ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                onClick={() => setShowNav(false)}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button
            className="menuBtn"
            onClick={() => {
              setShowMenu(!showMenu);
              if (isMobile) setShowNav(false);
            }}
          >
            OUR MENU
          </button>
        </div>

        <div className="hamburger" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoClose size={24} /> : <GiHamburgerMenu size={20} />}
        </div>
      </nav>

      {showMenu && (
        <div className="menu-overlay">
          <div className="menu-container">
            <div className="menu-header">
              <h2>Our Delicious Dishes</h2>
              <button className="close-btn" onClick={() => setShowMenu(false)}>
                <IoClose size={24} />
              </button>
            </div>

            <div className="menu-items">
              {menuItems.map((item) => (
                <div className="menu-item" key={item.id}>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

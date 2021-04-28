import React from "react";

const MenuModal = (props) => (
    <div id='restaurant-menu-modal' className="modal">
        <div className="modal__content animate-zoom">
            <div className="container white-black display-container">
                <span className="btn display-topright large"
                    onClick={() => { document.getElementById('restaurant-menu-modal').style.display = 'none'; }}
                >X</span>
                <h1>Starters</h1>
            </div>
            <div className="container large">
                <p>Tomato Soup <b>$2.50</b></p>
                <p>Chicken Salad <b>$3.50</b></p>
                <p>Bread and Butter <b>$1.00</b></p>
            </div>

            <div className="container white-black">
                <h1>Main Courses</h1>
            </div>
            <div class="container large">
                <p>Grilled Fish and Potatoes <b>$8.50</b></p>
                <p>Italian Pizza <b>$5.50</b></p>
                <p>Veggie Pasta <b>$4.00</b></p>
                <p>Chicken and Potatoes <b>$6.50</b></p>
                <p>Deluxe Burger <b>$5.00</b></p>
            </div>

            <div className="container white-black">
                <h1>Desserts</h1>
            </div>
            <div class="container large">
                <p>Fruit Salad <b>$2.50</b></p>
                <p>Ice cream <b>$2.00</b></p>
                <p>Chocolate Cake <b>$4.00</b></p>
                <p>Cheese <b>$5.50</b></p>
            </div>
        </div>
    </div>
)


export default MenuModal;


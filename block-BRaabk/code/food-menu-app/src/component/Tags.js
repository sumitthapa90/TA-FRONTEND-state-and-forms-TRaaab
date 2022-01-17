import React from "react";
import data from "../data.json";
import Menu from "./Menu";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTag: "all",
    };
  }

  render() {
    let allCategories = data.map((food) => food.category);

    let categories = allCategories.filter(
      (category, i, array) => array.indexOf(category) === i
    );
    console.log(categories);

    let allProducts;

    if (this.state.activeTag === "all") {
      allProducts = data;
    } else {
      allProducts = data.filter(
        (data) => this.state.activeTag === data.category
      );
    }

    return (
      <div>
        <header>
          {categories.map((category, i) => {
            return (
              <>
                <button className={this.state.activeTag === category ? "active": ""}
                  onClick={() => {
                    this.setState({
                      activeTag: category,
                    });
                  }}
                >
                  {category.toLocaleUpperCase()}
                </button>
              </>
            );
          })}
        </header>

        <main>
          <section>
            <Menu allProducts={allProducts} />
          </section>
        </main>
      </div>
    );
  }
}

export default Tags;

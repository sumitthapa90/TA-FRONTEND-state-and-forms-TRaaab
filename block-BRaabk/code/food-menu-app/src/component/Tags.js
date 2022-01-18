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

    console.log(allProducts);

    return (
      <div>
        {categories.map((category, i) => {
          return (
            <>
              <div>
                <button
                  key={category.id}
                  className={this.state.activeTag === category ? "active" : ""}
                  onClick={() => {
                    this.setState({
                      activeTag: category,
                    });
                  }}
                >
                  {category.toUpperCase()}
                </button>
              </div>

              <main className="p-12">
                <section className="flex justify-between flex-wrap">
                  <Menu allProducts={allProducts} />
                </section>
              </main>
            </>
          );
        })}
      </div>
    );
  }
}

export default Tags;

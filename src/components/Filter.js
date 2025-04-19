import React from "react";

function Filter({selectedCategory, onCategoryChange}){
          return (
            <div className="ShoppingList">
              <div className="Filter" value={selectedCategory} onChange={onCategoryChange}>
                <select name="filter" >
                  <option value="All">Filter by category</option>
                  <option value="Produce">Produce</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>
            </div>
          );
     }

export default Filter

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div>
      <h2>Gif App Search</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {categories.map((category) => (
            <GifGrid key={category} category={category}/>
        ))}
      </ol>
    </div>
  );
};

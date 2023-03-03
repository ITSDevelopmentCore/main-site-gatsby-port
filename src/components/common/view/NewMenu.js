import React from "react";

const categories = [
  {
    name: "Women",
    subcategories: ["Clothing", "Shoes", "Accessories"],
  },
  {
    name: "Men",
    subcategories: ["Clothing", "Shoes", "Accessories"],
  },
  {
    name: "Kids",
    subcategories: ["Boys", "Girls", "Babies"],
  },
  {
    name: "Home",
    subcategories: ["Bedding", "Bath", "Kitchen"],
  },
];

const Menu = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-wrap justify-between py-6">
        {categories.map((category, index) => (
          <div key={index} className="w-fit px-2">
            <h2 className="font-semibold text-xl mb-2">{category.name}</h2>
            {category.subcategories.map((subcategory, index) => (
              <p key={index} className="hover:text-gray-300 cursor-pointer">
                {subcategory}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import { EventsContext } from "../dashboard/NewEvent/newEventProvider";

const SidebarCategories = ({ title }) => {
  const { addCategory } = React.useContext(EventsContext);

  return (
    <div className="card mb-3">
      <div className="card-header border-bottom">
        <h6 className="m-0">
          {title}
          <sup className="text-danger">*</sup>
        </h6>
      </div>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          <li className="list-group-item px-3 pb-2">
            {Categories.map((category) => (
              <Category
                handleClick={() => addCategory(category.category)}
                key={category.id}
                category={category}
                checked={category.id === 5}
              />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarCategories;

const Categories = [
  { id: "1", category: "Tech Friday" },
  { id: "2", category: "Open Day" },
  { id: "3", category: "Hackathon" },
  { id: "4", category: "Talks" },
  { id: "5", category: "Others" },
];

const Category = ({ category, handleClick, checked }) => (
  <div className="mb-1">
    <input
      className="mx-1"
      type="radio"
      onChange={handleClick}
      id={category.category}
      name="category"
      value={category.category}
    />
    <label htmlFor={category.category}>{category.category}</label>
  </div>
);

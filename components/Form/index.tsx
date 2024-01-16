import { useState } from "react";
import { Property } from "./type";
import { categories, properties } from "@/services/categories";

const FormComponent: React.FC = () => {
  const [mainCategory, setMainCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [selectedProperties, setSelectedProperties] = useState<{
    [key: string]: Property;
  }>({});
  const [otherValue, setOtherValue] = useState<string>("");

  const handleMainCategoryChange = (value: string) => {
    setMainCategory(value);
    setSubCategory("");
  };

  const handleSubCategoryChange = (value: string) => {
    setSubCategory(value);
    setSelectedProperties({});
  };

  const handlePropertyChange = (property: string, value: string) => {
    setSelectedProperties((prevProperties) => ({
      ...prevProperties,
      [property]: { property, value },
    }));
  };

  const handleOtherValueChange = (value: string) => {
    setOtherValue(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      mainCategory,
      subCategory,
      selectedProperties,
      otherValue,
    });
    handleMainCategoryChange(""); //rest state
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-4 bg-gray-200 rounded-lg w-3/4 shadow-xl"
    >
      <label
        htmlFor="category"
        className="block mb-2 text-md ml-1 font-bold text-gray-900"
      >
        Main Category *
      </label>
      <select
        required
        id="category"
        className="w-full mb-4 select"
        value={mainCategory}
        onChange={(e) => handleMainCategoryChange(e.target.value)}
      >
        <option disabled value="">
          Select Main Category
        </option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <label
        htmlFor="subCategory"
        className="block mb-2 text-md ml-1 font-bold text-gray-900"
      >
        Sub Category *
      </label>
      <select
        required
        id="subCategory"
        className="w-full mb-4 select"
        value={subCategory}
        onChange={(e) => handleSubCategoryChange(e.target.value)}
        disabled={!mainCategory}
      >
        <option disabled value="">
          Select Subcategory
        </option>
        {categories
          .find((category) => category.name === mainCategory)
          ?.children.map((child) => (
            <option key={child} value={child}>
              {child}
            </option>
          ))}
      </select>

      <label
        htmlFor="process"
        className="block mb-2 text-md ml-1 font-bold text-gray-900"
      >
        Select Properties
      </label>

      <select
        required
        id="process"
        className="w-full mb-4 select"
        onChange={(e) => handlePropertyChange(subCategory, e.target.value)}
        disabled={!subCategory}
        value={selectedProperties[subCategory]?.value || ""}
      >
        <option value="" disabled>
          Select Properties {subCategory}
        </option>
        {properties?.[subCategory]?.map((property) => (
          <option key={property} value={property}>
            {property}
          </option>
        ))}
        <option value="Other">Other</option>
      </select>
      {selectedProperties[subCategory]?.value === "Other" && (
        <input
          required
          type="text"
          placeholder={`Enter ${subCategory} value`}
          className="mt-2 p-2 border rounded w-full"
          value={otherValue}
          onChange={(e) => handleOtherValueChange(e.target.value)}
        />
      )}
      <div className=" flex justify-end mt-5">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;

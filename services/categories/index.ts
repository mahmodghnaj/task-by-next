import { properties as propertiesFake } from "./fake-data";
export const categories = [
  { name: "Care", children: generateProductNames(10, "Care") },
  { name: "Baskale", children: generateProductNames(10, "Baskale") },
  { name: "Morocral", children: generateProductNames(10, "Morocral") },
];
export const properties = propertiesFake;
function generateProductNames(count: number, category: string): string[] {
  const products = [];
  for (let i = 1; i <= count; i++) {
    products.push(`${category} Product ${i}`);
  }
  return products;
}

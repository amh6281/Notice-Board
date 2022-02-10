import dummy from "../../db/data.json";

export default function CategoryList() {
  console.log(dummy);
  return (
    <ul>
      {dummy.categorys.map((category) => (
        <li key={category.id}>Category {category.category}</li>
      ))}
    </ul>
  );
}

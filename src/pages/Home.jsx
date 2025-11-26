import boxes from "../data/boxes.json";
import MenuCard from "../components/MenuCard";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>SushiFast – Menus</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        {boxes.map(menu => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
}

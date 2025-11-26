import { useParams, Link } from "react-router-dom";
import boxes from "../data/boxes.json";

export default function MenuDetail() {
  const { id } = useParams();
  const menu = boxes.find(m => m.id === parseInt(id));

  if (!menu) {
    return <p>Menu introuvable.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Retour</Link>

      <h1>{menu.nom}</h1>
      <img
        src={`../images/${menu.image}.jpg`}
        alt={menu.nom}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <h2>Saveurs</h2>
      <ul>
        {menu.saveurs.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h2>Aliments</h2>
      <ul>
        {menu.aliments.map((a, i) => (
          <li key={i}>{a.nom} – {a.quantite}</li>
        ))}
      </ul>
    </div>
  );
}

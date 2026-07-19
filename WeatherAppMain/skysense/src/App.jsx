import "@/App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="p-4 space-y-4">
      <div className="text-2xl font-bold bg-red-500 text-white p-4">
        How is the weather today?
      </div>

      <Card
        title="Temperature"
        image="🌡️"
        footer="Feels like 20°C"
        style={{ background: "#f0f0f0", color: "#333" }}
        hoverable={true}
        shadow={true}
      >
        22°C
      </Card>

      <Card
        title="Humidity"
        image="💧"
        footer="Moderate humidity"
        style={{ background: "#d0f0ff", color: "#003366" }}
        hoverable={true}
        shadow={true}
      >
        62%
      </Card>

      <Card
        title="Wind Speed"
        image="🌬️"
        footer="Gentle breeze"
        style={{ background: "#fff0d0", color: "#663300" }}
        hoverable={true}
        shadow={true}
      >
        12 km/h
      </Card>
    </div>
  );
}

export default App;

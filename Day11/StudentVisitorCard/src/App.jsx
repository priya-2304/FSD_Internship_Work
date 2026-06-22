import Card from "./components/StudentVisitorCard";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card photo="https://static.vecteezy.com/system/resources/thumbnails/049/461/526/small/confident-young-professional-woman-smiling-in-modern-office-environment-photo.jpeg"
        visitorName="Marrie" 
        visitorId="V1-01-2026"
        collegeName="Unity University"
        purpose="Campus Visit"
        date="20 June 2026"
        timeIn="10:00 AM"
        mobile="9876543210"
      />
    </div>
  );
}

export default App;

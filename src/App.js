import "./styles.css";

export default function App() {
  // default value
  let timeContent = "morning";
  // cusrtom style for difference
  let customStyle = {
    color: "red",
  };
  // current hour for checking
  const date = Number(new Date().getHours());

  // check hours
  if (date >= 12 && date <= 18) {
    timeContent = "afternoon";
    customStyle.color = "green";
  } else if (date > 18 && date < 24) {
    timeContent = "night";
    customStyle.color = "blue";
  }
  console.log(date);
  return (
    <div className="App">
      <h1 style={customStyle}>Good {timeContent}</h1>
    </div>
  );
}

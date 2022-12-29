import Review from "./Review";

function App() {
  return (
    <main
      style={{ height: "100vh" }}
      className="container d-flex justify-content-center align-items-center"
    >
      <section className="text-center">
        <h1>Our Reviews</h1>
        <Review />
      </section>
    </main>
  );
}

export default App;

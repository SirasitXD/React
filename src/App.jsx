import Hello from "./assets/Hello"
import Contact from "./assets/Contact"
import Counter from "./assets/Counter";

function App() {
  const helloData = [
    {name : 'john', message : 'How are you?'},
    {name : 'paul', message : 'DO you eat?'},
  ];
  return (
    <div className="App">
      < Counter />
      {helloData.map((data,index) =>(
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="abc@email.com" phone="0614192230" />
    </div>
  );
}

export default App;

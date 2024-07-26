
import './App.css';
import TinyMCEEditorPage from './component/tinymceEditor';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React TinyMCE Editor Example</h1>
      </header>
      <main className="container mx-auto p-4">
        <TinyMCEEditorPage/>
      </main>
    </div>
  );
}

export default App;

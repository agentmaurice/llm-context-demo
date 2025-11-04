import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const [apiKey, setApiKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("openai_api_key", apiKey);
    navigate("/step1");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Clé API OpenAI</h1>
      <input
        type="password"
        placeholder="Entrez votre OpenAI API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Valider
      </button>
    </div>
  );
}

function StepPage({ step, context }) {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCall = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("openai_api_key")}`,
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [...context, { role: "user", content: userInput }],
        }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      <h2 className="text-xl font-bold">Étape {step}</h2>

      <div>
        <label className="block mb-1">Question utilisateur :</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          onClick={handleCall}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Envoyer
        </button>
      </div>

      <div>
        <h3 className="text-md font-semibold mb-1">Contexte JSON :</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
          {JSON.stringify([...context, { role: "user", content: userInput }], null, 2)}
        </pre>
      </div>

      <div>
        <h3 className="text-md font-semibold mb-1">Résultat :</h3>
        <textarea
          rows={10}
          className="w-full border p-2 rounded font-mono text-sm"
          value={response ? JSON.stringify(response, null, 2) : loading ? "Chargement..." : ""}
          readOnly
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step1" element={<StepPage step={1} context={[]} />} />
        <Route
          path="/step2"
          element={<StepPage step={2} context={[{ role: "system", content: "Tu es un professeur de géographie très précis." }]} />}
        />
        <Route
          path="/step3"
          element={
            <StepPage
              step={3}
              context={[
                { role: "system", content: "Tu es un assistant culturel." },
                { role: "user", content: "Parle-moi du Japon." },
                { role: "assistant", content: "Le Japon est un pays asiatique..." },
              ]}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
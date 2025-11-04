# LLM Context Demo

An interactive educational web application demonstrating how context affects Large Language Model (LLM) responses. This tool helps developers and AI enthusiasts understand the crucial role of context in LLM interactions.

## 🌐 Live Demo

Visit the live application: [https://agentmaurice.github.io/llm-context-demo/](https://agentmaurice.github.io/llm-context-demo/)

## 🎯 Purpose

This application provides hands-on experience with various LLM concepts:
- **Context management**: See how different contexts influence responses
- **System prompts**: Learn how to shape model behavior
- **Few-shot learning**: Understand pattern learning through examples
- **Parameter tuning**: Experiment with temperature and token limits
- **Prompt injection**: Test security considerations

## ✨ Features

### 10 Educational Steps

1. **No Context**: Baseline queries without any context
2. **System Role**: Adding a system message to define behavior
3. **Conversation History**: Building on previous interactions
4. **Few-shot Learning**: Teaching output format through examples
5. **Format Instructions**: Precise control over response structure
6. **Context Conflicts**: Handling contradictory instructions
7. **RAG Simulation**: Context with embedded data (Retrieval-Augmented Generation)
8. **Temperature Control**: Interactive parameter adjustment
9. **Long Context**: Managing extended conversation history
10. **Prompt Injection**: Security testing against malicious inputs

### 2 Bonus Tools

- **Comparator**: Side-by-side comparison of two different contexts
- **Free Editor**: Build your own custom context message by message

### User Interface

- **Sidebar Navigation**: Jump to any step without following a sequence
- **Context Visualization**: See the exact JSON sent to the API
- **Real-time Response**: View complete API responses
- **Persistent API Key**: Your OpenAI key is stored locally in your browser

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/agentmaurice/llm-context-demo.git
cd llm-context-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 🔑 API Key Configuration

1. On first launch, you'll be prompted to enter your OpenAI API key
2. The key is stored in your browser's localStorage (never sent to any server except OpenAI)
3. You can reconfigure your API key anytime via the sidebar link

**Security Note**: Your API key remains in your browser. This application makes direct calls to OpenAI from your browser.

## 🛠️ Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **OpenAI API** - GPT-4 model (gpt-4o)

## 📚 Learning Path

### Recommended Order for Beginners

1. Start with **Step 1** (No Context) to see baseline behavior
2. Progress through **Steps 2-3** to understand system roles and history
3. Try **Step 4-5** to learn output control techniques
4. Experiment with **Step 8** to understand temperature effects
5. Use the **Free Editor** to create your own experiments

### For Advanced Users

- **Step 6**: Study context priority handling
- **Step 7**: Understand RAG implementation
- **Step 9**: Test token limit management
- **Step 10**: Explore security vulnerabilities
- **Comparator**: A/B test different approaches

## 🎓 Key Concepts Explained

### Context Window
The conversation history and instructions sent with each API request. Everything in the context affects the model's response.

### System Prompts
Special messages that define the assistant's role, behavior, and constraints. They typically have higher priority than user messages.

### Few-shot Learning
Providing examples in the context to teach the model a specific pattern or format without explicit instructions.

### Temperature
Controls randomness in responses:
- **0.0**: Deterministic, focused responses
- **1.0**: Balanced creativity and coherence (default)
- **2.0**: Maximum creativity and randomness

### RAG (Retrieval-Augmented Generation)
Embedding relevant data in the context to ground responses in specific information rather than relying solely on training data.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new educational steps
- Improve documentation
- Submit pull requests

## 📝 License

This project is open source and available for educational purposes.

## ⚠️ Disclaimer

This application uses the OpenAI API which incurs costs based on usage. Please monitor your API usage and set appropriate limits in your OpenAI account.

## 🔗 Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [React Documentation](https://react.dev/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ for the AI learning community

# AI Assistant Prototype using LangChain JS


## Setup Instructions

### 1. Clone the repository

```bash
git clone git@github.com:Rsln-M/ai-assistant-agent.git
cd ai-assistant-agent
```

### 2. Install packages

```bash
npm install
```

### 3. Add API key to .env file

```bash
echo "OPENAI_API_KEY=sk-..." > .env
```

### 4. Example usage 

```bash
node agent.js "make drone Fixed-wing"
```

Output
```bash
setDroneType(type="Fixed-wing")
```

type AIModel = {
    name: string;
    developer: string;
    releaseDate: string;
    type: "proprietary" | "open-source" | "platform";
    notes: string;
  };
  
export const aiModels: AIModel[] = [
    {
      name: "GPT-5",
      developer: "OpenAI",
      releaseDate: "2025-08-07",
      type: "proprietary",
      notes: "Latest OpenAI flagship LLM, multimodal, accessible via ChatGPT and API."
    },
    {
      name: "GPT-4",
      developer: "OpenAI",
      releaseDate: "2023-03-14",
      type: "proprietary",
      notes: "Predecessor to GPT-5, strong reasoning and language capabilities."
    },
    {
      name: "GPT-4.5",
      developer: "OpenAI",
      releaseDate: "2024-10",
      type: "proprietary",
      notes: "Intermediate version with improved speed and multimodal features."
    },
    {
      name: "Claude 4 (Opus & Sonnet)",
      developer: "Anthropic",
      releaseDate: "2025-05-22",
      type: "proprietary",
      notes: "Enhanced reasoning and coding capabilities, top-tier competitor to GPT."
    },
    {
      name: "Claude 3 (Sonnet 3.7)",
      developer: "Anthropic",
      releaseDate: "2024-03",
      type: "proprietary",
      notes: "Previous generation Claude model, high quality text generation."
    },
    {
      name: "DeepSeek-R1",
      developer: "DeepSeek (China)",
      releaseDate: "2025-01",
      type: "open-source",
      notes: "Cost-efficient model comparable to GPT-4, open-weight."
    },
    {
      name: "DeepSeek-V3",
      developer: "DeepSeek (China)",
      releaseDate: "2025-06",
      type: "open-source",
      notes: "MoE architecture with 671B parameters, highly efficient training."
    },
    {
      name: "Ollama",
      developer: "Ollama",
      releaseDate: "2023-07",
      type: "platform",
      notes: "Local inference platform for running open-weight models like DeepSeek."
    },
    {
      name: "GLM-4.5",
      developer: "Zhipu AI",
      releaseDate: "2025-08",
      type: "open-source",
      notes: "Open-source Mixture-of-Experts model with strong agentic reasoning."
    },
    {
      name: "Qwen 3",
      developer: "Alibaba",
      releaseDate: "2025-07",
      type: "open-source",
      notes: "Multilingual open-source model with strong coding and reasoning."
    },
    {
      name: "Gemini 2.5 Pro",
      developer: "Google DeepMind",
      releaseDate: "2025-05",
      type: "proprietary",
      notes: "Advanced reasoning and multimodal capabilities, used in Google ecosystem."
    },
    {
      name: "Grok 3",
      developer: "xAI",
      releaseDate: "2025-06",
      type: "proprietary",
      notes: "Elon Musk's AI chatbot model, integrated into X (Twitter)."
    }
  ];
  
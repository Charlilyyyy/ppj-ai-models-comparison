# PPJ AI Agent Comparison

### Feature

1. Model Information Dashboard
    Basic Specs: Model name, release date, developer (OpenAI, Anthropic, etc.).
    Training Data Cutoff & known limitations.
    Pricing (API / subscription): Cost per 1k tokens or monthly fee.
    Max Context Length (e.g., 8k, 200k tokens).
    Supported Modalities: Text, image, audio, video, code.
    Speed: Average response latency.

2. Side-by-Side Chat Testing
    Split View Chat: Type one prompt and see responses from multiple models in parallel.
    Highlight Differences: Color-code differences in tone, detail, factual accuracy.
    Adjustable Parameters: Temperature, max tokens, top-p for fair testing.
    Real-time Streaming: Show typing speed for each model.

3. Evaluation Metrics
    Accuracy Tests: Pre-made benchmarks (math, logic, coding, general knowledge).
    Creativity Tests: Writing, poetry, storytelling prompts.
    Reasoning Tests: Multi-step problem solving, riddles, planning.
    Coding Ability: Compare on the same programming challenge.
    Bias & Safety Check: How each handles sensitive or tricky prompts.

4. Performance Analytics
    Speed Tracking: Time taken to first token & full completion.
    Token Usage Tracking: Cost estimate for the test.
    Response Quality Rating: Let users vote or rate 1–5 stars.
    Hallucination Detection: Auto-flag potential false facts using trusted sources.

5. Prompt Library
    Curated Prompt Sets for different domains: coding, research, creative writing, casual chat.
    User-Generated Prompts: Share and test prompts others have used.
    Prompt Templates: Fill-in-the-blank style for repeated comparisons.

6. Export & Share
    Comparison Reports: Export as PDF/Markdown/HTML.
    Share Link: Let others see the exact comparison results.
    Save Sessions: Keep history for future reference.

7. API & Model Switching
    Custom API Keys: Let users connect their own OpenAI/Anthropic/etc. accounts.
    Auto-Rotate Models: Run the same prompt on all available models.
    Version History: See how a model changed over time (e.g., Claude 3 → Claude 4).

8. Extra Features for Power Users
    Multi-Turn Conversation Tests: Keep context for all models to see long-term consistency.
    Temperature Sweep: Compare how creativity changes at different randomness levels.
    Benchmark Leaderboard: Rank models by category.
    Offline Cache: Store results locally for quick re-checking.

9. Vector DB

Tech stack
- react
- fastapi
- postgresql
- postgresqlvectordb


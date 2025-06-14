export async function fetchOpenAIResponse(prompt: string): Promise<string> {
	const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
	if (!apiKey) {
		throw new Error("OpenRouter API key is missing");
	}

	const response = await fetch(
		"https://openrouter.ai/api/v1/chat/completions",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
				"HTTP-Referer": window.location.origin,
				"X-Title": "Svelte Chatbot",
			},
			body: JSON.stringify({
				model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
				messages: [{ role: "user", content: prompt }],
			}),
		},
	);

	if (!response.ok) {
		throw new Error("OpenRouter API error");
	}

	const data = await response.json();
	return (
		data.choices?.[0]?.message?.content?.trim() ||
		"I'm offline, try again later"
	);
}

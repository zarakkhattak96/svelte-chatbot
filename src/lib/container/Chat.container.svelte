<script lang="ts">
    import MessageBody from '$lib/components/MessageBody.svelte';
    import ChatInput from '$lib/components/ChatInput.svelte';
    import { fetchOpenAIResponse } from '$lib/services/openRouter.service';

    let messages: { text: string; isUser: boolean }[] = [];
    let loading = false;

    async function handleSend(event: CustomEvent<{ text: string }>) {
        const userMessage = event.detail.text;
        messages = [...messages, { text: userMessage, isUser: true }];
        loading = true;

        try {
            const botResponse = await fetchOpenAIResponse(userMessage);
            messages = [...messages, { text: botResponse, isUser: false }];
        } catch (e) {
            messages = [...messages, { text: "Error: Could not get response from OpenAI.", isUser: false }];
        } finally {
            loading = false;
        }
    }
</script>

<div class="flex flex-col h-full">
    <MessageBody {messages} />
    {#if loading}
        <div class="flex justify-start px-6 py-2">
            <span class="loader w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></span>
        </div>
    {/if}
    <ChatInput on:send={handleSend} />
</div>

<style>
.loader {
  border-top-color: #3b82f6;
  border-right-color: #e5e7eb;
  border-bottom-color: #e5e7eb;
  border-left-color: #e5e7eb;
}
</style>
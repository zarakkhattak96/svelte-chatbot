<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    type SendEvent = {
        text: string;
    };
    
    const dispatch = createEventDispatcher();
    
    let message = '';
    
    function handleSubmit() {
        if (message.trim()) {
            dispatch('send', { text: message.trim() });
            message = '';
        }
    }
    
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
        }
    }
</script>

<div class="fixed bottom-16 left-0 right-0 bg-transparent p-4 z-40">
    <form on:submit|preventDefault={handleSubmit} class="flex justify-center">
        <div class="flex w-full max-w-2xl items-end bg-gray-900/80 rounded-3xl shadow-lg px-4 py-2 gap-2 border border-gray-700 focus-within:border-[var(--accent)] transition">
            <textarea
                bind:value={message}
                on:keydown={handleKeydown}
                placeholder="Type your message..."
                class="flex-1 bg-transparent text-gray-100 placeholder-gray-400 resize-none border-none outline-none focus:ring-0 p-2"
                rows="1"
                style="min-height: 40px; max-height: 120px;"
            ></textarea>
            <button
                type="submit"
                class="bg-[var(--accent)] hover:bg-blue-600 text-white rounded-full px-4 py-2 transition disabled:opacity-50"
                disabled={!message.trim()}
                aria-label="Send"
            >
                Send
            </button>
        </div>
    </form>
</div> 
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

<div class="fixed bottom-16 left-0 right-0 bg-[var(--bg)] p-4 border-t border-gray-200 shadow-md">
    <form on:submit|preventDefault={handleSubmit} class="flex gap-2 max-w-4xl mx-auto">
        <textarea
            bind:value={message}
            on:keydown={handleKeydown}
            placeholder="Type your message..."
            class="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--accent)] resize-none bg-white"
            rows="1"
        ></textarea>
        <button
            type="submit"
            class="bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
            Send
        </button>
    </form>
</div> 
<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    type SendEvent = { text: string };
    const dispatch = createEventDispatcher();

    let message = '';
    let textareaEl: HTMLTextAreaElement | null = null;

    function handleSubmit() {
        if (message.trim()) {
            dispatch('send', { text: message.trim() });
            message = '';
            resizeTextarea();
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
        }
    }

    function resizeTextarea() {
        if (textareaEl) {
            textareaEl.style.height = 'auto';
            textareaEl.style.height = `${textareaEl.scrollHeight}px`;
        }
    }
</script>

<div class="fixed bottom-16 left-0 right-0 bg-transparent p-4 z-40">
    <form on:submit|preventDefault={handleSubmit} class="flex justify-center">
        <div class="flex w-full max-w-2xl items-center bg-white dark:bg-gray-900/80 rounded-3xl shadow-lg px-4 py-0 gap-2 border border-gray-300 dark:border-gray-700 focus-within:border-[var(--accent)] transition">
            <textarea
                bind:this={textareaEl}
                bind:value={message}
                on:input={resizeTextarea}
                on:keydown={handleKeydown}
                placeholder="Type your message..."
                class="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 resize-none border-none outline-none focus:ring-0 p-2 overflow-hidden"
                rows="1"
                style="min-height: 50px; max-height: 200px;"
            ></textarea>
            <button
                type="submit"
                class="bg-[var(--accent)] hover:bg-blue-600 text-white rounded-full p-2 transition disabled:opacity-50 self-center flex items-center justify-center"
                disabled={!message.trim()}
                aria-label="Send"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-7.5-15-7.5v6l10 1.5-10 1.5v6z" />
                </svg>
            </button>
        </div>
    </form>
</div>
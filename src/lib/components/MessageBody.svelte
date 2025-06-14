<script lang="ts">
    import MessageBubble from './MessageBubble.svelte';
    // biome-ignore lint/style/useConst: <explanation>
    export let messages: { text: string, isUser: boolean }[] = [];
</script>

{#if messages.length === 0}
    <div class="flex flex-1 items-center justify-center w-full h-full min-h-[180px] max-h-[60vh] mt-64">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg w-full max-w-3xl mx-auto p-8">
            <span class="text-gray-400 dark:text-gray-500 text-center select-none block">
                Start the conversation by typing a message below!
            </span>
        </div>
    </div>
{:else}
    <div class="flex flex-col gap-4 flex-1 p-2 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-y-auto min-h-[180px] max-h-[60vh]">
        {#each messages as message}
            <MessageBubble text={message.text} isUser={message.isUser} />
        {/each}
    </div>
{/if}

<style>
    div {
        word-wrap: break-word;
    }
</style>

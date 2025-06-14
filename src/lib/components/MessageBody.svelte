<script lang="ts">
    import MessageBubble from './MessageBubble.svelte';
    // biome-ignore lint/style/useConst: <explanation>
    export let messages: { text: string, isUser: boolean }[] = [];
</script>

<div class="flex flex-col gap-4 p-4 text-gray-100 rounded-lg overflow-y-auto" style="max-height: 60vh;">
    {#each messages as message}
        <MessageBubble text={message.text} isUser={message.isUser} />
    {/each}
</div>


<style>
    div {
        word-wrap: break-word;
    }
</style>

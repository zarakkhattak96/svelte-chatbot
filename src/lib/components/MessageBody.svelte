<script lang="ts">
    export const messages: { text: string; isUser: boolean }[] = [];
</script>

<div class="flex flex-col gap-4 p-4 min-h-full">
    {#each messages as message}
        <div class="flex {message.isUser ? 'justify-end' : 'justify-start'}">
            <div class="max-w-[70%] rounded-lg p-3 {
                message.isUser 
                    ? 'bg-[var(--accent)] text-white' 
                    : 'bg-white text-gray-800 shadow-sm'
            }">
                {message.text}
            </div>
        </div>
    {/each}
</div>

<style>
    div {
        word-wrap: break-word;
    }
</style>

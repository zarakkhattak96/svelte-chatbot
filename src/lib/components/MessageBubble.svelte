<script lang="ts">
    export let text: string;
    export let isUser: boolean;
</script>

<div class="flex {isUser ? 'justify-end' : 'justify-start'}">
    <div class="max-w-[70%] rounded-lg p-3 {
        isUser 
            ? 'bg-[var(--accent)] text-white' 
            : 'bg-white text-gray-800 shadow-sm'
    }">
        {text}
    </div>
</div>

<style>
    div {
        word-wrap: break-word;
    }
</style> 
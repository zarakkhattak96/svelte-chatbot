<script lang="ts">
    import MessageBody from '$lib/components/MessageBody.svelte';
    import ChatInput from '$lib/components/ChatInput.svelte';
    
    let messages: { text: string; isUser: boolean }[] = [];
    
    function handleSend(event: CustomEvent<{ text: string }>) {
        const userMessage = event.detail.text;
        messages = [...messages, { text: userMessage, isUser: true }];
        
        setTimeout(() => {
            messages = [...messages, { 
                text: `I received your message: "${userMessage}"`, 
                isUser: false 
            }];
        }, 1000);
    }
</script>

<div class="flex flex-col h-full">
    <MessageBody {messages} />
    <ChatInput on:send={handleSend} />
</div> 
<script lang="ts">
    export const username: string = "Guest";
    export const onLogout = () => {};
</script>


<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        color: var(--text);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: gray;
    }
</style>

<nav>
    <h1 class="text-xl font-bold">MyApp</h1>
    <div class="flex items-center gap-4">
        <span>Hello, {username}</span>
        <button on:click={onLogout} class="bg-[var(--accent)] text-white px-3 py-1 rounded hover:opacity-90 transition-opacity">
            Logout
        </button>
    </div>
</nav>

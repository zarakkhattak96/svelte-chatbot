<!-- src/routes/+layout.svelte -->
<script>
    import '../app.css';
    import NavbarContainer from '$lib/container/Navbar.container.svelte';
</script>

<NavbarContainer />

<main class="min-h-screen pt-16 pb-32 bg-gray-700">
    <div class="container mx-auto px-6">
        <slot />
    </div>
</main>


  
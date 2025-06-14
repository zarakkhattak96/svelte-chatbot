<!-- src/routes/+layout.svelte -->
<script>
    import '../app.css';
    import NavbarContainer from '$lib/container/Navbar.container.svelte';
</script>

<NavbarContainer />

<main class="min-h-screen pt-16 pb-32 bg-gray-100">
    <div class="container mx-auto px-6 h-[calc(100vh-8rem)] overflow-y-auto">
        <slot />
    </div>
</main>

<footer class="fixed bottom-0 left-0 right-0 w-full bg-[var(--bg)] text-[var(--text)] py-4 shadow-md">
    <div class="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </div>
</footer>
  
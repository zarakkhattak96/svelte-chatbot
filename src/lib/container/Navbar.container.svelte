<!-- src/lib/containers/NavbarContainer.svelte -->
<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
  
    const user = { name: 'Zarak' };
  
    function logout() {
        console.log('User logged out:', user.name);
    }
</script>
  
<Navbar username={user.name} onLogout={logout} />
  
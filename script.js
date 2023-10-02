<script>
    // Define initial following and followers count
    let followingCount = 100;
    let followersCount = 200;

    // Function to update the counts
    function updateCounts() {
        document.getElementById('following-count').innerText = followingCount;
        document.getElementById('followers-count').innerText = followersCount;
    }

    // Function to increment following count
    function follow() {
        followingCount++;
        updateCounts();
    }

    // Function to increment followers count
    function addFollower() {
        followersCount++;
        updateCounts();
    }
</script>


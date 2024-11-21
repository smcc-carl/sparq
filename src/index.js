document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('channel-username').value;

    //call Netlify Function to fetch data
    const response = await fetch('/netlify/functions/youtube?channelId=${username}');
    const data = await response.json();

    //display data
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
    <h2 class="text-2xl font-bold">Channel Statistics</h2> <p>Subscribers: ${data.items[0].statistics.subscriberCount}</p> <p>Total Views: ${data.items[0].statistics.viewCount}</p> <p>Total Videos: ${data.items[0].statistics.videoCount}</p>
    `;
       
});
//https://www.boredapi.com/api/activity

const suggestButton = document.getElementById('suggestButton');
const activityText = document.getElementById('activityText');

suggestButton.addEventListener('click', function () {
    getRandomActivity()
        .then(data => {
            // 使用回應數據更新網頁上的元素
            activityText.textContent = data.activity;
        })
        .catch(error => {
            console.error(error);
        });
});

function getRandomActivity() {
    return fetch('https://www.boredapi.com/api/activity')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('請求失敗');
            }
        });
}

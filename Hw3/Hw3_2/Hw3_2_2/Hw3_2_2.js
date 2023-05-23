//https://api.agify.io/?name=danny

const GuessButton = document.getElementById('button');
const activityText = document.getElementById('text');
const Guessinput = document.getElementById('input');


GuessButton.addEventListener('click', function () {
    getRandomActivity()
        .then(data => {
            // 使用回應數據更新網頁上的元素
            if(data.age == Guessinput.value){
                activityText.textContent = "沒錯，我叫"+data.name+"，年齡是"+data.age;
            }
            else {
                activityText.textContent = '猜錯了';
            }

            //activityText.textContent = data.age;
        })
        .catch(error => {
            console.error(error);
        });
    activityText.textContent=''
});


function getRandomActivity() {
    return fetch('https://api.agify.io/?name=danny')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('請求失敗');
            }
        });
}

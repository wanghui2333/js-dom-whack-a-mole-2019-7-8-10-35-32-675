window.onload = function () {

    const holes = document.querySelectorAll('.hole'); //获取所有的地洞
    const scoreBoard = document.querySelector('.score');//获取分数表
    const moles = document.querySelectorAll('.mole');//获取老鼠
    const startBtn = document.getElementById('start_btn');//开始按钮
    let titleH1 = document.getElementById('title');//标题

    let lastHole;
    let timeUp = false;
    let score = 0;
    let gameTime = 10000;


    startBtn.addEventListener('click', function () {
        showBtnAnimation();
        startGame();
    }, false);

    function showBtnAnimation() {
        event.preventDefault();

        startBtn.classList.add('animate');
        // 按钮动画延时，按钮动画结束后发生的事：换为正常状态（class中的animate去掉），开始按钮消失
        setTimeout(() => {
            startBtn.classList.remove('animate');
            startBtn.style.display = 'none';
        }, 700);
    }


    function startGame() {
        // TODO: 写开始新游戏后发生的事
        moles.style.display=block;
    }

};
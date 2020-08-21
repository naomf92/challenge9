

//画像情報のオブジェクトを格納した配列
const picArray = [
{src: './images/pic_1.jpg', title: 'pic1'},
{src: './images/pic_2.jpg', title: 'pic2'},
{src: './images/pic_3.jpg', title: 'pic3'},
{src: './images/pic_4.jpg', title: 'pic4'},
{src: './images/pic_5.jpg', title: 'pic5'},
{src: './images/pic_6.jpg', title: 'pic6'}
];


//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingID = 0;

for(let i = 0; i<=6; i++);
// スライドをカウントさせる変数（カウンター変数とよく言います）を作りましょう
// 配列は、中身に割り振られた番号（インデックス番号）を呼び出すことができますので、その性質を利用します

//写真を切り替える関数
//関数名「changePicture」
function changePicture() {
    // 上記で用意をしたカウンター変数と配列を条件式に利用します
    // ヒント: 配列の中身の数を把握すると、画像が最後の枚数に達するまで、と表現ができます。値の中身の数を把握するメソッドに.lengthがあるので、使用すると良さそうです
    
     if( == ) {
        document.getElementById('pics').src = './images/pic_1.jpg';
        document.getElementById('pic-title').innerHTML = picArray[0].title
    } 
    
}
setInterval(function() {changePicture();}, 2000);

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」
function playSlideshow() {
    
}

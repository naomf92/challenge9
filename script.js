

//画像情報のオブジェクトを格納した配列
const picArray = [
{src: './images/pic_1.jpg', title: 'picture1'},
{src: './images/pic_2.jpg', title: 'picture2'},
{src: './images/pic_3.jpg', title: 'picture3'},
{src: './images/pic_4.jpg', title: 'picture4'},
{src: './images/pic_5.jpg', title: 'picture5'},
{src: './images/pic_6.jpg', title: 'picture6'}
];


//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingID = 0;

let counter = 0;
// スライドをカウントさせる変数（カウンター変数とよく言います）を作りましょう
// 配列は、中身に割り振られた番号（インデックス番号）を呼び出すことができますので、その性質を利用します

//写真を切り替える関数
//関数名「changePicture」
function changePicture() {
    // 上記で用意をしたカウンター変数と配列を条件式に利用します
    // ヒント: 配列の中身の数を把握すると、画像が最後の枚数に達するまで、と表現ができます。値の中身の数を把握するメソッドに.lengthがあるので、使用すると良さそうです

    // 画像の枚数が1万枚増えた時にでも対応できる、再利用性のあるコードに変更しましょう
    // つまり、手書きでsrc属性を指定するのではなく、counter変数でカウントさせると良さそうです。そのためのカウンター変数です
    
    if(counter < picArray.length) {
        document.getElementById('pics').src = picArray[0].src
        document.getElementById('pic-title').innerHTML = picArray[0].title 
        counter++;
    } else {
        document.getElementById('pics').src = 
        document.getElementById('pic-title').innerHTML = 
    }

}
//setInterval(function() {changePicture();}, 2000); 
// するとsrc属性の値がnullだと言うエラーが出るので、そちらの修正を先にしなければならない方向性が見えてきます
changePicture();


// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」

function playSlideshow() {

}


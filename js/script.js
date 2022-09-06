let tableData = {};
let continuousButton, time, totleAppleCount, totleRockCount;

var prizeImg, prizeText, bulletinTextarea, totleAppleCountText, totleRockCountText;

window.onload = async () => {
    await getJSON();
    await onloadImages();
    loadingComplete();
}

//fetch取得本地json
let getJSON = () => {
    return fetch('./data/prize.json').then((res) => {
        return res.json();
    }).then((data) => {
        tableData = data;
    }).catch((err) => {
        tableData = {"apple":[{"name":"輪迴碑石","p":0.0003 },{"name":"漆黑的BOSS飾品碎片","p":0.06 },{"name":"神秘冥界武器變換箱","p":0.003 },{"name":"神秘冥界防具變換箱","p":0.003 },{"name":"星力16星強化卷軸","p":0.005 },{"name":"星力15星強化卷軸","p":0.005 },{"name":"星力14星強化卷軸","p":0.005 },{"name":"鈦之心","p":0.005 },{"name":"精靈之心","p":0.005 },{"name":"露希妲靈魂寶珠","p":0.003 },{"name":"艾畢奈亞靈魂寶珠","p":0.003 },{"name":"黃金鐵鎚100％","p":0.01 },{"name":"附加潛在能力賦予卷軸70％","p":0.01 },{"name":"睿智葫蘆","p":0.004 },{"name":"航海師武器變換箱","p":0.0055 },{"name":"航海師防具變換箱","p":0.0055 },{"name":"航海師混合弓","p":0.0015 },{"name":"航海師強弩","p":0.0015 },{"name":"航海師雙弩槍","p":0.0015 },{"name":"航海師閃耀之杖","p":0.0015 },{"name":"航海師文字短杖","p":0.0015 },{"name":"航海師文字長杖","p":0.0015 },{"name":"航海師魔法護腕","p":0.0015 },{"name":"航海師扇子","p":0.0015 },{"name":"航海師ESP限制器","p":0.0015 },{"name":"航海師幻獸棒","p":0.0015 },{"name":"航海師死亡魔劍","p":0.0015 },{"name":"航海師軍刀","p":0.0015 },{"name":"航海師雙刃斧","p":0.0015 },{"name":"航海師十字錘","p":0.0015 },{"name":"航海師重劍","p":0.0015 },{"name":"航海師戰斧","p":0.0015 },{"name":"航海師戰錘","p":0.0015 },{"name":"航海師穿刺槍","p":0.0015 },{"name":"航海師戰戟","p":0.0015 },{"name":"航海師重拳槍","p":0.0015 },{"name":"航海師太刀","p":0.0015 },{"name":"航海師鎖鏈","p":0.0015 },{"name":"航海師短刀","p":0.0015 },{"name":"航海師雙刀","p":0.0015 },{"name":"航海師手杖","p":0.0015 },{"name":"航海師復仇拳套","p":0.0015 },{"name":"航海師能量劍","p":0.0015 },{"name":"航海師靈魂射手","p":0.0015 },{"name":"航海師能量劍","p":0.0015 },{"name":"航海師指虎","p":0.0015 },{"name":"航海師手槍","p":0.0015 },{"name":"航海師加農火砲","p":0.0015 },{"name":"航海師古代之弓","p":0.0015 },{"name":"航海師仙扇","p":0.0015 },{"name":"航海師調節器","p":0.0015 },{"name":"航海師武拳","p":0.0015 },{"name":"航海師龍息射手","p":0.0015 },{"name":"核心寶石20個交換券","p":0.015 },{"name":"永遠的輪迴星火","p":0.013 },{"name":"奧術之河水滴石","p":0.013 },{"name":"太初的水滴石","p":0.013 },{"name":"水中信紙眼飾","p":0.013 },{"name":"凝聚力量的結晶石","p":0.013 },{"name":"銀花戒指","p":0.013 },{"name":"戴雅希杜斯耳環","p":0.013 },{"name":"混沌闇黑龍王的項鍊","p":0.013 },{"name":"金花草腰帶","p":0.013 },{"name":"梅克奈特墜飾","p":0.013 },{"name":"皇家暗黑合金護肩","p":0.013 },{"name":"支配者墜飾","p":0.013 },{"name":"星力13星強化卷軸","p":0.015 },{"name":"星力12星強化卷軸","p":0.015 },{"name":"水晶之心","p":0.015 },{"name":"鋰之心","p":0.015 },{"name":"航海師弓箭手斗篷","p":0.0025 },{"name":"航海師弓箭手手套","p":0.0025 },{"name":"航海師弓箭手鞋","p":0.0025 },{"name":"航海師弓箭手套裝","p":0.0025 },{"name":"航海師弓箭手護肩","p":0.0025 },{"name":"航海師弓箭手帽","p":0.0025 },{"name":"航海師法師斗篷","p":0.0025 },{"name":"航海師法師手套","p":0.0025 },{"name":"航海師法師鞋","p":0.0025 },{"name":"航海師法師套裝","p":0.0025 },{"name":"航海師法師護肩","p":0.0025 },{"name":"航海師法師帽","p":0.0025 },{"name":"航海師劍士斗篷","p":0.0025 },{"name":"航海師劍士手套","p":0.0025 },{"name":"航海師劍士鞋","p":0.0025 },{"name":"航海師劍士套裝","p":0.0025 },{"name":"航海師劍士護肩","p":0.0025 },{"name":"航海師劍士頭盔","p":0.0025 },{"name":"航海師盜賊斗篷","p":0.0025 },{"name":"航海師盜賊手套","p":0.0025 },{"name":"航海師盜賊鞋","p":0.0025 },{"name":"航海師盜賊套裝","p":0.0025 },{"name":"航海師盜賊護肩","p":0.0025 },{"name":"航海師盜賊帽","p":0.0025 },{"name":"航海師海盜斗篷","p":0.0025 },{"name":"航海師海盜手套","p":0.0025 },{"name":"航海師海盜鞋","p":0.0025 },{"name":"航海師海盜套裝","p":0.0025 },{"name":"航海師海盜護肩","p":0.0025 },{"name":"航海師海盜帽","p":0.0025 },{"name":"核心寶石15個交換券","p":0.014 },{"name":"核心寶石10個交換券","p":0.014 },{"name":"強力輪迴星火","p":0.014 },{"name":"製作物品20格欄位包包","p":0.01 },{"name":"製作書20格背包","p":0.01 },{"name":"椅子20個欄位包包","p":0.01 },{"name":"稱號 20格名片錢包","p":0.01 },{"name":"卷軸20格背包","p":0.01 },{"name":"回真卷軸50％","p":0.015 },{"name":"稀有潛在能力卷軸80％","p":0.015 },{"name":"幸運日卷軸","p":0.015 },{"name":"機器人商店使用卷 (30天)","p":0.01 },{"name":"初級能量硬幣(A級)","p":0.017 },{"name":"微弱烙印的靈魂石","p":0.017 },{"name":"星力11星強化卷軸","p":0.017 },{"name":"星力10星強化卷軸","p":0.017 },{"name":"選擇欄位8格擴充券","p":0.017 },{"name":"黃金愛心","p":0.0172 },{"name":"經驗累積的秘藥","p":0.006 },{"name":"獲得財物的秘藥","p":0.006 },{"name":"忍耐的秘藥","p":0.006 },{"name":"覺醒的秘藥","p":0.006 },{"name":"無敵的秘藥","p":0.006 },{"name":"最上級力量強化秘藥","p":0.006 },{"name":"最上級智慧強化秘藥","p":0.006 },{"name":"最上級敏捷強化秘藥","p":0.006 },{"name":"最上級幸運強化秘藥","p":0.006 },{"name":"傳說中的英雄秘藥","p":0.006 },{"name":"傳說中的祝福秘藥","p":0.006 },{"name":"最上級英雄的秘藥","p":0.006 },{"name":"最上級祝福的秘藥","p":0.006 },{"name":"核心寶石5個交換券","p":0.015 },{"name":"核心寶石4個交換券","p":0.015 },{"name":"核心寶石3個交換券","p":0.015 },{"name":"核心寶石2個交換券","p":0.015 },{"name":"核心寶石1個交換券","p":0.015 },{"name":"皮卡啾的靈魂寶珠","p":0.013 },{"name":"凡雷恩的靈魂寶珠","p":0.013 },{"name":"搖滾精神的靈魂寶珠","p":0.013 },{"name":"闇黑龍王的靈魂寶珠","p":0.013 },{"name":"雷克斯的靈魂寶珠","p":0.013 },{"name":"龍騎士的靈魂寶珠","p":0.013 },{"name":"殘暴炎魔的靈魂寶珠","p":0.013 },{"name":"亞尼的靈魂寶珠","p":0.013 }]};
    })
}

init();

function loadingComplete() {
    document.getElementById('loading').style.display = "none";
}

function onloadImages() {
    var img = [];
    for (let i = 0; i < tableData.apple.length; i++) {
        img[i] = new Image();
        let prize = tableData.apple[i];
        img[i].src = `img/prize/${prize.name}.png`;
    }
}

// 初始化
function init() {
    continuousButton = false;
    time = 0;
    totleAppleCount = 0;
    totleRockCount = 0;

    prizeImg = document.getElementById('prize_img');
    prizeText = document.getElementById('prize_name_text');
    bulletinTextarea = document.getElementById('bulletinText');
    totleAppleCountText = document.getElementById('totleAppleCount');
    totleRockCountText = document.getElementById('totleRockCount');

    bulletinTextarea.innerHTML = "<p class='text-info'>歡迎您使用黃金蘋果模擬器。</p>";
    totalItemCount();
}

// 抽蘋果開獎
function prizeDraw(){
    let probability = Math.random();
    // 累計中獎率 最大為 apple.p 總和 = 100%
    let total = 0;
    // console.log("中獎號碼:" + probability);
    for (let i = 0; i < tableData.apple.length; i++) {
        let prize = tableData.apple[i];
        // console.log("累計中獎率:" + total);
        if (probability >= total && probability <= total + prize.p) {

            prizeImg.src=`img/prize/${prize.name}.png`;
            prizeText.innerHTML = prize.name;

            var dateSpan = document.createElement('p');
            if (bulletinPrizeColor(prize.name)) {
                var prizeSpan = `<span class="text-success">${prize.name}</span>`
                dateSpan.innerHTML = `恭喜您從黃金蘋果獲得${prizeSpan}。`;
                dateSpan.className = "bg-warning text-dark";
            } else {
                dateSpan.innerHTML = `已獲得${prize.name} 道具1 個。`;
            }
            bulletinTextarea.appendChild(dateSpan);
            bulletinScrollHeight();

            totleAppleCount += 1;

            if (prize.name == "輪迴碑石") { 
                continuousButton = false;
                clearTimeout();
                totleRockCount += 1;
                setTimeout(function() { alert("輪迴碑石"); }, 100)
            };

            totalItemCount();
            break;
        } else {
            total = total + prize.p;
        }
    }
}

function continuousDrawDown() {
    continuousButton = true;
    continuousprizeDraw();
}

function continuousDrawUp() {
    continuousButton = false;
    clearTimeout();
}

function continuousprizeDraw() {
    if (continuousButton) {
        prizeDraw()
        time = setTimeout(function() {
            continuousprizeDraw();
        }, 100)
    }
}

function bulletinScrollHeight() { 
    bulletinTextarea.scrollTop = bulletinTextarea.scrollHeight; 
}

function bulletinPrizeColor(name) {
    let grandPrize = "輪迴碑石 漆黑的BOSS飾品碎片 神秘冥界武器變換箱 神秘冥界防具變換箱 星力16星強化卷軸 星力15星強化卷軸 星力14星強化卷軸 鈦之心 精靈之心 睿智葫蘆"
    return grandPrize.includes(name);
}

function totalItemCount() {
    totleAppleCountText.innerHTML = `x ${totleAppleCount}`
    totleRockCountText.innerHTML = `x ${totleRockCount}`
}

document.getElementById("click").onclick = function() { prizeDraw() };
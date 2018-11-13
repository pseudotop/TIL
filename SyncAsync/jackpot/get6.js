const http = require('http');
const _ = require('underscore');

function getLottoData(drwNo) {
  const url = `http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;
  let lottoData = {};
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let buff = '';
      res.on('data', chunk => {
        buff += chunk;
      });
      res.on('end', () => {
        lottoData = JSON.parse(buff);
        // console.log(lottoData);
        if (lottoData) resolve(lottoData);
        else reject(new Error('Can not get lotto numbers'));
      });
    });
  });
}

function findLuckyNumbers(lottoData={}) {
  let realNumbers = new Array(6);
  let bonusNumber;
  for (const [key, value] of Object.entries(lottoData)) {
    // console.log(`${key} : ${value}`);
    if (key.indexOf("drwtNo") !== -1) realNumbers[key.split("drwtNo")[1]-1] = value;
    if (key.indexOf("bnusNo") !== -1) bonusNumber = value;
  }
  return {real: realNumbers, bonus: bonusNumber};
}

const ranking = {
  "꽝":{count: 0, amount: 0},
  "5등":{count: 0, amount: 5000},
  "4등":{count: 0, amount: 50000},
  "3등":{count: 0, amount: 0},
  "2등":{count: 0, amount: 0},
  "1등":{count: 0, amount: 0},
};
let realNumbers = [];
let bonusNumber = 0;

function generateNumbers() {
  let genNumbers = _.sample(_.range(1, 46), 6).sort();
  return genNumbers;
}

async function run() {
  let start = new Date().getTime();
  const lottoData = await getLottoData(800);
  // const luckyNumbers = {
    //   bnusNo: lottoData.bnusNo,
    //   drwtNo: []
    // };
    let cnt = 0;
    const getLucky = findLuckyNumbers(lottoData);
    realNumbers = getLucky.real;
    bonusNumber = getLucky.bonus;
    while(true){
      let genNumbers = generateNumbers();
      // genNumbers.sort((a, b) => a-b);
      // console.log(genNumbers.sort((a, b) => a-b));
      // console.log(realNumbers);
      const rank = genNumbers.filter((number) => {
        return realNumbers.find((rnumber) => {
          return number === rnumber;
        });
      });
      // console.log(rank);
      if (rank.length == 5) {
        const rank2 = genNumbers.find((number)=>{
          return number === bonusNumber;
        });
        if (rank2) ranking["2등"].count++;
        else ranking["3등"].count++;
      } else if (rank.length > 2) {
        if (rank.length === 3) ranking["5등"].count++;
        if (rank.length === 4) ranking["4등"].count++;
        if (rank.length === 6) ranking["1등"].count++;
      } else {
        ranking["꽝"].count++;
      }
      if (cnt===100000000) break;
      cnt++;
    }
    let total_amount = cnt*1000/2; //전체 판매액의 50%
    total_amount -= ranking["5등"].amount*ranking["5등"].count+ranking["4등"].amount*ranking["4등"].count; 
    ranking["1등"].amount = total_amount * 0.75 / ranking["1등"].count;
    ranking["2등"].amount = total_amount * 0.125 / ranking["2등"].count;
    ranking["3등"].amount = total_amount * 0.125 / ranking["3등"].count;
    let end = new Date().getTime();
    let total = end - start;
    console.log(ranking);  
    console.log(`time spent : ${total}`);
    //console.log(lottoData);
  }
  
  run();
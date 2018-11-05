const imgList = ['naruto', 'dragonball', 'hunterxhunter', 'onepunchman', 'slamdunk'];

let cnt = 0;
setInterval(()=> {
  if (cnt>=imgList.length) cnt=0;
  requestAJAX(imgList[cnt], "center");
  cnt += 1;
}, 3000);
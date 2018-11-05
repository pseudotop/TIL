const imgList = ['naruto', 'dragonball', 'hunterxhunter', 'onepunchman', 'slamdunk'];

let cnt = 0;
imgList.forEach((img) => {
  if (cnt >= imgList.length) cnt = 0;
  setTimeout(() => {
    requestAJAX(img, "center");
  }, 3000 * cnt);
  cnt += 1;
})
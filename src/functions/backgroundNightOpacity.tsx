export default function backgroundNightOpacity(hour: number | null){
  let opacity = 1;
  if(hour !== null && hour > 22 || hour !== null && hour < 3){
    opacity = 1;
  } else {
    switch(hour){
      case 3: case 22: opacity = 0.95; break;
      case 4: case 21: opacity = 0.9; break;
      case 5: case 20: opacity = 0.7; break;
      case 6: case 19: opacity = 0.4; break;
      case 7: case 18: opacity = 0.2; break;
      default: opacity = 0;
    }
  }
  return opacity;
}
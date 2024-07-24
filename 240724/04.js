const lion = {
    이름: "심바",
    age: 3,
    주인공: true,
    대사: "하쿠나마타타"
};

function incrementAge(lion) {
    
    lion.age += 1;    
    
    return lion.age;
  };

console.log(incrementAge(lion))  

//数组的一些方法
var arr1 = [];
var arr2 = [];
concat(arr1,arr2);//链接2个或者更多数组，并返回结果
arr1.every(function(value){return true});
//如果每一项都返回true就会返回true;
arr1.filter(function(value){return true});
//返回该函数返回true的项组成的数组;
arr1.forEach(function(value,index){});
//该方法没有返回值
arr1.join("-");
//把所有数组元素连成一个字符串，用参数分隔
arr1.lastIndexOf('a');
//返回在数组中最后一次出现a字符的索引
arr1.map((x)=>(x+1));
//对数组进行遍历，每次返回的数组组成新的数组
arr1.reverse();
//将数组颠倒顺序
arr1.slice(2);
//将数组里对应索引范围内的元素作为新数组返回
arr1.some( (x) => x > 1);
//数组中任一项返回true就返回true
arr1.sort(function(){...});
//默认按照字母顺序排序，支持传入制定排序方法的函数
arr1.toString();
//将数组作为字符串返回
arr1.valueOf();
//和toString方法类似
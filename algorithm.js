function ArrayList(){
	var array = [];
	this.insert = function(item){
		array.push(item);
	};
	this.toString = function(){
		return array.join();
	};
	//数值交换辅助函数
	var swap = function(index1,index2){
		var aux = array[index1];
		array[index1] = array[index2];
		array[index2] = aux;
	}
	//冒泡排序
	this.bubbleSort = function(){
		var length = array.length;
		for(var i = 0; i< length;i++){
			for(var j = 0;j< length - i -1 ;j++){
				if(array[j] > array[j+1]){
					swap(j, j+1);
				}
			}
		}
	}
	//选择排序
	this.selectionSort = function(){
		var length = array.length,
			indexMin;
		for(var i = 0;i < length -1;i++){
			indexMin = i;
			for(var j = i;j<length;j++){
				if(array[indexMin] > array[j]){
					indexMin = j;
				}
			}
			if(i !== indexMin){
				swap(i, indexMin);
			}
		}
	}
}


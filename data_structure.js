//实现栈的js模拟代码 FILO
function Stack(){
	var items = [];

	this.push = function(element){
		items.push(element);
	}

	this.pop = function(){
		return items.pop();
	}

	this.peek = function(){
		return items[items.length - s1];
	}

	this.isEmpty = function(){
		return items.length == 0;
	}

	this.size = function(){
		return items.length;
	}

	this.clear = function(){
		items = [];
	}

	this.print = function(){
		console.log(items.toString());
	}
}

//模拟队列类FIFO
function Queue(){
	var items = [];

	this.enqueue = function(element){
		items.push(element);
	}

	this.dequeue = function(){
		return items.shift();
	}

	this.front = function(){
		return items[0];
	}

	this.isEmpty = function(){
		return items.length == 0;
	}

	this.clear = function(){
		items = [];
	}

	this.size = function(){
		return items.length;
	}

	this.print = function(){
		console.log(items.toString());
	}
}

//用set类来实现集合的概念
function Set(){
	var items = {};

	this.has = function(value){
		return items.hasOwnProperty(value);
	}

	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false;
	}

	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	}

	this.clear = function(){
		items = {};
	}

	this.size = function(){
		return Object.keys(items).length;
	}

	this.values = function(){
		return Object.keys(items);
	}
}

//字典和集合很相似，也称作映射，可以用Map类来实现
function Dictionary(){
	var items = {};
	this.has = function(key){
		return key in items;
	}

	this.set = function(key, value){
		items[key] = value;
	}

	this.remove = function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}

	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	}

	this.values = function(){
		var values = {};
		for(var k in items){
			if(this.has(k)){
				values.push(items[k]);
			}
		}
		return values;
	}
}

//使用散列算法可以知道值的具体位置
var loseloseHashCode = function(key){
	var hash = 0;
	for(var i = 0; i < key.length;i++){
		hash += key.charCodeAt(i);
	}
	return hash % 37;
}
function HashTable(){
	var table = [];
	
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		console.log(position + ' - '+ key);
		table[position] = value;
	}
	
	this.get = function(key){
		return table[loseloseHashCode(key)];
	}

	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined;
	}
}
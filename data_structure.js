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


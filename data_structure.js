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
//创建链表
function LinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
	}

	var length = 0;
	var head = null;

	this.append = function(element){
		var node = new Node(element),
		current;

		if(head == null){
			head = node;
		}else{
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next= node;
		}
		length ++;
	};

	this.insert = function(position,element){
		this.insert = function(position, element){
			//检查越界值
			if (position >= 0 && position <= length){ //{1}
				var node = new Node(element),
				current = head,
				previous,
				index = 0;
				if (position === 0){ //在第一个位置添加
					node.next = current; //{2}
					head = node;
				} else {
					while (index++ < position){ //{3}
					previous = current;
					current = current.next;
					}
					node.next = current; //{4}
					previous.next = node; //{5}
				}
				length++; //更新列表的长度
				return true;
			} else {
				return false; //{6}
			}
		};
	};

	this.removeAt = function(position){
		if (position > -1 && position < length){
			var current = head,
				previous,
				index = 0;
			//移除第一项
			if (position === 0){
				head = current.next;
			} else {
				while (index++ < position){ 
					previous = current; 
					current = current.next; 
				}
				//将previous与current的下一项链接起来：跳过current，从而移除它
				previous.next = current.next; 
			}
			length--; 
			return current.element;
		} else {
			return null;
		}
	};

	this.remove = function(element){
		this.remove = function(element){
			var index = this.indexOf(element);
			return this.removeAt(index);
		};
	};

	this.indexOf = function(element){
		this.indexOf = function(element){
			var current = head, //{1}
				index = -1;
			while (current) { //{2}
				if (element === current.element) {
					return index; //{3}
				}
				index++; //{4}
				current = current.next; //{5}
			}
			return -1;
		};
	};

	this.isEmpty = function() {
		return length === 0;
	};


	this.size = function() {
		return length;
	};

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
//djb2散列函数
var djb2HashCode = function(key){
	var hash = 5381;
	for(var i = 0;i < key.length;i++){
		hash = hash * 33 + key.charCodeAt(i);
	}
	return hash % 1013;
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
//1.分离链接解决散列表冲突
var ValuePair = function(key,value){
	this.key = key;
	this.value = value;
	this.toString = function(){
		return '[' + this.key + ' - ' + this.value + ']';
	}
}
//2.线性探查解决冲突（冲突的时候index会自增长1）
this.put = function(key, value){
	var position = loseloseHashCode(key); // {1}
	if (table[position] == undefined) { // {2}
		table[position] = new ValuePair(key, value); // {3}
	} else {
		var index = ++position; // {4}
		while (table[index] != undefined){ // {5}
			index++; // {6}
		}
		table[index] = new ValuePair(key, value); // {7}
	}
};

//创建二叉树类(BinarySearchTree)
function BinarySearchTree(){
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;

	this.insert = function(key){
		var newNode = new Node(key);
		if(root === null){
			root = newNode;
		}else{
			insertNode(root,newNode);
		}
	};

	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root, callback);
	}

	this.preOrderTraverse = function(callback){
		preOrderTraverseNode(root, callback);
	}

	this.postOrderTraverse = function(callback){
		postOrderTraverseNode(root, callback);
	}

	this.min = function(){
		return minNode(root);
	}

	this.max = function(){
		return maxNode(root);
	}
}
//辅助添加非根节点函数
var insertNode = function(node,newNode){
	if(newNode.key < node.key){
		if(node.left === null){
			node.left = newNode;
		}else {
			insertNode(node.left, newNode);
		}
	}else{
		if(node.right === null){
			node.right = newNode;
		}else{
			insertNode(node.right,newNode);
		}
	}
}
//中序遍历辅助函数  按键从小到大遍历（对树进行排序操作）
var inOrderTraverseNode = function (node, callback){
	if(node! == null){
		inOrderTraverseNode(node.left,callback);
		callback(node.key);
		inOrderTraverseNode(node.right,callback);
	}
}
//先序遍历，优先于后代节点的顺序访问每个节点(打印一个结构化的文档)
var preOrderTraverseNode = function(node,callback){
	if(node! == null){
		callback(node.key);
		preOrderTraverseNode(node.left,callback);
		preOrderTraverseNode(node.right,callback);
	}
}
//后序遍历，先访问节点的后代节点，再访问节点本身（计算一个目录和它的子目录中所有文件所占空间的大小）
var postOrderTraverseNode = function(node,callback){
	if(node! == null){
		postOrderTraverseNode(node.left,callback);
		postOrderTraverseNode(node.right,callback);
		callback(node.key);
	}
}
//寻找树的最小键方法
var minNode = function(node){
	if(node){
		while(node && node.left !== null){
			node = node.left;
		}
		return node.key;
	}
	return null;
}
//寻找数的最大键方法
var maxNode = function(node){
	if(node){
		while(node && node.right !== null){
			node = node.right;
		}
		return node.key;
	}
	return null;
}
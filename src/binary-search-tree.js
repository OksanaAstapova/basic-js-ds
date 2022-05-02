const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
  constructor() {
    this.ROOT = null; // root of a binary search tree
  }

  root() {
    return this.ROOT;
  }

  add(data) {
    let newNode = new Node(data);
                  
    if(this.ROOT === null)
        this.ROOT = newNode;
    else
        // find the correct position in the tree and add the node
        this.insertNode(this.ROOT, newNode);
  }
  // Method to insert a node in a tree; it moves over the tree to find the location to insert a node with a given data
  insertNode(node, newNode){
    // if the data is less than the node data move left of the tree
    if(newNode.data < node.data)
    {
        // if left is null insert node here
        if(node.left === null)
            node.left = newNode;
        else
             // if left is not null recur until null is found
            this.insertNode(node.left, newNode);
    }
 
    // if the data is more than the node data move right of the tree
    else
    {
        // if right is null insert node here
        if(node.right === null)
            node.right = newNode;
        else
             // if right is not null recur until null is found
            this.insertNode(node.right,newNode);
    }
}

  has(data) {
    return !!this.find(data);

  }

  find(data) {
    return this.search(this.ROOT, data);

  }
  search(node, data)
  {
     // if trees is empty return null
      if(node === null)
          return null;
   
      // if data is less than node's data move left
      else if(data < node.data)
          return this.search(node.left, data);
   
      // if data is less than node's data move left
      else if(data > node.data)
          return this.search(node.right, data);
   
      // if data is equal to the node data return node
      else
          return node;
  }
  remove(data) {
    this.ROOT = this.removeNode(this.ROOT, data);

  }
  removeNode(node, key){     
    // if the root is null then tree is empty
    if(node === null)
        return null;
 
    // if data to be delete is less than roots data then move to left subtree
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
 
    // if data to be delete is greater than roots data then move to right subtree
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
 
    // if data is similar to the root's data then delete this node
    else
    {
         // deleting node with no children
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        // deleting node with one children
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
 
        // Deleting node with two children minimum node of the right subtree is stored in aux
        let aux = this.min(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
  }
   
  min() {
    return this.findMinNode(this.ROOT).data;
  }

  max() {
    return this.findMaxNode(this.ROOT).data;

  }
  
  findMinNode(node)
{
    // if left of a node is null then it must be minimum node
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}
findMaxNode(node){
    if(node.right === null)
        return node;
    else
        return this.findMaxNode(node.right);
}
}

module.exports = {
  BinarySearchTree
};
// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if (this.root === null ) { //empty tree, need to set tree root;
      this.root = new TreeNode(val);
      return;
    }   

    if (val < currentNode.val) { // left recursive searching null
      if (currentNode.left === null) { // no node left, setting
        currentNode.left = new TreeNode(val)              
      } else {     
        this.insert(val, currentNode.left) // if left node, recurse;
      }       
      return // need return after recursive!
         
    } else if (val > currentNode.val) { // right
      if (currentNode.right === null) { // no node right, setting
        currentNode.right = new TreeNode(val)              
      } else {     
        this.insert(val, currentNode.right) // if right node, recurse;
      }       
      return // need return after recursive!    
    }   
    
  }

  search(val, currentNode=this.root) {
    // Your code here
    if (currentNode === null) return false;
    if (currentNode.val === val) return true;
    if (val < currentNode.val) { // left recursive searching null
        return this.search(val, currentNode.left)        
    } else if (val > currentNode.val) { // right
        return this.search(val, currentNode.right)
    }

  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    console.log(currentNode.val);
    
    if (currentNode.left) {
      this.preOrderTraversal(currentNode.left)
    }  
    if (currentNode.right) {
      this.preOrderTraversal(currentNode.right)
    }
    return
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    
    if (currentNode.left) {
      this.preOrderTraversal(currentNode.left)
    }  
    console.log(currentNode.val);
 
    if (currentNode.right) {
      this.preOrderTraversal(currentNode.right)
            
    }
    return
  }
  


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
        
    if (currentNode.left) {
      this.preOrderTraversal(currentNode.left)
    }  
    if (currentNode.right) {
      this.preOrderTraversal(currentNode.right)
    }
    console.log(currentNode.val);

    return
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}

let bst;
bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);

console.log(bst.root.val) //).to.equal(4);
console.log(bst.root.right) //.to.equal(null);

let leftNode = bst.root.left;
console.log('bst.root.left', bst.root.left);
console.log('leftNode.val', leftNode.val) //.to.equal(2);
//expect(leftNode.left).to.equal(null);
//expect(leftNode.right).to.equal(null);









module.exports = { BinarySearchTree, TreeNode };

//? Day 9: Trees
//* Session Focus: Introduction to binary trees and binary search trees, basic operations, and traversals.
//? Session Practice Questions:

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root == null;
  }

  insert(data) {
    if (this.root == null) {
      this.root = new TreeNode(data);
    } else {
      let root = this.root;
      while (true) {
        if (root.data > data) {
          if (root.left == null) {
            root.left = new TreeNode(data);
            break;
          } else {
            root = root.left;
          }
        } else {
          if (root.right == null) {
            root.right = new TreeNode(data);
            break;
          } else {
            root = root.right;
          }
        }
      }
    }
  }

  insertRecursive(data, root = this.root) {
    if (root == null) {
      this.root = new TreeNode(data);
    } else if (root.data > data && root.left == null) {
      root.left = new TreeNode(data);
    } else if (root.data > data) {
      this.insertRecursive(data, root.left);
    } else if (root.right == null) {
      root.right = new TreeNode(data);
    } else {
      this.insertRecursive(data, root.right);
    }
  }
  preorder(root = this.root) {
    if (root) {
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  inorder(root = this.root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }
  postorder(root = this.root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.data);
    }
  }
  checkBST(root = this.root) {
    if (root) {
      if (root.left != null && root.left.data > root.data) return false;
      if (root.right != null && root.right.data < root.data) return false;
      return this.checkBST(root.left) && this.checkBST(root.right);
    }
    return true;
  }
  height(root = this.root) {
    if (root == null) {
      return -1;
    }
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  LCA_BST(n1, n2, root = this.root) {
    if (!root) return null;
    if (root.data <= n1 && root.data <= n2)
      return this.LCA_BST(n1, n2, root.right);
    if (root.data > n1 && root.data > n2)
      return this.LCA_BST(n1, n2, root.left);
    return root.data;
  }

  countLeaf(root = this.root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return this.countLeaf(root.left) + this.countLeaf(root.right);
    }
    rootToLeaf(res, root = this.root, temp = []) {
        if (!root) return;
        temp.push(root.data);
        if (!root.left && !root.right) {
            res.push([...temp]);
        }
        this.rootToLeaf(res, root.left, temp);
        this.rootToLeaf(res, root.right, temp);
        temp.pop();
    }
  total(root = this.root) {
    if (!root) return 0;
    return root.data + this.total(root.left) + this.total(root.right);
  }
}
let bst = new BST();
let n1, n2;
for (let i = 0; i < 10; i++) {
  n1 = n2;
  n2 = Math.floor(Math.random() * 100);
  bst.insertRecursive(n2);
}
bst.inorder();
bst.preorder();
bst.postorder();
console.log(bst.checkBST());
console.log("LCA for ", n1, n2, "is", bst.LCA_BST(n1, n2));

console.log(bst.countLeaf());
console.log(bst.total());
const res = []
bst.rootToLeaf(res)
console.log(res)
//? Find the height of a binary tree.
//? Perform a pre-order traversal of a binary tree.
//? Check if a binary tree is a binary search tree (BST).
//? Count the number of leaf nodes in a binary tree.
//? Find all root-to-leaf paths in a binary tree.
//? Calculate the sum of all nodes in a binary tree.
// todo Post-Session Practice Questions:
// todo Perform an in-order traversal iteratively.
// todo Find the diameter of a binary tree.
// todo Check if two binary trees are identical.
// todo Convert a binary tree to a doubly linked list.
// todo Construct a binary tree from its inorder and preorder traversals.
// todo Print all nodes at k distance from the root.
// todo Serialize and deserialize a binary tree.
// todo Find the level with the maximum sum in a binary tree.
// todo Calculate the depth of the deepest leaf node.
// todo Convert a BST to a balanced BST. very imp
// todo Find the lowest common ancestor (LCA) of two nodes in a BST.

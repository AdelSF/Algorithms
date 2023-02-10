class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function findClosestValInBST(tree, target){
    return findClosestValHelper(tree, target, tree.value)
}

function findClosestValHelper(tree, target, closest){
    let curr = tree;
    while(curr !== null){
        if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
            closest = curr.value;
        }
        if(target < curr.value){
            curr = curr.left;
        } else if (target > curr.value){
            curr = curr.right;
        } else {
           break;
        }
    }
    return closest;

}


let root2 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))

console.log(findClosestValInBST(root2, 11))
            
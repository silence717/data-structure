// 其实，遍历一棵树，有非常经典的三种方法，分别是前序遍历、中序遍历、后序遍历。
// 这里的序指的是父结点的遍历顺序，前序就是先遍历父结点，中序就是中间遍历父结点，后序就是最后遍历父结点。
// 不管哪种遍历，都是通过递归调用完成的。如下图所示：


// 前序遍历，对树中的任意结点来说，先打印这个结点，然后前序遍历它的左子树，最后前序遍历它的右子树。
function preOrderTraverse(node) {
    if (node == null ) { return; }
    console.log(node.data);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
}

// 中序遍历，对树中的任意结点来说，先中序遍历它的左子树，然后打印这个结点，最后中序遍历它的右子树。
function inOrderTraverse(node) {
    if (node == null ) { return; }
    inOrderTraverse(node.left);
    console.log(node.data);
    inOrderTraverse(node.right);
}


// 后序遍历，对树中的任意结点来说，先后序遍历它的左子树，然后后序遍历它的右子树，最后打印它本身。
function postOrderTraverse(node) {
    if (node == null) { return; }
    postOrderTraverse(node.left);
    postOrderTraverse(node.right);
    console.log(node.data);
}
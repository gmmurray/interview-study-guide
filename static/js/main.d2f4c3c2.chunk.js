(this["webpackJsonpinterview-study-guide"]=this["webpackJsonpinterview-study-guide"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),s=a.n(r),i=a(8),o=a(5),c=a(9),m=a(10),u=a(12),h=a(11),d=a(13),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-small is-fullheight"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title is-size-1"},"Technical Interview Study Guide"),l.a.createElement("h1",{className:"subtitle"},"Do you aspire to be a software developer?"),l.a.createElement("h1",{className:"subtitle"},"Are you looking for an internship or entry level position?"),l.a.createElement("h1",{className:"subtitle"},"Do you have a a big (possibly technical) interview coming up?"),l.a.createElement("p",null,"This website is your resource for conquering that interview. No promises of course, but this is at least a good place to start."))))}}]),t}(n.Component);function p(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null}var f=function(e){return l.a.createElement("div",{className:"has-background-white"},l.a.createElement(p,null),l.a.createElement("section",null,l.a.createElement("p",{className:"title is-1"},"Concepts"),l.a.createElement("p",{className:"subtitle is-3"},"Topics you should probably know")),l.a.createElement("hr",null),l.a.createElement("section",{id:"data-structures"},l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Data Structures"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("p",null,"Data structures are used by computer scientists to organize data in such a way that it can be used effectively depending on the situation.",l.a.createElement("br",null),"There are many different data structures, but for the sake of this guide we'll focus on a few:",l.a.createElement("ul",null,l.a.createElement("li",null,"Array"),l.a.createElement("li",null,"Linked List"),l.a.createElement("li",null,"Stack"),l.a.createElement("li",null,"Queue"),l.a.createElement("li",null,"Binary Tree"),l.a.createElement("li",null,"Heap"),l.a.createElement("li",null,"Graph"))),l.a.createElement("h4",{className:"__subheader--top-padding"},"Array"),l.a.createElement("blockquote",null,"An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).",l.a.createElement("footer",{className:"is-italic"},"from the"," ",l.a.createElement("a",{href:"https://www.geeksforgeeks.org/array-data-structure/",target:"_blank",rel:"noopener noreferrer"},"Geeks for Geeks website"))),"Pros:",l.a.createElement("ul",null,l.a.createElement("li",null,"Easy to use and access through indices"),l.a.createElement("li",null,"Quick access through those indices")),"Cons:",l.a.createElement("ul",null,l.a.createElement("li",null,"Fixed size and memory allocation"),l.a.createElement("li",null,"Complex and costly insertion at index already containing an element")),l.a.createElement("h4",{className:"__subheader--top-padding"},"Linked List"),l.a.createElement("blockquote",null,"A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.",l.a.createElement("footer",{className:"is-italic"},"from the"," ",l.a.createElement("a",{href:"https://www.geeksforgeeks.org/data-structures/linked-list/",target:"_blank",rel:"noopener noreferrer"},"Geeks for Geeks website"))),"Variations:",l.a.createElement("ul",null,l.a.createElement("li",null,"Doubly Linked List - each node contains a reference to the previous node in addition to a reference to the next node"),l.a.createElement("li",null,"Circular Linked List - last node(tail) contains a reference to the first node(head) rather than null")),"Pros:",l.a.createElement("ul",null,l.a.createElement("li",null,"Dynamic size and memory allocation"),l.a.createElement("li",null,"Insert and delete an element at the beginning or end in constant time"),l.a.createElement("li",null,"Memory use is fragmented")),"Cons:",l.a.createElement("ul",null,l.a.createElement("li",null,"Accessing a specific element takes longer because it needs to be found first"),l.a.createElement("li",null,"Relatively more complex in comparison to arrays")),l.a.createElement("h4",{className:"__subheader--top-padding"},"Stack"),l.a.createElement("blockquote",null,"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.",l.a.createElement("footer",{className:"is-italic"},"from the"," ",l.a.createElement("a",{href:"https://www.geeksforgeeks.org/stack-data-structure/",target:"_blank",rel:"noopener noreferrer"},"Geeks for Geeks website"))),"Common Functions:",l.a.createElement("ul",null,l.a.createElement("li",null,"Push - add an element to the top of the stack"),l.a.createElement("li",null,"Pop - remove an element from the top of the stack"),l.a.createElement("li",null,"Peek - return the element at the top of the stack")),"Pros",l.a.createElement("ul",null,l.a.createElement("li",null,"Access last item in constant time"),l.a.createElement("li",null,"Insert or delete last item in constant time")),"Cons",l.a.createElement("ul",null,l.a.createElement("li",null,"Cannot access first or middle elements without going through all the other elements")),l.a.createElement("h4",{className:"__subheader--top-padding"},"Queue"),l.a.createElement("blockquote",null,"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.",l.a.createElement("footer",{className:"is-italic"},"from the"," ",l.a.createElement("a",{href:"https://www.geeksforgeeks.org/queue-data-structure/",target:"_blank",rel:"noopener noreferrer"},"Geeks for Geeks website"))),"Variations:",l.a.createElement("ul",null,l.a.createElement("li",null,"Priority Queue - each element has a priority associated with it",l.a.createElement("ul",null,l.a.createElement("li",null,"Higher priority elements are removed first"),l.a.createElement("li",null,"Elements with the same priority are removed based on their position in queue"))),l.a.createElement("li",null,"Circular Queue - last position of the queue is connected to the first position")),"Common Functions:",l.a.createElement("ul",null,l.a.createElement("li",null,"Enqueue - insert element at the end of the queue"),l.a.createElement("li",null,"Dequeue - remove element at the front of the queue")),"Pros:",l.a.createElement("ul",null,l.a.createElement("li",null,"Access first and last item in constant time"),l.a.createElement("li",null,"Insert last item or delete first item in constant time")),"Cons:",l.a.createElement("ul",null,l.a.createElement("li",null,"Cannot access middle elements without deleting first element")),l.a.createElement("h4",{className:"__subheader--top-padding"},"Binary Tree"),l.a.createElement("blockquote",null,"A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.",l.a.createElement("footer",{className:"is-italic"},"from the"," ",l.a.createElement("a",{href:"https://www.geeksforgeeks.org/binary-tree-data-structure/",target:"_blank",rel:"noopener noreferrer"},"Geeks for Geeks website"))),"Traversal:",l.a.createElement("ul",null,l.a.createElement("li",null,"Inorder - left, root, right"),l.a.createElement("li",null,"Preorder - root, left, right"),l.a.createElement("li",null,"Postorder - left, right, root")),"Binary Search Tree:",l.a.createElement("ul",null,l.a.createElement("li",null,"Each left subtree contains nodes with keys less than the parent's key"),l.a.createElement("li",null,"Each right subtree contains nodes with keys greater than the parent's key")),l.a.createElement("h4",{className:"__subheader--top-padding"},"Heap"),l.a.createElement("blockquote",null,"A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:",l.a.createElement("ol",null,l.a.createElement("li",null,"Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it\u2019s children. The same property must be recursively true for all sub-trees in that Binary Tree."),l.a.createElement("li",null,"Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it\u2019s children. The same property must be recursively true for all sub-trees in that Binary Tree.")),l.a.createElement("footer",{className:"is-italic"},"from the"," ",l.a.createElement("a",{href:"https://www.geeksforgeeks.org/heap-data-structure/",target:"_blank",rel:"noopener noreferrer"},"Geeks for Geeks website"))),l.a.createElement("h4",{className:"__subheader--top-padding"},"Graph"),l.a.createElement("blockquote",null,"A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.",l.a.createElement("footer",{className:"is-italic"},"from the"," ",l.a.createElement("a",{href:"https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",target:"_blank",rel:"noopener noreferrer"},"Geeks for Geeks website")))))),l.a.createElement("hr",null),l.a.createElement("section",{id:"algorithms"},l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Algorithms"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Algorithm"),l.a.createElement("th",null,"Best Case (time)"),l.a.createElement("th",null,"Average Case (time)"),l.a.createElement("th",null,"Worst Case (time)"),l.a.createElement("th",null,"Worst Case (space)"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Bubble Sort"),l.a.createElement("td",null,"O(N)"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(1)")),l.a.createElement("tr",null,l.a.createElement("td",null,"Selection Sort"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(1)")),l.a.createElement("tr",null,l.a.createElement("td",null,"Insertion Sort"),l.a.createElement("td",null,"O(N)"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(1)")),l.a.createElement("tr",null,l.a.createElement("td",null,"Merge Sort"),l.a.createElement("td",null,"O(N log N)"),l.a.createElement("td",null,"O(N log N)"),l.a.createElement("td",null,"O(N log N)"),l.a.createElement("td",null,"O(N)")),l.a.createElement("tr",null,l.a.createElement("td",null,"Quick Sort"),l.a.createElement("td",null,"O(N log N)"),l.a.createElement("td",null,"O(N log N)"),l.a.createElement("td",null,"O(N",l.a.createElement("sup",null,"2"),")"),l.a.createElement("td",null,"O(N log N)")))),l.a.createElement("h4",{className:"__subheader--top-padding"},"Sort Descriptions"),l.a.createElement("h6",null,"Bubble Sort"),l.a.createElement("p",null,'The idea behind bubble sort is to swap elements that are incorrect order. For example, if you compare the first two elements and they are not in order, you swap them. This is repeated for each element over multiple passes, resulting in the elements in the right order "bubbling" to the top.'),l.a.createElement("h6",null,"Selection Sort"),l.a.createElement("p",null,"The elements are kept in two subarrays, one that is sorted and one that is not. The minimum element is selected from the unsorted array and placed in to the sorted array(in order) until there are no elements left in the unsorted array."),l.a.createElement("h6",null,"Insertion Sort"),l.a.createElement("p",null,"Elements are sorted similiar to the way we sort cards in our hands. Each element is picked from the array and inserted where it belongs(in order) until there are no more elements to pick from."),l.a.createElement("h6",null,"Merge Sort"),l.a.createElement("p",null,"Use recursion to split the array into N subarrays. Then, using a merge function, each pair of elements are merged resulting in a two element subarray that is in order. This is repeated with two subarrays, merging until there are only two subarrays left. Each subarray is in order relative to themselves, and they are merged together resulting in a fully sorted array."),l.a.createElement("h6",null,"Quick Sort"),l.a.createElement("p",null,"Quick Sort works by selecting a pivot point and then partitioning the surrounded elements such that all the elements less than the pivot are before and all greate elements are after. Once this is done, the element in the pivot position is in its correct, sorted position. Repeat this process for each partition, eventually resulting in a sorted array.")))),l.a.createElement("hr",null),l.a.createElement("section",{id:"complexity"},l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Complexity"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("h4",{className:"__subheader--top-padding"},"Time Complexity"),l.a.createElement("ul",null,l.a.createElement("li",null,"Refers to the amount of time it will take for a computer to run an algorithm"),l.a.createElement("li",null,"Focused on behavior of time as input size increases (n)"),l.a.createElement("li",null,"Typically expressed in big O notation",l.a.createElement("ul",null,l.a.createElement("li",null,"O(N)"),l.a.createElement("li",null,"O(N log N)"),l.a.createElement("li",null,"O(N",l.a.createElement("sup",null,"x"),")"),l.a.createElement("li",null,"O(2",l.a.createElement("sup",null,"N"),")"))),l.a.createElement("li",null,"Constant time O(1) - time remains constant as size increases"),l.a.createElement("li",null,"Typically a loop has O(N) time complexity with each nested loop increasing the power of N by 1")),l.a.createElement("h4",{className:"__subheader--top-padding"},"Space Complexity"),l.a.createElement("ul",null,l.a.createElement("li",null,"Refers to the amount of storage an algorithm will need to run"),l.a.createElement("li",null,"Focused on behavior of this storage as input size increases"))))),l.a.createElement("hr",null),l.a.createElement("section",{id:"oop"},l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Object-Oriented Programming"),l.a.createElement("div",{className:"has-margin"},"Four principles of object-oriented programming:",l.a.createElement("ol",null,l.a.createElement("li",null,"Abstraction - removing inner details from a class such that another class can understand the intent and concept of that class without knowing exactly how it works"),l.a.createElement("li",null,"Encapsulation - wrapping similiar properties and functionality within a class, hiding implementation of data as necessary through the use of public and private methods"),l.a.createElement("li",null,"Inheritance - basing a class or object on another class or object through"),l.a.createElement("li",null,"Polymorphism - ability for the same objects and methods to be used in different ways depending on the situation. This includes static polymorphism (such as method overloading) and dynamic polymorphism (such as overriding parent method implementations)"))))),l.a.createElement("hr",null),l.a.createElement("section",{id:"language-specific"},l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Language Specific Concepts"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("h4",{className:"__subheader--top-padding"},"C#"),l.a.createElement("ul",null,l.a.createElement("li",null,"Struct vs. Class"),l.a.createElement("li",null,"Delegates"),l.a.createElement("li",null,"Reflection"),l.a.createElement("li",null,"Static"),l.a.createElement("li",null,"Async Await"),l.a.createElement("li",null,"Dependency Injection"),l.a.createElement("li",null,"Strong Typing"),l.a.createElement("li",null,"var Keyword"),l.a.createElement("li",null,"using Block"),l.a.createElement("li",null,"Abstract vs Interface"),l.a.createElement("li",null,"Circular reference/Circular dependency"),l.a.createElement("li",null,"Generic"),l.a.createElement("li",null,"Collections")),l.a.createElement("h4",{className:"__subheader--top-padding"},"JavaScript ES6+"),l.a.createElement("ul",null,l.a.createElement("li",null,"Spread Operator"),l.a.createElement("li",null,"Object Destructuring"),l.a.createElement("li",null,"Closures"),l.a.createElement("li",null,"use strict"),l.a.createElement("li",null,"Falsy/Truthy"),l.a.createElement("li",null,"== vs ==="),l.a.createElement("li",null,"Dynamic Typing"),l.a.createElement("li",null,"Array methods: .map, .reduce"),l.a.createElement("li",null,"Pure functions and Side Effects"),l.a.createElement("li",null,"Event Handlers"),l.a.createElement("li",null,"Short Circuiting with || and &&"),l.a.createElement("li",null,"let vs const vs var"),l.a.createElement("li",null,"Promises"))))),l.a.createElement("hr",null))},g=a(23),b={one:!1,two:!1,three:!1,four:!1,five:!1},w=function(e){var t=Object(n.useState)(b),a=Object(g.a)(t,2),r=a[0],s=a[1];return l.a.createElement("div",{className:"has-background-white"},l.a.createElement("section",null,l.a.createElement("p",{className:"title is-1"},"Problems"),l.a.createElement("p",{className:"subtitle is-3"},"Coding challenges to warm you up for the scary whiteboard!!\ud83d\udc7b")),l.a.createElement("hr",null),l.a.createElement("section",null,l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Problem 1"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("h4",{className:"__subheader--top-padding"},"FizzBuzz"),l.a.createElement("a",{href:"https://www.hackerrank.com/challenges/fizzbuzz/problem",target:"_blank",rel:"noopener noreferrer"},"Hacker Rank Link"),l.a.createElement("p",null,"Write a short program that prints each number from 1 to 100 on a new line."),l.a.createElement("p",null,'For each multiple of 3, print "Fizz" instead of the number.'),l.a.createElement("p",null,'For each multiple of 5, print "Buzz" instead of the number.'),l.a.createElement("p",null,'For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.'),l.a.createElement("button",{className:"button is-link has-margin--small",onClick:function(){return s({one:!r.one})}},"Show Possible Solution"),l.a.createElement("div",{className:"".concat(r.one?"":"is-hidden")},l.a.createElement("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/gmmurray/30tdpoew/2/embedded/js,result/dark/",allowFullScreen:"allowfullscreen",frameBorder:"0"}))))),l.a.createElement("section",null,l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Problem 2"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("h4",{className:"__subheader--top-padding"},"Making Anagrams"),l.a.createElement("a",{href:"https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings",target:"_blank",rel:"noopener noreferrer"},"Hacker Rank Link"),l.a.createElement("p",null,"Write a function that takes two strings and determines the minimum number of character deletions required to make them both anagrams."),l.a.createElement("button",{className:"button is-link has-margin--small",onClick:function(){return s({two:!r.two})}},"Show Possible Solution"),l.a.createElement("div",{className:"".concat(r.two?"":"is-hidden")},l.a.createElement("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/gmmurray/5auj7no4/3/embedded/js,html,result/dark/",allowFullScreen:"allowfullscreen",frameBorder:"0"}))))),l.a.createElement("section",null,l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Problem 3"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("h4",{className:"__subheader--top-padding"},"Longest Substring"),l.a.createElement("a",{href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},"LeetCode Link"),l.a.createElement("p",null,"Write a function that finds the longest substring of a given string and returns its length."),l.a.createElement("button",{className:"button is-link has-margin--small",onClick:function(){return s({three:!r.three})}},"Show Possible Solution"),l.a.createElement("div",{className:"".concat(r.three?"":"is-hidden")},l.a.createElement("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/gmmurray/69dyrwLs/12/embedded/js,result/dark/",allowFullScreen:"allowfullscreen",frameBorder:"0"}))))),l.a.createElement("section",null,l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Problem 4"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("h4",{className:"__subheader--top-padding"},"Bigger is Greater"),l.a.createElement("a",{href:"https://www.hackerrank.com/challenges/bigger-is-greater/problem",target:"_blank",rel:"noopener noreferrer"},"Hacker Rank Link"),l.a.createElement("p",null,"Create a function that takes a string and creates a new string by swapping characters. The new string must be greater (lexicographically) than the original, and the smallest string that is greater (lexicographically). Return the new string.")))),l.a.createElement("section",null,l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"Problem 5"),l.a.createElement("div",{className:"has-margin"},l.a.createElement("h4",{className:"__subheader--top-padding"},"Word Order"),l.a.createElement("a",{href:"https://www.hackerrank.com/challenges/word-order/problem",target:"_blank",rel:"noopener noreferrer"},"Hacker Rank Link"),l.a.createElement("p",null,"Create a function that takes n words and outputs the number of distinct words and the number of occurrences for each word, in order of appearance in the input."),l.a.createElement("button",{className:"button is-link has-margin--small",onClick:function(){return s({five:!r.five})}},"Show Possible Solution"),l.a.createElement("div",{className:"".concat(r.five?"":"is-hidden")},l.a.createElement("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/gmmurray/9e42tpv8/1/embedded/js,result/dark/",allowFullScreen:"allowfullscreen",frameborder:"0"}))))))},k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"has-background-white"},l.a.createElement("section",null,l.a.createElement("p",{className:"title is-1"},"Resources"),l.a.createElement("p",{className:"subtitle is-3"},"Where to go to learn more")),l.a.createElement("hr",null),l.a.createElement("section",null,l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",null,"C#"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",target:"_blank",rel:"noopener noreferrer"},"MSDN Tour of C#")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com/channel/UCda_RJU9-xB0Hswcrjn4SKw",target:"_blank",rel:"noopener noreferrer"},"Jamie King Youtube Videos")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://edabit.com/challenge/ErLPB5BcrE7yhHhKN",target:"_blank",rel:"noopener noreferrer"},"Interactive Tutorials/Challenges")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/",target:"_blank",rel:"noopener noreferrer"},"MSDN C# Reference"))))),l.a.createElement("section",null,l.a.createElement("div",{className:"content is-medium"},l.a.createElement("h3",{className:"__subheader--top-padding"},"JavaScript"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://javascript.info/",target:"_blank",rel:"noopener noreferrer"},"JavaScript Info")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.w3schools.com/js/",target:"_blank",rel:"noopener noreferrer"},"W3 Schools")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.codecademy.com/learn/introduction-to-javascript",target:"_blank",rel:"noopener noreferrer"},"Codecademy"))))))}}]),t}(n.Component),y=a(20),N=(a(34),function(e){return e.replace(/\s+/g,"-").toLowerCase()}),v=function(e){var t=e.links;return l.a.createElement("aside",{className:"menu sidebar"},l.a.createElement("p",{className:"menu-label"},"NAVIGATION"),l.a.createElement("ul",{className:"menu-list"},t.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(i.NavLink,{to:"/".concat(e.name),activeClassName:"is-active"},e.name),(a=e.children,n=e.name,a?l.a.createElement("ul",null,a.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(y.HashLink,{to:"/".concat(n,"#").concat(N(e))},e))}))):""));var a,n}))))},O=[{name:"Home"},{name:"Concepts",children:["Data Structures","Algorithms","Complexity","OOP","Language Specific"]},{name:"Problems"},{name:"Resources"}];a(35),a(36);var _=function(){return l.a.createElement(i.BrowserRouter,{basename:"/interview-study-guide"},l.a.createElement("div",{className:"fullpage has-background-dark"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-one-fifth has-background-light is-fullwidth"},l.a.createElement(v,{links:O})),l.a.createElement("div",{className:"column has-background-white"},l.a.createElement(o.g,null,l.a.createElement(o.d,{path:"/concepts"},l.a.createElement(f,null)),l.a.createElement(o.d,{path:"/problems"},l.a.createElement(w,null)),l.a.createElement(o.d,{path:"/resources"},l.a.createElement(k,null)),l.a.createElement(o.d,{path:"/home"},l.a.createElement(E,null)),l.a.createElement(o.d,{path:"/",exact:!0},l.a.createElement(o.c,{to:"/home"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d2f4c3c2.chunk.js.map
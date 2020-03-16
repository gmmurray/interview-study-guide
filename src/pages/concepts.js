import React from 'react';
import ScrollTopOnMount from '../helpers/scrollTop';

const Concepts = props => {
	return (
		<div className="has-background-white">
			<ScrollTopOnMount />
			<section>
				<p className="title is-1">Concepts</p>
				<p className="subtitle is-3">Topics you should probably know</p>
			</section>
			<hr />

			<section id="data-structures">
				<div className="content is-medium">
					<h3>Data Structures</h3>
					<div className="has-margin">
						<p>
							Data structures are used by computer scientists to
							organize data in such a way that it can be used
							effectively depending on the situation.
							<br />
							There are many different data structures, but for
							the sake of this guide we'll focus on a few:
							<ul>
								<li>Array</li>
								<li>Linked List</li>
								<li>Stack</li>
								<li>Queue</li>
								<li>Binary Tree</li>
								<li>Heap</li>
								<li>Graph</li>
							</ul>
						</p>
						{/* Arrays */}
						<h4 className="__subheader--top-padding">Array</h4>
						<blockquote>
							An array is a collection of items stored at
							contiguous memory locations. The idea is to store
							multiple items of the same type together. This makes
							it easier to calculate the position of each element
							by simply adding an offset to a base value, i.e.,
							the memory location of the first element of the
							array (generally denoted by the name of the array).
							<footer className="is-italic">
								from the{' '}
								<a
									href="https://www.geeksforgeeks.org/array-data-structure/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Geeks for Geeks website
								</a>
							</footer>
						</blockquote>
						Pros:
						<ul>
							<li>Easy to use and access through indices</li>
							<li>Quick access through those indices</li>
						</ul>
						Cons:
						<ul>
							<li>Fixed size and memory allocation</li>
							<li>
								Complex and costly insertion at index already
								containing an element
							</li>
						</ul>
						{/* Linked Lists */}
						<h4 className="__subheader--top-padding">
							Linked List
						</h4>
						<blockquote>
							A linked list is a linear data structure, in which
							the elements are not stored at contiguous memory
							locations. The elements in a linked list are linked
							using pointers. In simple words, a linked list
							consists of nodes where each node contains a data
							field and a reference(link) to the next node in the
							list.
							<footer className="is-italic">
								from the{' '}
								<a
									href="https://www.geeksforgeeks.org/data-structures/linked-list/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Geeks for Geeks website
								</a>
							</footer>
						</blockquote>
						Variations:
						<ul>
							<li>
								Doubly Linked List - each node contains a
								reference to the previous node in addition to a
								reference to the next node
							</li>
							<li>
								Circular Linked List - last node(tail) contains
								a reference to the first node(head) rather than
								null
							</li>
						</ul>
						Pros:
						<ul>
							<li>Dynamic size and memory allocation</li>
							<li>
								Insert and delete an element at the beginning or
								end in constant time
							</li>
							<li>Memory use is fragmented</li>
						</ul>
						Cons:
						<ul>
							<li>
								Accessing a specific element takes longer
								because it needs to be found first
							</li>
							<li>
								Relatively more complex in comparison to arrays
							</li>
						</ul>
						{/* Stacks */}
						<h4 className="__subheader--top-padding">Stack</h4>
						<blockquote>
							Stack is a linear data structure which follows a
							particular order in which the operations are
							performed. The order may be LIFO(Last In First Out)
							or FILO(First In Last Out). There are many real-life
							examples of a stack. Consider an example of plates
							stacked over one another in the canteen. The plate
							which is at the top is the first one to be removed,
							i.e. the plate which has been placed at the
							bottommost position remains in the stack for the
							longest period of time. So, it can be simply seen to
							follow LIFO(Last In First Out)/FILO(First In Last
							Out) order.
							<footer className="is-italic">
								from the{' '}
								<a
									href="https://www.geeksforgeeks.org/stack-data-structure/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Geeks for Geeks website
								</a>
							</footer>
						</blockquote>
						Common Functions:
						<ul>
							<li>
								Push - add an element to the top of the stack
							</li>
							<li>
								Pop - remove an element from the top of the
								stack
							</li>
							<li>
								Peek - return the element at the top of the
								stack
							</li>
						</ul>
						Pros
						<ul>
							<li>Access last item in constant time</li>
							<li>Insert or delete last item in constant time</li>
						</ul>
						Cons
						<ul>
							<li>
								Cannot access first or middle elements without
								going through all the other elements
							</li>
						</ul>
						{/* Queues */}
						<h4 className="__subheader--top-padding">Queue</h4>
						<blockquote>
							A Queue is a linear structure which follows a
							particular order in which the operations are
							performed. The order is First In First Out (FIFO). A
							good example of a queue is any queue of consumers
							for a resource where the consumer that came first is
							served first. The difference between stacks and
							queues is in removing. In a stack we remove the item
							the most recently added; in a queue, we remove the
							item the least recently added.
							<footer className="is-italic">
								from the{' '}
								<a
									href="https://www.geeksforgeeks.org/queue-data-structure/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Geeks for Geeks website
								</a>
							</footer>
						</blockquote>
						Variations:
						<ul>
							<li>
								Priority Queue - each element has a priority
								associated with it
								<ul>
									<li>
										Higher priority elements are removed
										first
									</li>
									<li>
										Elements with the same priority are
										removed based on their position in queue
									</li>
								</ul>
							</li>
							<li>
								Circular Queue - last position of the queue is
								connected to the first position
							</li>
						</ul>
						Common Functions:
						<ul>
							<li>
								Enqueue - insert element at the end of the queue
							</li>
							<li>
								Dequeue - remove element at the front of the
								queue
							</li>
						</ul>
						Pros:
						<ul>
							<li>Access first and last item in constant time</li>
							<li>
								Insert last item or delete first item in
								constant time
							</li>
						</ul>
						Cons:
						<ul>
							<li>
								Cannot access middle elements without deleting
								first element
							</li>
						</ul>
						{/* Binary Trees */}
						<h4 className="__subheader--top-padding">
							Binary Tree
						</h4>
						<blockquote>
							A tree whose elements have at most 2 children is
							called a binary tree. Since each element in a binary
							tree can have only 2 children, we typically name
							them the left and right child.
							<footer className="is-italic">
								from the{' '}
								<a
									href="https://www.geeksforgeeks.org/binary-tree-data-structure/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Geeks for Geeks website
								</a>
							</footer>
						</blockquote>
						Traversal:
						<ul>
							<li>Inorder - left, root, right</li>
							<li>Preorder - root, left, right</li>
							<li>Postorder - left, right, root</li>
						</ul>
						Binary Search Tree:
						<ul>
							<li>
								Each left subtree contains nodes with keys less
								than the parent's key
							</li>
							<li>
								Each right subtree contains nodes with keys
								greater than the parent's key
							</li>
						</ul>
						{/* Heaps */}
						<h4 className="__subheader--top-padding">Heap</h4>
						<blockquote>
							A Heap is a special Tree-based data structure in
							which the tree is a complete binary tree. Generally,
							Heaps can be of two types:
							<ol>
								<li>
									Max-Heap: In a Max-Heap the key present at
									the root node must be greatest among the
									keys present at all of it’s children. The
									same property must be recursively true for
									all sub-trees in that Binary Tree.
								</li>
								<li>
									Min-Heap: In a Min-Heap the key present at
									the root node must be minimum among the keys
									present at all of it’s children. The same
									property must be recursively true for all
									sub-trees in that Binary Tree.
								</li>
							</ol>
							<footer className="is-italic">
								from the{' '}
								<a
									href="https://www.geeksforgeeks.org/heap-data-structure/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Geeks for Geeks website
								</a>
							</footer>
						</blockquote>
						{/* Graphs */}
						<h4 className="__subheader--top-padding">Graph</h4>
						<blockquote>
							A Graph is a non-linear data structure consisting of
							nodes and edges. The nodes are sometimes also
							referred to as vertices and the edges are lines or
							arcs that connect any two nodes in the graph.
							<footer className="is-italic">
								from the{' '}
								<a
									href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Geeks for Geeks website
								</a>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>
			<hr />

			<section id="algorithms">
				<div className="content is-medium">
					<h3>Algorithms</h3>
					<div className="has-margin">
						<table className="table">
							<thead>
								<tr>
									<th>Algorithm</th>
									<th>Best Case (time)</th>
									<th>Average Case (time)</th>
									<th>Worst Case (time)</th>
									<th>Worst Case (space)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Bubble Sort</td>
									<td>O(N)</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>O(1)</td>
								</tr>
								<tr>
									<td>Selection Sort</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>O(1)</td>
								</tr>
								<tr>
									<td>Insertion Sort</td>
									<td>O(N)</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>O(1)</td>
								</tr>
								<tr>
									<td>Merge Sort</td>
									<td>O(N log N)</td>
									<td>O(N log N)</td>
									<td>O(N log N)</td>
									<td>O(N)</td>
								</tr>
								<tr>
									<td>Quick Sort</td>
									<td>O(N log N)</td>
									<td>O(N log N)</td>
									<td>
										O(N<sup>2</sup>)
									</td>
									<td>O(N log N)</td>
								</tr>
							</tbody>
						</table>

						{/* Sort desriptions */}
						<h4 className="__subheader--top-padding">
							Sort Descriptions
						</h4>
						<h6>Bubble Sort</h6>
						<p>
							The idea behind bubble sort is to swap elements that
							are incorrect order. For example, if you compare the
							first two elements and they are not in order, you
							swap them. This is repeated for each element over
							multiple passes, resulting in the elements in the
							right order "bubbling" to the top.
						</p>

						<h6>Selection Sort</h6>
						<p>
							The elements are kept in two subarrays, one that is
							sorted and one that is not. The minimum element is
							selected from the unsorted array and placed in to
							the sorted array(in order) until there are no
							elements left in the unsorted array.
						</p>

						<h6>Insertion Sort</h6>
						<p>
							Elements are sorted similiar to the way we sort
							cards in our hands. Each element is picked from the
							array and inserted where it belongs(in order) until
							there are no more elements to pick from.
						</p>

						<h6>Merge Sort</h6>
						<p>
							Use recursion to split the array into N subarrays.
							Then, using a merge function, each pair of elements
							are merged resulting in a two element subarray that
							is in order. This is repeated with two subarrays,
							merging until there are only two subarrays left.
							Each subarray is in order relative to themselves,
							and they are merged together resulting in a fully
							sorted array.
						</p>

						<h6>Quick Sort</h6>
						<p>
							Quick Sort works by selecting a pivot point and then
							partitioning the surrounded elements such that all
							the elements less than the pivot are before and all
							greate elements are after. Once this is done, the
							element in the pivot position is in its correct,
							sorted position. Repeat this process for each
							partition, eventually resulting in a sorted array.
						</p>
					</div>
				</div>
			</section>
			<hr />

			<section id="complexity">
				<div className="content is-medium">
					<h3>Complexity</h3>
					<div className="has-margin">
						{/* Time Complexity */}
						<h4 className="__subheader--top-padding">
							Time Complexity
						</h4>
						<ul>
							<li>
								Refers to the amount of time it will take for a
								computer to run an algorithm
							</li>
							<li>
								Focused on behavior of time as input size
								increases (n)
							</li>
							<li>
								Typically expressed in big O notation
								<ul>
									<li>O(N)</li>
									<li>O(N log N)</li>
									<li>
										O(N<sup>x</sup>)
									</li>
									<li>
										O(2<sup>N</sup>)
									</li>
								</ul>
							</li>
							<li>
								Constant time O(1) - time remains constant as
								size increases
							</li>
							<li>
								Typically a loop has O(N) time complexity with
								each nested loop increasing the power of N by 1
							</li>
						</ul>

						{/* Space Complexity */}
						<h4 className="__subheader--top-padding">
							Space Complexity
						</h4>
						<ul>
							<li>
								Refers to the amount of storage an algorithm
								will need to run
							</li>
							<li>
								Focused on behavior of this storage as input
								size increases
							</li>
						</ul>
					</div>
				</div>
			</section>
			<hr />

			<section id="oop">
				<div className="content is-medium">
					<h3>Object-Oriented Programming</h3>
					<div className="has-margin">
						Four principles of object-oriented programming:
						<ol>
							<li>
								Abstraction - removing inner details from a
								class such that another class can understand the
								intent and concept of that class without knowing
								exactly how it works
							</li>
							<li>
								Encapsulation - wrapping similiar properties and
								functionality within a class, hiding
								implementation of data as necessary through the
								use of public and private methods
							</li>
							<li>
								Inheritance - basing a class or object on
								another class or object through
							</li>
							<li>
								Polymorphism - ability for the same objects and
								methods to be used in different ways depending
								on the situation. This includes static
								polymorphism (such as method overloading) and
								dynamic polymorphism (such as overriding parent
								method implementations)
							</li>
						</ol>
					</div>
				</div>
			</section>
			<hr />

			<section id="language-specific">
				<div className="content is-medium">
					<h3>Language Specific Concepts</h3>
					<div className="has-margin">
						{/* C# */}
						<h4 className="__subheader--top-padding">C#</h4>
						<ul>
							<li>Struct vs. Class</li>
							<li>Delegates</li>
							<li>Reflection</li>
							<li>Static</li>
							<li>Async Await</li>
							<li>Dependency Injection</li>
							<li>Strong Typing</li>
							<li>var Keyword</li>
							<li>using Block</li>
							<li>Abstract vs Interface</li>
							<li>Circular reference/Circular dependency</li>
							<li>Generic</li>
							<li>Collections</li>
						</ul>

						{/* JavaScript */}
						<h4 className="__subheader--top-padding">
							JavaScript ES6+
						</h4>
						<ul>
							<li>Spread Operator</li>
							<li>Object Destructuring</li>
							<li>Closures</li>
							<li>use strict</li>
							<li>Falsy/Truthy</li>
							<li>== vs ===</li>
							<li>Dynamic Typing</li>
							<li>Array methods: .map, .reduce</li>
							<li>Pure functions and Side Effects</li>
							<li>Event Handlers</li>
							<li>Short Circuiting with || and &&</li>
							<li>let vs const vs var</li>
							<li>Promises</li>
						</ul>
					</div>
				</div>
			</section>
			<hr />
		</div>
	);
};

export default Concepts;

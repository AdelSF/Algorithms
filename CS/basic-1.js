
/*
A multi-paradigm programming language is one that is equally well-suited in more than one programming paradigm.

A programming paradigm is a style of programming based on a particular model of computation. For example,

1-procedural programming is based on organizing code through procedures or functions.

2-Object-oriented programming is based on organizing code through objects which encapsulate both data and behaviour (methods or functions).

3-Functional programming is again based on organizing code through functions, but the functions are first-class entities that can be composed together in various ways according to the lambda calculus.

In practice, most of today’s programming languages are capable of employing all three paradigms, but NOT equally well. Thus, they aren’t truly multi-paradigm. Examples:

Java
Python
JavaScript
C++
C#
Ruby
Perl
PHP
Scheme
Smalltalk
Scala, among others, claims to be multi-paradigm. But in the final analysis, this is really a fairly subjective evaluation. Even Wikipedia can’t get it straight most of the time.

========================================================================================================


what type is the language?
   interpreter?
   js -> interpreter(web browser/nodejs) -> translates binary -> OS 
   python
   explanation: An interpreter translates source code into object code one instruction at a time. It is similar to a human translator translating what a person says into another language, sentence by sentence. The resulting object code is then executed immediately. The process is called interpretation .
   
  compiler?
  java -> compiler -> bytecode <- JVM
  c c++ -> binary -> OS
  explanation: A compiler is a special program that translates a programming language's source code into machine code, bytecode or another programming language. The source code is typically written in a high-level, human-readable language such as Java or C++.

  DIFFERENCE: An interpreter produces a result from a program, while a compiler produces a program written in assembly language. The assembler of architecture then turns the resulting program into binary code. Assembly language varies for each individual computer, depending upon its architecture.
========================================================================================================


Question:
Is JavaScript a statically or a dynamically typed language?

Quick answer:
JavaScript is a dynamically typed language, but TypeScript is a statically typed language.

Longer answer:
In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.


let a
a = 0
console.log(a) // 0
a = 'Hello world'
console.log(a) // Hello world
a = { 'key': 'value' }
console.log(a) // {key:'value'}
If we take a look at Typescript, it is a statically typed language, so all checks will be performed during compile/build run before we actually execute our program.

So the previous code with added variable a type won't work. Even from the JavaScript standpoint it is valid (except types) and will run without any errors.



In TypeScript, you can specify variable type manually or it may be calculated automatically. In the following example, notice that there are no type definitions, but TypeScript still knows that a is a numeric variable.


Real-life applications:

In this section, we are stepping into a middle ground zone, because debates about what is better or worse are still around.

// Personal opinion start

Both statically and dynamically typed languages have their own advantages.

JavaScript (dynamic typing):

Faster prototyping, because you don't care about types.
Easier learning curve, because you need to learn fewer things.
TypeScript (static typing):

Richer code completion, because you know all methods for all variables right away.
Better maintainability, you only need a type definition to understand what something is doing, e.g. API response type definition, function params, and return type, ...
Easier to catch simple errors like mistypes (users vs usrs).
// If you add other pros in the comments, I will add them here.

Btw nor JavaScript, nor TypeScript won't allow you to not write tests. Even TypeScript with its type system won't let you catch all the errors during build time, only simple ones.

// Personal opinion end


========================================================================================================



Functional vs object-oriented programming
Ron Powell
Ron Powell
Senior Manager, Marketing Insights and Strategy


Share on Twitter
Share on LinkedIn
Share on Facebook
Share on Reddit
>Share on Hacker News
Programming is as much an art as it is a science. Personal preference plays a large role in determining your programming style, so you may not be surprised to find yourself in a debates with a peer. One ongoing debate is the choice between two different programming paradigms called functional programming and object-oriented programming. Which one is better? Which should you use?

Proponents on either side will tell you that their favorite paradigm offers some clear advantages that apply almost universally. You could argue that it depends. In this article, we will look at both choices and try to distill myth from fact. The goal is to better understand these programming methods and be prepared to use them when it makes sense.

Functional programming
Functional programming (FP) is one of the oldest kinds of programming, maybe even the oldest. It defines a process of building software that relies exclusively on functions. In FP, developers compose functions to create new functions and write applications to avoid aspects such as shared state or mutable data. To achieve this, developers often use FP declaratively rather than imperatively.

So what does that all mean?

Key concepts in functional programming
First, it is important to understand that functions are first-class citizens in FP, which means they are treated like any other value. They can be passed around as arguments or returned from other functions. A function that returns a function is called a higher-order function. These higher-order functions make it possible to compose new functions directly from arguments.

A second important point is the concept of immutability. An immutable value is a primitive value, one that cannot change. Values like numbers are considered immutable. You cannot change 42 to 14. You can only create a new number with the value 14 and assign that to the previously used variable. But making that new number 14 does not affect the number 42 that you used previously.

While this kind of value treatment makes sense for primitives such as numbers, it may feel strange for composed values such as objects or arrays. Nevertheless, FP principles treat all values as immutable. The only way to change a value is to create a new one, potentially using an old one as a base value or copy.

The use of immutable data types allows FP to use pure functions. These functions are defined only by their arguments. Since the arguments cannot change, they are guaranteed to behave predictably. The same arguments give the same results. Other programming approaches do not guarantee this predictable behavior.

Use cases for functional programming
Although it was originally used mostly in scientific applications, FP has become increasingly popular in a variety of fields. For instance, in web development, a user interface (UI) library called React makes use of FP principles to become declarative and easy to handle. The library advocates using immutable state objects (values) to reflect the current state of the application without changing. When the developer wants a new state, they have to create a new object. The beauty of this approach is that you can trace back each change in the UI. All previous states are still untouched and available.

While the roots of FP are certainly in the academic side of computer science, its practical implications go back as far as languages such as Lisp or Scheme. That some of these traits were baked into the JavaScript language is one key factor in FP’s continued use. However, some languages build on top of FP principles: F#, Clojure, and Elixir are among the more popular ones. In academia, Haskell has been considered the go-to language for decades.

Object-oriented programming
Functional programming has been around a long time, but some developers consider object-oriented programming (OOP) to be even more traditional. Programming languages like Smalltalk or Objective-C popularized the OOP, which was invented in the late 1970s. Later, C++, Java, and C# continued to hardwire this programming style into the minds of most developers.

Read on for descriptions of important principles in OOP and some of its most common uses cases.

Key concepts in object-oriented programming
In OOP, developers model software applications as collections of objects that can communicate with one another. The interface of each object is a class, a template that indicates functions and values are accessible to any instance. While this ability to communicate was initially envisioned as message passing that would allow network communication or asynchronous IO in general, it was later popularized as simple functions invoked on the corresponding object. Such functions are called methods.

In contrast to the immutable objects in FP, in OOP object mutation is part of the game. So, calling a method will most likely also change some value of the object.

One reason many developers still make use of OOP, especially when teaching programming, is that it is imperatively written. This means the developer is explicit about what is happening where. The counterargument is that even using such an imperative style, it can be difficult to determine the current state of individual objects. Due to mutability, this can quickly lead to unforeseen consequences.

Use cases for object-oriented programming
Traditionally, developers have made almost all UIs with an OOP approach. This is also relatively straightforward, as a class-based component can just inherit its basic structure (fields and methods) from another similar component. For instance, a date input field can inherit from a text input field, which inherits from an input box, which inherits from a control. Using this inheritance-based approach, you only need to specify the additional methods and reimplement the behavior on some existing methods. There is no need to write the logic for the keyboard or mouse handling again, for example.

Today, OOP is a must-have feature in all general-purpose programming languages. Even FP-based languages such as F# directly support OOP features, such as classes or inheritance. A good example is JavaScript, which did not incorporate standard features such as classes or inheritance right away but added them in more recent revisions.

As we have discovered, the two programming approaches are different enough to justify using both when applicable. So how do you choose between them? Here are some of the arguments.

Functional vs object-oriented programming: the debate
As already discussed, both approaches have their benefits and pitfalls. Computer science professor Norman Ramsey offered a useful perspective in a well-known Stack Overflow answer. He argued that FP excels when all objects are known, but have behavior that may change. In contrast, OOP is great when the behaviors are known, but the actual data types may change.

Fans on either side will go beyond that. For instance, followers of FP argue that cleanly designed software written in a pure FP style is easy to debug and will never crash. They tell you that FP gives you some of the advantages of test-driven development right away, and that OOP with all SOLID principles rigorously applied is essentially FP. While it is true that SOLID leads to individual functions resembling most of FP, it does not necessarily have to be FP. For instance, no SOLID principle forbids data mutation.

Developers who love OOP may dismiss some of the FP benefits for trade-offs like performance or simplicity. Why copy all of an object’s fields into a new object when you only want to change a single field? Why should an array with a million elements require a copy to set a single element? Of course, there are some patterns you could use to avoid making a copy, but then you need specialized data structures again. The level of indirection here can be baffling compared to the direct approach developers have used for ages independently of OOP.

While there are some pretty stark contrasts between these approaches, they can also be complementary. There is no law that forbids using classes in a software application. There is also no law saying that the application’s general state should be mutable.

Looking into the future
Almost all popular programming languages are multiparadigm. They all support FP by allowing functions to be passed around or having helpers that deal with data object immutability. They also come with OOP features, such as classes or inheritance. Either way, this multiparadigm approach is here to stay. From a user’s point of view, it is almost always better to have more choices.

In general, a tendency toward more FP-friendly features seems likely. By bringing in additional support for cloning data objects, function references, and function compositions, a language becomes a great companion, even beyond FP. In languages such as C#, the FP-friendly features provide an excellent addition to the OOP features. This combination comes in handy even in OOP-developed applications, like when you are using certain helper functions.

The downside of mixing FP and OOP approaches is the learning curve. Some people avoid C# for this reason. What started as a pristine, elegantly designed alternative to Java can end up feeling more like a complex monster along the lines of C++.

OOP certainly will not vanish, but the most likely outcome is that it will find its place coexisting with FP. Admittedly, the ideal of side-effect free development is almost impossible to implement in practice. There is already a side-effect when writing log messages to a console. Developers had first to discover and unlock the practical side of FP. Now that developers have started to recognize the practical side of FP, there is almost no reason to lock FP features out again.

Ongoing support for object-oriented programming
In this context, why should OOP still be a viable choice? OOP has value because it is essentially the ideal tool. There is almost nothing developers cannot model through OOP practices. Developers can even model most FP features through OOP.

For example, consider something as elementary as passing around or combining functions. In a nutshell, this is what a functor or delegate provides. It is just an object corresponding to a class with a single method.

Finding common ground
Very few development teams will change their software or way of writing applications just to switch from one approach to the other. It is more likely for a team to actively refactor some of their most essential applications to use more recent features of their programming languages.

Either way, the future looks increasingly hybrid. On some future project, you will probably find yourself using a more FP-inspired style in OOP applications or some OOP features in FP-driven applications.

Conclusion
Certain types of applications favor FP (like compilers), while others are more suited for using OOP principles (like classic desktop applications). Choosing the right programming approach depends on several factores, like the target programming language, framework, and type of application you are building. Use what you feel is most comfortable,but do not forget to keep on learning to add to your toolbelt. It is always beneficial to have plenty of choices when tackling a problem.



========================================================================================================


What is HTTP stack?
A StreamStack implementation of the HTTP protocol for Node.

This module exposes two concrete StreamStack implementations: HttpRequestStack and HttpResponseStack . Together they can be used to write and/or respond to HTTP requests.


What is HTTP and why it is used?
Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes.

*/




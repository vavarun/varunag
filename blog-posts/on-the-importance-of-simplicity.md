# On The Importance Of Simplicity In Software

31 / 12 / 2018

I believe that working towards simplicity is essential for building reliable and maintainable software. This might seem like an obvious and uncontroversial statement, but I don't think it is. I want to lay out the reasons why I think simplicity is important and address some of the pushback this statement gets.

> If you don’t actively fight for simplicity in software, complexity will win.
>
> …and it will suck.

_- Henrik Joreteg ([on twitter](https://twitter.com/HenrikJoreteg/status/364989455414726657))_

First, I want to establish what I even mean by simplicity. We can think of simplicity as the absence of complexity. When we describe something as being complex we usually mean that it consists of many moving parts which relate to each other in (sometimes) unclear ways.

Let's look at an example of a problem solved in a simple and in a complex way. I'm going to use javascript as the language here but the concept itself is language-agnostic.

Our goal here is to write some code that lets us add two numbers.

```javascript
// simple: a pure function with two arguments
const addTwoNumbers = (a, b) => a + b

addTwoNumbers(2, 4) // 6

// complex: a class with a getter, a setter and an add method
class Num {
  constructor(num) {
    this.current = num
  }
  set current(num) {
    this.\_current = num
  }
  get current() {
    return this.\_current
  }
  add(num) {
    this.current = this.\_current + num
  }
}

const a = new Num(2)
a.add(b)
a.current // 6
```

Both of those solutions work fine and they each have their pros and cons. The first approach is short and easy to understand, the second one gives more options to build upon.

I'm not saying that one of those approaches is better than the other, I'm just illustrating how the same problem can be solved with solutions of varying complexity.

### Simple Code Introduces Fewer Bugs

Bugs are inevitable when building software. But that doesn't mean we shouldn't try as hard as we can to avoid them. We have found many ways of trying to do this (testing, code reviews, pair programming etc.) and I believe working towards simplicity is another one of those ways. There are different ways in which simple code can lead to fewer bugs:

- Simple code usually results in less code; less code ≈ fewer bugs
- Simple code is easier to understand and therefore leads to more efficient code reviews
- It's easier to write good tests for simple code; better tests ≈ fewer bugs

On top that, bugs introduced by simple code are way easier to deal with. Since simple code is easier to understand, it is also easier to find the things wrong with it. Complex code, on the other hand, is not just harder to understand but tends to be touched less often. This results in unfamiliarity with the code and makes debugging a pain.

### Simple Code Is Easier To Maintain

Almost all software is destined to change, whether due to fixes, improvements or new features. We need to be aware of that fact while designing and writing our code. While we want to focus on the problem at hand and avoid to prematurely optimise, being aware that our code will be touched by someone else in the future will lead us to write cleaner and better-to-understand code.

So why is simple code easier to maintain? It's the same reasons that make it less buggy: Less code, easier to understand. The major reason is that developers are usually less familiar with the complex parts of the codebase because they get touched less often. This can slow down development significantly.

### What's So Bad About Complexity?

Everything, actually. I already outlined the main reasons above, but let me address some of the defences one might have for complexity in software.

#### **"You can't solve complex problems with simple code. Complexity is inevitable."**

Sure, problems can be complex and some might also demand complex solutions. I still think that simplifying the problem as much as possible is a good thing. And if after that we are still left with a complex solution, this might be a time to pause and reflect:

- How did we get to this level of complexity?
- Did we identify the problem correctly?
- Are there any different issues we can fix that would reduce complexity?

We can also design our code in a way that simplifies the complex solution (e.g. by splitting code into less complex, self-contained parts).

My point is not that there is no such thing as complexity, but rather that we want to avoid it where we can.

#### **"Maybe my code is not too complex, but you're just not smart enough to understand it."**

Fair enough, that might be the case. And if no one except you ever touches your code, you might not be too concerned about how easy it is for other people to understand it. But I would challenge you to think of your **future self** as a team member. Maybe you're a bit rusty in the current stack in 2 years. Maybe you just think of your code as simple because you just wrote it.

And maybe you are right and your code **is** "simple enough", which brings me to the next concern:

#### **"When do I know that my code is simple enough? Isn't this completely arbitrary?"**

Good point. Yes, it is. Complexity exists on a continuum and where you draw the line is up to you/your team. But I don't think that line matters or needs to be drawn.

That's why I wanted to lay out in which ways simplicity is desirable. You don't want to strive for simplicity for the sake of simplicity. You want to do it for the many upsides it has. Simplicity is not a box you want to tick but rather one of the many things you want to work towards for when writing code.

---

**_Also, simplicity is beautiful._** :wink:

// 26. Bubbling order mein output kya hoga?

/*

<div id="parent">
    <span id="child">click</span>
</div>

parent.addEventListener("click", () => console.log("parent"));
child.addEventListener("click", () => console.log("child"));

child pe click

Output:

child
parent

*/


// 27. Kya aayega?

const el = document.createElement("div");

el.textContent = "<b>bold</b>";

console.log(el.innerHTML);

// Output:
// &lt;b&gt;bold&lt;/b&gt;


// 28. e.stopPropagation() vs e.preventDefault()

/*

e.stopPropagation()
→ Event bubbling/capturing rokta hai

e.preventDefault()
→ Default browser action rokta hai

Example:

<a href="google.com">Link</a>

preventDefault()
→ Link open nahi hoga

stopPropagation()
→ Parent listeners fire nahi honge

Dono saath:
→ Na default action hoga
→ Na event upar bubble karega

*/


// 29. Kya return karega aur kyun?

localStorage.setItem("x", { a: 1 });

console.log(localStorage.getItem("x"));

// Output:
// [object Object]

// Kyunki object string me convert ho jata hai


// 30. Kya print hoga?

const ul = document.createElement("ul");

ul.innerHTML = "<li>A</li><li>B</li>";

const items = ul.querySelectorAll("li");

items.forEach(i => i.remove());

console.log(ul.children.length);

// Output:
// 0


// 31. getElementById vs querySelector

/*

document.getElementById("myId")

document.querySelector("#myId")

Dono same element return karte hain.

Difference:

getElementById:
- Faster
- Sirf id ke liye

querySelector:
- Any CSS selector
- More flexible

*/


// 32. Kya print hoga?

const p = document.createElement("p");

document.body.appendChild(p);

p.addEventListener("click", () => console.log("fired"));

p.dispatchEvent(new Event("click"));

p.remove();

p.dispatchEvent(new Event("click"));

/*

Output:

fired
fired

Reason:
Listener remove nahi hua.
Element DOM se remove hua hai.

*/


// 33. input vs change event

/*

1) User type kare

input → fire hoga

change → nahi


2) User Tab dabaye (focus lose)

change → fire hoga

input → typing ke time already fire ho chuka hoga

*/


// 34. e.target vs e.currentTarget

/*

<div id="parent">
   <button id="child">Click</button>
</div>

Parent pe listener

parent.addEventListener("click", (e) => {
   console.log(e.target);
   console.log(e.currentTarget);
});

Child pe click

e.target
→ child button

e.currentTarget
→ parent div

*/


// 35. sessionStorage behaviour

sessionStorage.setItem("key", "val");

/*

1) Same tab + reload

Mil jayega

Output:
val


2) New tab

Nahi milega

Output:
null


sessionStorage:
Tab specific

localStorage:
Browser specific

*/


// 56. Predict Output
 const div = document.createElement('div'); div.innerHTML = 'hi <scr' + 'ipt>alert(1)</scr' + 'ipt>'; console.log(div.textContent)

 //Output - hi alert(1)


//57. predict Output
el.addEventListener('click', fn1, true)
//capturing el.addEventListener('click', fn2, false)
 // bubbling // Nested elements: parent → child click par sequence? 
//Order: Capturing (Top → Bottom) → Target → Bubbling (Bottom → Top)

//58. cloneNode behavior batao: node.cloneNode(true) // deep clone node.cloneNode(false) // shallow clone // Event listeners clone honge kya?
node.cloneNode(true)

// Element + saare child elements clone honge (deep clone)

node.cloneNode(false)

// Sirf element clone hoga, children clone nahi honge (shallow clone)


//59. DocumentFragment kyun use karte hain? // Option A: 100 baar seedha appendChild() // Option B: Fragment mein add karke ek baar append // Reflow/repaint mein kya farq padta hai?
/*
Option A:
100 baar direct appendChild()
→ DOM 100 baar update ho sakta hai
→ zyada reflow/repaint

Option B:
DocumentFragment mein sab add karo
→ Fragment memory mein build hota hai
→ DOM mein sirf 1 baar append
→ kam reflow/repaint
→ better performance */


// 60. Kab kaun best practice hai? el.style.color = 'red' el.setAttribute('style', 'color:red') el.classList.add('text-red') // Teen approaches — teen scenarios batao.
/* 1. el.style.color = "red"
   -> Jab 1-2 styles dynamically change karni ho.

2. el.setAttribute("style", ...)
   -> Jab poora inline style ek saath set karna ho.

3. el.classList.add("text-red")
   -> Real projects me best practice.
   -> Reusable, maintainable, CSS aur JS alag rehte hain.*/


/* 
74. predict output
const a = document.createElement('a');
a.href = 'javascript:void(0)';
a.click();
console.log('after click');
*/

//output - after click


/*
Q84. Kya print hoga?

const div = document.createElement('div');

div.addEventListener(
 'click',
 () => console.log(1)
);

const clone =
div.cloneNode(true);

document.body.append(clone);

clone.click();
*/

//ans - Nothing


/*
Q98. Kya print hoga aur kyun?

document.body.innerHTML = '';

document.body.innerHTML =
'<div id=x></div>';

const el =
document.getElementById('x');

document.body.innerHTML =
'<div id=x></div>';

el.textContent = 'hi';

console.log(
 document
 .getElementById('x')
 .textContent
);
*/ 

// output - empty string
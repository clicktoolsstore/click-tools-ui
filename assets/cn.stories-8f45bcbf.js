import"./chunk-S4VUQJ4A-75c4c3e1.js";import{M as c}from"./index-2143331e.js";import{j as e}from"./jsx-runtime-6eef64cc.js";import{u as a}from"./index-dc1d5b46.js";import"./iframe-54fcebe4.js";import"../sb-preview/runtime.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./react-18-4ba3c4b8.js";import"./index-25c5ea02.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(s){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},a(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/cn"}),`
`,e.jsx(n.h1,{id:"cn---utility-function",children:"cn - utility function"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx("code",{children:"cn"}),` function is a utility that simplifies the construction of CSS
class names by leveraging the `,e.jsx("code",{children:"clsx"})," and ",e.jsx("code",{children:"twMerge"}),` libraries.
It provides an easy way to build class name strings efficiently.`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`})}),`
`,e.jsx(n.p,{children:"it combines the power of conditional string contructions with clsx:"}),`
`,e.jsx(n.h3,{id:"strings-variadic",children:"Strings (variadic)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`cn("foo", true && "bar", "baz");
//=> 'foo bar baz'
`})}),`
`,e.jsx(n.h3,{id:"objects",children:"Objects"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`cn({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'
`})}),`
`,e.jsx(n.h3,{id:"objects-variadic",children:"Objects (variadic)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`cn({ foo: true }, { bar: false }, null, { "--foobar": "hello" });
//=> 'foo --foobar'
`})}),`
`,e.jsx(n.h3,{id:"arrays",children:"Arrays"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`cn(["foo", 0, false, "bar"]);
//=> 'foo bar'
`})}),`
`,e.jsx(n.h3,{id:"arrays-variadic",children:"Arrays (variadic)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`cn(["foo"], ["", 0, false, "bar"], [["baz", [["hello"], "there"]]]);
//=> 'foo bar baz hello there'
`})}),`
`,e.jsx(n.h3,{id:"kitchen-sink-with-nesting",children:"Kitchen sink (with nesting)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`cn("foo", [1 && "bar", { baz: false, bat: null }, ["hello", ["world"]]], "cya");
//=> 'foo bar hello world cya'
`})}),`
`,e.jsx(n.h2,{id:"merging-tailwind-css-classes",children:"Merging Tailwind CSS Classes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx("code",{children:"cn"})," utility function uses the ",e.jsx("code",{children:"twMerge"}),` utility function
to efficiently merge Tailwind CSS classes in JavaScript without style conflicts.`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`twMerge("px-2 py-1 bg-red hover:bg-dark-red", "p-3 bg-[#B91C1C]");
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
`})}),`
`,e.jsxs(n.p,{children:["This combination of ",e.jsx("code",{children:"clsx"})," and ",e.jsx("code",{children:"twMerge"}),` empowers you to create
and manage CSS class names effortlessly, making it a valuable tool for styling your
components in a clean and efficient manner.`]})]})}function t(s={}){const{wrapper:n}=Object.assign({},a(),s.components);return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}const o=()=>{throw new Error("Docs-only story")};o.parameters={docsOnly:!0};const r={title:"Utils/cn",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:t};const w=["__page"];export{w as __namedExportsOrder,o as __page,r as default};
//# sourceMappingURL=cn.stories-8f45bcbf.js.map

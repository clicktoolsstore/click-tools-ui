import"./chunk-S4VUQJ4A-75c4c3e1.js";import{M as r}from"./index-2143331e.js";import{j as e}from"./jsx-runtime-6eef64cc.js";import{u as i}from"./index-dc1d5b46.js";import"./iframe-54fcebe4.js";import"../sb-preview/runtime.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./react-18-4ba3c4b8.js";import"./index-25c5ea02.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function o(s){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",pre:"pre",code:"code"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Home"}),`
`,e.jsx(n.h1,{id:"click-tools-ui",children:"Click Tools UI"}),`
`,e.jsxs(n.p,{children:["This design system is built upon the ",e.jsx(n.a,{href:"https://tailwindcss.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwind"}),`
CSS framework and utilizes its class utilities and tokens.`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To use the components and tokens provided by this project, follow these steps:"}),`
`,e.jsxs(n.p,{children:["1- ",e.jsx(n.strong,{children:"Install Tailwind"}),": Refer to the official ",e.jsx(n.a,{href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwind documentation"}),`
for installation instructions.`]}),`
`,e.jsxs(n.p,{children:["2- ",e.jsx(n.strong,{children:"Install Packages"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @click-tools-ui/react @click-tools-ui/tokens
`})}),`
`,e.jsxs(n.p,{children:["3- ",e.jsx(n.strong,{children:"Import CSS"}),": Import the CSS file from the ",e.jsx("code",{children:"@click-tools-ui/react/dist/index.css"}),`
after the `,e.jsx("code",{children:"global.css"})," created on the first step."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import "global.css";
import "@click-tools-ui/react/dist/index.css";
`})}),`
`,e.jsx("em",{className:"text-slate-400 text-sm sb-unstyled",children:e.jsx(n.p,{children:"This step brings the required CSS classes that the components need."})}),`
`,e.jsxs(n.p,{children:["4- ",e.jsx(n.strong,{children:"Integrate Tokens"}),": Next integrate the tokens from ",e.jsx("code",{children:"@click-tools-ui/tokens"})," with your"]}),`
`,e.jsxs(n.p,{children:[e.jsx("code",{children:"tailwind.config"})," as shown in the sample code below:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {
  colors,
  borderRadius,
  fontSize,
  lineHeight,
  opacity,
  ...
} from '@click-tools-ui/tokens'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@click-tools-ui/react/dist/index.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        mono: ['monospace', defaultTheme.fontFamily.mono],
      },
      colors: { ...colors, 'sb-bg-dark': '#333333', 'sb-bg-light': '#f8f8f8' },
      borderRadius,
      fontSize,
      lineHeight,
      opacity,
    },
    ...
  },
}

export default config
`})}),`
`,e.jsxs("em",{className:"text-slate-400 text-sm inline-flex  sb-unstyled",children:[e.jsx(n.p,{children:`For information on installing the required font-family and its weights, refer
to the  `}),e.jsx("a",{href:"/?path=/docs/tokens-font-families--docs",className:"text-blue-400 font-medium",children:e.jsx(n.p,{children:"Font Families"})}),e.jsx(n.p,{children:"  section."})]})]})}function l(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const t={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const w=["__page"];export{w as __namedExportsOrder,a as __page,t as default};
//# sourceMappingURL=home.stories-02530308.js.map

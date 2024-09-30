"use strict";(self.webpackChunkguardian_portal_storybook=self.webpackChunkguardian_portal_storybook||[]).push([[5752],{"./src/components/image-carousel/ImageCarousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LastPage:()=>LastPage,WithCustomContent:()=>WithCustomContent,WithoutBackgroundImage:()=>WithoutBackgroundImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ImageCarousel_stories});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,t3,_=t=>t;const CarouselContainer=styled_components_browser_esm.Ay.div(t||(t=_`
  width: 639px;
  height: 390px;
  border-radius: 8px;
  background-image: ${0};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`),(props=>props.backgroundImage?`linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), url(${props.backgroundImage})`:"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)")),Content=styled_components_browser_esm.Ay.div(t1||(t1=_`
  height: 89px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.75);
`)),Title=styled_components_browser_esm.Ay.h2(t2||(t2=_`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 28px;
  font-weight: normal;
  line-height: normal;
  color: #ffffff;
  margin: 0 0 4px 0;
`)),Body=styled_components_browser_esm.Ay.p(t3||(t3=_`
  font-family: 'Libre Franklin', sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  color: #ffffff;
  margin: 0;
`)),ImageCarousel=({title,body,backgroundImage})=>(0,jsx_runtime.jsx)(CarouselContainer,{backgroundImage,children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(Body,{children:body})]})});ImageCarousel.__docgenInfo={description:"",methods:[],displayName:"ImageCarousel",props:{title:{required:!0,tsType:{name:"string"},description:""},body:{required:!0,tsType:{name:"string"},description:""},backgroundImage:{required:!1,tsType:{name:"string"},description:""}}};const ImageCarousel_stories={title:"Components/ImageCarousel/Carousel",component:ImageCarousel,argTypes:{title:{control:"text"},body:{control:"text"},backgroundImage:{control:"text"},currentPage:{control:"number"},totalPages:{control:"number"},onPageChange:{action:"page changed"}}},Default={args:{title:"<title>",body:"<body>",backgroundImage:"https://via.placeholder.com/639x390",currentPage:1,totalPages:7}},WithCustomContent={args:{title:"Beautiful Landscape",body:"Explore nature",backgroundImage:"images/space_force_command.jpeg",currentPage:3,totalPages:5}},WithoutBackgroundImage={args:{title:"No Image",body:"Text only carousel",currentPage:2,totalPages:4}},LastPage={args:{title:"Last Page",body:"This is the last page of the carousel",backgroundImage:"images/space_force_fly_over.jpeg",currentPage:7,totalPages:7}},__namedExportsOrder=["Default","WithCustomContent","WithoutBackgroundImage","LastPage"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: '<title>',\n    body: '<body>',\n    backgroundImage: 'https://via.placeholder.com/639x390',\n    currentPage: 1,\n    totalPages: 7\n  }\n}",...Default.parameters?.docs?.source}}},WithCustomContent.parameters={...WithCustomContent.parameters,docs:{...WithCustomContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Beautiful Landscape',\n    body: 'Explore nature',\n    backgroundImage: 'images/space_force_command.jpeg',\n    currentPage: 3,\n    totalPages: 5\n  }\n}",...WithCustomContent.parameters?.docs?.source}}},WithoutBackgroundImage.parameters={...WithoutBackgroundImage.parameters,docs:{...WithoutBackgroundImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'No Image',\n    body: 'Text only carousel',\n    currentPage: 2,\n    totalPages: 4\n  }\n}",...WithoutBackgroundImage.parameters?.docs?.source}}},LastPage.parameters={...LastPage.parameters,docs:{...LastPage.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Last Page',\n    body: 'This is the last page of the carousel',\n    backgroundImage: 'images/space_force_fly_over.jpeg',\n    currentPage: 7,\n    totalPages: 7\n  }\n}",...LastPage.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-image-carousel-ImageCarousel-stories.9dddf3fd.iframe.bundle.js.map
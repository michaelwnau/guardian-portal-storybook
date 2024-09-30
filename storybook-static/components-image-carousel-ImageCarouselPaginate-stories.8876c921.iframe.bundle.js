"use strict";(self.webpackChunkguardian_portal_storybook=self.webpackChunkguardian_portal_storybook||[]).push([[1911],{"./src/components/image-carousel/ImageCarouselPaginate.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SingleImage:()=>SingleImage,TwoImages:()=>TwoImages,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ImageCarouselPaginate_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,t3,t4,t5,t6,t7,_=t=>t;const CarouselContainer=styled_components_browser_esm.Ay.div(t||(t=_`
  width: 639px;
  height: 390px;
  border-radius: 8px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), url(${0});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`),(props=>props.backgroundImage)),Content=styled_components_browser_esm.Ay.div(t1||(t1=_`
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
`)),PaginationContainer=styled_components_browser_esm.Ay.div(t4||(t4=_`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.75);
`)),PageButton=styled_components_browser_esm.Ay.button(t5||(t5=_`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: ${0};
  color: ${0};
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`),(props=>props.active?"#ffffff":"rgba(255, 255, 255, 0.5)"),(props=>props.active?"#000000":"#ffffff")),NavigationButton=styled_components_browser_esm.Ay.button(t6||(t6=_`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
`)),PageCounter=styled_components_browser_esm.Ay.span(t7||(t7=_`
  color: #ffffff;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 14px;
  margin: 0 10px;
`)),ImageCarouselPaginate=({images})=>{const[currentPage,setCurrentPage]=(0,react.useState)(0),handlePageChange=newPage=>{setCurrentPage(newPage)};return(0,jsx_runtime.jsxs)(CarouselContainer,{backgroundImage:images[currentPage].url,children:[(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Title,{children:images[currentPage].title}),(0,jsx_runtime.jsx)(Body,{children:images[currentPage].body})]}),(0,jsx_runtime.jsxs)(PaginationContainer,{children:[(0,jsx_runtime.jsx)(NavigationButton,{onClick:()=>handlePageChange(0),children:"<<"}),(0,jsx_runtime.jsx)(NavigationButton,{onClick:()=>handlePageChange(Math.max(0,currentPage-1)),children:"<"}),images.map(((image,index)=>(0,jsx_runtime.jsx)(PageButton,{active:index===currentPage,onClick:()=>handlePageChange(index),children:index+1},`page-button-${image.url}`))),(0,jsx_runtime.jsx)(NavigationButton,{onClick:()=>handlePageChange(Math.min(images.length-1,currentPage+1)),children:">"}),(0,jsx_runtime.jsx)(NavigationButton,{onClick:()=>handlePageChange(images.length-1),children:">>"}),(0,jsx_runtime.jsxs)(PageCounter,{children:[currentPage+1," of ",images.length]})]})]})};ImageCarouselPaginate.__docgenInfo={description:"",methods:[],displayName:"ImageCarouselPaginate",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  url: string;\r\n  title: string;\r\n  body: string;\r\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}}]}}],raw:"Array<{\r\n  url: string;\r\n  title: string;\r\n  body: string;\r\n}>"},description:""}}};const ImageCarouselPaginate_stories={title:"Components/ImageCarousel/Paginate",component:ImageCarouselPaginate,argTypes:{images:{control:"object"}}},defaultImages=[{url:"images/semper_supra_banner.png",title:"Beautiful Landscape",body:"Explore nature"},{url:"images/space_force_command.jpeg",title:"Mountain View",body:"Breathtaking peaks"},{url:"images/semper_supra_banner.png",title:"Serene Lake",body:"Tranquil waters"},{url:"images/space_force_command.jpeg4",title:"Desert Sunset",body:"Golden horizons"},{url:"images/space_force_fly_over.jpeg",title:"Semper Supra!",body:"This is the last page of the carousel"}],Default={args:{images:defaultImages}},SingleImage={args:{images:[defaultImages[0]]}},TwoImages={args:{images:defaultImages.slice(0,2)}},__namedExportsOrder=["Default","SingleImage","TwoImages"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    images: defaultImages\n  }\n}",...Default.parameters?.docs?.source}}},SingleImage.parameters={...SingleImage.parameters,docs:{...SingleImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    images: [defaultImages[0]]\n  }\n}",...SingleImage.parameters?.docs?.source}}},TwoImages.parameters={...TwoImages.parameters,docs:{...TwoImages.parameters?.docs,source:{originalSource:"{\n  args: {\n    images: defaultImages.slice(0, 2)\n  }\n}",...TwoImages.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-image-carousel-ImageCarouselPaginate-stories.8876c921.iframe.bundle.js.map
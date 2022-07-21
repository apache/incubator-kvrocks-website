"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[160],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,f=d["".concat(u,".").concat(b)]||d[b]||s[b]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},u="How to backup",l={unversionedId:"Operations/how-to-backup",id:"Operations/how-to-backup",title:"How to backup",description:"Full backup",source:"@site/docs/06-Operations/00-how-to-backup.md",sourceDirName:"06-Operations",slug:"/Operations/how-to-backup",permalink:"/docs/Operations/how-to-backup",draft:!1,editUrl:"https://github.com/apache/incubator-kvrocks-website/tree/main/docs/06-Operations/00-how-to-backup.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1658382244,formattedLastUpdatedAt:"7/21/2022",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kvrocks Exporter",permalink:"/docs/Tools/kvrocks-exporter"},next:{title:"Kvrocks Cluster Introduction",permalink:"/docs/Cluster/kvrocks-cluster-introduction"}},p={},s=[{value:"Full backup",id:"full-backup",level:2},{value:"Incremental backup",id:"incremental-backup",level:2}],d={toc:s};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-backup"},"How to backup"),(0,a.kt)("h2",{id:"full-backup"},"Full backup"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"bgsave")," command to trigger Kvrocks to generate a backup, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"rsync")," tool to copy all files of backup to remote server."),(0,a.kt)("h2",{id:"incremental-backup"},"Incremental backup"),(0,a.kt)("p",null,"You can try use incremental backup if your kvrocks database doesn't be changed quickly, this way could use less network bandwidth."),(0,a.kt)("p",null,"This solution is similar with kvrocks resuming broken transfer based files on full synchronization.\nFirstly, you should get old remote backup files list, and current new backup files list (by ",(0,a.kt)("inlineCode",{parentName:"p"},"bgsave")," command and read ",(0,a.kt)("inlineCode",{parentName:"p"},"backup")," directory); Secondly, by comparing them, you will know invalid files of old remote backup and delete them, please notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"CURRENT")," file may be invalid, you should always fetch it; Finally, you only copy files that old remote backup doesn't have but new backup has, and store into remote server."))}b.isMDXComponent=!0}}]);
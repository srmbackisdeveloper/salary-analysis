"use strict";(self.webpackChunksalary_controller=self.webpackChunksalary_controller||[]).push([[709],{7709:function(e,a,r){r.r(a),r.d(a,{default:function(){return v}});var t=r(4165),s=r(1413),n=r(5861),c=r(9439),l=r(2791),i=r(1358),o=r(3623),d=(r(550),r(184));function u(e){return(0,d.jsx)("div",{className:"chart__body",onClick:function(){e.setBarActive(!1)},children:(0,d.jsx)("div",{className:"chart__modal",onClick:function(e){return e.stopPropagation()},children:(0,d.jsx)("div",{className:"chart",children:(0,d.jsx)(o.$Q,{data:e.dataForChart})})})})}var h=r(7319),f=r(1978),p=r(9126),m=r(643),b=r(6355);function x(e){var a=e.filter,r=e.setFilter,t=e.setSearchActive,s=e.searchActive,n=e.setAnalyticsActive;return(0,d.jsx)("div",{className:"search__modal",onClick:function(e){return e.stopPropagation()},children:(0,d.jsxs)("div",{className:"search",children:[(0,d.jsx)(b.aHS,{className:"exit",onClick:function(){r(""),t(!s),n(!1)}}),(0,d.jsx)("h1",{className:"label",children:"Search"}),(0,d.jsx)("input",{className:"search_input",value:a||"",onChange:function(e){return r(e.target.value)},placeholder:"Enter value"}),(0,d.jsx)("p",{onClick:function(){r("")},className:"clear",children:"Clear"})]})})}var j=r(8820);function v(){var e=(0,l.useState)([]),a=(0,c.Z)(e,2),r=a[0],o=a[1],v=(0,f.hJ)(h.db,"users"),y=(0,l.useState)(!0),_=(0,c.Z)(y,2),g=_[0],Z=_[1];(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.PL)(v);case 2:a=e.sent,o(a.docs.map((function(e){return(0,s.Z)({},e.data())}))),Z(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=(0,l.useMemo)((function(){return r}),[r]),C=(0,l.useMemo)((function(){return[{Header:"Name",accessor:"name"},{Header:"Age",accessor:"age"},{Header:"Salary",accessor:"salary"},{Header:"Email",accessor:"email"}]}),[]),k=(0,i.useTable)({columns:C,data:S},i.useGlobalFilter,i.useSortBy),N=k.getTableProps,w=k.getTableBodyProps,A=k.headerGroups,P=k.rows,B=k.prepareRow,F=k.state,H=k.setGlobalFilter,I=F.globalFilter,T={labels:S.map((function(e){return e.age})),datasets:[{label:"Global Salary Information",data:S.map((function(e){return e.salary})),backgroundColor:["black"]},{label:"Kazakhstan Salary Information",data:S.map((function(e){return 1.33*e.salary})),backgroundColor:["aqua"]}]},G=(0,l.useState)(!1),z=(0,c.Z)(G,2),E=z[0],R=z[1],K=(0,l.useState)(!1),L=(0,c.Z)(K,2),M=L[0],D=L[1],J=(0,l.useState)(!1),Q=(0,c.Z)(J,2),U=Q[0],V=Q[1];return(0,d.jsxs)("div",{children:[g&&(0,d.jsx)("div",{className:"body__spinner",children:(0,d.jsx)(m.Nx,{width:"200",color:"white"})}),(0,d.jsx)("div",{style:{display:"none"},children:r.map((function(e){return(0,d.jsxs)("p",{children:[e.id," ",e.name," ",e.age," ",e.salary," ",e.email]})}))}),(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("table",(0,s.Z)((0,s.Z)({},N()),{},{children:[(0,d.jsx)("thead",{children:A.map((function(e){return(0,d.jsx)("tr",(0,s.Z)((0,s.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,d.jsxs)("th",(0,s.Z)((0,s.Z)({},e.getHeaderProps(e.getSortByToggleProps({title:void 0}))),{},{children:[e.render("Header"),(0,d.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,d.jsx)(j.BwW,{}):(0,d.jsx)(j.i4I,{}):""})]}))}))}))}))}),(0,d.jsx)("tbody",(0,s.Z)((0,s.Z)({},w()),{},{children:P.map((function(e){return B(e),(0,d.jsx)("tr",(0,s.Z)((0,s.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,d.jsx)("td",(0,s.Z)((0,s.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),M?(0,d.jsx)("div",{className:"arrow___hide",onClick:function(){D(!1)},children:(0,d.jsx)(b.aHS,{})}):(0,d.jsx)("div",{onClick:function(){return D(!0)},className:"arrow___analytics___body",children:(0,d.jsx)(p.RVs,{className:"arrow___analytics"})}),M&&(0,d.jsx)("button",{className:"show___analytics",onClick:function(){return R(!0)},children:"Analytics"}),M&&(0,d.jsx)("button",{className:"show___search",onClick:function(){V(!U)},children:U?"Search disable":"Search enable"}),E&&(0,d.jsx)(u,{dataForChart:T,setBarActive:R}),U&&(0,d.jsx)(x,{filter:I,setFilter:H,setSearchActive:V,searchActive:U})]})}},7319:function(e,a,r){r.d(a,{db:function(){return c}});var t=r(9692),s={apiKey:"AIzaSyBEUBgLAMVCeFcx90Ty3WAztJKTia_z3vQ",authDomain:"salarydb-8f14b.firebaseapp.com",databaseURL:"https://salarydb-8f14b-default-rtdb.firebaseio.com",projectId:"salarydb-8f14b",storageBucket:"salarydb-8f14b.appspot.com",messagingSenderId:"1065349031236",appId:"1:1065349031236:web:81cca4f57961efc026a311"},n=(0,r(4702).ZF)(s),c=(0,t.ad)(n)}}]);
//# sourceMappingURL=709.a6ef590f.chunk.js.map
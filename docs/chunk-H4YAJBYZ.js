import{A as C,B as P,C as w,D as F,E as D,F as W,G as M,H as b,I as j,J as X,K as Y,O as Z,Q as ee,R as te,S as k,W as L,X as ie,Y as ne,a as N,b as q,c as $,d as z,e as y,f as J,g as _,h as H,i as d,j as B,k as G,l as K,m as T,n as c,o as h,p as f,q as m,r as o,s as i,t as u,u as Q,v as S,w as v,x as R,y as a,z as p}from"./chunk-T7FUFQUT.js";var g=(()=>{let e=class e{constructor(n){this.http=n,this.apiUrl="https://restcountries.com/v3.1/",this.cacheStorage={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStorage))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStorage=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(n){return this.http.get(n).pipe($(()=>N([])))}searchCountryByAlphaCode(n){let r=`${this.apiUrl}/alpha/${n}`;return this.http.get(r).pipe(q(l=>l.length>0?l[0]:null),$(()=>N(null)))}searchCapital(n){let r=`${this.apiUrl}/capital/${n}`;return this.getCountriesRequest(r).pipe(y(l=>this.cacheStorage.byCapital={term:n,countries:l}),y(()=>this.saveToLocalStorage()))}searchCountry(n){let r=`${this.apiUrl}/name/${n}`;return this.getCountriesRequest(r).pipe(y(l=>this.cacheStorage.byCountries={term:n,countries:l}),y(()=>this.saveToLocalStorage()))}searchRegion(n){let r=`${this.apiUrl}/region/${n}`;return this.getCountriesRequest(r).pipe(y(l=>this.cacheStorage.byRegion={region:n,countries:l}),y(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(r){return new(r||e)(H(Y))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var me=t=>["/countries/by",t];function pe(t,e){t&1&&(o(0,"div",2),a(1,` no hay paises que mostrar
`),i())}function ue(t,e){if(t&1&&(o(0,"tr")(1,"td"),a(2),i(),o(3,"td"),a(4),i(),o(5,"td"),u(6,"img",5),i(),o(7,"td"),a(8),i(),o(9,"td"),a(10),i(),o(11,"td"),a(12),w(13,"number"),i(),o(14,"td")(15,"a",6),a(16,"Ver mas..."),i()()()),t&2){let s=e.$implicit,n=e.index;c(2),p(n+1),c(2),C(" ",s.flag,""),c(2),m("src",s.flags.svg,T)("alt",s.name.common),c(2),p(s.name.common),c(2),p(s.capital),c(2),p(F(13,8,s.population)),c(3),m("routerLink",P(10,me,s.cca3))}}function de(t,e){if(t&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),i(),o(5,"th"),a(6,"Icon"),i(),o(7,"th"),a(8,"Bandera"),i(),o(9,"th"),a(10,"Nombre"),i(),o(11,"th"),a(12,"Capital"),i(),o(13,"th"),a(14,"Poblacion"),i(),u(15,"th"),i()(),o(16,"tbody"),f(17,ue,17,12,"tr",4),i()()),t&2){let s=v();c(17),m("ngForOf",s.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=d({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],["href","#",3,"routerLink"]],template:function(r,l){if(r&1&&f(0,pe,2,0,"div",1)(1,de,18,1,"ng-template",null,0,D),r&2){let I=R(2);m("ngIf",l.countries.length===0)("ngIfElse",I)}},dependencies:[M,b,te,j],styles:["img[_ngcontent-%COMP%]{width:35px}"]});let t=e;return t})();function fe(t,e){t&1&&u(0,"shared-loading-spiner")}var oe=(()=>{let e=class e{constructor(n){this.countriesServices=n,this.countries=[],this.isLoading=!1,this.inicialValue=""}ngOnInit(){this.countries=this.countriesServices.cacheStorage.byCapital.countries,this.inicialValue=this.countriesServices.cacheStorage.byCapital.term}seachByCapital(n){this.isLoading=!0,this.countriesServices.searchCapital(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["name","capital","placeholder","Buscar por Capital",3,"onDebounce","inicialValue"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por Capital"),i(),u(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),S("onDebounce",function(V){return l.seachByCapital(V)}),i()()(),o(6,"div",0)(7,"div",1),u(8,"hr"),f(9,fe,1,0,"shared-loading-spiner",3),u(10,"countries-table",4),i()()),r&2&&(c(5),m("inicialValue",l.inicialValue),c(4),m("ngIf",l.isLoading),c(),m("countries",l.countries))},dependencies:[b,L,ie,E]});let t=e;return t})();var re=(()=>{let e=class e{constructor(n){this.countriesServices=n,this.countries=[],this.inicialValue=""}ngOnInit(){this.countries=this.countriesServices.cacheStorage.byCountries.countries,this.inicialValue=this.countriesServices.cacheStorage.byCountries.term}searchByCountry(n){this.countriesServices.searchCountry(n).subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Capital",3,"onDebounce","inicialValue"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por Pais"),i(),u(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),S("onDebounce",function(V){return l.searchByCountry(V)}),i()()(),o(6,"div",0)(7,"div",1),u(8,"hr")(9,"countries-table",3),i()()),r&2&&(c(5),m("inicialValue",l.inicialValue),c(4),m("countries",l.countries))},dependencies:[L,E]});let t=e;return t})();var ge=t=>({"btn-outline-primary":t});function ye(t,e){if(t&1){let s=Q();o(0,"button",5),S("click",function(){let r=G(s).$implicit,l=v();return K(l.searchByRegion(r))}),a(1),i()}if(t&2){let s=e.$implicit,n=v();m("ngClass",P(2,ge,n.selectedRegion===s)),c(),C(" ",s," ")}}var ae=(()=>{let e=class e{constructor(n){this.countriesServices=n,this.countries=[],this.regions=["Africa","Americas","Asia","Oceania","Europe"]}ngOnInit(){this.countries=this.countriesServices.cacheStorage.byRegion.countries,this.selectedRegion=this.countriesServices.cacheStorage.byRegion.region}searchByRegion(n){this.selectedRegion=n,this.countriesServices.searchRegion(n).subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por Region"),i(),u(2,"hr"),o(3,"div",0)(4,"div",1),f(5,ye,2,4,"button",2),i(),o(6,"div",0)(7,"div",3),u(8,"hr")(9,"countries-table",4),i()()()),r&2&&(c(5),m("ngForOf",l.regions),c(4),m("countries",l.countries))},dependencies:[W,M,E]});let t=e;return t})();function ve(t,e){t&1&&(o(0,"div",2),a(1," Espere Por favor "),i())}function Ce(t,e){if(t&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Pais: "),o(5,"strong"),a(6),i()(),u(7,"hr"),i()(),o(8,"div",3)(9,"div",5)(10,"h3"),a(11," Bandera"),i(),u(12,"img",6),i(),o(13,"div",7)(14,"h3"),a(15,"Informacion"),i(),o(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblacion:"),i(),a(20),w(21,"number"),i(),o(22,"li",9)(23,"strong"),a(24,"Codigo:"),i(),a(25),i()()()(),o(26,"div",10)(27,"div",7)(28,"h3"),a(29," Traducciones"),i(),o(30,"div",11)(31,"span",12),a(32),i(),o(33,"span",12),a(34),i(),o(35,"span",12),a(36),i(),o(37,"span",12),a(38),i(),o(39,"span",12),a(40),i(),o(41,"span",12),a(42),i(),o(43,"span",12),a(44),i(),o(45,"span",12),a(46),i(),o(47,"span",12),a(48),i(),o(49,"span",12),a(50),i(),o(51,"span",12),a(52),i()()()()()),t&2){let s=v();c(6),p(s.country.name.common),c(6),m("src",s.country.flags.svg,T)("alt",s.country.name.common),c(8),C(" ",F(21,16,s.country.population)," "),c(5),C(" ",s.country.cca3," "),c(7),p(s.country.translations.ara.common),c(2),p(s.country.translations.kor.common),c(2),p(s.country.translations.ces.common),c(2),p(s.country.translations.beu.common),c(2),p(s.country.translations.bre.common),c(2),p(s.country.translations.cym.common),c(2),p(s.country.translations.est.common),c(2),p(s.country.translations.jpn.common),c(2),p(s.country.translations.per.common),c(2),p(s.country.translations.urd.common),c(2),p(s.country.translations.slk.common)}}var ce=(()=>{let e=class e{constructor(n,r,l){this.activatedRoute=n,this.countriesService=r,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(z(({id:n})=>this.countriesService.searchCountryByAlphaCode(n))).subscribe(n=>n?this.country=n:this.router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(h(Z),h(g),h(ee))},e.\u0275cmp=d({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,l){if(r&1&&f(0,ve,2,0,"ng-template",null,0,D)(2,Ce,53,18,"div",1),r&2){let I=R(1);c(2),m("ngIf",l.country)("ngIfElse",I)}},dependencies:[b,j]});let t=e;return t})();var xe=[{path:"by-capital",component:oe},{path:"by-country",component:re},{path:"by-region",component:ae},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],se=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=_({imports:[k.forChild(xe),k]});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=_({imports:[X,se,ne]});let t=e;return t})();export{Ke as CountriesModule};
(this["webpackJsonppokemon-frontend-challenge"]=this["webpackJsonppokemon-frontend-challenge"]||[]).push([[0],{22:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(13),c=n.n(a),i=n(3),o=n(4),l=n(9),u=n(6),p=n(5),j=(n(22),n(1)),h=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={term:""},r.onUpdateSearch=r.onUpdateSearch.bind(Object(l.a)(r)),r}return Object(o.a)(n,[{key:"onUpdateSearch",value:function(e){var t=e.target.value;this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return Object(j.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"Search by pokemon",onChange:this.onUpdateSearch})}}]),n}(r.Component),d=n(11),m=n(7),b=n.n(m),f=n(10),x=function(){function e(){Object(i.a)(this,e),this._apiBase="https://pokeapi.co/api/v2"}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPokemon",value:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/pokemon/".concat(t));case 2:return n=e.sent,e.abrupt("return",this._transformPokemon(n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPokemons",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],e.next=4,fetch("https://pokeapi.co/api/v2/pokemon?limit=1118").then((function(e){return e.json()})).then((function(e){n=e}));case 4:r=0;case 5:if(!(r<n.results.length)){e.next=13;break}return e.next=8,this.fetchPokemonData(n.results[r]);case 8:(s=e.sent).id&&t.push(s);case 10:r++,e.next=5;break;case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPokemonData",value:function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,fetch(n).then((function(e){return e.ok?e.json():null}));case 3:return r=e.sent,e.abrupt("return",this._transformPokemon(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTypes",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,this.getResource("/type");case 3:for(n=e.sent,r=0;r<n.results.length;r++)s=this._transformType(n.results[r]),t.push(s);return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_transformPokemon",value:function(e){return null===e?{}:{id:e.id,imageSrc:e.sprites.other["official-artwork"].front_default,name:e.name,types:e.types,species:e.species.name,height:e.height,weight:e.weight,abilities:e.abilities,stats:e.stats}}},{key:"_transformType",value:function(e){return{name:e.name}}}]),e}(),O=(n(25),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={buttons:[],loading:!0},e.pokService=new x,e.onTypesLoaded=function(t){e.setState({buttons:t,loading:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.pokService.getTypes().then(this.onTypesLoaded)}},{key:"render",value:function(){var e=[];if(0===this.state.buttons.length)e.push(Object(j.jsx)(d.a.Item,{href:"#",children:"Default"},"default"));else{var t=this.props.onFilterSelect;e.push(Object(j.jsx)(d.a.Item,{onClick:function(){return t("all")},href:"#",children:"all"},"all")),e=e.concat(this.state.buttons.map((function(e){return Object(j.jsx)(d.a.Item,{onClick:function(){return t(e.name)},href:"#",children:e.name},e.name)})))}return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Types"}),Object(j.jsx)(d.a.Menu,{children:e})]})}}]),n}(r.Component)),v=n(16),k=n(17),g=(n(29),function(){return Object(j.jsx)("div",{className:"loadingio-spinner-spin-9xizxls4vrd",children:Object(j.jsxs)("div",{className:"ldio-gies4g58bn",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})})]})})}),y=function(){return Object(j.jsx)("span",{children:"Something goes wrong"})},N=(n(30),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.imageSrc,n=e.name;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:t,width:"120px",alt:"pokemon"}),Object(j.jsx)("h5",{children:n})]})}}]),n}(r.Component)),S=(n(31),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).pokService=new x,r.state={pokemons:[],loading:!0,error:!1,minIndex:0,maxIndex:9,term:"",filter:"all"},r.onPokemonLoaded=function(e){r.setState({pokemons:e,loading:!1})},r.onError=function(e){r.setState({error:!0,loading:!1})},r.onClickNext=r.onClickNext.bind(Object(l.a)(r)),r.onClickPrev=r.onClickPrev.bind(Object(l.a)(r)),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.pokService.getAllPokemons().then(this.onPokemonLoaded).catch(this.onError)}},{key:"componentDidUpdate",value:function(e){this.props.term!==e.term&&this.updateTerm(),this.props.filter!==e.filter&&this.updateFilter()}},{key:"updateTerm",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.term){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.setState({term:t,minIndex:0,maxIndex:9});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateFilter",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.filter){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.setState({filter:t,minIndex:0,maxIndex:9});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onClickNext",value:function(){var e=this.state,t=e.pokemons,n=e.maxIndex,r=e.minIndex;n>=t.length||this.setState({maxIndex:n+10,minIndex:r+10})}},{key:"onClickPrev",value:function(){var e=this.state,t=e.maxIndex,n=e.minIndex;0!==n&&this.setState({maxIndex:t-10,minIndex:n-10})}},{key:"render",value:function(){var e=this.state,t=e.pokemons,n=e.loading,r=e.error,s=e.minIndex,a=e.maxIndex,c=this.props,i=c.onClickPokemon,o=c.filter,l=c.term,u=r?Object(j.jsx)(y,{}):null,p=n?Object(j.jsx)(g,{}):null,h=[];0!==t.length&&(h=t.filter((function(e){var t=!1,n=!1;return e.name.indexOf(l.toLowerCase())>-1&&(n=!0),e.types.forEach((function(e){e.type.name!==o&&"all"!==o||(t=!0)})),t&&n})).slice(s,a+1).map((function(e){var t=e.id,n=Object(k.a)(e,["id"]);return Object(j.jsx)("li",{onClick:function(){return i(t)},className:"list-group-item d-flex pokemon",children:Object(j.jsx)(N,Object(v.a)({},n))},t)})));var d=n||r?null:h;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("ul",{className:"list-group pokemonList",children:[u,p,d]}),Object(j.jsxs)("div",{className:"navigation d-flex justify-content-center",children:[Object(j.jsx)("button",{type:"button",onClick:this.onClickPrev,className:"btn btn-light navigation-prev",children:"Previous"}),Object(j.jsx)("button",{type:"button",onClick:this.onClickNext,className:"btn btn-light navigation-next",children:"Next"})]})]})}}]),n}(r.Component)),w=(n(32),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.pokemon,t=e.id,n=e.types,r=e.species,s=e.height,a=e.weight,c=e.abilities,i=r[0].toUpperCase()+r.slice(1),o=c.map((function(e){return e.is_hidden?Object(j.jsxs)("li",{className:"list-group-item",children:[e.ability.name," (hidden)"]},e.slot):Object(j.jsxs)("li",{className:"list-group-item",children:[e.slot,". ",e.ability.name]},e.slot)})),l=n.map((function(e,t){return Object(j.jsx)("button",{type:"button",className:"btn btn-warning btn-sm",disabled:!0,children:e.type.name.toUpperCase()},t)}));return Object(j.jsxs)("div",{className:"pokemonBaseInfo",children:[Object(j.jsx)("h3",{className:"pokemonBaseInfoTitle",children:"Pokedex data"}),Object(j.jsxs)("ul",{className:"list-group list-group-flush pokemonInfo",children:[Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(j.jsx)("span",{className:"term",children:"National \u2116"}),Object(j.jsx)("span",{className:"pokemonId",children:t})]}),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(j.jsx)("span",{className:"term",children:"Type"}),Object(j.jsx)("span",{children:l})]}),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(j.jsx)("span",{className:"term",children:"Species"}),Object(j.jsxs)("span",{children:[i," Pokemon"]})]}),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(j.jsx)("span",{className:"term",children:"Height"}),Object(j.jsxs)("span",{children:[s/10," m"]})]}),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(j.jsx)("span",{className:"term",children:"Weight"}),Object(j.jsxs)("span",{children:[a/10," kg"]})]}),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(j.jsx)("span",{className:"term",children:"Abilities"}),Object(j.jsx)("ul",{className:"list-group list-group-flush list-abilities",children:o})]})]})]})}}]),n}(r.Component)),C=(n(33),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var e=this.props.stats,t=e[0].base_stat,n=1;n<e.length;n++)t<e[n].base_stat&&(t=e[n].base_stat);var r=e.map((function(e,n){var r=e.stat,s=e.base_stat,a=r.name[0].toUpperCase()+r.name.slice(1),c="progress-bar";return c+=t===s?" bg-success":" bg-warning",Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-center",children:[Object(j.jsxs)("div",{className:"stat",children:[Object(j.jsxs)("span",{className:"statTerm",children:[a,":"]}),Object(j.jsx)("span",{className:"statNumber",children:s})]}),Object(j.jsx)("div",{className:"progress statProgress",children:Object(j.jsx)("div",{className:c,role:"progressbar",style:{width:"".concat(s,"%")},"aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"})})]},n)}));return Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsx)("h3",{className:"baseStatsTitle",children:"Base stats"}),r]})}}]),n}(r.Component)),I=(n(34),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).pokService=new x,e.state={pokemon:{},loading:!0,error:!1,id:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateInfo()}},{key:"componentDidUpdate",value:function(e){this.props.pokemonId!==e.pokemonId&&this.updateInfo()}},{key:"updateInfo",value:function(){var e=this,t=this.props.pokemonId;t&&this.pokService.getPokemon(t).then((function(t){e.setState({pokemon:t,loading:!1})}))}},{key:"render",value:function(){if(!this.state.pokemon)return Object(j.jsx)("span",{className:"select-error",children:"Please select a pokemon"});var e=this.state,t=e.pokemon,n=e.loading,r=e.error,s=r?Object(j.jsx)(y,{}):null,a=n?Object(j.jsx)(g,{}):null,c=n||r?null:Object(j.jsx)(P,{pokemon:t});return Object(j.jsxs)("div",{className:"card",children:[s,a,c]})}}]),n}(r.Component)),P=function(e){var t=e.pokemon,n=t.imageSrc,r=t.name;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("img",{src:n,alt:r}),Object(j.jsx)(w,{pokemon:t})]}),Object(j.jsx)(C,{stats:t.stats})]})},U=I,T=(n(35),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={currentPokemon:1,term:"",filter:"all"},r.onClickPokemon=function(e){r.setState({currentPokemon:e})},r.onUpdateSearch=r.onUpdateSearch.bind(Object(l.a)(r)),r.onFilterSelect=r.onFilterSelect.bind(Object(l.a)(r)),r}return Object(o.a)(n,[{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilterSelect",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state.filter;return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"search-panel d-flex",children:[Object(j.jsx)(h,{onUpdateSearch:this.onUpdateSearch}),Object(j.jsx)(O,{filter:e,onFilterSelect:this.onFilterSelect})]}),Object(j.jsx)(S,{filter:e,onClickPokemon:this.onClickPokemon,term:this.state.term}),Object(j.jsx)(U,{pokemonId:this.state.currentPokemon})]})}}]),n}(r.Component));n(36);c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8a5d6935.chunk.js.map
(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(11),i=a.n(r),c=(a(22),a(5)),u=a(6),o=a(8),l=a(7),d=(a(23),a(3)),h=a.n(d),m=a(0);function j(e){return Object(m.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={squares:Array(9).fill(null),winner:null},n}return Object(u.a)(a,[{key:"handleClick",value:function(e,t){var a=this.state.squares.slice();if(null===a[3*t+e]&&this.props.gameStatus===d.GameStatus.ONGOING){var n=this.props.engine,s=this.props.updateGameStatus,r=n.makeNextMove(e,t);if(a[3*t+e]="X",s(r),r!==d.GameStatus.ONGOING){var i=this.state.winner;return i=r===d.GameStatus.DRAW?"none":"X",void this.setState({squares:a,winner:i})}var c=n.getBestMove(),u=n.makeNextMove(c.x,c.y);a[3*c.y+c.x]="O",s(u);var o=this.state.winner;u===d.GameStatus.DRAW?o="none":u!==d.GameStatus.ONGOING&&(o="O"),this.setState({squares:a,winner:o})}}},{key:"renderSquare",value:function(e,t){var a=this;return Object(m.jsx)(j,{value:this.state.squares[3*t+e],onClick:function(){return a.handleClick(e,t)}})}},{key:"render",value:function(){this.props.boardReset&&(this.props.toggleBoardReset(!1),this.setState({squares:Array(9).fill(null),winner:null}));var e="X"===this.state.winner?"You Win! :)":"O"===this.state.winner?"Computer Wins! :(":"none"===this.state.winner?"Draw! :/":"Unbeatable Tic Tac Toe";return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"status",children:e}),Object(m.jsxs)("div",{className:"board",children:[Object(m.jsxs)("div",{className:"board-row",children:[this.renderSquare(0,0),this.renderSquare(1,0),this.renderSquare(2,0)]}),Object(m.jsxs)("div",{className:"board-row",children:[this.renderSquare(0,1),this.renderSquare(1,1),this.renderSquare(2,1)]}),Object(m.jsxs)("div",{className:"board-row",children:[this.renderSquare(0,2),this.renderSquare(1,2),this.renderSquare(2,2)]})]})]})}}]),a}(s.a.Component),O=a(15),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(c.a)(this,a),n=t.call(this,e);var s=new h.a(d.Player.PLAYER_ONE);return n.state={engine:s,gameStatus:d.GameStatus.ONGOING,boardReset:!1},n}return Object(u.a)(a,[{key:"resetGame",value:function(){this.setState({engine:new h.a(d.Player.PLAYER_ONE),gameStatus:d.GameStatus.ONGOING,boardReset:!0})}},{key:"updateGameStatus",value:function(e){this.setState({gameStatus:e})}},{key:"toggleBoardReset",value:function(e){this.setState({boardReset:e})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{children:Object(m.jsx)("title",{children:"Tic Tac Toe"})}),Object(m.jsxs)("div",{className:"game",children:[Object(m.jsx)("div",{className:"game-board",children:Object(m.jsx)(b,{engine:this.state.engine,gameStatus:this.state.gameStatus,updateGameStatus:function(t){return e.updateGameStatus(t)},boardReset:this.state.boardReset,toggleBoardReset:function(t){return e.toggleBoardReset(t)}})}),Object(m.jsx)("div",{className:"game-info",children:this.state.gameStatus!==d.GameStatus.ONGOING&&Object(m.jsx)("button",{onClick:function(){return e.resetGame()},children:"Start New Game"})}),Object(m.jsxs)("div",{children:["Computer AI Player implemented using ",Object(m.jsx)("a",{href:"https://www.npmjs.com/package/tic-tac-toe-minimax-engine",target:"_blank",rel:"noreferrer",children:"minimax engine package"})]})]})]})}}]),a}(s.a.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.6c2f4745.chunk.js.map
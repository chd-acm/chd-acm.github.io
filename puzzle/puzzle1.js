var time=0;

var pause=true;

var set_timer;

var d=new Array(10);

var d_direct=new Array(
        [0],
        [2,4],
        [1,3,5],
        [2,6],
        [1,5,7],
        [2,4,6,8],
        [3,5,9],
        [4,8],
        [5,7,9],
        [6,8]
    );

var d_posXY=new Array(
        [0],
        [0,0],
        [100,0],
        [200,0],
        [0,100],
        [100,100],
        [200,100],
        [0,200],
        [100,200],
        [200,200]
    );

d[1]=1;d[2]=2;d[3]=3;d[4]=4;d[5]=5;d[6]=6;d[7]=7;d[8]=8;d[9]=0;

function finish()
{
  var finish_flag=true;
  for(var k=1; k<9; 0 ++k){ if( d[k] !="k){" finish_flag="false;" document.getelementbyid("win").innerhtml="未完成" ; return } if(finish_flag="=true){" if(!pause) start(); function move(id){ var i="1;" for(i="1;" i<10; ++i){ d[i]="=" id ) break; target_d="0;" d[target_d]="id;" document.getelementbyid("d"+id).style.left="d_posXY[target_d][0]+"px";" document.getelementbyid("d"+id).style.top="d_posXY[target_d][1]+"px";" finish(); wherecanto(cur_div){ j="0;" move_flag="false;" for(j="0;" j<d_direct[cur_div].length; ++j){ d[ d_direct[cur_div][j] ]="=" ){ if(move_flag="=" true){ d_direct[cur_div][j]; }else{ 0; timer(){ time+="1;" min="parseInt(time/60);" sec="time%60;" document.getelementbyid("timer").innerhtml="min+"分"+sec+"秒";" start(){ if(pause){ document.getelementbyid("start").innerhtml="暂停" pause="false;" set_timer="setInterval(timer,1000);" clearinterval(set_timer); reset(){ time="0;" random_d(); while(!solve()) show_d(); if(pause) random_d(){ for(var>1; --i){
        var to=parseInt(Math.random()*(i-1)+1);
        var tem=d[to];
        d[to]=d[i];
        d[i]=tem;
    }

}

function show_d(){
  for(var i=1;i<=8;++i){ for(var j="1;j<=9;++j){" if(d[j]="=i){" document.getelementbyid("d"+i).style.left="d_posXY[j][0]+"px";" document.getelementbyid("d"+i).style.top="d_posXY[j][1]+"px";" } 逆序不变才能保证有解 function solve(){ var ret="0;" i="1;i<=9;++i)">d[i] && d[i])
        ret++;
    }
    return !(ret%2);
}



function main(){
  var stx,sty;
  var vis=[];
  var a=[];
  var ok=0;
  var m=[];
  var fx=[-1,1,0,0];
  var fy=[0,0,-1,1];
  var ans=['u','d','l','r'];
  var deep=0;

  function Astar(){
    var h=0;
    for(var i=1;i<=3;++i) for(var j="1;j<=3;++j)" if(a[i][j]!="0){" var tx="parseInt((a[i][j]-1)/3);" ty="(a[i][j]-1)%3;" h+="(Math.abs(i-tx-1)+Math.abs(j-ty-1));" } return h; function zt() { s ; i="1;i<=3;++i)" s+="a[i][j];" s; automove(c) nx="stx;" ny="sty;" nblock="(stx-1)*3+sty;" switch(c){ case 'u':nx="stx-1;break;" 'd':nx="stx+1;break;" 'l':ny="sty-1;break;" 'r':ny="sty+1;break;" cblock="(nx-1)*3+ny;" document.getelementbyid("d"+d[cblock]).style.left="d_posXY[nblock][0]+"px";" document.getelementbyid("d"+d[cblock]).style.top="d_posXY[nblock][1]+"px";" stx="nx;" sty="ny;" d[nblock]="d[cblock];" d[cblock]="0;" idastar(x,y,step) if(ok) return; h="Astar();" if(!h && automove(ans[m[i]]); (function(i){ settimeout(function(){ },i*200); })(i); ok="1;" start(); document.getelementbyid("win").innerhtml="完成" if(step+h> deep) return;
    var now=zt();
    if(vis[now]) return;
    vis[now]=1;
    for(var i=0;i<4&&!ok;++i){ var nex="x+fx[i],ney=y+fy[i];" if(nex>=1 && nex<=3 && ney>=1 && ney</=3></4&&!ok;++i){></=3;++i)></=8;++i){></9;>
const demo={v:24,o:1.4,p:8,t:21,e:"Moderado",x:"Favorable"};const $=id=>document.getElementById(id);
function data(){try{return Object.assign({},demo,JSON.parse(localStorage.altaMar||"{}"))}catch{return {...demo}}}
function show(){const d=data();$('viento').textContent=d.v+' km/h';$('oleaje').textContent=Number(d.o).toFixed(1)+' m';$('periodo').textContent=d.p+' s';$('temp').textContent=d.t+' °C';
const states={Calmado:['🟢',3,'Condiciones tranquilas.','Seguro'],Moderado:['🟡',6.5,'Condiciones aceptables, pero se recomienda precaución.','Precaución'],Fuerte:['🟠',8,'El mar presenta condiciones fuertes.','Precaución elevada'],Peligroso:['🔴',10,'Condiciones peligrosas. Se recomienda no salir al mar.','Peligro']};
const m=states[d.e]||states.Moderado;$('estado').textContent=m[0]+' '+d.e;$('score').textContent=m[1];$('desc').textContent=m[2];$('condition-chip').textContent=m[0]+' '+m[3];
const f={Favorable:['🟢','Favorable'],Regular:['🟡','Regular'],'No favorable':['🔴','No favorable']}[d.x]||['🟡','Regular'];$('picon').textContent=f[0];$('pesca-status').textContent=f[1];
$('fo').textContent=d.o<=1.5?'🟢 Adecuado':d.o<=2.5?'🟡 Moderado':'🔴 Fuerte';$('fv').textContent=d.v<=15?'🟢 Suave':d.v<=25?'🟡 Moderado':'🔴 Fuerte';
$('rec').textContent=(d.e==='Peligroso'||d.x==='No favorable')?'⚠️ Las condiciones actuales no son favorables. Evalúa posponer la salida y revisa los avisos oficiales.':m[2]}
function fill(){const d=data();$('iv').value=d.v;$('io').value=d.o;$('ip').value=d.p;$('it').value=d.t;$('ie').value=d.e;$('ix').value=d.x}
$('admin').onclick=()=>{$('panel').classList.remove('hidden');fill()};$('close').onclick=()=>$('panel').classList.add('hidden');
$('save').onclick=()=>{localStorage.altaMar=JSON.stringify({v:+$('iv').value,o:+$('io').value,p:+$('ip').value,t:+$('it').value,e:$('ie').value,x:$('ix').value});show();$('msg').textContent='✅ Cambios guardados.'};
$('reset').onclick=()=>{localStorage.removeItem('altaMar');fill();show();$('msg').textContent='↺ Datos demo restaurados.'};show();
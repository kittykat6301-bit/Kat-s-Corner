/* Original, quiet synthesized theme loops. Audio starts only on request. */
(()=>{
 const ids=['classic','game-room','kat','gerald','alex','dad','ma','midnight','fantasy','cozy','memaw','derek','mama','hayley','emmy','journey','spencer'];
 const patterns=[[0,4,7,12,7,4],[0,7,4,2,7,0],[0,3,7,10,7,3],[0,3,7,2,10,7],[0,2,7,9,7,2],[0,5,7,12,7,5],[0,4,9,7,4,2],[0,3,5,7,5,3],[0,7,10,12,10,7],[0,4,7,9,4,0],[0,3,7,12,10,7],[0,4,7,11,7,4],[0,5,9,7,5,0],[0,4,9,12,9,7],[0,2,4,9,7,4],[0,3,8,7,3,0],[0,7,12,16,12,7]];
 const tile=document.createElement('article');tile.className='restoration-card audio-controls';tile.innerHTML='<h3>Room music & sounds</h3><p>Original gentle electronic loops for each room. Music starts when you choose it; game sound switches stay separate.</p><button type="button" id="room-music" aria-pressed="false">Play room music</button><label><input type="checkbox" id="room-effects"> Room button sounds</label><label for="room-volume">Room audio volume</label><input id="room-volume" type="range" min="0" max="100" value="20"><p id="room-audio-status" role="status">Room audio is off.</p>';
 document.querySelector('#settings .restoration-grid').append(tile);
 const toggle=tile.querySelector('#room-music'),effects=tile.querySelector('#room-effects'),volume=tile.querySelector('#room-volume'),status=tile.querySelector('#room-audio-status');let ctx,bus,timer,playing=false,step=0;
 try{volume.value=localStorage.getItem('kats-room-volume')||'20'}catch{}
 function init(){const AC=window.AudioContext||window.webkitAudioContext;if(!AC){status.textContent='Room audio is unavailable in this browser.';return false}if(!ctx){ctx=new AC();bus=ctx.createGain();bus.gain.value=Number(volume.value)/100*.12;bus.connect(ctx.destination)}ctx.resume().catch(()=>{status.textContent='Tap Play room music again to enable audio.'});return true}
 function note(freq,duration=.65,wave='sine',strength=.35){if(!ctx||ctx.state!=='running')return;const osc=ctx.createOscillator(),gain=ctx.createGain(),now=ctx.currentTime;osc.type=wave;osc.frequency.value=freq;gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(strength,now+.03);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);osc.connect(gain);gain.connect(bus);osc.start(now);osc.stop(now+duration+.05)}
 function tick(){const index=Math.max(0,ids.indexOf(document.documentElement.dataset.theme));const semitone=patterns[index][step++%6],root=130.81*Math.pow(2,(index%5)/12);note(root*Math.pow(2,semitone/12),.8,index===1||index===7?'triangle':'sine');if(step%6===1)note(root/2,1.8,'sine',.18)}
 function start(){clearInterval(timer);if(playing&&!document.hidden){tick();timer=setInterval(tick,700)}}
 function stop(){clearInterval(timer);timer=null;if(bus&&ctx)bus.gain.setTargetAtTime(0,ctx.currentTime,.08)}
 toggle.addEventListener('click',()=>{if(!playing){if(!init())return;playing=true;bus.gain.setTargetAtTime(Number(volume.value)/100*.12,ctx.currentTime,.15);start()}else{playing=false;stop()}toggle.setAttribute('aria-pressed',String(playing));toggle.textContent=playing?'Pause room music':'Play room music';status.textContent=playing?'Playing this room’s original loop.':'Room music is paused.'});
 effects.addEventListener('change',()=>{if(effects.checked&&!init())effects.checked=false});
 volume.addEventListener('input',()=>{if(bus&&ctx)bus.gain.setTargetAtTime(Number(volume.value)/100*.12,ctx.currentTime,.08);try{localStorage.setItem('kats-room-volume',volume.value)}catch{}});
 document.addEventListener('click',event=>{if(effects.checked&&event.target.closest('button,a')&&!event.target.closest('.audio-controls')){if(init()){bus.gain.setTargetAtTime(Number(volume.value)/100*.12,ctx.currentTime,.01);const i=Math.max(0,ids.indexOf(document.documentElement.dataset.theme));note(330+i*18,.09,'triangle',.25)}}});
 document.addEventListener('kats-theme-change',()=>{step=0;if(playing){start();status.textContent='Music changed with your room.'}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else if(playing){bus.gain.setTargetAtTime(Number(volume.value)/100*.12,ctx.currentTime,.15);start()}});
 window.addEventListener('pagehide',stop);
})();

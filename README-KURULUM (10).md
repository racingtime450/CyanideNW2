function copyIP(){
  const ip = document.getElementById('serverIp')?.textContent || 'play.cnayinenw.net';
  navigator.clipboard?.writeText(ip);
  alert('Sunucu adresi kopyalandı: ' + ip);
}
async function loadRecentUsers(){
  const box=document.getElementById('recentUsers'); const total=document.getElementById('totalUsers');
  if(!box && !total) return;
  try{
    const r=await fetch('/api/recent-users'); const d=await r.json();
    if(total) total.textContent='Sunucumuza '+d.total+' oyuncu kayıt oldu!';
    if(box){
      if(!d.users || !d.users.length){ box.innerHTML='<div class="recent-user"><img class="avatar" src="https://mc-heads.net/avatar/Steve/40"><div class="name">Henüz yok</div><div class="time">-</div></div>'; return; }
      box.innerHTML=d.users.map(u=>'<div class="recent-user"><img class="avatar" src="https://mc-heads.net/avatar/'+encodeURIComponent(u.username)+'/40"><div class="name">'+u.username+'</div><div class="time">Yeni</div></div>').join('');
    }
  }catch(e){}
}
document.addEventListener('DOMContentLoaded', loadRecentUsers);

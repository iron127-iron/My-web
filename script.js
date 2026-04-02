// 年份
document.getElementById('year').textContent = new Date().getFullYear();

// 伺服器狀態
const s = document.getElementById("serverStatus");
const m = document.getElementById("motd");
const ip = "chung-cht1.taiwanfrp.me:12276";

async function load(){
  if(!s) return;
  s.textContent = "讀取中...";
  m.innerHTML = "";

  try{
    const d = await (await fetch(`https://api.mcsrvstat.us/3/${ip}`)).json();

    if(!d.online) return s.innerHTML = `<span class="offline">離線</span>`;

    s.innerHTML = `
      狀態: <span class="online">在線</span><br>
      玩家: ${d.players.online}/${d.players.max}
    `;

    // 簡易打字效果
    if(d.motd?.clean){
      let text = d.motd.clean.slice(0,2).join("\n");
      let i = 0;
      const el = document.createElement("div");
      m.appendChild(el);

      const t = setInterval(()=>{
        el.textContent += text[i++] || "";
        if(i >= text.length) clearInterval(t);
      },30);
    }

  }catch{
    s.innerHTML = `<span class="offline">錯誤</span>`;
  }
}

setInterval(load,30000);
load();
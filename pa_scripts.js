document.addEventListener("DOMContentLoaded",(()=>{const e=170;function expandQuotes(t){const updateHeight=()=>{const o=t.querySelector(".quotebtn button");if(!o&&t.scrollHeight>e){t.style.maxHeight=e+"px";const o=document.createElement("div");o.className="quotebtn";const n=document.createElement("button");n.innerHTML="Show More...",o.appendChild(n),t.appendChild(o),n.addEventListener("click",(()=>{t.style.transition="max-height 0.382s ease-in-out",t.style.maxHeight=t.scrollHeight+"px",o.style.display="none",setTimeout((()=>{t.style.maxHeight="none"}),382)}))}else o&&t.scrollHeight<=e&&o.parentNode.remove()};updateHeight();const o=new ResizeObserver(updateHeight);o.observe(t);const n=t.querySelector(".spoiler .code_top a");n&&n.addEventListener("click",(()=>{t.style.maxHeight="none",o.disconnect()}))}function modifyQuoteTop(e){const t=e.textContent,o=e.querySelector("a");if(t.includes("@")){const n=t.replace(/QUOTE\s*\(([^@]+)@[^)]+\)\s*/,"$1 said:");e.innerHTML=n,e.style.color="var(--mdcol)",o&&(e.appendChild(o),o.style.color="var(--mdcol)")}else{const t=e.querySelector(".quote_top b");t&&(t.style.opacity=1)}}(function initializeExpandQuotes(){document.querySelectorAll(".quote").forEach(expandQuotes),new MutationObserver((e=>{for(const t of e)t.addedNodes.length>0&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&(e.classList.contains("quote")?expandQuotes(e):e.querySelectorAll(".quote").forEach(expandQuotes))}))})).observe(document.body,{childList:!0,subtree:!0})})(),document.querySelectorAll(".quote_top").forEach(modifyQuoteTop),function observeMutations(){new MutationObserver((e=>{for(const t of e)"childList"===t.type&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.querySelectorAll(".quote_top").forEach(modifyQuoteTop)}))})).observe(document.body,{childList:!0,subtree:!0})}()}));

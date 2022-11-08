import{_ as i,r as a,o as r,c as d,a as n,b as e,d as s,w as p,e as o}from"./app.74848dc1.js";const l={},u=o(`<h1 id="刪除物件-destroy" tabindex="-1"><a class="header-anchor" href="#刪除物件-destroy" aria-hidden="true">#</a> 刪除物件 Destroy</h1><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> Destroy()</h3><p>當物件從此不用時，可以使用 Destroy() 來刪除物件。</p><table><thead><tr><th>參數</th><th>說明</th></tr></thead><tbody><tr><td>第一個參數 obj</td><td>要刪除的物件的 GameObject</td></tr><tr><td>第二個參數 t（選填）</td><td>延遲的秒數</td></tr></tbody></table><p>Destroy 是 Unity 中的最基礎物件類別 Object 的靜態方法 (Static Method)，物件的腳本類別 MonoBehavior 也是繼承自 Object 所以通常都可以隨時呼叫。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 將自己刪除</span>
<span class="token function">Destroy</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 停2.5秒後，再將自己刪除</span>
<span class="token function">Destroy</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">,</span> <span class="token number">2.5f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 刪掉別的物件</span>
<span class="token function">Destroy</span><span class="token punctuation">(</span>someBox<span class="token punctuation">.</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m={href:"https://docs.unity3d.com/ScriptReference/Object.Destroy.html",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"先停用-再刪除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#先停用-再刪除","aria-hidden":"true"},"#"),e(" 先停用，再刪除")],-1),b=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"（重要）物件實際被刪除的時間"),n("p",null,[e('當執行完 Destroy() 之後，物件會在當前的 Update() "執行完之後"才會實際執行刪除，所以會存在程式上的'),n("strong",null,"延遲"),e("。")]),n("p",null,"因此，如果你在 Destroy() 之後，直接執行 Find()、FindWithTag()、FindGameObjectsWithTag() 等方法，在同一個 Update() 的執行階段裡還是會找到該刪除的物件。直到下一個 Update();")],-1),v=o(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 保險的刪除物件（先停用，再刪除）</span>
gameObject<span class="token punctuation">.</span><span class="token function">SetActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Destroy</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">為何不用 DestroyImmediate() ?</p><p>DestroyImmediate() 可以立即刪除物件，而沒有上方延遲的問題，但此方法 Unity 官方明確表示<strong>強烈不建議在遊戲中使用</strong>。DestroyImmediate() 並不是開發給遊戲中使用，而是提供開發插件編輯器的功能，所以應避免在遊戲中使用而導致不可預期的問題發生。在遊戲的腳本裡請使用 Destroy()。</p></div>`,2),k={href:"https://docs.unity3d.com/ScriptReference/Object.DestroyImmediate.html",target:"_blank",rel:"noopener noreferrer"};function _(y,f){const t=a("ExternalLinkIcon"),c=a("RouterLink");return r(),d("div",null,[u,n("p",null,[n("a",m,[e("官方文件 Object.Destroy"),s(t)])]),h,b,n("p",null,[e("為了避免上述問題延遲，通常在 Destroy() 之前，先"),s(c,{to:"/basics/remove/active/"},{default:p(()=>[e("停用該物件")]),_:1}),e(" SetActive(false) 比較保險，因為 Find()、FindWithTag()、FindGameObjectsWithTag() 會屏蔽掉停用的物件。")]),v,n("p",null,[n("a",k,[e("官方文件 Object.DestroyImmediate"),s(t)])])])}const D=i(l,[["render",_],["__file","index.html.vue"]]);export{D as default};

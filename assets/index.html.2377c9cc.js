import{_ as n,o as a,c as s,e}from"./app.74848dc1.js";const c={},t=e(`<h1 id="關卡重新開始" tabindex="-1"><a class="header-anchor" href="#關卡重新開始" aria-hidden="true">#</a> 關卡重新開始</h1><p>在上一章裡我們已經知道如何切換不同場景，如果想要在同一個關卡裡重新開始，我們可以簡單透過 LoadScene 指定再次開啟當前的場景，就可以達成重新開始的效果了。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 城市最上方得載入場景管理類別</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine<span class="token punctuation">.</span>SceneManagement</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 已經在 Level2 的情況下，再次開啟，就等於重新開始關卡。</span>
SceneManager<span class="token punctuation">.</span><span class="token function">LoadScene</span><span class="token punctuation">(</span><span class="token string">&quot;Level2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更好的做法" tabindex="-1"><a class="header-anchor" href="#更好的做法" aria-hidden="true">#</a> 更好的做法</h4><p>考慮到場景名稱是有可能被修改的，而程式也得一起改，否則會找不到場景。為了減少人為錯誤，我們可以透過 SceneManager 的另一項功能 GetActiveScene()，來取得目前的場景物件，再由場景物件取得名稱。</p><p>這樣以後改名也不用修改程式了。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">Scene</span> currScene <span class="token operator">=</span> SceneManager<span class="token punctuation">.</span><span class="token function">GetActiveScene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取得當前場景物件</span>
SceneManager<span class="token punctuation">.</span><span class="token function">LoadScene</span><span class="token punctuation">(</span>currScene<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 重新開啟場景</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要寫成一行也可以：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 重新開啟當前場景</span>
SceneManager<span class="token punctuation">.</span><span class="token function">LoadScene</span><span class="token punctuation">(</span>SceneManager<span class="token punctuation">.</span><span class="token function">GetActiveScene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[t];function o(i,l){return a(),s("div",null,p)}const d=n(c,[["render",o],["__file","index.html.vue"]]);export{d as default};
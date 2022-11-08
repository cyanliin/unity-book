import{_ as e,r as t,o as c,c as p,a as n,b as o,d as i,e as s}from"./app.74848dc1.js";const l={},u=s(`<h1 id="用-tag-取得所有物件" tabindex="-1"><a class="header-anchor" href="#用-tag-取得所有物件" aria-hidden="true">#</a> 用 Tag 取得所有物件</h1><h2 id="findgameobjectswithtag" tabindex="-1"><a class="header-anchor" href="#findgameobjectswithtag" aria-hidden="true">#</a> FindGameObjectsWithTag()</h2><p>FindGameObjectsWithTag() 是個 GameObject 的靜態方法，它會返回在場景上所有擁有指定 Tag 的並且啟用物件 GameObject 陣列。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 取得所有場上 tag 為 Enemy 的物件</span>
<span class="token class-name">GameObject<span class="token punctuation">[</span><span class="token punctuation">]</span></span> enemys <span class="token operator">=</span> GameObject<span class="token punctuation">.</span><span class="token function">FindGameObjectsWithTag</span><span class="token punctuation">(</span><span class="token string">&quot;Enemy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取得數量</span>
<span class="token class-name"><span class="token keyword">int</span></span> enemyCount <span class="token operator">=</span> enemys<span class="token punctuation">.</span>Length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>由於回傳的是陣列 GameObject[] 所以通常會搭配 foreach 來走訪裡面的每一個物件。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">GameObject<span class="token punctuation">[</span><span class="token punctuation">]</span></span> enemys <span class="token operator">=</span> GameObject<span class="token punctuation">.</span><span class="token function">FindGameObjectsWithTag</span><span class="token punctuation">(</span><span class="token string">&quot;Enemy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">GameObject</span> enemy <span class="token keyword">in</span> enemys<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// enemy......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,5),d={href:"https://docs.unity3d.com/ScriptReference/GameObject.FindGameObjectsWithTag.html",target:"_blank",rel:"noopener noreferrer"},r=s(`<h2 id="範例-取得最接近的敵人" tabindex="-1"><a class="header-anchor" href="#範例-取得最接近的敵人" aria-hidden="true">#</a> 範例：取得最接近的敵人</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token return-type class-name">GameObject</span> <span class="token function">FindClosestEnemy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 比大小紀錄用變數</span>
    <span class="token class-name">GameObject</span> closestEnemy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">float</span></span> minDistance <span class="token operator">=</span> Mathf<span class="token punctuation">.</span>Infinity<span class="token punctuation">;</span>

    <span class="token comment">// 取得所有 tag 為 Enemy 的物件</span>
    <span class="token class-name">GameObject<span class="token punctuation">[</span><span class="token punctuation">]</span></span> enemys <span class="token operator">=</span> GameObject<span class="token punctuation">.</span><span class="token function">FindGameObjectsWithTag</span><span class="token punctuation">(</span><span class="token string">&quot;Enemy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 逐一計算距離，比大小，記錄下最小的</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">GameObject</span> enemy <span class="token keyword">in</span> enemys<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 計算座標差異、得出距離</span>
        <span class="token class-name">Vector3</span> diff <span class="token operator">=</span> enemy<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position <span class="token operator">-</span> position<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">float</span></span> distance <span class="token operator">=</span> diff<span class="token punctuation">.</span>sqrMagnitude<span class="token punctuation">;</span>

        <span class="token comment">// 和前一次紀錄的最短距離比大小，如果有比較小，則更換紀錄</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>distance <span class="token operator">&lt;</span> distance<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            minDistance <span class="token operator">=</span> distance<span class="token punctuation">;</span>
            closestEnemy <span class="token operator">=</span> enemy<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 回傳最後的紀錄</span>
    <span class="token keyword">return</span> closestEnemy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(k,v){const a=t("ExternalLinkIcon");return c(),p("div",null,[u,n("p",null,[n("a",d,[o("官方文件 GameObject.FindGameObjectsWithTag"),i(a)])]),r])}const h=e(l,[["render",m],["__file","index.html.vue"]]);export{h as default};

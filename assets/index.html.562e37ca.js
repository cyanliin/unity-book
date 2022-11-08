import{_ as i,r as c,o as l,c as o,a as s,b as n,d as e,w as t,e as p}from"./app.74848dc1.js";const u={},d=s("h1",{id:"使用-time-deltatime-計時",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用-time-deltatime-計時","aria-hidden":"true"},"#"),n(" 使用 Time.deltaTime 計時")],-1),r=p(`<h2 id="每3秒觸發一次" tabindex="-1"><a class="header-anchor" href="#每3秒觸發一次" aria-hidden="true">#</a> 每3秒觸發一次</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">float</span></span> passedTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用來累加時間的變數</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">float</span></span> timerInterval <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 設定觸發間隔</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 每次都累加經過的時間</span>
        passedTime <span class="token operator">+=</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span>

        <span class="token comment">// 當經過時間已經超過觸發間隔</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>passedTime <span class="token operator">&gt;=</span> timerInterval<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 執行要觸發的內容.....</span>


            <span class="token comment">// 把經過時間歸零（為了讓之後還會反覆觸發）</span>
            passedTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={class:"custom-container tip"},m=s("p",{class:"custom-container-title"},"TIP",-1),v=p(`<h2 id="停1秒後只觸發一次" tabindex="-1"><a class="header-anchor" href="#停1秒後只觸發一次" aria-hidden="true">#</a> 停1秒後只觸發一次</h2><p>很多情況裡，是某些動作得延遲幾秒再執行。</p><p>例如：敵人死亡後要播放1秒動畫後，才掉落物品。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Emeny</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">bool</span></span> isDead <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 是否死亡</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">float</span></span> deadDelay <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span> <span class="token comment">// 設定延遲計時秒數</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">float</span></span> deadDelayTimer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用來累加時間的變數</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 活著的時候</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isDead<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// ......</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 當設為死亡時</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isDead<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 開始計時，當超過 1.5 秒後</span>
            deadDelayTimer <span class="token operator">+=</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>deadDelayTimer <span class="token operator">&gt;=</span> deadDelay<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 刪除物件</span>
                gameObject<span class="token punctuation">.</span><span class="token function">SetActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">Destory</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// 觸發其他需要在1秒延遲後執行的行為 (例如：產生掉落物、結算在場怪物數量)</span>
                <span class="token comment">// ......</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerEnter</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 當碰到子彈就設為死亡</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Bullet&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 觸發要立即執行的行為 (例如：播放死亡動畫、添加死亡效果）</span>
            <span class="token comment">// ......</span>

            <span class="token comment">// 設為死亡</span>
            isDead <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(y,h){const a=c("RouterLink");return l(),o("div",null,[d,s("p",null,[n("由於 "),e(a,{to:"/basics/deltatime/deltatime/"},{default:t(()=>[n("Time.deltaTime")]),_:1}),n(" 為每個 Update 的秒差，所以我們可以通過不停加總 Time.deltaTime 取得目前經過的時間，用此特性可以做一個簡易的計時器。")]),r,s("div",k,[m,s("p",null,[n("雖然此方法較簡單，但缺點也很明顯，會讓程式碼變得複雜許多、較不直觀。所以計時器相關的功能，建議盡量使用 "),e(a,{to:"/basics/timer/coroutine/"},{default:t(()=>[n("Coroutine (協程)")]),_:1}),n("。")])]),v])}const f=i(u,[["render",b],["__file","index.html.vue"]]);export{f as default};

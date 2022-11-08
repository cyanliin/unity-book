import{_ as e,r as t,o as p,c as o,a as n,b as c,d as i,e as s}from"./app.74848dc1.js";const l="/unity-book/assets/compare.de119020.png",u={},r=s('<h1 id="協程-coroutine" tabindex="-1"><a class="header-anchor" href="#協程-coroutine" aria-hidden="true">#</a> 協程 Coroutine</h1><p>傳統函式會一次從頭執行到尾。而 Coroutine (協程) 為可分段執行的函式，可在標記處中斷、下次再由中斷處繼續執行。(在 Update() 之後執行。)</p><p><img src="'+l+'" alt="compare"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Coroutine 是 Unity 中最靈活的計時方法，雖然較難懂一點，但活用 Coroutine 可以讓程式碼更簡潔。<strong>建議優先使用</strong></p></div>',4),d={href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.StartCoroutine.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h2><h3 id="宣告-coroutine-函式" tabindex="-1"><a class="header-anchor" href="#宣告-coroutine-函式" aria-hidden="true">#</a> 宣告 Coroutine 函式</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token return-type class-name">IEnumerator</span> <span class="token function">MyCoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 直接執行這裡...</span>

    <span class="token comment">// 停兩秒</span>
    <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WaitForSeconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 兩秒之後才執行這裡</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">IEnumerator 類別</p><p>Coroutine 函式宣告必須要定義回傳的類別為 IEnumerator。</p></div><p><strong>Coroutine 內的其他時間控制寫法：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 在該行暫停兩秒，之後再往後執</span>
<span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WaitForSeconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在該行暫停一個frame，下次再往後執行</span>
<span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// 在該行完全停止，不往後執行</span>
<span class="token keyword">yield</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="開始-coroutine" tabindex="-1"><a class="header-anchor" href="#開始-coroutine" aria-hidden="true">#</a> 開始 Coroutine</h3><p>通常是按下某個鍵，或碰撞到某東西而觸發。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token function">StartCoroutine</span><span class="token punctuation">(</span><span class="token function">MyCoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="結束-coroutine" tabindex="-1"><a class="header-anchor" href="#結束-coroutine" aria-hidden="true">#</a> 結束 Coroutine</h3><div class="custom-container warning"><p class="custom-container-title">使用變數儲存協程函式</p><p>由於每一次執行 MyCoroutine() 都會產生一個新的 IEnumerator 實例，因此為了要讓開始、結束都引用到同一個協程，所以就必須先將其儲存在變數中，之後才能重複呼叫到同一個協程函式。</p><p>（上面 StartCoroutine 的範例沒有其他應用，所以不用變數儲存、直接放入參數中即可）</p></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 為了能在 Stop 也取得同一個 Coroutine 函式，所以得先用變數存起來</span>
<span class="token comment">// 通常放在 Start() 之中</span>
<span class="token class-name">IEnumerator</span> mc <span class="token operator">=</span> <span class="token function">MyCoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 開始 Coroutine</span>
<span class="token function">StartCoroutine</span><span class="token punctuation">(</span>mc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 結束 Coroutine</span>
<span class="token function">StopCoroutine</span><span class="token punctuation">(</span>mc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="範例-延遲-2-秒後刪除物件" tabindex="-1"><a class="header-anchor" href="#範例-延遲-2-秒後刪除物件" aria-hidden="true">#</a> 範例：延遲 2 秒後刪除物件</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Coin</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 開始執行 Coroutine</span>
        <span class="token function">StartCoroutine</span><span class="token punctuation">(</span><span class="token function">DestroySelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token comment">// 宣告 Coroutine 要執行的內容</span>
    <span class="token return-type class-name">IEnumerator</span> <span class="token function">DestroySelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 先延遲兩秒，再執行後續的內容一次</span>
        <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WaitForSeconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gameObject<span class="token punctuation">.</span><span class="token function">SetActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Destroy</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="範例-每-3-秒產生敵人-怪物箱" tabindex="-1"><a class="header-anchor" href="#範例-每-3-秒產生敵人-怪物箱" aria-hidden="true">#</a> 範例：每 3 秒產生敵人（怪物箱）</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnemyBox</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">GameObject</span> enemyPrefab<span class="token punctuation">;</span> <span class="token comment">// 敵人Prefab用於複製（拖曳指定）</span>
    <span class="token keyword">private</span> <span class="token class-name">IEnumerator</span> createEmenyCoroutine<span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 先產生 Coroutine 函式並裝在變數，供開始、結束使用。</span>
        createEmenyCoroutine <span class="token operator">=</span> <span class="token function">CreateEnemyContinually</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 開始持續產生敵人</span>
        <span class="token function">StartCoroutine</span><span class="token punctuation">(</span>createEmenyCoroutine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 當此物件要刪除時，也一併停止 Coroutine</span>
        <span class="token function">StopCoroutine</span><span class="token punctuation">(</span>createEmenyCoroutine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 持續產生敵人(Coroutine)</span>
    <span class="token return-type class-name">IEnumerator</span> <span class="token function">CreateEnemyContinually</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 無窮迴圈</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 停止 2 秒</span>
            <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WaitForSeconds</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 產生隨機位置＆旋轉</span>
            <span class="token class-name"><span class="token keyword">float</span></span> rx <span class="token operator">=</span> Random<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10f</span><span class="token punctuation">,</span> <span class="token number">10f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">float</span></span> rz <span class="token operator">=</span> Random<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10f</span><span class="token punctuation">,</span> <span class="token number">10f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">float</span></span> rr <span class="token operator">=</span> Random<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">360f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Vector3</span> randPos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span>rx<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> rz<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Quaternion</span> randRot <span class="token operator">=</span> Quaternion<span class="token punctuation">.</span><span class="token function">Euler</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 產生敵人</span>
            <span class="token function">Instantiate</span><span class="token punctuation">(</span>enemyPrefab<span class="token punctuation">,</span> randPos<span class="token punctuation">,</span> randRot<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="範例-每-4-秒消失一個指定tag物件-直到碰到開關" tabindex="-1"><a class="header-anchor" href="#範例-每-4-秒消失一個指定tag物件-直到碰到開關" aria-hidden="true">#</a> 範例：每 4 秒消失一個指定tag物件，直到碰到開關</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CoinsController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token class-name">IEnumerator</span> keepDelCoins<span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 將定時清除場上錢幣的 Coroutine 函式先用變數儲存，為了後續供 Start 和 Stop 使用</span>
        keepDelCoins <span class="token operator">=</span> <span class="token function">RemoveTagObject</span><span class="token punctuation">(</span><span class="token string">&quot;Coin&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 開始定時清除場上錢幣</span>
        <span class="token function">StartCoroutine</span><span class="token punctuation">(</span>keepDelCoins<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerEnter</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 當碰到關閉按鈕，就停止清除錢幣的 Coroutine</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;StopButton&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">StopCoroutine</span><span class="token punctuation">(</span>keepDelCoins<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定時清除指定tag物件 (Coroutine)</span>
    <span class="token return-type class-name">IEnumerator</span> <span class="token function">RemoveTagObject</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> tag<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> sec<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 無窮迴圈</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 停止指定秒數</span>
            <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WaitForSeconds</span><span class="token punctuation">(</span>sec<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 取得一個指定 tag 物件</span>
            <span class="token class-name">GameObject</span> obj <span class="token operator">=</span> GameObject<span class="token punctuation">.</span><span class="token function">FindWithTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> 
            <span class="token punctuation">{</span>
                <span class="token comment">// 刪除物件</span>
                obj<span class="token punctuation">.</span><span class="token function">SetActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">Destroy</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function v(m,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",d,[c("官方文件 MonoBehaviour.StartCoroutine"),i(a)])]),k])}const h=e(u,[["render",v],["__file","index.html.vue"]]);export{h as default};

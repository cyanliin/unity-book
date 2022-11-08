import{_ as n,o as s,c as a,e}from"./app.74848dc1.js";const t="/unity-book/assets/add-rigidbody.977bc9b7.png",p={},c=e('<h1 id="球體控制與碰撞" tabindex="-1"><a class="header-anchor" href="#球體控制與碰撞" aria-hidden="true">#</a> 球體控制與碰撞</h1><ul><li>使用方向鍵輸入搭配 Rigidbody 推動球體。</li><li>並使用 OnTriggerEnter 碰撞事件做刪除＆過關判斷。</li></ul><h3 id="在球體上增加-rigidbody" tabindex="-1"><a class="header-anchor" href="#在球體上增加-rigidbody" aria-hidden="true">#</a> 在球體上增加 Rigidbody</h3><ul><li>點選球體，按下 Add Component</li><li>選擇 Physics / Rigidbody <img src="'+t+`" alt="add rigidbody"></li></ul><h3 id="在球體上增加-script" tabindex="-1"><a class="header-anchor" href="#在球體上增加-script" aria-hidden="true">#</a> 在球體上增加 Script</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine<span class="token punctuation">.</span>SceneManagement</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ball</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> nextScene<span class="token punctuation">;</span> <span class="token comment">// 下一個關卡的名稱（需回到Unity Inspector中輸入）</span>
    <span class="token class-name">Rigidbody</span> rb<span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        rb <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rigidbody<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 取得輸入方向數值</span>
        <span class="token class-name"><span class="token keyword">float</span></span> h <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxis</span><span class="token punctuation">(</span><span class="token string">&quot;Horizontal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">float</span></span> v <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxis</span><span class="token punctuation">(</span><span class="token string">&quot;Vertical&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 合成方向向量、轉換為推力</span>
        <span class="token class-name">Vector3</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Vector3</span> move <span class="token operator">=</span> dir<span class="token punctuation">.</span>normalized <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span>
        rb<span class="token punctuation">.</span><span class="token function">AddForce</span><span class="token punctuation">(</span>move<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerEnter</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 當碰撞到 tag 為 Coin 的物件</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Coin&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 刪除物件(設為停用、並移除)</span>
            other<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span><span class="token function">SetActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">Destroy</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token comment">// 判斷是否過關</span>
            <span class="token comment">// 先取得目前所有 Tag 為 Coin 的物件陣列</span>
            <span class="token class-name">GameObject<span class="token punctuation">[</span><span class="token punctuation">]</span></span> objs <span class="token operator">=</span> GameObject<span class="token punctuation">.</span><span class="token function">FindGameObjectsWithTag</span><span class="token punctuation">(</span><span class="token string">&quot;Coin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 如果陣列長度為0 （陣列內沒東西）</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>objs<span class="token punctuation">.</span>Length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 切換到下一關</span>
                SceneManager<span class="token punctuation">.</span><span class="token function">LoadScene</span><span class="token punctuation">(</span>nextScene<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[c];function i(l,u){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","index.html.vue"]]);export{r as default};

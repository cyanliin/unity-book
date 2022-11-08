import{_ as n,o as s,c as a,e}from"./app.74848dc1.js";const t="/unity-book/assets/components.2baa5298.jpg",p="/unity-book/assets/istrigger.51acc9e7.png",o="/unity-book/assets/ex.9795fa95.gif",c={},i=e('<h1 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> Trigger</h1><p>當滿足下面三項條件，且兩物件相碰時，兩物件就會同時觸發自身的 OnTrigger 系列事件。</p><ol><li><strong>雙方都必需有 Collider 碰撞框元件</strong></li><li><strong>其中一方必須有 Rigidbody、或者 CharacterController</strong></li><li><strong>且其中一方的 Collider 元件有勾選 Is Trigger</strong> (通常是金幣、開關)</li></ol><p><img src="'+t+'" alt="components"></p><p><img src="'+p+`" alt="is-trigger"></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ball</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerEnter</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 這邊在&quot;兩物件產生交疊&quot;時會執行一次</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Player&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 如果碰到的物件是 Player 的話...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerStay</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 這邊在&quot;兩物件交疊&quot;時會持續執行</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerExit</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 這邊在&quot;兩物件離開交疊&quot;時會執行一次</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回傳參數-other-的作用" tabindex="-1"><a class="header-anchor" href="#回傳參數-other-的作用" aria-hidden="true">#</a> 回傳參數 other 的作用</h2><p>OnTrigger 系列的事件會傳入碰撞對象的 collider 名為 other，這個參數非常有用，可以需要透過它來取得碰撞對象的各種資訊。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerEnter</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    other<span class="token punctuation">.</span>gameObject <span class="token comment">// 對方的 gameObject</span>
    other<span class="token punctuation">.</span>tag  <span class="token comment">// 對方的tag（等於 other.gameObject.tag）</span>
    other<span class="token punctuation">.</span>name <span class="token comment">// 對方的名稱（等於 other.gameObject.name）</span>
    other<span class="token punctuation">.</span>transform <span class="token comment">// 對方的座標（等於 other.gameObject.transform）</span>
    other<span class="token punctuation">.</span>attachedRigidbody  <span class="token comment">// 對方的 Rigidbody</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="範例" tabindex="-1"><a class="header-anchor" href="#範例" aria-hidden="true">#</a> 範例</h2><p><img src="`+o+`" alt="ex"></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ball</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token class-name">Rigidbody</span> rb<span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        rb <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rigidbody<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">float</span></span> h <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxis</span><span class="token punctuation">(</span><span class="token string">&quot;Horizontal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">float</span></span> v <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxis</span><span class="token punctuation">(</span><span class="token string">&quot;Vertical&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Vector3</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Vector3</span> move <span class="token operator">=</span> dir<span class="token punctuation">.</span>normalized <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span>

        rb<span class="token punctuation">.</span><span class="token function">AddForce</span><span class="token punctuation">(</span>move<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerEnter</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 當物件開始交疊時，執行一次</span>
        <span class="token comment">// 將自身顏色改為紅色</span>
        <span class="token comment">// (由於接著會執行 OnTriggerStay</span>
        <span class="token comment">// 到了算圖時，球體已經設為綠色，所以並不會看見紅色)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Box&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MeshRenderer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>material<span class="token punctuation">.</span>color <span class="token operator">=</span> Color<span class="token punctuation">.</span>red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerStay</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 當兩物件交疊時，持續執行</span>
        <span class="token comment">// 將自身顏色改為綠色</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Box&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MeshRenderer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>material<span class="token punctuation">.</span>color <span class="token operator">=</span> Color<span class="token punctuation">.</span>green<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerExit</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 當兩物件不再交疊時，執行一次</span>
        <span class="token comment">// 將自身顏色改為灰色</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Box&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MeshRenderer<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>material<span class="token punctuation">.</span>color <span class="token operator">=</span> Color<span class="token punctuation">.</span>gray<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>大多數金幣、開關都是單獨使用 OnTriggerEnter 居多。</p><p>少數情況下才會使用另外兩個，例如：人物站在火堆中會持續扣血，就適合使用 OnTriggerStay</p></div>`,13),l=[i];function u(r,d){return s(),a("div",null,l)}const v=n(c,[["render",u],["__file","index.html.vue"]]);export{v as default};

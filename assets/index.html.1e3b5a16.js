import{_ as n,o as s,c as a,e}from"./app.74848dc1.js";const t="/unity-book/assets/component.428750ab.jpg",o={},i=e('<h1 id="collision" tabindex="-1"><a class="header-anchor" href="#collision" aria-hidden="true">#</a> Collision</h1><p>當滿足下面兩項條件，且兩物件相碰時，就會同時觸發兩物件自身的 OnCollision 系列事件。</p><ol><li><strong>雙方都必需有 Collider 碰撞框元件</strong></li><li><strong>其中一方必須有 Rigidbody、或者 CharacterController</strong></li></ol><p><img src="'+t+`" alt="compnent"></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
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

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnCollisionEnter</span><span class="token punctuation">(</span><span class="token class-name">Collision</span> collision<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 這邊在碰撞&quot;發生&quot;時會執行一次</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnCollisionStay</span><span class="token punctuation">(</span><span class="token class-name">Collision</span> collision<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 這邊在碰撞&quot;持續貼著時&quot;時會持續執行</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnCollisionExit</span><span class="token punctuation">(</span><span class="token class-name">Collision</span> collision<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 這邊在碰撞&quot;結束&quot;時會執行一次</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回傳參數-collision-的作用" tabindex="-1"><a class="header-anchor" href="#回傳參數-collision-的作用" aria-hidden="true">#</a> 回傳參數 collision 的作用</h2><p>OnCollision 系列的事件會傳入碰撞資訊 collision，這個參數非常有用，可以需要透過它來取得碰撞相關的各種資訊。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnCollisionEnter</span><span class="token punctuation">(</span><span class="token class-name">Collision</span> collision<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    collision<span class="token punctuation">.</span>collider <span class="token comment">// 對方的 collider</span>
    collision<span class="token punctuation">.</span>gameObject <span class="token comment">// 對方的 gameObject</span>
    collision<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token comment">// 對方的 tag</span>
    collision<span class="token punctuation">.</span>rigidbody  <span class="token comment">// 對方的 rigidbody</span>
    collision<span class="token punctuation">.</span>transform <span class="token comment">// 對方的座標（等於 collision.gameObject.transform）</span>

    <span class="token comment">// 取得第一個碰撞點座標</span>
    <span class="token class-name">Vector3</span> p <span class="token operator">=</span> collision<span class="token punctuation">.</span><span class="token function">GetContact</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>point<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="範例-碰撞到敵人產生擊中特效" tabindex="-1"><a class="header-anchor" href="#範例-碰撞到敵人產生擊中特效" aria-hidden="true">#</a> 範例：碰撞到敵人產生擊中特效</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnCollisionEnter</span><span class="token punctuation">(</span><span class="token class-name">Collision</span> collision<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 碰撞到敵人</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>collision<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Enemy&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 取得碰撞點座標</span>
        <span class="token class-name">Vector3</span> p <span class="token operator">=</span> collision<span class="token punctuation">.</span><span class="token function">GetContact</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>point<span class="token punctuation">;</span>

        <span class="token comment">// 產生特效物件到碰撞點座標上，0.5秒後刪除</span>
        <span class="token class-name">GameObject</span> vfx <span class="token operator">=</span> <span class="token generic-method"><span class="token function">Instantiate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>GameObject<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token operator">&lt;&lt;</span>特效物件<span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> Quaternion<span class="token punctuation">.</span>identity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Destroy</span><span class="token punctuation">(</span>vfx<span class="token punctuation">,</span> <span class="token number">0.5f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="charactercontroller-的碰撞" tabindex="-1"><a class="header-anchor" href="#charactercontroller-的碰撞" aria-hidden="true">#</a> CharacterController 的碰撞</h2><p>CharacterController 並沒有上述的 OnCollision 系列事件，只能使用另一個叫做 OnControllerColliderHit 的事件來處理。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>OnControllerColliderHit 是在兩物件有接觸就會持續執行，行為上比較像 OnCollisionStay，如果想實現 Enter 和 Leave，則得自己透過程式邏輯去達成了。</p></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnControllerColliderHit</span><span class="token punctuation">(</span><span class="token class-name">ControllerColliderHit</span> hit<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    hit<span class="token punctuation">.</span>collider <span class="token comment">// 對方的 collider</span>
    hit<span class="token punctuation">.</span>gameObject <span class="token comment">// 對方的 gameObject</span>
    hit<span class="token punctuation">.</span>moveDirection <span class="token comment">// 碰撞時 ControllerCollider 的行進方向（Vector3)</span>
    hit<span class="token punctuation">.</span>point <span class="token comment">// 碰撞點座標（Vector3)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[i];function c(p,u){return s(),a("div",null,l)}const d=n(o,[["render",c],["__file","index.html.vue"]]);export{d as default};

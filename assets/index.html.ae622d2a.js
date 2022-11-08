import{_ as n,o as s,c as a,e}from"./app.74848dc1.js";const t="/unity-book/assets/gun-setup.524f29cb.png",p="/unity-book/assets/prefab.776f3cae.png",c="/unity-book/assets/gun-move.bd4ef4b9.gif",o="/unity-book/assets/link.217c9afe.png",i="/unity-book/assets/shooting.fa6e48d1.gif",l={},u=e('<h1 id="範例-子彈射擊" tabindex="-1"><a class="header-anchor" href="#範例-子彈射擊" aria-hidden="true">#</a> 範例：子彈射擊</h1><ul><li>在場景上製作一支手槍造型，與一個子彈。</li><li>建立一個 Empty 放在手槍的槍口處，當作之後子彈發射的參考位置，並改名為 FirePoint</li></ul><p><img src="'+t+`" alt="gun setup"></p><h2 id="讓子彈飛" tabindex="-1"><a class="header-anchor" href="#讓子彈飛" aria-hidden="true">#</a> 讓子彈飛</h2><ul><li><p>勾選 Is Trigger （因為不想讓子彈碰撞時產生反彈）</p></li><li><p>子彈上加入 Rigidbody （因為我們要用物理的力去推動子彈）</p></li><li><p>取消 Use Gravity （因為要讓子彈直線飛，不考慮地心引力）</p></li><li><p>在子彈身上加入 Script 名為 Bullet.cs</p></li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bullet</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token class-name">Rigidbody</span> rb<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">float</span></span> lifeTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 計時秒數</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 設定一個持續的方向力，往面對方向（forward = +z)</span>
        rb <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rigidbody<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rb<span class="token punctuation">.</span>velocity <span class="token operator">=</span> transform<span class="token punctuation">.</span>forward <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 計時三秒後刪除</span>
        lifeTime <span class="token operator">+=</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lifeTime <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">Destroy</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="將子彈做成-prefab" tabindex="-1"><a class="header-anchor" href="#將子彈做成-prefab" aria-hidden="true">#</a> 將子彈做成 Prefab</h2><p>把子彈物件從物件清單視窗，拖曳到資源視窗中，這樣就會建立一個 Prefab (共用資源物件)，這樣做即使子彈不在場景上，也可以指定這個 Prefab 來做事。可以避免來源子彈消失後無法複製的窘境。</p><p>建立好 Prefab 後場景上的子彈就可以刪除了，以後就使用資源視窗中的即可。</p><p><img src="`+p+`" alt="prefab"></p><h2 id="槍身控制" tabindex="-1"><a class="header-anchor" href="#槍身控制" aria-hidden="true">#</a> 槍身控制</h2><p>在槍群組增加 Script 名為 Gun.cs。</p><p>我們要讓槍身會依照方向鍵左右移動，下面使用 Rigidbody 的 velocity 來實作移動：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GunControl</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token class-name">Rigidbody</span> rb<span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        rb <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rigidbody<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 用方向鍵左右移動槍</span>
        <span class="token class-name"><span class="token keyword">float</span></span> h <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxis</span><span class="token punctuation">(</span><span class="token string">&quot;Horizontal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rb<span class="token punctuation">.</span>velocity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span> h <span class="token operator">*</span> <span class="token number">5f</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="gun move"></p><div class="custom-container tip"><p class="custom-container-title">velocity 與 AddForce</p><p>Unity 會計算所有作用力，最後得出一個剛體的 velocity (速率) 才進行移動。所以 AddForce 只是往剛體上添加一個力而已。</p><p>velocity 也可以直接被指定，這樣的方式會帶來<strong>更好的操控度</strong>，但也等同忽略了其他作用力，如果需要與其他物件較多互動時，建議還是以 AddForce 為主要移動方式為佳。</p></div><h2 id="發射子彈" tabindex="-1"><a class="header-anchor" href="#發射子彈" aria-hidden="true">#</a> 發射子彈</h2><p>這邊我們加入按下空白鍵事件。按下時，會產生一個新的子彈，放在發射點(FirePoint)的位置上。 所以我們必須並且宣告兩個 public GameObject 變數用來對應，子彈和發射點物件。</p><p>由於子彈本身已經有射出的行為，所以我們複製它了以後，它自己會發射。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GunControl</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token class-name">Rigidbody</span> rb<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">GameObject</span> bullet<span class="token punctuation">;</span> <span class="token comment">// 子彈來源 (在Unity介面中拖入)</span>
    <span class="token keyword">public</span> <span class="token class-name">GameObject</span> firePoint<span class="token punctuation">;</span> <span class="token comment">// 發射參考點 (在Unity介面中拖入)</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        rb <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rigidbody<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 用方向鍵左右移動槍</span>
        <span class="token class-name"><span class="token keyword">float</span></span> h <span class="token operator">=</span> Input<span class="token punctuation">.</span><span class="token function">GetAxis</span><span class="token punctuation">(</span><span class="token string">&quot;Horizontal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        rb<span class="token punctuation">.</span>velocity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span> h <span class="token operator">*</span> <span class="token number">5f</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 當按下空白鍵</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>Space<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 複製子彈到發射參考點上</span>
            <span class="token function">Instantiate</span><span class="token punctuation">(</span>bullet<span class="token punctuation">,</span> firePoint<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">,</span> transform<span class="token punctuation">.</span>rotation<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="link"><img src="'+i+'" alt="shooting"></p>',21),r=[u];function d(k,m){return s(),a("div",null,r)}const b=n(l,[["render",d],["__file","index.html.vue"]]);export{b as default};

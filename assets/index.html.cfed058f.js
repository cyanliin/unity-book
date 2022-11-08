import{_ as n,o as s,c as a,e}from"./app.74848dc1.js";const t={},c=e(`<h1 id="程式風格-code-style" tabindex="-1"><a class="header-anchor" href="#程式風格-code-style" aria-hidden="true">#</a> 程式風格 Code Style</h1><p>程式碼編寫的形式很多種，為專案制定一套嚴謹的風格是很必要的，否則每個人都隨意創作的話，程式就會越來越凌亂。</p><h2 id="pascalcase-與-camelcase" tabindex="-1"><a class="header-anchor" href="#pascalcase-與-camelcase" aria-hidden="true">#</a> PascalCase 與 camelCase</h2><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">PascalCase</th><th style="text-align:center;">camelCase</th></tr></thead><tbody><tr><td style="text-align:center;">中文</td><td style="text-align:center;">匈牙利命名法</td><td style="text-align:center;">駝峰式命名法</td></tr><tr><td style="text-align:center;">說明</td><td style="text-align:center;">單字首字大寫。</td><td style="text-align:center;">第一個單字首字小寫，其餘首字大寫。</td></tr><tr><td style="text-align:center;">範例</td><td style="text-align:center;">MyFirstLove</td><td style="text-align:center;">myFirstLove</td></tr></tbody></table><h2 id="類別、屬性、方法" tabindex="-1"><a class="header-anchor" href="#類別、屬性、方法" aria-hidden="true">#</a> 類別、屬性、方法</h2><p><strong>正確：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 類別名稱使用 PascalCase </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyPlayer</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 屬性名稱都使用 camelCase</span>
    <span class="token class-name"><span class="token keyword">int</span></span> hp <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">string</span></span> name <span class="token operator">=</span> <span class="token string">&quot;Peter&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">float</span></span> maxSpeed <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">float</span></span> minSpeed <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">// 方法名稱都使用 PascalCase</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">HealSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>錯誤：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ball</span> 
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span></span> Hp <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">string</span></span> _name <span class="token operator">=</span> <span class="token string">&quot;Peter&quot;</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">healSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大括號" tabindex="-1"><a class="header-anchor" href="#大括號" aria-hidden="true">#</a> 大括號</h2><p>開始大括號要換行。</p><p><strong>正確：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 正確</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>錯誤：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 錯誤</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> IF</h2><p>if 的後方要接一個空白</p><p><strong>正確：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 正確</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>錯誤：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 錯誤</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> For</h2><p>For 的後方要接一個空白，並且分號後也有一個空格 <strong>正確：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 正確</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>錯誤：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 錯誤</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),p=[c];function l(i,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","index.html.vue"]]);export{d as default};

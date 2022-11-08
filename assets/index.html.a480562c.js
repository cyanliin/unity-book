import{_ as n,o as i,c as t,f as e,e as s}from"./app.74848dc1.js";const o="/unity-book/assets/add-component.4b68a9d8.png",a="/unity-book/assets/physics-rigidbody.7c061f4c.png",r="/unity-book/assets/rigidbody.9684defc.png",c="/unity-book/assets/play1.1a33ddfa.gif",d="/unity-book/assets/play2.fdbc190b.gif",p={},l=s('<h1 id="添加物理效果-physics" tabindex="-1"><a class="header-anchor" href="#添加物理效果-physics" aria-hidden="true">#</a> 添加物理效果 Physics</h1><p>上一章節的遊戲執行後，並不是很令人興奮。放在空中的物件並沒有落下來，那是因為在 Unity 中（和大部分的遊戲引擎）並沒有預設讓物件都具有物理效果。</p><p>現在我們就來手動為物件產生物理效果吧！方法十分簡單，只需要選取物件、在 Inspector 面板中按下 Add Component 新增元件。</p><p><img src="'+o+'" alt="add-component"></p><p>這時選擇 Physics (物理) / Rigidbody (剛體)。 <img src="'+a+'" alt="physics-rigidbody"></p><p><img src="'+r+'" alt="rigidbody"></p><p>出現 Rigidbody 元件之後，該物件就具備物理效果了。把場景上需要物理的物件都加上 Rigidbody 元件後按下執行看看！ Physics（物理）的詳細說明會在後面的章節深入討論。</p><p><img src="'+c+'" alt="play1"></p><p>也可嘗試其他擺設： <img src="'+d+'" alt="play2"></p>',9);function y(m,g){return i(),t("div",null,[l,e(` 
\`\`\`csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coin : GridObject
{
    public float Speed = 100;
    private float ry = 0;

    void Start()
    {

    }

    void Update()
    {
        // 持續旋轉
        ry += Speed * Time.deltaTime;
        transform.rotation = Quaternion.Euler(0, ry, 0);
    }

    private void OnTriggerEnter(Collider other)
    {
        // 碰撞到玩家，消失
        if (other.tag == "Player")
        {
            Destroy(gameObject);
        }
    }
}

\`\`\` `)])}const b=n(p,[["render",y],["__file","index.html.vue"]]);export{b as default};

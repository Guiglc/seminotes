<div align = center><img src = ../img/2024-11-21-21-55-24.png width = 500/></div>

不理解为什么必须要用电容和电阻。  

偏置量（直流量），小信号，瞬时量。  

不能用直流量量的输入输出来衡量放大器的增益，因为当 $V_B$ 为 0 时，$V_{out} = V_{DD}$，当 $V_B$ 很大时，$V_{out}$ 又很小（$I_D$ 很大）。  

<div align = center><img src = ../img/2024-11-21-21-59-03.png width = 500/></div>


只有输入的 $v_a$ 很小的时候，非线性项才可以忽略。放大器放大的是施加在偏置上面的一个微小的变化。  
注意放大的部分符号是反向的。  

<div align = center><img src = ../img/2024-11-21-22-08-39.png width = 500/></div>

<div align = center><img src = ../img/2024-11-21-22-11-04.png width = 500/></div>


注意下图中，$R_D$ 下方接地了，这是因为在小信号模型中，所有不动的电压都是地，也就是说只考虑小信号的激励，忽略大信号的激励。  

<div align = center><img src = ../img/2024-11-21-22-15-43.png width = 500/></div>

不考虑 $V_{DS}$ 对电流 $I_D$ 的影响，除非考虑沟道调制效应。  

<div align = center><img src = ../img/2024-11-21-22-24-22.png width = 500/></div>

前两个图对设计有帮助，因为一般尺寸都定好了。  

<div align = center><img src = ../img/2024-11-21-22-25-28.png width = 500/></div>

体效应（背栅效应）：对长沟道NMOS而言，Bulk 加负压或者 Source 加正压，Vt 升高。  

<div align = center><img src = ../img/2024-11-21-22-33-23.png width = 500/></div>

注意 $\gamma$ 项完全和工艺有关，而且它是有量纲的。  
NMOS $\gamma$ 为争执，PMOS 为负值。

<div align = center><img src = ../img/2024-11-21-22-37-49.png width = 500/></div>

<div align = center><img src = ../img/2024-11-21-22-44-45.png width = 500/></div>

栅跨导控制电流的能力是体跨导控制电流能力的 3~10 倍。  

<div align = center><img src = ../img/2024-11-21-22-54-03.png width = 500/></div>

体效应提供了另一种调控 drain current 的方法， 在 DNW 技术中，可以变废为宝。  

<div align = center><img src = ../img/2024-11-21-22-58-13.png width = 500/></div>

沟道调制效应。
# Ch2. 基本概念

关于 MOSFET 基本概念和 I-V Curve 放在 Seminotes 中，不在此处重复。

## 1 信号种类

偏置量（直流量），小信号，瞬时量。  

<div align = center><img src = ../img/2024-11-21-21-55-24.png width = 500/></div>

::: tip
不理解为什么必须要用电容和电阻。  
:::

## 2 到底什么是放大器的增益
不能用直流量量的输入输出来衡量放大器的增益，因为当 $V_B$ 为 0 时，$V_{out} = V_{DD}$，当 $V_B$ 很大时，$V_{out}$ 又很小（$I_D$ 很大）。  

<div align = center><img src = ../img/2024-11-21-21-59-03.png width = 500/></div>


只有输入的 $v_a$ 很小的时候，非线性项才可以忽略。放大器放大的是施加在偏置上面的一个微小的变化。  
注意放大的部分符号是反向的。  

<div align = center><img src = ../img/2024-11-21-22-08-39.png width = 500/></div>

<div align = center><img src = ../img/2024-11-21-22-11-04.png width = 500/></div>

::: tip
注意下图中，$R_D$ 下方接地了，这是因为在小信号模型中，所有不动的电压都是地，也就是说只考虑小信号的激励，忽略大信号的激励。  
暂不考虑 $V_{DS}$ 对电流 $I_D$ 的影响，除非考虑沟道调制效应。  

<div align = center><img src = ../img/2024-11-21-22-15-43.png width = 500/></div>
:::

## 3 跨导

<div align = center><img src = ../img/2024-11-21-22-24-22.png width = 500/></div>

前两个图对设计有帮助，因为一般尺寸都定好了。  

<div align = center><img src = ../img/2024-11-21-22-25-28.png width = 500/></div>

## 4 二阶效应

### 4.1 体效应

体效应（背栅效应）：对 **长沟道** NMOS 而言，Bulk 加负压或者 Source 加正压，Vt 升高。  

<div align = center><img src = ../img/2024-11-21-22-33-23.png width = 500/></div>

注意 $\gamma$ 项完全和工艺有关，而且它是有量纲的。  
NMOS $\gamma$ 为正值，PMOS 为负值。

<div align = center><img src = ../img/2024-11-21-22-37-49.png width = 500/></div>

<div align = center><img src = ../img/2024-11-21-22-44-45.png width = 500/></div>

栅跨导控制电流的能力是体跨导控制电流能力的 3~10 倍。  

<div align = center><img src = ../img/2024-11-21-22-54-03.png width = 500/></div>

体效应提供了另一种调控 drain current 的方法， 在 DNW 技术中，可以变废为宝。  

<div align = center><img src = ../img/2024-11-21-22-58-13.png width = 500/></div>

### 4.2 沟道长度调制效应

$\dfrac{1}{L}\dfrac{1}{(1-\Delta L/L)} \approx \dfrac{1}{L}\left(1+\dfrac{\Delta L}{L}\right)$ 使用了无穷小代换。  

<div align = center><img src = ../img/2024-11-23-21-37-31.png width = 500/></div>

调制系数 $\lambda$ 受到工艺和 L 的影响，也就是收到工艺和设计的影响。  
$V_A$ 即为厄雷电压，想降低 $\lambda$ 即可以通过增大 L 来实现。

<div align = center><img src = ../img/2024-11-23-21-44-24.png width = 500/></div>

沟道长度调制效应对电流的影响可以看作是晶体管输出电阻的改变，要改变这个输出电阻，可以通过改变 $\lambda$ 来实现也就是改变 L，或者通过改变 $I_{DS}$ 来实现，即改变 $V_{GS}$。  
<div align = center><img src = ../img/2024-11-23-21-47-50.png width = 500/></div>

最终得到的模型，受到 $V_{GS}$，$V_{BS}$，$V_{DS}$ 影响。  
<div align = center><img src = ../img/2024-11-23-21-50-36.png width = 500/></div>

### 4.3 亚阈值导电性

::: danger
式中 $V_T$ 不是阈值电压，$V_T= kT/Q$，在室温下约等于 26mV。也就是 $V_{DS} > 100mV$。  
:::

工作在亚阈值的管子：
1. 功耗低
2. 噪声大
3. 速度慢

<div align = center><img src = ../img/2024-11-23-22-01-27.png width = 500/></div>

## 5 寄生电容

两类寄生电容：
1. **介质电容**质量比较好，因为二氧化硅做好了，特性也就确定了。  
2. 还有就是二极管反型形成的**结电容**。  

<div align = center><img src = ../img/2024-11-23-22-10-49.png width = 500/></div>

这类电容太多了，需要汇总到一起，一般只考虑影响最大的 $C_{GS}$ 和 $C_{GD}$。  

$C_{GS}$ 是一个非线性压控电容，积累效应带来的积累电容很大，随着反型又变大。当高频的时候，这个电容特性很弱，因为载流子跟不上。

<div align = center><img src = ../img/2024-11-23-22-12-11.png width = 500/></div>

<div align = center><img src = ../img/2024-11-23-22-16-14.png width = 500/></div>

<div align = center><img src = ../img/2024-11-23-22-16-38.png width = 500/></div>

<div align = center><img src = ../img/2024-11-23-22-18-03.png width = 500/></div>

最终得到了如下的 MOSFET 模型：  

<div align = center><img src = ../img/2024-11-23-22-18-28.png width = 500/></div>

因为下面三个很小，所以一般不考虑，这些电容最终影响的是频率响应。（第六章）  

## 6 Further Scaling and I-V Curve

当器件尺寸进入到纳米级时，平面晶体管的 I-V Curve 的平方律特性就减弱很多。有了新的设计方法 $G_m/I_D$。
<div align = center><img src = ../img/2024-11-23-22-21-42.png width = 500/></div>

当使用 FinFET 了之后，由于栅控能力更强，I-V Curve 又回到了平方律，前面所述的模型又有了用武之地。  
但是 FinFET 的 W 是固定的，不能轻易改变，所以想要做出不同 W 的管子，只能通过并联的方式来实现。  

<div align = center><img src = ../img/2024-11-23-22-24-42.png width = 500/></div>
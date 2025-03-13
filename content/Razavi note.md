# Ch2. 基本概念

关于 MOSFET 基本概念和 I-V Curve 放在 Seminotes 中，不在此处重复。  

Analog 的主要研究对象：  
<div align = center><img src = ../img/2024-11-24-22-22-53.png width = 500/></div>

## 2.1 信号种类

偏置量（直流量），小信号，瞬时量。  

<div align = center><img src = ../img/2024-11-21-21-55-24.png width = 300/></div>

::: tip
不理解为什么必须要用电容和电阻。  
:::

## 2.2 到底什么是放大器的增益
不能用直流量的输入输出来衡量放大器的增益，因为当 $V_B$ 为 0 时，$V_{out} = V_{DD}$，当 $V_B$ 很大时，$V_{out}$ 又很小（$I_D$ 很大）。  

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

## 2.3 跨导

<div align = center><img src = ../img/2024-11-21-22-24-22.png width = 500/></div>

前两个图对设计有帮助，因为一般尺寸都定好了。  

<div align = center><img src = ../img/2024-11-21-22-25-28.png width = 500/></div>

## 2.4 二阶效应

### 2.4.1 体效应

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

### 2.4.2 沟道长度调制效应

$\dfrac{1}{L}\dfrac{1}{(1-\Delta L/L)} \approx \dfrac{1}{L}\left(1+\dfrac{\Delta L}{L}\right)$ 使用了无穷小代换。  

<div align = center><img src = ../img/2024-11-23-21-37-31.png width = 500/></div>

调制系数 $\lambda$ 受到工艺和 L 的影响，也就是收到工艺和设计的影响。  
$V_A$ 即为厄雷电压，想降低 $\lambda$ 即可以通过增大 L 来实现。

<div align = center><img src = ../img/2024-11-23-21-44-24.png width = 500/></div>

沟道长度调制效应对电流的影响可以看作是晶体管输出电阻的改变，要改变这个输出电阻，可以通过改变 $\lambda$ 来实现也就是改变 L，或者通过改变 $I_{DS}$ 来实现，即改变 $V_{GS}$。  
<div align = center><img src = ../img/2024-11-23-21-47-50.png width = 500/></div>

最终得到的模型，受到 $V_{GS}$，$V_{BS}$，$V_{DS}$ 影响。  
<div align = center><img src = ../img/2024-11-23-21-50-36.png width = 500/></div>

### 2.4.3 亚阈值导电性

::: danger
式中 $V_T$ 不是阈值电压，$V_T= kT/Q$，在室温下约等于 26mV。也就是 $V_{DS} > 100mV$。  
:::

工作在亚阈值的管子：
1. 功耗低
2. 噪声大
3. 速度慢

<div align = center><img src = ../img/2024-11-23-22-01-27.png width = 500/></div>

## 2.5 寄生电容

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

## 2.6 Further Scaling and I-V Curve

当器件尺寸进入到纳米级时，平面晶体管的 I-V Curve 的平方律特性就减弱很多。有了新的设计方法 $G_m/I_D$。
<div align = center><img src = ../img/2024-11-23-22-21-42.png width = 500/></div>

当使用 FinFET 了之后，由于栅控能力更强，I-V Curve 又回到了平方律，前面所述的模型又有了用武之地。  
但是 FinFET 的 W 是固定的，不能轻易改变，所以想要做出不同 W 的管子，只能通过并联的方式来实现。  

<div align = center><img src = ../img/2024-11-23-22-24-42.png width = 500/></div>

# Ch3. 单极放大器（Single-Stage Amplifier）

一个理想的放大器应该是线性的，对一个信号的泰勒展开式，常数为直流项，一次项为线性项，我们希望更高次项的系数为 0，虽然这很难做到。  
第三章讲的放大器都是非线性的，只是程度有所不同。  
由于电路中电容的存在，所以频率不可能无限大。  


::: tip
模拟电路一头是噪声，一头是线性（因为放大能力和 $V_\textrm{in}$ 有关）。  
:::

$V_{in} =  V_1\dfrac{R_{in}}{R_{S}+R_{in}}$，如果 $R_{in}$ 无穷大，则 $V_{in} = V_S$，无损传递。  
同理，希望输出电阻无限小。  

::: tip
对电压型放大器是这样，如果前端是电流型或功率型的输入，那就不能要无穷大的输入电阻了，如电流型输入，输入电阻要越低越好否则输入电压就很高，而输出电阻则希望越高越好。  
本章讲的放大器，**输入往往是电压型，而输出是电流**。  
:::

<div align = center><img src = ../img/2024-11-24-22-49-01.png width = 500/></div>

::: danger  
下面这个图重新画一下
<div align = center><img src = ../img/2024-11-24-22-50-20.png width = 500/></div>
:::

<div align = center><img src = ../img/2024-11-24-23-01-02.png width = 500/></div>

输入输出电阻有的叫阻抗，阻抗是包括电容电感等在内的复电阻的。  

<div align = center><img src = ../img/2024-11-24-23-09-10.png width = 500/></div>

## 3.1 共源放大器 Common-Source Stage

单晶体管放大器，其 Source 连接到 AC ground 即为共源放大器。  

**当前章节主要关心**：  
1. DC Swing（直流电压工作点）  
2. Small-Signal Gain  
3. Input/Output Resistance  

Load 可以放电阻，不能放电容，能放电感但是就 keep $V_\textrm{DD}$ 了。  

<div align = center><img src = ../img/2024-11-24-23-22-28.png width = 500/></div>

### 3.1.1 大信号分析 
Cut off 区和 triode 区放大能力都不好，最好是饱和区。  

<div align = center><img src = ../img/2024-12-05-22-50-27.png width = 500/></div>

输入范围：$(V_\textrm{TH}, V_{in1})$，输出范围：$(V_\textrm{DS} = V_\textrm{GS} - V_\textrm{TH}, V_\textrm{DD})$

<div align = center><img src = ../img/2024-12-05-22-57-40.png width = 500/></div>

### 3.1.2 小信号增益

这里说的 $V_{in}$ 对 $A_v$ 的影响，其实更多考虑的是 $V_\textrm{B}$ 的部分，因为小信号很小。
<div align = center><img src = ../img/2024-12-05-23-05-20.png width = 500/></div>

用小信号模型分析小信号就很容易。  
如果晶体管多了就难了，但是如果电路是线性的，用小信号模型进行计算机计算就很容易。  
<div align = center><img src = ../img/2024-12-05-23-14-31.png width = 500/></div>

由于 $R_{D}$ 在几百 $\Omega$ 到几千 $\Omega$ 之间，而 $r_{o}$ 在几十 $k\Omega$ 到几百 $k\Omega$ 之间，所以 $R_{D} \| r_{o}$ 可以取为 $R_{D}$。  
晶体管是朝着作为电流源去的，所以输出电阻要无穷大。  

::: danger
这跟前面讲的不一样啊，电压输出电流输出型的应该输出电阻无穷大，输出电阻要无穷小啊？
根据后面的讲解，这里的 $r_o$ 不是真正意义上的输出电阻。
:::

<div align = center><img src = ../img/2024-12-05-23-22-27.png width = 500/></div>

本征增益用电阻负载是不可能实现无穷大的，因为 $V_\textrm{out} = V_\textrm{DD} - i_d\cdot R_D$，所以若 $R_D$ 无穷大，则 $V_\textrm{out} = 0$。 
<div align = center><img src = ../img/2024-12-05-23-40-38.png width = 500/></div>

跨导在线性区时，随着 $V_{in}$ 的增加，$V_\textrm{DS}$ 会越来越小。也就是说在线性区，晶体管对电流的控制能力下降。

<div align = center><img src = ../img/2024-12-05-23-45-54.png width = 500/></div>

有趣的例题。  
<div align = center><img src = ../img/2024-12-05-23-52-39.png width = 500/></div>

### 3.1.3 输入输出电阻
测试的时候，就是给电压源，测电流。  
测输入的时候不用短路输出，但是测输出的时候要短路输入（如何短路输入？）。  
<div align = center><img src = ../img/2024-12-05-23-58-28.png width = 500/></div>


### 3.1.4 Triode Range

在 Triode Range 就变成了压控电阻。  
<div align = center><img src = ../img/2024-12-06-00-01-02.png width = 500/></div>

### 3.1.5 如何计算 $V_{in1}$ 

所以 $V_{in1}$ 并非一个绝对的点，是相对 $R_{D}$ 变化的。  

<div align = center><img src = ../img/2024-12-07-19-23-55.png width = 500/></div>

电阻流过的电流和晶体管内流过的电流和 $V_{out}$ 有各自的函数关系，但通路只有一条，所以 $I_{D}$ 一定等于 $I_{R}$ 。  
摆幅小指的是由于 $V_{in1}$ 下降导致的 $V_{out}$ 整体的下降。  
下图中 $R_2>R>R_1$。  

<div align = center><img src = ../img/2024-12-21-23-25-00.png width = 500/></div>

### 3.1.6 CS Stage with diode-connected load

把 GS 端接在一起，MOS 就变成了一个二极管。  
<div align = center><img src = ../img/2024-12-07-23-08-02.png width = 500/></div>

分析三部曲：讨论大信号，讨论增益，讨论输入输出电阻。  
M2 会自适应的调节 $V_S$ 来适应 M1 产生的电流。  

$V_\text{TH2}$ 有衬偏效应，所以是 almost。  
<div align = center><img src = ../img/2024-12-07-23-12-16.png width = 500/></div>

1. 考虑 $I_1$ 是一个电流源，从有值切换到无值，$V_{out}$ 会上升，并且当 $V_{out} = V_\text{DD} - V_\text{TH2}$ 时，$I_1$ 为 0，但是由于寄生电容 $C_P$ 的存在，当电流切为 0 时，$V_{out}$ 是缓慢上升的。
2. 然后由于亚阈值电流的存在，所以最终 $V_{out}$ 会上升为 $V_\text{DD}$。

在本书学习中，不考虑最终亚阈值电流的问题，认为 $V_{out}$ 最大值为 $V_\text{DD} - V_\text{TH2}$。
<div align = center><img src = ../img/2024-12-07-23-21-06.png width = 500/></div>
<div align = center><img src = ../img/2024-12-07-23-35-38.png width = 500/></div>
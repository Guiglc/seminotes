## 3.1 共源放大器 Common-Source Stage

单晶体管放大器，其 Source 连接到 AC ground 即为共源放大器。  

**当前章节主要关心**：  
1. DC Swing（直流电压工作点）  
2. Small-Signal Gain  
3. Input/Output Resistance  

Load 可以放电阻，不能放电容，能放电感但是就 keep $V_\textrm{DD}$ 了。  

<div align = center><img src = ../../img/2024-11-24-23-22-28.png width = 500/></div>

### 3.1.1 大信号分析 
Cut off 区和 triode 区放大能力都不好，最好是饱和区。  

<div align = center><img src = ../../img/2024-12-05-22-50-27.png width = 500/></div>

输入范围：$(V_\textrm{TH}, V_{in1})$，输出范围：$(V_\textrm{DS} = V_\textrm{GS} - V_\textrm{TH}, V_\textrm{DD})$

<div align = center><img src = ../../img/2024-12-05-22-57-40.png width = 500/></div>

### 3.1.2 小信号增益

这里说的 $V_{in}$ 对 $A_v$ 的影响，其实更多考虑的是 $V_\textrm{B}$ 的部分，因为小信号很小。
<div align = center><img src = ../../img/2024-12-05-23-05-20.png width = 500/></div>

用小信号模型分析小信号就很容易。  
如果晶体管多了就难了，但是如果电路是线性的，用小信号模型进行计算机计算就很容易。  
<div align = center><img src = ../../img/2024-12-05-23-14-31.png width = 500/></div>

由于 $R_{D}$ 在几百 $\Omega$ 到几千 $\Omega$ 之间，而 $r_{o}$ 在几十 $k\Omega$ 到几百 $k\Omega$ 之间，所以 $R_{D} \| r_{o}$ 可以取为 $R_{D}$。  
晶体管是朝着作为电流源去的，所以输出电阻要无穷大。  

::: danger
这跟前面讲的不一样啊，电压输出电流输出型的应该输出电阻无穷大，输出电阻要无穷小啊？
根据后面的讲解，这里的 $r_o$ 不是真正意义上的输出电阻。
:::

<div align = center><img src = ../../img/2024-12-05-23-22-27.png width = 500/></div>

本征增益用电阻负载是不可能实现无穷大的，因为 $V_\textrm{out} = V_\textrm{DD} - i_d\cdot R_D$，所以若 $R_D$ 无穷大，则 $V_\textrm{out} = 0$。 
<div align = center><img src = ../../img/2024-12-05-23-40-38.png width = 500/></div>

跨导在线性区时，随着 $V_{in}$ 的增加，$V_\textrm{DS}$ 会越来越小。也就是说在线性区，晶体管对电流的控制能力下降。

<div align = center><img src = ../../img/2024-12-05-23-45-54.png width = 500/></div>

有趣的例题。  
<div align = center><img src = ../../img/2024-12-05-23-52-39.png width = 500/></div>

### 3.1.3 输入输出电阻
测试的时候，就是给电压源，测电流。  
测输入的时候不用短路输出，但是测输出的时候要短路输入（如何短路输入？）。  
<div align = center><img src = ../../img/2024-12-05-23-58-28.png width = 500/></div>


### 3.1.4 Triode Range

在 Triode Range 就变成了压控电阻。  
<div align = center><img src = ../../img/2024-12-06-00-01-02.png width = 500/></div>

### 3.1.5 如何计算 $V_{in1}$ 

所以 $V_{in1}$ 并非一个绝对的点，是相对 $R_{D}$ 变化的。  

<div align = center><img src = ../../img/2024-12-07-19-23-55.png width = 500/></div>

电阻流过的电流和晶体管内流过的电流和 $V_{out}$ 有各自的函数关系，但通路只有一条，所以 $I_{D}$ 一定等于 $I_{R}$ 。  
摆幅小指的是由于 $V_{in1}$ 下降导致的 $V_{out}$ 整体的下降。  
下图中 $R_2>R>R_1$。  

<div align = center><img src = ../../img/2024-12-21-23-25-00.png width = 500/></div>

### 3.1.6 CS Stage with diode-connected load

把 GS 端接在一起，MOS 就变成了一个二极管。  
<div align = center><img src = ../../img/2024-12-07-23-08-02.png width = 500/></div>

分析三部曲：讨论大信号，讨论增益，讨论输入输出电阻。  
M2 会自适应的调节 $V_S$ 来适应 M1 产生的电流。  

$V_\text{TH2}$ 有衬偏效应，所以是 almost。  
<div align = center><img src = ../../img/2024-12-07-23-12-16.png width = 500/></div>

1. 考虑 $I_1$ 是一个电流源，从有值切换到无值，$V_{out}$ 会上升，并且当 $V_{out} = V_\text{DD} - V_\text{TH2}$ 时，$I_1$ 为 0，但是由于寄生电容 $C_P$ 的存在，当电流切为 0 时，$V_{out}$ 是缓慢上升的。
2. 然后由于亚阈值电流的存在，所以最终 $V_{out}$ 会上升为 $V_\text{DD}$。

在本书学习中，不考虑最终亚阈值电流的问题，认为 $V_{out}$ 最大值为 $V_\text{DD} - V_\text{TH2}$。
<div align = center><img src = ../../img/2024-12-07-23-21-06.png width = 500/></div>
<div align = center><img src = ../../img/2024-12-07-23-35-38.png width = 500/></div>
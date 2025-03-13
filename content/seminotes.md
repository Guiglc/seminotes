# 半导体笔记

## 0. 推荐书目
1.《半导体物理与器件》--- 施敏  
2.《固体物理》 --- 黄昆  
3.《CMOS模拟电路设计》--- 拉扎维  
4. RF 射频电路设计  
5. logic 电路设计 --- 有 SRAM 即可  
6. 《Inside NAND Flash Memory》  
7. 信息论  
8. 自动控制原理 --- 会一种  
9. 半导体可靠性评估  
10.  Fundamental Digital Test  

* Asad Abidi 发表的论文

## 1. 半导体物理的一些理解
### 1.1 PN Junction
理想二极管方程：$J=J_s\left[\exp \left(\frac{e V_a}{k T}\right)-1\right]$  
齐纳击穿（Zener Breakdown） → 可恢复 → 隧穿 → BTBT  
雪崩击穿（Avalanche Breakdown） → 不可恢复 → 碰撞  

### 1.2 MOSFET
MOSFET 可以看作是一个漏电的可变电容，时间短为可变电容，时间长则漏电。  

<div align = center><img src = ../img/2024-11-20-22-44-46.png width = 300/></div>

MOSFET 是一个电压控制型电流源，电压激发的器件其电流为指数型曲线。  
（需公式理解）N管不传高压，有Vt损失，P管可传高压，没有Vt损失。  
（B比较小，容易扩散，传高压发热使结变大，有 Rel Concern）。  

**Treshold Voltage:**  
$$
\begin{align*}
V_{\mathrm{TH}}&=\Phi_{\mathrm{MS}}+2 \Phi_{\mathrm{F}}+\frac{Q_{\mathrm{dep}}}{C_{\mathrm{ox}}} \\
其中，\Phi_F&=(k T / q) \ln \left(N_{s u b} / n_i\right) \\
Q_{dep} &=\sqrt{4 q \varepsilon_{s i} \mid \Phi_F \mid N_{s u b}}
\end{align*}
$$

$V_\mathrm{TH}$ 随衬底掺杂浓度升高而升高，温度 $T$ 会影响 $\Phi_{\mathrm{F}}$ 而且影响 $n_i$，通常随温度升高而降低。  

**非饱和区电流公式：** （三极管区，线性区）
$$ I_D=\frac{1}{2}\mu_n C_{\mathrm{ox}} \frac{W}{L}\left[2\left(V_{G S}-V_T\right) V_{DS}-V_{DS}^2\right]$$

$k_n^{\prime}=\mu_n C_{o x}$ 称为 n 沟道 MOSFET 的器件跨导参数, 单位为 $\mathrm{A} / \mathrm{V}^2$;  
$K_n=\left(W \mu_n C_{\mathrm{ox}}\right) / 2 L=\left(k_n^{\prime} / 2\right) \cdot(W / L)$ 称为 n 沟道 MOSFET 的器件跨导系数, 单位也为 $\mathrm{A} / \mathrm{V}^2$。  

<div align = center><img src = ../img/2024-11-20-23-03-09.png width = 450/></div>

当 $V_\mathrm{DS}$ 很小时，可以忽略不记，此时变为线性曲线。  

<div align = center><img src = ../img/2024-11-20-23-18-05.png width = 400/></div>

**饱和区电流公式：** 饱和 MOS 可视作电流源。
$$I_D=\frac{1}{2} \mu_n C_{\mathrm{ox}} \frac{W}{L^{\prime}}\left(V_{G S}-V_T\right)^2$$

式中的 $L^{\prime}$ 为考虑 pinch off 之后的沟道长度，即 $L^{\prime} < L$，但对于长沟道器件来说可以忽略不计。


<div align = center><img src = ../img/2024-11-20-23-12-51.png width = 450/></div>

MOS 的 Overdrive Voltage：  

$$
V_\mathrm{O D}=V_\mathrm{G S}-V_\mathrm{T H}=\sqrt{\frac{2 I_\mathrm D}{\mu_\mathrm n C_\mathrm{o x}(W / L)}}
$$

上述公式也被称为设计公式，即知道电流和管子的尺寸，就可以反推电压。


### 1.3 MOSFET 的十个寄生效应 

::: danger
之后补充以下所有效应的具体公式
:::

#### 1.3.1 Long Channel
Body Effect, Pinch Off, Saturation

#### 1.3.2 Avoid
Short Channel Effect, DIBL, PuchThrough

#### 1.3.3 Parasite Effect
Tunneling, BTBT, GIDL, HCI  
(BTBT, GIDL: 从 Id-Vg Curve 能看出来，从 Is-Vg Curve 看不出来)

##### 1.3.4 Other Effect

REF: https://www.bilibili.com/video/BV18spre7E7u/

<div align = center><img src = ../img/2024-10-06-15-15-15.png width = 300/></div>
<div align = center><img src = ../img/2024-10-06-15-15-49.png width = 500/></div>

### 1.4 Note
高低频电路分界线：$>\frac{1}{10 \mathrm{ns}}$

::: danger
弛豫现象：待补充  
:::

## 2 Analog Circuit

### 2.1 小信号模型


### 2.2 ESD
#### 2.2.1 Type I : Control and I/O Pin
Openshort test，通电流，应看到 0.7V。
所以 CE Pin 在图中位置，芯片大部分时间是不工作的，通高压让电路关闭。

<div align = center><img src = ../img/image-2.png></div>

::: danger
然后介绍了这个电路和 Snapback。
<div align = center><img src = ../img/image-3.png></div>
:::

#### 2.2.2 Type II: Power Pin

&nbsp;

<div align = center><img src = ../img/image-5.png></div>

当 VDD 有脉冲 15V 时，红圈处约 12V，对于下一个非门，效果就更好。在足够短的时间内将脉冲电压导走，也就是开启最后那个管子，三级保证了时间短。  
Powershort 测试 force 电流测电压，看到 0.7V 压降。 SPEC：0.2V ~ 2V。Powershort 的电压可以很低，保证没有管子打开，避免 Floating （例如 VCC 处为 0.2V）带来的瞬态电流过大，而这并不是 short。  

#### 2.2.3 Type III: HV Pin

<div align = center><img src = ../img/image-6.png></div>

ESD 电路需要抗各种频率，对于低频脉冲，当然希望降低 C，但是此情况下高频无法预防，所以 HV PIN 的 ESD 电路设计很难。


### 2.3 工作点 - 反相器

<div align = center><img src = ../img/2024-10-01-00-05-44.png></div>  

考虑上面这个电路的 $V_{in}$ - $V_{out}$ 曲线应如下：  

<div align = center><img src = ../img/2024-10-01-00-16-26.png></div>

$$ 
V_{out}=\left\{
\begin{array}{lcl}
V_{DD}       &      & {0<V_{in}<V_T}\\
V_{DD} - IR \left( I=\frac{W \mu C_{\mathrm{ox}}}{2 L}\left(V_{in}-V_T\right)^2 \right)      &      & {V_T<V_{in}<V_1}\\
\text{基尔霍夫定律推导}    &      & {V_{in}>V_1}\\
\end{array} \right. 
$$

对上述电路而言：  

$$
\begin{align*}
V_{in} &= V_{bias} + A\cos \omega t \\
V_{out} &= f(V_{bias})+ A'\cos \omega t \\
\Delta V_{out} &= f'(V_{in})\cdot \Delta V_{in} \\
\frac{\Delta V_{out}}{\Delta V_{in}} &= A\left( \text{放大系数} \right)=\left| f'(V_{in}) \right|
\end{align*}
$$

**Analog 经常犯的问题：** 
1. 选错工作点
2. 非振荡电路发生震荡
3. 振荡电路不震荡

### 2.4 Amplifier

#### 2.4.1 两种放大器


<div align = center><img src = ../img/2024-10-07-13-35-03.png width = 700/></div>

实际中很难应用差分放大器，因为取反信号很难得到。  
差分放大器干掉同向毛刺，滤波器干掉最原始的的单信号的毛刺。  

#### 2.4.2 运算放大器

<div align = center><img src = ../img/2024-10-06-11-49-41.png /></div>

$$
\begin{align*}
&V_{N1} \uparrow \quad \rightarrow \quad I_{N1} \uparrow \quad \rightarrow \quad V_{1} \downarrow \quad \rightarrow \quad I_{P2} \uparrow (V_{G\_P2}\uparrow) \quad \rightarrow \quad V_{OUT} \uparrow \\
此时，&V_{N2} \uparrow \quad \rightarrow \quad I_{N2} \uparrow \quad \rightarrow \quad V_{OUT} \downarrow \\
最终，&V_{OUT} \space \cancel\Delta
\end{align*}
$$

<div align = center><img src = ../img/2024-10-06-12-09-11.png /></div>

虚短：$V_{IN}^+ \approx V_{IN}^-, \space \Delta V \approx 0$  
虚断：$I_{IN}^+ \approx I_{IN}^- \approx 0, \space A \space 无穷大(>100)$  

#### 2.4.3 LDO

**不带负载：**
<div align = center><img src = ../img/2024-10-06-12-30-20.png /></div>

$$
\begin{align*}
I_{R_1} &= \frac{V_{ref}}{R_1} \\
V_{R_2} &= I_{R_1}  R_2 = \frac{R_2}{R_1}V_{ref} \\
V_{out} &= V_{ref} + \frac{R_2}{R_1}V_{ref} = \frac{R_1 + R_2}{R_1}V_{ref}
\end{align*}
$$

**带负载：**

<div align = center><img src = ../img/2024-10-06-12-50-36.png /></div>

如何带负载，会让 $V_{IN}^+$ 下降（因为负载线路分流），由于 $V_{IN}^+$ 和 $V_{OUT}^-$ 反向，所以 N 管更开，增大电流以补足，使 P 处电压回归原位。  
**N 管 or P 管**：如果用 N 管，$V_{OUT} < V_{IN} - V_{T}$，似乎有损失；如果用 P 管，$V_{CC}$ 的抖动会传递到 $V_{OUT}$ 上，也就是要防止电源纹波。  
**TRIM:**
$$
\begin{align*}
&\text{Trim} \quad V_{DD1} \space \rightarrow \space 1.2\text{V} \\
&\text{Trim} \quad V_{DD2} \space \rightarrow \space 2.4\sim 2.5\text{V} \space (3.3\text{V} - V_T) \\
&V_{OUT} = \dfrac{1.2}{R_1}(R_1 + R_2) \xlongequal{R_2 = 2R_1} 3.6\text{V}
\end{align*}
$$

LDO 能耗高，轻电源不太能用，精准。  
DCDC 不耗能，只有电感电容。（新能源汽车动能回收？）  

::: danger
1. 需继续了解 LDO 和 DCDC
2. 运算放大器正负符号确定
:::

### 2.5 Voltage Reference
#### 2.5.1 Current Mirror

电源很难做到和 V，T 完全无关，那么：  
1. 威尔逊电流源 → 与 V 无关  
2. Bandgap → 与 T 无关  
   
<div align = center><img src = ../img/2024-10-06-22-22-11.png /></div>

#### 2.5.2 Wilson Current Mirror

<div align = center><img src = ../img/2024-10-06-20-47-16.png /></div>

**$V_1$ 可以不等于 $V_2$：**
$V_1 < V_2$， 四管饱和，此时：  
$$\dfrac{1}{2}\mu_NC_{OX}\dfrac{W_N}{L_N}\left(V_1-V_{T(N)}\right)^2 = \dfrac{1}{2}\mu_PC_{OX}\dfrac{W_P}{L_P}\left(V_2- V_{DD}- V_{T(P)}\right)^2$$

::: danger
$V_1 < V_2$，未探讨，待补充。
:::

<div align = center><img src = ../img/2024-10-06-21-07-20.png /></div>

$$
\begin{align*}
I_1 &= I_2 \\
V_{GS1} &= V_{G2} \\
I_1 &= \dfrac{1}{2}\mu C_{OX}\dfrac{W}{L}\left(V_{GS1}-V_{T}\right)^2 \\
I_2 &= \dfrac{1}{2}\mu C_{OX}\dfrac{\color{red}N\color{black}W}{L}\left(V_{G2}-I_2R_2-V_T\right)^2 \\
&（红色\space N\space 表示可并联多组\space\text{NMOS}）\\
令 \space  \dfrac{1}{2}\mu C_{OX}\dfrac{W}{L} = A^2, \space 则：\\
I & = A^2(V_g-V_t)^2 \\
V_g &= V_t + \dfrac{\sqrt{I}}{A}\\
V_g &= V_t + IR + \dfrac{\sqrt{I}}{A\sqrt{N}}\\
忽略体效应，可以消掉 \space V_t:\\
\dfrac{\sqrt{I}}{A} &= IR + \dfrac{\sqrt{I}}{A\sqrt{N}}
\end{align*}
$$

当电流镜工作时：
$$
\begin{align*}
&\Delta V \uparrow: \\
& 1. \space I_{P1} \uparrow \quad \rightarrow V_{GS} \uparrow \quad \rightarrow \quad I_{N2} \uparrow \\
& 2. \space I_{P2} \uparrow \quad \rightarrow IR \uparrow \quad \rightarrow \quad V_{GS} \downarrow \quad \rightarrow \quad I_{N2} \downarrow \\
&总体上，I\space 不变
\end{align*}
$$

#### 2.5.3 Bandgap
<div align = center><img src = ../img/2024-10-06-22-04-57.png /></div>

对于上图电路：
$$
\begin{align*}
I &= I_s(e^{\frac{qV}{kT}}-1) = I_s e^{\frac{qV}{kT}} \xlongequal{令\space V_T = \frac{VT}{q}} I_se^{\frac{V}{V_T}}\\
V &= V_T\ln{\frac{I}{I_s}} \\
V_T &= V_1\ln{\frac{I}{I_s}} \\
V_2 &= V_T\dfrac{I}{mI_s}\\
V_R &= V_1 - V_2 = V_T\ln\dfrac{1}{m} = -V_T\ln m\\
I_R &= \dfrac{V_T\ln m}{R_1} \\
V_{R2} &= \dfrac{V_T\ln m}{R_1} \cdot R_2 = \dfrac{kT}{q}\ln m \dfrac{R_2}{R_1}
\end{align*}\\
$$

::: danger
这里的推导不太能看懂，m是分流系数？
:::

此时，$V_{R2}$ 只跟温度有关且十分线性，可以做温度传感器。

使 $\dfrac{\partial V_{R2}}{\partial T}+\dfrac{\partial V_{VE}}{\partial T}=0$，即 $-\dfrac{R_2}{R_1}\ln m \dfrac{k}{q}+\dfrac{\partial V_{VE}}{\partial T}=0$，则存在二阶效应，因此有第二代 Bandgap 如下图。

<div align = center><img src = ../img/2024-10-06-22-19-37.png /></div>

::: danger
补充 $I_{BE}$ 和 $I_{PTAT}$ 的内容。
:::

### 2.6 Clock

::: danger
开始介绍了环形振荡器。（待补充）  
:::

常见晶振频率：26MHz, 32MHz。

::: danger
下图需要补充完整版。  
:::

<div align = center><img src = ../img/2024-10-06-23-08-05.png /></div>

总体的效果是，芯片内部的 Clock 一直在追赶晶振 Clock。

### 2.7 Charge Pump
<div align = center><img src = ../img/2024-10-07-13-06-30.png /></div>

电容充电抬高电势，然后断开前面的开关，闭合后面的开关，将电压传过去，此时后面电容对应的节点是低电平。  

<div align = center><img src = ../img/2024-10-07-13-11-45.png width=500/></div>
<div align = center><img src = ../img/2024-10-07-13-15-26.png width=500/></div>

$$
\begin{align*}
&对状态1：左边 \space u = V_m \cdot C \quad  右边 \space u^\prime = V_n \cdot C \\
&对状态2：\space u = (V_{n+1} - V_\text{CLK})\cdot C + V_{n+1} \cdot C \\
因此，&V_m + V_n = V_{n+1}-V_\text{CLK} + V_{n+1}& \\
&2V_{n+1} = V_m + V_n+ V_\text{CLK}& \\
当\space n \rightarrow \infty \space 时，& V_n = V_m + V_\text{CLK}
\end{align*}\\
$$

但在实际电路中没有理想开关，所以只有如下电路：

<div align = center><img src = ../img/2024-10-07-13-34-29.png width = 500/></div>

$$
\begin{align*}
&对状态1：左边 \space u = V_m \cdot C \quad  右边 \space u^\prime = V_n \cdot C \\
&对状态2：u = (V_{n+1} + V_t- V_\text{CLK})\cdot C + V_{n+1} \cdot C \\
因此，&V_m + V_n = V_{n+1} + V_t -V_\text{CLK} + V_{n+1}& \\
&2V_{n+1} = V_m + V_n+ V_\text{CLK} - V_t \\
当\space n \rightarrow \infty \space 时，& V_n = V_m + V_\text{CLK} - V_t
\end{align*}\\
$$

Charge Pump 中的所有管子必中 Body Effect, 所以：

$$
当\space n \rightarrow \infty \space 时， V_n = V_m + V_\text{CLK} - V_t - V_\text{body\_effect}
$$

::: danger
因此，Charge Pump 用 HVZ 管，后面就换了（需理解）。
<div align = center><img src = ../img/2024-10-07-14-59-37.png width = 500/></div>
:::

#### 2.6.1 Charge Pump and Clock
<div align = center><img src = ../img/2024-10-07-13-57-57.png width = 500/></div>

<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>

<p align="center"><font face="黑体" size=2.>表1 Truth Table</font></p>

<div class="center">

| **Control A** | **Signal In B** | **Signal Out C** |
| :-----------: | :-------------: | :--------------: |
|       0       |        0        |        1         |
|       0       |        1        |        1         |
|       1       |        0        |        1         |
|       1       |        1        |        0         |

</div>

即 $C = \overline B = \overline{\text{CLK}}$，负载多了就打开 Clock，负载少了就关掉。

<div align = center><img src = ../img/2024-10-07-14-35-35.png width = 500/></div>

管子的最高工作电压 ~30V，实际只能传 25.5V，这决定了 NAND Program 电压的极限。

### 2.7 Math

卷积，拉式变换，冲激函数，零点极点图。  
在冲激函数下，输出时系统的响应。  
对零点极点问题，即是让系统快速收敛。  
相位裕度，让系统不震荡的情况下，有多少 margin，业标：$> 45^\circ$。

### 2.8 Other
#### 2.8.1 模拟信号转数字信号

<div align = center><img src = ../img/2024-10-06-23-15-33.png width = 200/></div>

#### 2.8.2 串口转并口
NAND 内部很慢，但一口气并行就能匹配 CPU 的高频率。
<div align = center><img src = ../img/2024-10-06-23-12-47.png width = 400/></div>

::: danger
不太理解这个电路。
:::

## 3 Logic Circuit

数字电路的核心是同步。  

### 3.1 触发器

#### 3.1.1 S-R 锁存器

<div align = center><img src = ../img/2024-12-16-21-45-42.png width = 300/></div>

<div class="center">

| **$R$** | **$S$** | **$Q_n$** | **$\overline Q_n$** |
| :-----: | :-----: | :-------: | :-----------------: |
|    0    |    0    | $\times$  |      $\times$       |
|    0    |    1    |     1     |          0          |
|    1    |    0    |     0     |          1          |
|    1    |    1    | $Q_{n-1}$ | $\overline Q_{n-1}$ |

</div>

::: tip  
注意：SR Latch 用两个 NAND 或者两个 NOR 都行，只是 truth table 不一样。  
:::  

::: tip  
JK 触发器解决了 R，S 不能都是 0 的问题。  
:::  

#### 3.1.2 电平 D 触发器

有两种画法：
<div align = center><img src = ../img/2024-12-16-22-10-37.png width = 600/></div>

<div class="center">

| **$I$** | **$C(Clock)$** | **$R$** | **$S$** | **$Q_n$** | **$\overline Q_n$** |
| :-----: | :------------: | :-----: | :-----: | :-------: | :-----------------: |
|         |                |    0    |    0    | $\times$  |      $\times$       |
|    1    |       1        |    0    |    1    |     1     |          0          |
|    0    |       1        |    1    |    0    |     0     |          1          |
|   1/0   |       0        |    1    |    1    | $Q_{n-1}$ | $\overline Q_{n-1}$ |

</div>


#### 3.1.3 边缘 D 触发器

由于难以保证 N 管和 P 管的下拉、上拉能力一致，所以 D 触发器也不是完美的，但是周期间隔是绝对的，所以有了使用上升沿、下降沿的触发器。

<div align = center><img src = ../img/2024-12-16-22-21-12.png width = 500/></div>

::: tip  
传输门能实现类似的功能，但是传输门能输出高阻态。  
<div align = center><img src = ../img/2024-12-22-23-31-42.png width = 300/></div>
:::  

::: tip  
三态输出  
<div align = center><img src = ../img/2024-12-22-23-36-11.png width = 300/></div>
:::  

### 3.2 Setup time 和 Hold time

<div align = center><img src = ../img/2024-12-23-23-14-02.png width = 400/></div>

整个电路运行所需的时间大致如图：  

<div align = center><img src = ../img/2024-12-22-23-45-53.png width = 600/></div>

对于两个 CLK:  
<div align = center><img src = ../img/2024-12-23-23-24-56.png width = 500/></div>

$$
\begin{align*}
&t_\text{DFF} + t_\text{CL} > t_\text{hold} + t_\text{clk\_delay} \\
① \quad &t_\text{hold} < t_\text{DFF} + t_\text{CL} - t_\text{clk\_delay} \\
&t_\text{DFF} + t_\text{CLK} > T_\text{CLK} + t_\text{clk\_delay} - t_{setup}\\
② \quad &t_\text{setup} < t_\text{clk} + t_\text{clk\_delay} - t_\text{DFF} - T_\text{CLK} \\
&t_\text{setup} + t_\text{hold} < t_\text{clk} = \dfrac{1}{f}
\end{align*}
$$

因此 $t_\text{setup}$ 和 $t_\text{hold}$ 由频率掌控。  

因为高频电路不好做，所以实际上都会想办法让 $t_\text{clk\_delay}$ 一样，由 H 型布线来实现（分形走线）。

<div align = center><img src = ../img/2024-12-23-23-28-10.png width = 400/></div>

**1. $t_\text{hold}$ 出问题：**  
改不了 $t_\text{CLK}$ 和 $t_\text{DFF}$，只能改版。

$$
\begin{align*}
前仿（静态）\xlongequal{走线，\text{RC Delay}} 后仿（高频重要）
\end{align*}
$$
**2. $t_\text{setup}$ 出问题：**  
可以降频（$T_\text{CLK}$）。

::: tip  
65 nm 及以下，尤其是 40 nm 以下，很难抓点，全是 $I_\text{off}$ 的噪音。  
:::  

::: tip  
DFT, 片选选择器，用于决定使用内部信号还是外部测试信号，但是牺牲面积和频率。（据传 Intel 没有 DFT）  
:::  

 <style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>

<p align="center"><font face="黑体" size=2.>表2 一些测试</font></p>

<div class="center">

|    **Test**     | **Ratio** |        **Comment**         |
| :-------------: | :-------: | :------------------------: |
|    AC Train     |           | $t_\text{hold}$ 有没有问题 |
| DC Scan (Stuck) |   ~90%    |     对 timing 要求不高     |
|     AC Scan     |    10%    |       高频 critical        |
</div>

经验上，要测需要以小时计，由 pattern 影响：  

1s --> 50%  
10s --> 90%  
1 hour --> 99%  

### 3.3 功耗

功耗分为静态功耗和动态功耗。**静态功耗与 Device Speed 正相关**（每个节点都为定制，即由 $I_\text{Off}$决定），动态功耗理论上与 $I_\text{Off}$ 无关，**正比于频率（CLK）**，但是实测却相关，这是因为热直激。  

#### 3.3.1 静态功耗计算

[链接](https://www.researchgate.net/post/Why-the-power-consumption-is-strongly-affected-by-the-temperature-in-CMOS-design)

由于温度对 $V_t$ 的影响，所以温度对静态功耗的影响是指数型曲线。


#### 3.3.2 动态功耗计算

<div align = center><img src = ../img/2024-12-23-23-33-21.png width = 500/></div>

在 2T 周期内，由电荷 $Q = CV$ ，从$V_\text{dd}\ \rightarrow V_0$，做功 $W= VQ = C V^2$，功率为 $\dfrac{W}{2T}=\dfrac{C V^2}{2T}$，即 $P \propto \dfrac{CV^2}{T} = f CV^2$，所以动态功耗和器件速度无关。  

但动态功耗发热使静态功耗升高，测得的功耗为动态功耗 + 静态功耗。Sort 测不了动态功耗，因为测不了热直激。    

<div align = center><img src = ../img/2024-12-23-23-38-26.png width = 500/></div>

对功耗和散热的分析：

<div align = center><img src = ../img/2024-12-24-00-15-53.png width = 600/></div>

为了有交点：  
1. 降低动态功耗  
2. 降 $I_\text{Off}$  
3. 换散热板  

**1. Voltage Binning**  
但是有的芯片没法降频（没有市场），只能降电压，也就是 Voltage Binning。Qualcom 和联发科采用这种方法，市场不接受所谓低频版，所以全部调电压，营销上先卖低频版，再卖高频版。  

另外 Qualcom 的芯片主要用于手机，不能太高温，产品可靠性要求也不高，所以也有需要降频降压机制来控制温度。  

**2. Frequency Binning**  
英特尔的 i3, i5, i7 即是采用 Frequency Bining，解决了良率问题，可以任意屏蔽核心，节省了研发和测试成本。  

另外不做 Voltage Bining 也和升压带来的可靠性问题有关，SS corner 寿命差。  

## 4 Reliability
### 4.1.1 Sample Size Calculation

### 4.1.2 Qual

test
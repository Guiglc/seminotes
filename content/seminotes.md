# 半导体笔记

## 0. 推荐书目

## 1. 半导体物理的一些理解
### 1.1 PN Junction
理想二极管方程：$J=J_s\left[\exp \left(\frac{e V_a}{k T}\right)-1\right]$  
齐纳击穿（Zener Breakdown） → 可恢复 → 隧穿 → BTBT  
雪崩击穿（Avalanche Breakdown） → 不可恢复 → 碰撞  

### 1.2 MOSFET
MOSFET 可以看作是一个漏电的可变电容，时间短为可变电容，时间长则漏电。  
MOSFET 是一个电压控制性电流源，电压激发的器件其电流为指数型曲线。  
（需理解）对长沟道NMOS而言，Bulk 加负压或者 Source 加正压，Vt 升高。  
（需公式理解）N管不传高压，有Vt损失，P管可传高压，没有Vt损失。  
（B比较小，容易扩散，传高压发热使结变大，有 Rel Concern）。  

**非饱和区电流公式：**
$$ I_D=\frac{W \mu_n C_{\mathrm{ox}}}{2L}\left[2\left(V_{G S}-V_T\right) V_{DS}-V_{DS}^2\right]$$

$k_n^{\prime}=\mu_n C_{o x}$ 称为 n 沟道 MOSFET 的器件跨导参数, 单位为 $\mathrm{A} / \mathrm{V}^2$;  
$K_n=\left(W \mu_n C_{\mathrm{ox}}\right) / 2 L=\left(k_n^{\prime} / 2\right) \cdot(W / L)$ 称为 n 沟道 MOSFET 的器件跨导系数, 单位也为 $\mathrm{A} / \mathrm{V}^2$。  

**饱和区电流公式：**
$$I_D=\frac{W \mu_n C_{\mathrm{ox}}}{2 L}\left(V_{G S}-V_T\right)^2$$
Source 和 Drain 之间的饱和电压：$V_{D S}(\mathrm{sat})=V_{G S}-V_T$

::: danger
待修改公式为容易理解的形式。
:::

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
### 2.1 ESD
#### 2.1.1 Type I : Control and I/O Pin
Openshort test，通电流，应看到 0.7V。
所以 CE Pin 在图中位置，芯片大部分时间是不工作的，通高压让电路关闭。

<div align = center><img src = ../img/image-2.png></div>

::: danger
然后介绍了这个电路和 Snapback。
<div align = center><img src = ../img/image-3.png></div>
:::

#### 2.1.2 Type II: Power Pin

&nbsp;

<div align = center><img src = ../img/image-5.png></div>

当 VDD 有脉冲 15V 时，红圈处约 12V，对于下一个非门，效果就更好。在足够短的时间内将脉冲电压导走，也就是开启最后那个管子，三级保证了时间短。  
Powershort 测试 force 电流测电压，看到 0.7V 压降。 SPEC：0.2V ~ 2V。Powershort 的电压可以很低，保证没有管子打开，避免 Floating （例如 VCC 处为 0.2V）带来的瞬态电流过大，而这并不是 short。  

#### 2.1.3 Type III: HV Pin

<div align = center><img src = ../img/image-6.png></div>

ESD 电路需要抗各种频率，对于低频脉冲，当然希望降低 C，但是此情况下高频无法预防，所以 HV PIN 的 ESD 电路设计很难。


### 2.2 工作点 - 反相器

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

### 2.3 Amplifier

#### 2.3.1 两种放大器


<div align = center><img src = ../img/2024-10-07-13-35-03.png width = 700/></div>

实际中很难应用差分放大器，因为取反信号很难得到。  
差分放大器干掉同向毛刺，滤波器干掉最原始的的单信号的毛刺。  

#### 2.3.2 运算放大器

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

#### 2.3.3 LDO

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

### 2.4 Voltage Reference
#### 2.4.1 Current Mirror

电源很难做到和 V，T 完全无关，那么：
1. 威尔逊电流源 → 与 V 无关
2. Bandgap → 与 T 无关
<div align = center><img src = ../img/2024-10-06-22-22-11.png /></div>
#### 2.4.2 Wilson Current Mirror
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

#### 2.4.3 Bandgap
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

### 2.5 Clock

::: danger
开始介绍了环形振荡器。（待补充）  
:::

常见晶振频率：26MHz, 32MHz。

<div align = center><img src = ../img/2024-10-06-23-08-05.png /></div>

总体的效果是，芯片内部的 Clock 一直在追赶晶振 Clock。

### 2.6 Charge Pump
<div align = center><img src = ../img/2024-10-07-13-06-30.png /></div>

电容充电抬高电势，然后断开前面的开关，闭合后面的开关，将电压传过去，此时后面电容对应的节点是低电平。

<div align = center><img src = ../img/2024-10-07-13-11-45.png width = 500/></div>
<div align = center><img src = ../img/2024-10-07-13-15-26.png width = 500/></div>

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

| **Control A** | **Signal In B** | **Signal Out C** |
| :-----------: | :-------------: | :--------------: |
|       0       |        0        |        1         |
|       0       |        1        |        1         |
|       1       |        0        |        1         |
|       1       |        1        |        0         |

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

## 3 NAND

业标：$GCR > 65%$。
$V_\text{PassR} = 6.5 \sim 7\text{V}，由于 \space  V_g - V_t \geq 1.5V，所以 \space Cell \space 的  \space V_t \space  最高只能 \space  5 \sim 5.5 \text{V}$。

::: danger
然后介绍了 Voltage Sensing 到 Current Sensing。
:::

UVVt 是 UV 光照了之后的 Vt。

## 4 SRAM

## 5 DRAM

## 6 Logic Circuit


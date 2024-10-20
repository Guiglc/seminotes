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

## 3 NAND

::: danger
Memory 的核心是结构。
Memory 发展史：
:::

NAND 最核心的参数：$T_\text{OX}$ 厚度，Couple Ratio （GCR > 65%）。  
VGVT的业标:（$\dfrac{\Delta V_g}{\Delta V_t } \geq 85%$）  

3BL 技术的重点是一次充电做了两次 Verify，而不是减少了一次 PGM。因此要求 Cell 工作在线性区，保证能根据一定的 Verify 时间后，得到通过的电流是高于 $V_PV$ 的 Cell 的 $\alpha$ 倍，若其倍数 <2, 则 $V_t$ 低于 PV 一个区间。因此必须保证 $V_g - V_t$ 和通过的电流为线性。  

几个效应：
1. PVS: $\left[\dfrac{W_{PVS}}{W}\right] +1$
2. CD/CDU: CD uniformity
3. Striation: 毛刺
4. Distortion：椭圆
5. Tilting：CH 斜了
6. Background Pattern(SS)
7. IVS: 由 SION 抓住电子所带来的 3eV 并不能稳定获得
8. Coupling: Program 之后，每层 WL cover 的区域变小了，$V_t\uparrow$
9. RTN

::: Tips
探讨了 PGM 应该从上往下还是从下往上：  
从下往上 PGM，下面的 Cell 受到更大的 disturb。(需理解)  
从上往下 PGM，只影响 E0，但是会隔绝 CH 电流，因为电子从 BL 来。  
Single Deck：从上往下。  
Double Deck: 从下往上，因为 deck 接头处隔绝电流太强。  
:::

$V_\text{PassR} = 6.5 \sim 7\text{V}，由于 \space  V_g - V_t \geq 1.5V，所以 \space Cell \space 的  \space V_t \space  最高只能 \space  5 \sim 5.5 \text{V}$。

::: danger
然后介绍了 Voltage Sensing 到 Current Sensing。
:::

UVVt 是 UV 光照了之后的 Vt。

## 4 SRAM

<div align = center><img src = ../img/2024-10-13-22-35-55.png width = 400/></div>

写：左 0，右 1。  
读：左 $\dfrac{1}{2}V_{\text{DD}}$，右 $\dfrac{1}{2}V_{\text{DD}}$ 或者两边都 $V_{\text{DD}}$ 。

为了保证 Read 的时候不发生翻转，需要保证 $V_{\text{Read}}<0.7\text{V}$，即小于右 N 管的 $V_t$。
$$
\begin{align*}
I_\text{PD}(0.7\text V) &> I_\text{PD}(\text{Source} = 0.7\text V) \\
\dfrac{1}{2}\mu C_{\text{ox}}\left(\dfrac{W}{L}\right)_\text{PD} \left(V_{G}-V_t+\frac{1}{2}V_{DD}\right)V_\text{DD} &> \dfrac{1}{2}\mu C_{\text{ox}}\left(\dfrac{W}{L}\right)_\text{PG} \left(V_{G}-0.7\text V - V_T \right)^2
\end{align*}
$$ 

由此： 
$$
\begin{align*}
&\beta \text{ Ratio} : \dfrac{\left(\dfrac{W}{L}\right)_\text{PD}}{\left(\dfrac{W}{L}\right)_\text{PG}} > \beta ，用以保证 \text{ Read } 的时候不发生翻转 \\
&\gamma \text{ Ratio} : 保证 \text{ Program } 的时候不翻转
\end{align*}
$$

SRAM 由于可能有 Read Failure, 所以需要 6N 和 8N 测试，保证没有读翻转：  
* W0 R0，W1 R1，W0 R0  
* W0 R0 R0, W1 R1 R1，W0 R0 R0  

::: tip
然后谈论了高速 I/O 的测试 Pattern。  
:::

SRAM 可以评估 Process 的 Uniformity, Logic 的测试器件就是 SRAM。  
SRAM 的良率是 90%，那么 Logic 可以达到 95%（SRAM 比较密，Logic 的密度一般是它的1/2，defect 密度也为 1/2）。  

Butterfly Curve 可以缩放，即减小电压，此时 SNM 变小，也就是说可以用小 $V_\text{CC}$ 测 Uniformity。  

<div align = center><img src = ../img/2024-10-13-22-35-27.png width = 500/></div>


<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>

<p align="center"><font face="黑体" size=2.>表2 不同 VCC 下 90% 良率对应阶段</font></p>

<div class="center">

| Yield | $V_\text{CC}$ Level | 对应阶段 |
| :---: | :-----------------: | :------: |
|  90%  |    $V_\text{CC}$    |   研发   |
|  90%  |  0.9$V_\text{CC}$   |  试量产  |
|  90%  |  0.8$V_\text{CC}$   |   量产   |
|  90%  |  0.7$V_\text{CC}$   |   TSMC   |

</div>

## 5 DRAM

::: danger
什么是验 Scramble？
:::

DRAM RD 时 BL 电压: 0V (看升不升)，$V_\text{DD}$(看放不放电)，$\dfrac{1}{2}V_\text{DD}$（看往哪边拉）
电容的另一端接 0V，$V_\text{DD}$，$\dfrac{1}{2}V_\text{DD}$ 都可以，一般选择 0V 或者 $\dfrac{1}{2}V_\text{DD}$。

**DRAM 的几个难点：**
1. C 使用 $\dfrac{1}{2}V_\text{DD}$， $C=\dfrac{\epsilon S}{4\pi kd}, 而 Q=CV$，介电层要越做越薄（只能改变 d），然后用 $\dfrac{1}{2}V_\text{DD}$ 来降低隧穿。
2. DRAM 中有几处电容，$C_\text{BL}$ 和 $C_\text S$：$C_\text{BL}$ 很大而 $C_\text S$ 很小，那 BL 可能用 0.55V 升到 0.6V 左右，Margin 很小。  
$$
\begin{align*}
\dfrac{1}{2}V_\text{DD}\cdot C_\text{BL} + C_\text S \cdot V_\text{DD} &= V_x(C_\text{BL} + C_\text S)\\
V_x &= \dfrac{\dfrac{1}{2}V_\text{DD}C_\text{BL}+V_\text{DD}}{C_\text{BL} + C_\text S}\\
\text{If} \space V_\text{DD} = 0, \\
V_x &= \dfrac{1}{2}V_\text{DD}\dfrac{C_\text{BL}}{C_\text{BL} + C_\text S}\\
\end{align*}
$$
3. 有 MOS 管的情况下，就会有 $I_\text{Off}$，电容就漏电，因此要求 $I_\text{Off}$ 做到 $10^{-14}$ 量级，然而Nanoprobe 只能做到 $10^{-12}$。
4. DRAM 放大器要求必须高度统一。（BL 版图很多 Dummy）  
5. BL Noise: ① CHANNEL 不能漏电。② GIDL 也不能漏电。C 是否体，不怕 GIDL 怕 CHANNEL LEAKAGE，Bulk 可以灌电压。无非是反过来，都是怕 GIDL。X 使用了 Dual Gate（一个 Gate 拆成 Poly 和 W），功函数不一样，结变缓，隧穿降低。  
6. 写 “1” 比写 “0” 难，前者是 $V_g-V_S-V_t$，后者是 $V_g-V_t$，因此前者相比后者电流小。  
   

<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
<div class="center">
<p align="center"><font face="黑体" size=2.>表3 DRAM 的 HT 和 LT</font></p>

|                LT                |               HT                |
| :------------------------------: | :-----------------------------: |
| $I_\text{Off} \space \checkmark$ |  $I_\text{Off} \space \times$   |
|   $I_\text{ON} \space \times$    | $I_\text{ON} \space \checkmark$ |

</div>

::: danger
确认表格正确性
:::

**因此，对于 DRAM 的要求：**
1. Universal Curve 要大。
2. 整个器件 $I_\text{Off}$ 和 $I_\text{ON}$ 的 distribution 都小，5 sigma 之内不 Fail。现在卡在 $I_\text{Off}$ 的展宽降不下来，GIDL 引起，没有很好的办法。  

## 6 Logic Circuit


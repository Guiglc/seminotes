# Memory

## 0. Memory

**Dynamic RAM (DRAM)**
1. Highest density
2. Low speed access time (about 10ns)
3. Information is stored as the charge of a capacitor and must be refreshed regularly  

**Static RAM (SRAM)**

1. The fastest (about 1ns)
2. The information is stored in latches made with looped inverters

<div align = center><img src = ../img/2026-01-10-18-23-03.png width = 500/></div>

<div align = center><img src = ../img/2026-01-10-18-29-00.png width = 500/></div>

<div align = center><img src = ../img/2026-01-10-18-29-17.png width = 500/></div>

**Read Only Memory (ROM)**
1. Information is stored by the presence or absence of a transistor during manufacture
2. The information persists even if the circuit is not powered

**Erasable and Programmable Read Only Memory (EPROMs)**
1. Programmable in the application
2. Fully erasable by applying ultraviolet rays

**Electrically Erasable and Programmable RO (EEPROM, FLASH)**  
1. Data can be selectively erased by electrical means

## 1. NAND

::: danger
Memory 的核心是结构。
Memory 发展史：
:::

NAND 最核心的参数：$T_\text{OX}$ 厚度，Couple Ratio （GCR > 65%）。  
VGVT的业标:（$\dfrac{\Delta V_g}{\Delta V_t } \geq 0.85%$）  

3BL 技术的重点是一次充电做了两次 Verify，而不是减少了一次 PGM。因此要求 Cell 工作在线性区，保证能根据一定的 Verify 时间后，得到通过的电流是高于 $V_PV$ 的 Cell 的 $\alpha$ 倍，若其倍数 <2, 则 $V_t$ 低于 PV 一个区间。因此必须保证 $V_g - V_t$ 和通过的电流为线性。  

几个效应：
1. PVS: $\left[\dfrac{W_\text{PVS}}{W}\right] +1$ 即是 PGM pulse count。
2. CD/CDU: CD uniformity
3. Striation: 毛刺
4. Distortion：椭圆
5. Tilting：CH 斜了
6. Background Pattern(SS)
7. IVS: 由 SION 抓住电子所带来的 3eV 并不能稳定获得
8. Coupling: Program 之后，每层 WL cover 的区域变小了，$V_t\uparrow$
9. RTN

::: tip  
探讨了 PGM 应该从上往下还是从下往上：  
从下往上 PGM，下面的 Cell 受到更大的 disturb。(需理解)  
从上往下 PGM，只影响 E0，但是会隔绝 CH 电流，因为电子从 BL 来。  
Single Deck：从上往下。  
Double Deck: 从下往上，因为 deck 接头处隔绝电流太强。  
:::

$V_\text{PassR} = 6.5 \sim 7\text{V}，由于 \space  V_g - V_t \geq 1.5V，所以 \space Cell \space 的  \space V_t \space  最高只能 \space  5 \sim 5.5 \text{V}$。

::: tip
然后介绍了 Voltage Sensing 到 Current Sensing。
:::

UVVt 是 UV 光照了之后的 Vt。

## 2. SRAM

<div align = center><img src = ../img/2025-08-24-21-01-58.png width = 500/></div>

写：左 0，右 1。  
读：左 $\dfrac{1}{2}V_{\text{DD}}$，右 $\dfrac{1}{2}V_{\text{DD}}$ 或者两边都 $V_{\text{DD}}$ 。

为了保证 Read 的时候不发生翻转，需要保证 $V_{\text{Read}}<0.7\text{V}$，即小于右 N 管的 $V_t$。
$$
\begin{align*}
I_\text{PD}(0.7\text V) &> I_\text{PG}(\text{Source} = 0.7\text V) \\
\dfrac{1}{2}\mu C_{\text{ox}}\left(\dfrac{W}{L}\right)_\text{PD} \left(V_{G}-V_t+\frac{1}{2}V_{DD}\right)V_\text{DD} &> \dfrac{1}{2}\mu C_{\text{ox}}\left(\dfrac{W}{L}\right)_\text{PG} \left(V_{G}-0.7\text V - V_t \right)^2
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

<p align="center"><font face="黑体" size=2.>表2 不同 VDD 下 90% 良率对应阶段</font></p>

<div class="center">

| Yield | $V_\text{DD}$ Level | 对应阶段 |
| :---: | :-----------------: | :------: |
|  90%  |    $V_\text{DD}$    |   研发   |
|  90%  |  0.9$V_\text{DD}$   |  试量产  |
|  90%  |  0.8$V_\text{DD}$   |   量产   |
|  90%  |  0.7$V_\text{DD}$   |   TSMC   |

</div>

## 3. DRAM


<div align = center><img src = ../img/2024-12-25-00-15-29.png width = 400/></div>

DRAM RD 时 BL 电压: 0V (看升不升)，$V_\text{DD}$(看放不放电)，$\dfrac{1}{2}V_\text{DD}$（看往哪边拉）
电容的另一端接 0V，$V_\text{DD}$，$\dfrac{1}{2}V_\text{DD}$ 都可以，一般选择 0V 或者 $\dfrac{1}{2}V_\text{DD}$。

::: tip
DRAM 的放大器：虽然结构很像 SRAM 但不是，注意 N : P = 1 : 1。  
<div align = center><img src = ../img/2024-12-25-00-19-46.png width = 400/></div>
:::

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
1. 有 MOS 管的情况下，就会有 $I_\text{Off}$，电容就漏电，因此要求 $I_\text{Off}$ 做到 $10^{-14}$ 量级，然而Nanoprobe 只能做到 $10^{-12}$。
2. DRAM 放大器要求必须高度统一。（BL 版图很多 Dummy）  
3. BL Noise: ① CHANNEL 不能漏电。② GIDL 也不能漏电。C 是浮体（Floating），不怕 GIDL 怕 CHANNEL LEAKAGE，Bulk 可以灌电压。无非是反过来，都是怕 GIDL。X 使用了 Dual Gate（一个 Gate 拆成 Poly 和 W），功函数不一样，结变缓，隧穿降低。  
<div align = center><img src = ../img/2024-12-25-00-29-05.png width = 400/></div>

::: tip
X 是平面结构，存 “0” 好但是存 “1” 差。  

<div align = center><img src = ../img/2024-12-25-00-31-36.png width = 400/></div>
:::

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
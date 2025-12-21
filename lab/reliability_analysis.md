---
layoutClass: wide-page
---


# Reliability Analysis

| 简称            | 测试项目                                                                  | 测试标准                        | 测试条件（非气密性封装）               | 样品数量          | 时间/Pass/Fail                                     |
|-----------------|---------------------------------------------------------------------------|---------------------------------|----------------------------------------|-------------------|----------------------------------------------------|
| Pre-con         | 预处理 Preconditioning                                                    | JESD22-A113I                    | TC+Bake+Soak+Reflow                    | 77 / 3 lots       | -                                                  |
| MSL             | 湿度敏感等级 Moisture Sensitivity Levels                                  | J-STD-020E                      | 30°C, 60%RH<br>     85°C, 85%RH        | 25 / 3 lots       | -                                                  |
| HTOL            | 高温工作寿命 High Temperature Operating Life                              | JESD22-A108D<br>     JESD85     | 125°C<br>     ≥Vcc, max                | 77 / 3 lots       | 1000hrs / 0 Fail                                   |
| LTOL            | 低温工作寿命 Low Temperature Operating Life                               | JESD22-A108D                    | -40°C<br>     ≥Vcc, max                | 77 / 1 lot        | 1000hrs / 0 Fail                                    |
| BLT             | 高温偏压寿命试验 Bias Life Test                                           | JESD22-A108D<br>     JESD85     | 125°C<br>     ≥Vcc, max                | 77 / 3 lots       | 1000hrs / 0 Fail                                    |
| ELFR            | 早期故障率试验 Early Life Failure Rate                                    | JESD22-A108D<br>     JESD74A    | 125°C<br>     ≥Vcc, max                | 1000 / 3 lots     | 48hrs / 0 Fail<br>     168hrs / 350 FIT            |
| HAST            | 带电高加速温湿度应力试验 Highly Accelerated Temp & Humidity Stress   Test | JESD22-A110E                    | 130°C/110°C, 85% RH<br>     ≥Vcc,max   | 77 / 3 lots       | 96hrs / 0 Fail<br>     264hrs / 0 Fail             |
| uHAST           | 不带电高加速温湿度应力试验 Unbiased HAST                                  | JESD22-A118                     | 130°C/110°C, 85% RH                    | 77 / 3 lots       | 96hrs / 0 Fail<br>     264hrs / 0 Fail             |
| HTSL/Baking     | 高温存储/烘烤 High Temperature Storage   Life                             | JESD22-A103<br>     JESD22-A113 | 150°C+Precon                           | 77 / 3 lots       | 1000hrs / 0 Fail                                   |
| LTSL            | 低温存储 Low Temperature Storage   Life                                   | JESD22-A119A                    | -40°C                                  | 25 / 3 lots       | 1000hrs / 0 Fail                                    |
| TC              | 温度循环 Temperature Cycling                                              | JESD22-A104                     | -55°C to +125°C<br>     0°C to +100°C  | 77 / 3 lots       | 700cycles / 0 Fail<br>     2300cycles / 0 Fail     |
| TS              | 温度冲击 Thermal Shock                                            | JESD22-A106B                    | -65°C to +150°C                        | 25 / 3 lots       | 500cycles / 0 Fail                                 |
| PCT (AC)        | 高压蒸煮 Pressure Cook Test (Autoclave)                                   | JESD22-A102                     | 121°C, 100% RH                         | 25 / 3 lots       | 96hrs / 0 Fail                                     |
| THB/85/85       | 高温高湿偏压试验/带电双85 Temperature Humidity Bias                       | JESD22-A101                     | 85°C/85% R.H.<br>     1000 hr@ Vcc     | 77 / 3 lots       | 1000hrs / 0 Fail                                   |
| TH   (THS/THC)  | 温湿度(存储/循环)试验 Temperature Humidity                                | JESD22-A101                     | 85°C/85% R.H.<br>     1000 hr@ Vcc     | 25 / 3 lots       | 1000hrs / 0 Fail                                   |
| HTGB/HTRB/H3TRB | 高温高湿反向偏压/高温反向偏压/高温栅极偏压                                | JESD22-A108D                    | 100% of VR.max<br>     100% of VGE,max | 25 / 3 lots       | 1000 hrs                                           |
| SD              | 可焊性 Solderability                                                      | JEDEC-B102                      | Reflow 245°C                           | 22 leads / 3 lots | 0 Fail                                             |
| SBS             | 锡球推力 Solder Ball Shear                                                | JESD22-B117                     | -                                      | 30 balls / 5 unit | 0 Fail                                             |
| BPS             | 焊球拉力 Bond Pull Strength                                               | M2011                           | -                                      | 30 balls / 5 unit | Ppk≥1.66 Cpk≥1.33                                  |
| BS              | 焊球推力 Bond Shear                                                       | JESD22-B116                     | -                                      | 30 balls / 5 unit | Ppk≥1.66 Cpk≥1.33                                  |
| WSR             | 锡须 Tin Whisker                                                          | JESD22-A121<br>     JESD201A    | -55°C to +85°C<br>     55°C, 85% RH    | 96 / 3lots        | 1500cycle / 45um-100um<br>     4000hrs / 40um-67um |
| ESD-HBM         | ESD:人体放电模式 ESD: Human Body Model                                    | JS-001-2017                     | 100V-8000V                             | 3                 | 0 Fail                                             |
| ESD-CDM         | ESD: 组件充电模式 ESD: Charged Device Model                               | JS-002-2018                     | 250V~2000V                             | 3                 | 0 Fail                                             |
| LU              | 闩锁测试 Latch-Up                                                         | JESD78E                         | ≥100 mA 1.5*VDD                        | 6                 | 0 Fail                                             |
# MVG Service Architecture v2

**来源**：Mabel 2026-05-11 提案，章逊 + Moss 已确认
**原始文档**：[`2026-05-11-mvg-service-architecture.docx`](./2026-05-11-mvg-service-architecture.docx)

---

## 平台定位

> **International Healthcare Professional Development Platform**
> 助力医疗专业人士国际化成长

---

## 业务结构（顶层）

两条**平行**业务线，顶导分开呈现：

1. **Programmes**（医疗英语培训 + 学术 + 临床观摩 + 人文）— 4 大板块
2. **Medical Navigator**（国际医疗导航）— 独立业务，本文档不展开

---

## Programmes 四大板块

### 1. Medical English & Communication
> 流量入口和商业核心（基础 → 考试 → 临床 → 国际化）

#### 1.1 English Foundations（英语基础提升）
- ✅ Preparatory Medical English Programme
- 🔜 Clinical Communication Foundations
- 🔜 General English for Healthcare Professionals

#### 1.2 OET & International Licensing（考试与注册）
- ✅ OET Preparation（平台课程）
- 🔜 OET Intensive Bootcamp
- 🔜 PLAT Communication Support
- 🔜 Healthcare Interview Preparation

#### 1.3 Clinical Medical English（临床实战英语）
- ✅ Workplace Medical English
- ✅ Medical English for Doctors
- ✅ Medical English for Nurses
- 🔜 Clinical Consultation English
- 🔜 Ward & Handover Communication

#### 1.4 Global Mobility & Pre-Departure（国际化与出国准备）
- ✅ Pre-Departure Medical English
- 🔜 UK Healthcare System Orientation
- 🔜 Cultural Communication in Healthcare
- 🔜 International Workplace Readiness

---

### 2. Medical Research & Academic Development
> 高价值，高客单价，定位 academic and professional advancement

#### 2.1 Medical Research Training
- ✅ Medical Research Essentials
- 🔜 Research Methodology
- 🔜 Evidence-based Medicine

#### 2.2 Academic Writing & Publication
- ✅ Medical Writing & Publication Bootcamp
- 🔜 SCI Writing Support
- 🔜 Academic Presentation Skills

#### 2.3 Professional Academic Communication
- 🔜 Conference Presentation Skills
- 🔜 Academic English for Healthcare Professionals
- 🔜 Research Communication

---

### 3. Clinical Observership & International Exposure
> 高端定位 global clinical exposure

#### 3.1 Clinical Observer Programmes
- ✅ Short-term Observership
- 🔜 Specialty-based Observership
- 🔜 Hospital Attachment

#### 3.2 Advanced Clinical Exposure
- ✅ Advanced Clinical Observer Programme
- 🔜 Consultant Shadowing
- 🔜 Department Immersion

#### 3.3 Academic and Visiting Scholar Pathways
- ✅ Visiting Scholar Programme
- 🔜 Research Attachment
- 🔜 International Academic Exchange

---

### 4. Professional Development & Medical Humanities
> 高端产品而非流量产品，提升品牌层级

#### 4.1 Medical Humanities
- ✅ Medical Humanities for Healthcare Professionals
- 🔜 Empathy & Patient Communication
- 🔜 Narrative Medicine

#### 4.2 Leadership & Professional Skills
- 🔜 Healthcare Leadership
- 🔜 Cross-cultural Communication
- 🔜 Reflective Practice

---

## 课程标记说明

| 标记 | 含义 | 网站处理 |
|---|---|---|
| ✅ | 已有/已设计课程 | 板块落地页主区展示 |
| 🔜 | 未来扩展课程 | 板块落地页底部 "Future Programmes" 小字列出 |

---

## 顶导结构（最终）

```
[Logo]   Programmes ▾   Medical Navigator   Insights   About   Contact   [中/EN]
            │
            ├─ Medical English & Communication
            ├─ Medical Research & Academic Development
            ├─ Clinical Observership & International Exposure
            └─ Professional Development & Medical Humanities
```

**词汇决策**：
- 英文版用 `Programmes`（英式拼写，英国医疗/学术圈标准用法 — NHS、剑桥、GMC 均用此词）
- 中文版顶导对应「**项目**」或「**培训项目**」（不强求字面对译）

---

## 首页 Medical English 区块布局

按章逊确认：图标卡片形式（lucide-react + shadcn Card）

```
┌─────────── Medical English & Communication ───────────┐
│                                                       │
│   📚 English          🎓 OET &           🩺 Clinical  │
│   Foundations         International       Medical     │
│   英语基础提升         Licensing           English     │
│                       考试与注册            临床实战   │
│   [3 courses →]       [1 course →]        [3 courses →]│
│                                                       │
│            ✈️ Global Mobility & Pre-Departure         │
│            国际化与出国准备                            │
│            [1 course →]                               │
│                                                       │
└───────────────────────────────────────────────────────┘
```

每张卡片：图标 + 中英标题 + 一句话定位 + "X courses →" 入口。

其它三大板块（Research / Observership / Humanities）首页同样以类似 pillar card 呈现，进入板块落地页后再细分子分类。

---

## 决策记录

| 决策 | 拍板人 | 日期 |
|---|---|---|
| 4 大板块结构（Programmes 内） | Mabel + 章逊 | 2026-05-11 |
| Medical Navigator 与 Programmes 顶导平行 | 章逊 | 2026-05-11 |
| 顶导用 mega menu 收纳 4 板块 | Moss 提议，章逊确认 | 2026-05-11 |
| 英文用 Programmes（英式拼写） | Moss 论证，章逊确认 | 2026-05-11 |
| 橘色课程方式 C（落地页底部 Future Programmes） | 章逊确认 | 2026-05-11 |
| 首页 ME 区块用图标卡片 | 章逊确认 | 2026-05-11 |
| 首页 v2 重构并发布 | 章逊确认 | 2026-05-11 |

# Brand Assets · Mediversity Global

主 LOGO 资产，所有版本由章逊本人确认。

## 文件

| 文件 | 用途 |
|---|---|
| `logo.svg` | **首选**，矢量，用于 nav / footer / 任何尺寸 |
| `logo-128.png` / `logo-256.png` / `logo-512.png` | PNG 备用，按尺寸选 |
| `logo-original.jpg` | 原始 JPG（不推荐前端使用） |
| `mediversity-global-logo-2026-05-19.jpg` | 章逊 5-19 巡视时再次确认的版本（参考） |

## 使用建议

```tsx
import Image from 'next/image';
<Image src="/brand/logo.svg" alt="Mediversity Global" width={180} height={40} priority />
```

— Moss

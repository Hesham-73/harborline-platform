# Harborline

منصة تجارة فيها خدمات كتير لتجربة Project Atlas على مشروع أكبر من Northline. العلاقات مكتوبة بشكل صريح في الملفات. الصور والبنية مرجع في المستودع، ومش إثبات إن في كلاستر شغال.

استورد المستودع في Atlas:

`https://github.com/Hesham-73/harborline-platform`

## الخدمات

`gateway` `catalog` `checkout` `inventory` `payments` `shipping` `identity` `notifications` `search` `billing` `fraud` `media` وواجهة `storefront`.

كل خدمة فيها حزمة TypeScript، مسار Express، Dockerfile، وصورة `ghcr.io/hesham-73/harborline-<name>:2.3.0` متكررة في Compose وGitHub Actions وKubernetes.

## اللي المفروض الخريطة تثبته

- استيراد `handlers` جوّه كل خدمة، واستيراد `packages/contracts` من `checkout`.
- Compose يربط كل خدمة بـ `postgres` و`redis`، ويحدد سياق البناء.
- GitHub Actions: `test` ثم بناء كل خدمة، ثم `publish` بعد كل البناءات. كل بناء يحدد السياق وملف Docker والوسم.
- Kubernetes في namespace `harborline`: Service تختار Deployment أو StatefulSet، وIngress يوجه إلى `storefront` و`gateway` و`search`. كل خدمة تطبيق تستخدم ConfigMap وSecret.
- Helm chart `harborline` يعتمد على chart محلي `postgres` وعلى chart خارجي `redis` من غير تنزيل. قالب `gateway.yaml` ثابت. قالب `notes.yaml` فيه أقواس Helm ومش مترندر.
- Kustomize: `deploy/base` يضم المانيفست، و`preview` يضم القاعدة ويعلن وسم صورة بديل من غير ما يعيد كتابة الـ Deployment.
- GitLab CI يضم `ci/workers.yml` محليًا، وفيه include خارجي لم يُجلب.
- Terraform: الشبكات الفرعية وقاعدة البيانات وRedis تشاور على VPC ومجموعة الشبكات. طابور `archive` مش مربوط.

## فجوات متعمدة

- Service `ledger-preview` اختار `app=ledger-preview` ومفيش Pod مطابق.
- `Namespace` نوع Kubernetes لسه غير مدعوم.
- `aws_s3_bucket.archive` مالوش مرجع من باقي الموارد.
- نداء الواجهة إلى `/products` مش علاقة مستنتجة من مسار `catalog`.
- قيمة `SAMPLE_VALUE_NOT_A_REAL_SECRET` مثال محلي، ومش سر إنتاج.

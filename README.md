# K-con — Cultural Safety & Localization AI Agent

GitHub Pages: https://yjgetchar.github.io/k-con/

첫 화면 `index.html`은 Cobalt 디자인의 9장 PR 피치덱입니다. 우측 상단 **디자인 옵션**에서 10가지 디자인을 선택할 수 있으며, 전환 시 현재 슬라이드 번호를 유지합니다. `designs.html`은 전체 표지 비교 갤러리입니다.

## 디자인

| 파일 | 디자인 | 방향 |
|---|---|---|
| concept-01.html | Noir | 블랙·라임, 대비 중심 |
| concept-02.html | Swiss | 화이트·레드, 수평 그리드 |
| concept-03.html | Editorial | 아이보리, 세리프·비대칭 |
| concept-04.html | Cobalt | 코발트, 중앙 정렬 타이포 |
| concept-05.html | Cinema | 블랙·골드, 영화 인터타이틀 |
| concept-06.html | Acid | 애시드 옐로, 포스터 타이포 |
| concept-07.html | Blueprint | 네이비·아이스, 기술 브리프 |
| concept-08.html | Terracotta | 테라코타·크림, 두 가지 컬러 필드 |
| concept-09.html | Lilac | 라일락·퍼플, 여백·엇갈린 정렬 |
| concept-10.html | Redline | 크림·레드, 편집 마크 |

## 각 덱의 9장 구성

1. 요청한 도입 카피: “기생충은 자막 한 줄(Ram-don)로 오스카를 거머쥐었고, K-웹툰은 한 컷의 오해로 북미 시장을 잃었습니다.”
2. 같은 K-콘텐츠, 왜 반응은 달랐을까요?
3. 차이는 작은 문화적 디테일에 있습니다.
4. K-con 소개와 검토 범위
5. 가사: 중의적 표현과 운율을 함께 검토
6. 웹툰: 외형의 고정관념 대신 행동으로 악역 표현
7. 오디오: 종교적 맥락의 샘플과 대체 소스 검토
8. 영상: 종교적 성물의 배치와 소품 교체 검토
9. 마무리: 더 많은 세계에, 의도한 그대로

도입은 사용자가 제공한 비유적 PR 카피로 표시했습니다. 수상이나 시장 성과가 하나의 번역·장면만으로 결정된다는 사실 검증 자료가 아닙니다. 사용 사례는 실제 고객 실적이나 작동 결과가 아닌 가상 적용 시나리오입니다.

## 조작

- 이전 / 다음 버튼
- 키보드 ← →, PageUp / PageDown, Space
- Home / End: 처음 / 마지막
- 모바일: 좌우 스와이프
- 주소 끝 `#5`로 특정 장 열기
- 인쇄 시 9장 전체 출력

업로드, 분석, 대시보드, 다운로드 체험 기능은 없습니다.

## 로컬 미리보기와 GitHub Pages

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

`http://127.0.0.1:8000/`에서 코발트 피치덱을 엽니다. HTML을 직접 열어도 동작합니다.

루트의 `index.html`, `designs.html`, `concept-01.html`~`concept-10.html`, `styles.css`, `app.js`를 GitHub Pages에 게시하면 됩니다. 빌드나 서버 API가 필요하지 않습니다. 내부 링크는 상대 경로이며, 웹 폰트가 연결되지 않으면 시스템 폰트로 표시됩니다.

저장소: https://github.com/yjgetchar/k-con

`main` 브랜치 루트에서 GitHub Pages가 배포됩니다. 별도 빌드 도구 없이 HTML/CSS/JS를 게시합니다.

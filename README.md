# 콜버스랩 과제

## 개발 인원

- 1명 (이근영)

## 개발 스킬

- typescript
- react.js
- recoil

## 프로젝트 개발 과정

### 1. 기획 정리

- 프로젝트의 목적과 최소 구현 및 최대 구현을 확인

- routes 와 각 페이지 구조 작성

### 2. FIGMA 확인 및 팔레트 정리

- FIGMA 확인하며 구현 단위 확인

- 생상, 글자 palette 없으면 생성.

### 3. 레포 생성

- cra typescript template 으로 생성.
- esLint, styleLint 설정
- package.json 구성
- palette에 맞게 mixin, styles constants 구성
- routes 구조 설정

### 4. home 페이지 구현

#### 1) 카테고리

- 카테고리 중복 선택하여 여러가지 카테고리에 해당하는 것 검색하도록 배열로 상태 관리

- 카테고리 선택시 배열로 된 상태에 추가

- 전체는 중복 선택이 필요 없으므로 전체 선택시 다른 카테고리를 배열 상태에서 삭제하고 전체만 남도록 구현

- 다른 카테고리 선택시 전체 카테고리만 배열에서 삭제

- 카테고리 배열에 해당하는 데이터만 출력 되도록 구현

## Figma

[FIGMA](https://www.figma.com/file/qVLvXmYUDJ1UREefV36VOk/%EC%9E%90%EB%A6%AC%ED%86%A1-%EA%B3%BC%EC%A0%9C-%EC%A4%80%EB%B9%84?node-id=1%3A488)

## 프로젝트 안내

[NOTION](https://www.notion.so/leedocs/13e914ffecb94b75b9974073b41d7859)
